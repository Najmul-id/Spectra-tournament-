import { supabase } from '../database/supabase.js';
import { state } from '../core/state.js';
export async function loadTournamentData(tournamentId){
  const [teams,matches]=await Promise.all([
    supabase.from('teams').select('*').eq('tournament_id',tournamentId).order('draw_position',{ascending:true,nullsFirst:true}).order('created_at'),
    supabase.from('matches').select('*').eq('tournament_id',tournamentId).order('match_number')
  ]);
  if(teams.error)throw teams.error;if(matches.error)throw matches.error;
  state.teams=teams.data||[];state.matches=matches.data||[];return state;
}
export async function addTeam(payload){
  const {data,error}=await supabase.from('teams').insert({...payload,tournament_id:state.tournament.id,status:'registered'}).select().single();
  if(error)throw error;return data;
}
export async function deleteTeam(id){
  const {error}=await supabase.from('teams').delete().eq('id',id);if(error)throw error;
}
export async function updateTeam(id,payload){
  const {data,error}=await supabase.from('teams').update(payload).eq('id',id).select().single();if(error)throw error;return data;
}
