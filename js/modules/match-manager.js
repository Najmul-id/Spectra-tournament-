import { supabase } from '../database/supabase.js';
import { state } from '../core/state.js';
export async function logEvent(action,details={}){
  try{await supabase.from('event_logs').insert({tournament_id:state.tournament?.id,user_id:state.session?.user?.id||null,action,details})}catch(e){console.warn('Audit log failed',e)}
}
export async function updateMatchScore(matchId,score1,score2){
  if(!Number.isInteger(score1)||!Number.isInteger(score2)||score1<0||score2<0)throw new Error('Skor harus berupa bilangan bulat positif.');
  if(score1===score2)throw new Error('Skor tidak boleh seri.');
  const match=state.matches.find(m=>m.id===matchId);if(!match)throw new Error('Match tidak ditemukan.');
  if(!match.team1_id||!match.team2_id)throw new Error('Kedua tim belum ditentukan.');
  const winner_id=score1>score2?match.team1_id:match.team2_id;
  const loser_id=score1>score2?match.team2_id:match.team1_id;
  const {error}=await supabase.from('matches').update({team1_score:score1,team2_score:score2,winner_id,loser_id,status:'completed',completed_at:new Date().toISOString()}).eq('id',matchId);
  if(error)throw error;
  await logEvent('SCORE_UPDATED',{match_code:match.match_code,score1,score2,winner_id,loser_id});
}
