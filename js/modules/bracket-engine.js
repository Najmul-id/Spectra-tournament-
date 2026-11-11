import { supabase } from '../database/supabase.js';
import { state } from '../core/state.js';
import { logEvent } from './match-manager.js';

const nextPowerOfTwo=n=>2**Math.ceil(Math.log2(n));
const insertMatch=async(row)=>{
  const {data,error}=await supabase.from('matches').insert(row).select().single();
  if(error)throw error;return data;
};

// Creates a seeded-size upper bracket and a linked lower-bracket skeleton.
// BYE advances are marked explicitly; they are not counted as a loss.
export async function createDoubleElimination(orderedTeams){
  if(state.matches.length)throw new Error('Bracket sudah memiliki pertandingan. Hapus bracket lama melalui prosedur admin sebelum membuat ulang.');
  const n=orderedTeams.length, capacity=nextPowerOfTwo(n);
  const padded=[...orderedTeams.map(t=>t.id),...Array(capacity-n).fill(null)];
  const upperRounds=Math.log2(capacity), upper=[];
  let slots=padded;
  for(let r=0;r<upperRounds;r++){
    const round=[];
    for(let i=0;i<slots.length;i+=2){
      const a=slots[i],b=slots[i+1];
      const code=`U${r+1}-M${i/2+1}`;
      const row=await insertMatch({
        tournament_id:state.tournament.id,match_code:code,bracket:'upper',
        round_name:`Upper Round ${r+1}`,match_number:upper.length+1,
        team1_id:a,team2_id:b,status:(!a||!b)?'bye':(a&&b?'ready':'pending'),
        winner_id:(!a&&b)?b:(!b&&a)?a:null,loser_id:null
      });
      round.push(row);
    }
    upper.push(round);slots=Array(round.length).fill(null);
  }
  // Lower rounds are initialized as placeholders. Staff can fill teams as results progress.
  // This avoids fabricating entrants or recording BYEs as defeats.
  const lowerCount=Math.max(0,2*(upperRounds-1));
  for(let r=0;r<lowerCount;r++){
    await insertMatch({tournament_id:state.tournament.id,match_code:`L${r+1}-PENDING`,bracket:'lower',round_name:`Lower Round ${r+1}`,match_number:1000+r,status:'pending'});
  }
  await insertMatch({tournament_id:state.tournament.id,match_code:'GF-1',bracket:'grand_final',round_name:'Grand Final',match_number:2000,status:'pending'});
  await logEvent('BRACKET_CREATED',{team_count:n,capacity,byes:capacity-n,upper_rounds:upperRounds});
}
