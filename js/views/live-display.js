import { state } from '../core/state.js';
export function renderLiveMatches(){
 const host=document.getElementById('liveMatches');
 const items=state.matches.filter(m=>m.status==='ready'||m.status==='live'||m.status==='completed').slice(0,9);
 if(!items.length){host.innerHTML='<div class="empty-state">Belum ada pertandingan untuk ditampilkan.</div>';return}
 host.innerHTML=items.map(m=>`<article class="match-card"><div class="match-card-top"><span>${esc(m.match_code||'MATCH')}</span><span>${esc((m.bracket||'').toUpperCase())}</span></div>${teamLine(m.team1_id,m.team1_score,m.winner_id)}${teamLine(m.team2_id,m.team2_score,m.winner_id)}<div class="match-status">${esc((m.status||'pending').toUpperCase())}</div></article>`).join('');
}
function teamLine(id,score,winner){const t=state.teams.find(x=>x.id===id);return `<div class="match-team ${id&&id===winner?'winner':''}"><span>${esc(t?.name||'TBD')}</span><strong>${score??'–'}</strong></div>`}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
