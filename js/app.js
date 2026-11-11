import { supabase } from './database/supabase.js';
import { state,isStaff } from './core/state.js';
import { getCurrentSession,getProfile,signIn,signOut } from './database/auth.js';
import { loadTournamentData } from './modules/teams.js';
import { subscribeTournament } from './database/realtime.js';
import { renderLiveMatches } from './views/live-display.js';
import { renderAdmin } from './views/admin.js';
import { initPresentation } from './views/presentation.js';

const $=id=>document.getElementById(id);
window.spectraToast=(message)=>{const t=$('toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)};
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
async function loadTournament(){
 const {data,error}=await supabase.from('tournaments').select('*').order('created_at',{ascending:false}).limit(1).maybeSingle();
 if(error)throw error;
 if(!data){state.tournament=null;return}
 state.tournament=data;
 await loadTournamentData(data.id);
 if(state.realtimeChannels.length){state.realtimeChannels.forEach(c=>supabase.removeChannel(c));state.realtimeChannels=[]}
 state.realtimeChannels.push(subscribeTournament(data.id,renderAll));
 $('tournamentName').textContent=data.name||'SPECTRA CHAMPIONSHIP';
}
export function renderAll(){
 renderLiveMatches();
 renderBracket(state.bracketType);
 $('statTeams').textContent=state.teams.length;
 $('statMatches').textContent=state.matches.length;
 $('statCompleted').textContent=state.matches.filter(m=>m.status==='completed').length;
 if(isStaff())renderAdmin();
}
function renderBracket(type){
 const host=$('bracketView');const matches=state.matches.filter(m=>m.bracket===type);
 if(!matches.length){host.innerHTML='<div class="empty-state">Belum ada data untuk bagian bracket ini.</div>';return}
 const groups={};matches.forEach(m=>(groups[m.round_name||'Round']??=[]).push(m));
 host.innerHTML=`<p class="bracket-caption">Bracket ditampilkan berdasarkan data pertandingan yang tersimpan di Supabase.</p><div class="bracket-board">${Object.entries(groups).map(([round,arr])=>`<div class="bracket-round"><h3>${esc(round)}</h3>${arr.map(m=>{const a=state.teams.find(t=>t.id===m.team1_id)?.name||'TBD',b=state.teams.find(t=>t.id===m.team2_id)?.name||'TBD';return `<div class="bracket-match"><small>${esc(m.match_code||'MATCH')} • ${esc(m.status||'pending')}</small><div class="bracket-slot ${m.winner_id===m.team1_id?'winner':''}">${esc(a)} <em>${m.team1_score??'–'}</em></div><div class="bracket-slot ${m.winner_id===m.team2_id?'winner':''}">${esc(b)} <em>${m.team2_score??'–'}</em></div></div>`}).join('')}</div>`).join('')}</div>`;
}
function setupUI(){
 $('loginOpen').addEventListener('click',()=>$('loginModal').classList.remove('hidden'));
 $('loginClose').addEventListener('click',()=>$('loginModal').classList.add('hidden'));
 $('logoutBtn').addEventListener('click',async()=>{try{await signOut();location.reload()}catch(e){window.spectraToast(e.message)}});
 $('loginForm').addEventListener('submit',async e=>{e.preventDefault();$('loginMessage').textContent='Memproses…';try{await signIn($('loginEmail').value,$('loginPassword').value);location.reload()}catch(err){$('loginMessage').textContent=err.message}});
 document.querySelectorAll('[data-bracket]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-bracket]').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.bracketType=b.dataset.bracket;renderBracket(state.bracketType)}));
 document.querySelectorAll('[data-admin-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-admin-tab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.adminTab=b.dataset.adminTab;renderAdmin()}));
 $('menuToggle').addEventListener('click',()=>document.querySelector('#mainNav').classList.toggle('open'));
 initPresentation();
}
async function boot(){
 setupUI();
 try{
  $('connectionState').textContent='SUPABASE ONLINE';
  const session=await getCurrentSession();state.session=session;
  if(session){try{state.profile=await getProfile(session.user.id)}catch(e){console.warn('Profile unavailable',e)}}
  if(state.profile){$('loginOpen').classList.add('hidden');$('logoutBtn').classList.remove('hidden');if(isStaff()){ $('adminPanel').classList.remove('hidden');$('roleLabel').textContent=state.profile.role.toUpperCase();renderAdmin()}}
  await loadTournament();renderAll();
 }catch(e){$('connectionState').textContent='CONNECTION ERROR';console.error(e);window.spectraToast('Gagal memuat data: '+e.message)}
}
boot();
