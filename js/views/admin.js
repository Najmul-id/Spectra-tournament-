import { state,isAdmin } from '../core/state.js';
import { addTeam,deleteTeam,loadTournamentData } from '../modules/teams.js';
import { runRandomDraw } from '../modules/draw.js';
import { updateMatchScore } from '../modules/match-manager.js';
import { supabase } from '../database/supabase.js';
import { renderAll } from '../app.js';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderAdmin(){
 const root=document.getElementById('adminContent');if(!root)return;
 const tab=state.adminTab;
 if(tab==='teams')root.innerHTML=teamsView();
 if(tab==='draw')root.innerHTML=drawView();
 if(tab==='matches')root.innerHTML=matchesView();
 if(tab==='settings')root.innerHTML=settingsView();
 bindAdmin(root);
}
function teamsView(){return `<div class="admin-box"><h3>DAFTARKAN TIM</h3><form id="teamForm" class="form-row"><label>Nama tim<input name="name" required maxlength="80" placeholder="Nama tim"></label><label>Tag<input name="tag" maxlength="15" placeholder="TAG"></label><label>Nama kapten<input name="captain_name" maxlength="80" placeholder="Nama kapten"></label><div class="admin-actions"><button class="btn btn-primary">TAMBAH TIM</button></div></form></div><div class="admin-box"><h3>DAFTAR PESERTA (${state.teams.length})</h3><div class="data-list">${state.teams.map(t=>`<div class="data-row"><span><b>${esc(t.draw_position?`${t.draw_position}. `:'')}${esc(t.name)}</b><br><small>${esc(t.tag||'—')} • ${esc(t.captain_name||'Tanpa kapten')}</small></span>${isAdmin()?`<button class="danger" data-delete-team="${t.id}">HAPUS</button>`:''}</div>`).join('')||'<p class="hint">Belum ada tim.</p>'}</div></div>`}
function drawView(){return `<div class="admin-box"><h3>RANDOM DRAW</h3><p class="hint">Undian menggunakan randomisasi kriptografis browser. Setelah undian dikunci, perubahan posisi tidak dapat dilakukan dari panel ini. Pastikan daftar peserta sudah final.</p><p><b>${state.teams.length}</b> tim terdaftar • BYE akan dihitung otomatis sesuai kapasitas bracket berikutnya.</p><div class="admin-actions"><button id="runDraw" class="btn btn-primary" ${state.tournament?.draw_locked?'disabled':''}>${state.tournament?.draw_locked?'UNDIAN TERKUNCI':'JALANKAN UNDIAN & BRACKET'}</button></div></div>`}
function matchesView(){return `<div class="admin-box"><h3>INPUT HASIL PERTANDINGAN</h3><div class="data-list">${state.matches.filter(m=>m.team1_id&&m.team2_id&&m.status!=='bye').map(m=>{const a=state.teams.find(t=>t.id===m.team1_id)?.name||'TBD',b=state.teams.find(t=>t.id===m.team2_id)?.name||'TBD';return `<div class="data-row score-row"><span><b>${esc(m.match_code)}</b><br><small>${esc(a)} vs ${esc(b)}</small></span><div class="score-controls"><input aria-label="Skor tim satu" type="number" min="0" id="s1-${m.id}" value="${m.team1_score??0}"><b>:</b><input aria-label="Skor tim dua" type="number" min="0" id="s2-${m.id}" value="${m.team2_score??0}"><button class="btn btn-outline" data-save-score="${m.id}">SIMPAN</button></div></div>`}).join('')||'<p class="hint">Belum ada match dengan dua tim. Periksa bracket dan progres turnamen.</p>'}</div></div>`}
function settingsView(){return `<div class="admin-box"><h3>PENGATURAN TURNAMEN</h3><p class="hint">Turnamen aktif: ${esc(state.tournament?.name||'—')}<br>Status: ${esc(state.tournament?.status||'—')}<br>Format: ${esc(state.tournament?.format||'double_elimination')}<br>Undian: ${state.tournament?.draw_locked?'Terkunci':'Belum dikunci'}</p>${isAdmin()?`<button id="refreshTournament" class="btn btn-outline">MUAT ULANG DATA</button>`:''}</div>`}
function bindAdmin(root){
 root.querySelector('#teamForm')?.addEventListener('submit',async e=>{e.preventDefault();try{const f=new FormData(e.currentTarget);await addTeam({name:f.get('name').trim(),tag:f.get('tag').trim()||null,captain_name:f.get('captain_name').trim()||null});await loadTournamentData(state.tournament.id);renderAll();window.spectraToast('Tim berhasil ditambahkan.')}catch(err){window.spectraToast(err.message)}});
 root.querySelectorAll('[data-delete-team]').forEach(b=>b.addEventListener('click',async()=>{if(!confirm('Hapus tim ini?'))return;try{await deleteTeam(b.dataset.deleteTeam);await loadTournamentData(state.tournament.id);renderAll();window.spectraToast('Tim dihapus.')}catch(e){window.spectraToast(e.message)}}));
 root.querySelector('#runDraw')?.addEventListener('click',async()=>{if(!confirm('Jalankan undian sekarang? Posisi akan dikunci.'))return;try{await runRandomDraw();await loadTournamentData(state.tournament.id);renderAll();window.spectraToast('Undian selesai.')}catch(e){window.spectraToast(e.message)}});
 root.querySelectorAll('[data-save-score]').forEach(b=>b.addEventListener('click',async()=>{try{const id=b.dataset.saveScore;const a=Number(root.querySelector(`#s1-${id}`).value),c=Number(root.querySelector(`#s2-${id}`).value);await updateMatchScore(id,a,c);await loadTournamentData(state.tournament.id);renderAll();window.spectraToast('Skor disimpan.')}catch(e){window.spectraToast(e.message)}}));
 root.querySelector('#refreshTournament')?.addEventListener('click',async()=>{await loadTournamentData(state.tournament.id);renderAll()});
}
