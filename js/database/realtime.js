import { supabase } from './supabase.js';
import { loadTournamentData } from '../modules/teams.js';
export function subscribeTournament(tournamentId,onUpdate){
  const channel=supabase.channel(`spectra-${tournamentId}`)
    .on('postgres_changes',{event:'*',schema:'public',table:'teams',filter:`tournament_id=eq.${tournamentId}`},async()=>{await loadTournamentData(tournamentId);onUpdate?.()})
    .on('postgres_changes',{event:'*',schema:'public',table:'matches',filter:`tournament_id=eq.${tournamentId}`},async()=>{await loadTournamentData(tournamentId);onUpdate?.()})
    .on('postgres_changes',{event:'*',schema:'public',table:'tournaments',filter:`id=eq.${tournamentId}`},async()=>{await loadTournamentData(tournamentId);onUpdate?.()})
    .subscribe();
  return channel;
}
