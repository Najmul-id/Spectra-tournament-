const slides=[
 ['WELCOME','Selamat datang di Technical Meeting SPECTRA. Pastikan seluruh perwakilan tim mengikuti pengarahan sampai selesai.'],
 ['COMPETITION RULES','Setiap tim wajib menjaga sportivitas, kesiapan perangkat, koneksi, dan komunikasi dengan panitia. Ketentuan final mengikuti juknis resmi turnamen.'],
 ['DOUBLE ELIMINATION','Tim masuk Upper Bracket. Setelah kekalahan pertama, tim turun ke Lower Bracket. Kekalahan kedua berarti tereliminasi.'],
 ['MATCH FORMAT','Pertandingan reguler menggunakan BO3 dan Grand Final BO5 sesuai pengaturan turnamen. Panitia mengumumkan jadwal dan room pertandingan.'],
 ['MATCH FLOW','Kedua tim melakukan check-in, konfirmasi roster, masuk room, bermain, lalu melaporkan hasil kepada panitia.'],
 ['GOOD LUCK','Bertanding dengan sportif. Hormati lawan, panitia, dan keputusan pertandingan. Good luck, competitors!']
];
let index=0;
export function initPresentation(){
 const modal=document.getElementById('presentation');
 const paint=()=>{const s=slides[index];document.getElementById('slideNumber').textContent=`${String(index+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;document.getElementById('slideTitle').innerHTML=`${s[0].split(' ')[0]}<br><span>${s[0].split(' ').slice(1).join(' ')||'SPECTRA.'}</span>`;document.getElementById('slideText').textContent=s[1]};
 document.getElementById('startPresentation').addEventListener('click',()=>{index=0;paint();modal.classList.remove('hidden')});
 document.getElementById('closePresentation').addEventListener('click',()=>modal.classList.add('hidden'));
 document.getElementById('nextSlide').addEventListener('click',()=>{index=Math.min(slides.length-1,index+1);paint()});
 document.getElementById('prevSlide').addEventListener('click',()=>{index=Math.max(0,index-1);paint()});
 document.addEventListener('keydown',e=>{if(modal.classList.contains('hidden'))return;if(e.key==='Escape')modal.classList.add('hidden');if(e.key==='ArrowRight'){index=Math.min(slides.length-1,index+1);paint()}if(e.key==='ArrowLeft'){index=Math.max(0,index-1);paint()}});
}
