import { supabase } from '../database/supabase.js';
import { state } from '../core/state.js';
import { createDoubleElimination } from './bracket-engine.js';
import { logEvent } from './match-manager.js';

function secureShuffle(items){
  const a=[...items];
  for(let i=a.length-1;i>0;i--){
    const bytes=new Uint32Array(1);crypto.getRandomValues(bytes);
    const j=bytes[0]%(i+1);[a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
export async function runRandomDraw(){
  if(!state.tournament)throw new Error('Turnamen belum dipilih.');
  if(state.tournament.draw_locked||state.tournament.bracket_locked)throw new Error('Undian sudah dikunci.');
  const teams=state.teams.filter(t=>t.status==='registered'||t.status==='active');
  if(teams.length<2)throw new Error('Minimal dua tim diperlukan.');
  const shuffled=secureShuffle(teams);
  for(let i=0;i<shuffled.length;i++){
    const {error}=await supabase.from('teams').update({draw_position:i+1,status:'active'}).eq('id',shuffled[i].id);
    if(error)throw error;
  }
  const {error}=await supabase.from('tournaments').update({draw_locked:true,bracket_locked:true,status:'ongoing'}).eq('id',state.tournament.id);
  if(error)throw error;
  await createDoubleElimination(shuffled);
  await logEvent('RANDOM_DRAW',{team_count:shuffled.length,team_ids:shuffled.map(t=>t.id)});
  return shuffled;
}
