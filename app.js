/* ==========================================================================
   Open Day Informatica – IIS Rosselli-Rasetti
   Tutta la logica del gioco. I contenuti da personalizzare (domande, frasi,
   punteggi, link) sono in cima, sotto il commento CONTENUTI.
   ========================================================================== */
/* ===== CONTENUTI (modifica qui domande, testi e punti) ===== */
const PT=10, BONUS=20;
const ACT=[
{id:'quiz',ic:'🧠',t:'QUIZ INFORMATICO',c:'#27d3ff',d:'5 domande su computer, Internet e tecnologia. Quanto ne sai?',qs:[
 {q:'Cosa significa la sigla “www”?',o:['World Wide Web','Wide Window Web','Web World Wire','Wonderful Web Works'],a:0,x:'Il World Wide Web è l’insieme delle pagine collegate tra loro su Internet.'},
 {q:'Quanti bit ci sono in un byte?',o:['4','8','10','16'],a:1,x:'1 byte = 8 bit. Ogni bit può valere solo 0 oppure 1!'},
 {q:'Quale di questi è un sistema operativo?',o:['Chrome','Word','Linux','Google'],a:2,x:'Linux, come Windows, macOS e Android, gestisce il computer. Chrome e Word sono programmi.'},
 {q:'A cosa serve un antivirus?',o:['Ad andare più veloce online','A proteggere il PC da software dannosi','A stampare i documenti','A cambiare lo sfondo'],a:1,x:'Un antivirus cerca e blocca i malware prima che facciano danni.'},
 {q:'Che cos’è un file “.jpg”?',o:['Un videogioco','Una canzone','Un’immagine','Un programma'],a:2,x:'JPG è un formato di immagine compressa, usato per le foto.'}]},
{id:'code',ic:'💻',t:'INDOVINA IL CODICE',c:'#2ee59d',d:'Leggi piccoli pezzi di codice Python e trova cosa fanno… o dov’è l’errore!',qs:[
 {q:'Cosa stampa questo codice?',k:'print(2 + 3)',o:['23','5','2 + 3','Errore'],a:1,x:'Python calcola 2 + 3 e stampa il risultato: 5.'},
 {q:'Cosa stampa questo ciclo?',k:'for i in range(3):\n    print(i)',o:['1 2 3','0 1 2','0 1 2 3','3 3 3'],a:1,x:'range(3) parte da 0: i vale 0, 1 e 2.'},
 {q:'Trova l’errore!',k:'x = 7\nif x = 5:\n    print("Cinque")',o:['Manca print','Per confrontare serve ==','x non può valere 7','Manca un punto'],a:1,x:'Un = assegna un valore, un == confronta due valori.'},
 {q:'Quanto vale x alla fine?',k:'x = 4\nx = x + 1',o:['4','1','5','x + 1'],a:2,x:'Si prende x (4), si somma 1 e il risultato (5) torna in x.'},
 {q:'Completa per scrivere “Ciao” 3 volte:',k:'___ i in range(3):\n    print("Ciao")',o:['for','if','print','stop'],a:0,x:'“for” crea un ciclo che ripete le istruzioni.'}]},
{id:'hack',ic:'🕵️',t:'HACKER CHALLENGE',c:'#f15a22',d:'Decifra messaggi segreti, binario e PIN. Sei pronto a violare il sistema?',qs:[
 {q:'Messaggio in codice! Ogni lettera è spostata di +1 nell’alfabeto: “DJBP”. Qual è la parola vera?',o:['CIAO','DAVE','BEBE','CAPO'],a:0,x:'D→C, J→I, B→A, P→O: la parola è CIAO. È il cifrario di Cesare!'},
 {q:'Il numero binario 101 quanto vale in decimale?',o:['3','4','5','101'],a:2,x:'1×4 + 0×2 + 1×1 = 5.'},
 {q:'Trova il PIN a 3 cifre: tutte le cifre sono uguali e la loro somma è 6.',in:1,a:'222',x:'2 + 2 + 2 = 6. PIN: 222.'},
 {q:'Decifra (ogni lettera è spostata di +1): “TFSWFS”. Scrivi la parola.',in:1,a:'SERVER',x:'T→S, F→E, S→R, W→V, F→E, S→R: SERVER, il computer che fornisce servizi in rete.'},
 {q:'Ricevi un’email: “Hai vinto un iPhone! Clicca qui e inserisci la password”. Che fai?',o:['Clicco subito','Rispondo con la password','La cancello: è phishing','La inoltro a tutti'],a:2,x:'È una truffa (phishing). Mai dare password a chi te le chiede via email.'}]},
{id:'hw',ic:'🔧',t:'HARDWARE DETECTIVE',c:'#ffd23f',d:'Riconosci i componenti del computer dagli indizi. Chi è chi?',qs:[
 {e:'🧠',q:'È il “cervello” del PC: esegue tutti i calcoli.',o:['CPU','RAM','SSD','GPU'],a:0,x:'La CPU (processore) esegue le istruzioni dei programmi.'},
 {e:'🎮',q:'Disegna la grafica dei videogiochi e dei video.',o:['SSD','GPU','Scheda madre','RAM'],a:1,x:'La GPU (scheda video) è specializzata nella grafica.'},
 {e:'💾',q:'Conserva file e programmi, anche a PC spento. È veloce e non ha parti in movimento.',o:['RAM','CPU','SSD','GPU'],a:2,x:'L’SSD è la memoria di massa moderna: sostituisce il vecchio hard disk.'},
 {e:'🧩',q:'Memoria velocissima ma temporanea: ricorda i programmi aperti.',o:['SSD','CPU','Scheda madre','RAM'],a:3,x:'La RAM si svuota allo spegnimento: serve solo per lavorare in fretta.'},
 {e:'🔌',q:'È la grande scheda su cui si collegano tutti gli altri componenti.',o:['Scheda madre','Alimentatore','GPU','Mouse'],a:0,x:'La scheda madre fa comunicare CPU, RAM, SSD e GPU tra loro.'}]},
{id:'logic',ic:'🧩',t:'LOGIC GAME',c:'#b583ff',d:'Sequenze e rompicapi per allenare il ragionamento da programmatore.',qs:[
 {q:'Quale numero continua? 2, 4, 8, 16, …',o:['24','30','32','36'],a:2,x:'Ogni numero è il doppio del precedente: 16 × 2 = 32.'},
 {q:'Quale numero continua? 1, 1, 2, 3, 5, …',o:['6','7','8','9'],a:2,x:'Sequenza di Fibonacci: ogni numero è la somma dei due precedenti (3 + 5 = 8).'},
 {q:'Tutti i robot sono macchine. R2 è un robot. Quindi R2 è…',o:['Una persona','Una macchina','Un animale','Non si sa'],a:1,x:'Se tutti i robot sono macchine, ogni robot (R2 compreso) lo è.'},
 {q:'Un pastore ha 10 pecore. Tutte tranne 4 scappano. Quante ne restano?',o:['4','6','10','0'],a:0,x:'“Tutte tranne 4” significa che 4 non scappano: ne restano 4!'},
 {q:'Quale numero continua? 1, 4, 9, 16, …',o:['20','24','25','32'],a:2,x:'Sono i quadrati: 1², 2², 3², 4²… quindi 5² = 25.'}]}];
const COST=1000;
const FR=[['Hardware','MOUSE E TASTIERA'],['Internet e Web','NAVIGARE SU INTERNET'],['Programmazione','IL CODICE SORGENTE'],['Scuola','IL LABORATORIO DI INFORMATICA'],['Dispositivi','LO SCHERMO TOUCH'],['Sicurezza','PASSWORD SICURA'],['Hardware','PROCESSORE VELOCE'],['Intelligenza Artificiale','ROBOT INTELLIGENTE'],['Programmazione','CICLO FOR E WHILE'],['Reti','IL ROUTER COLLEGA I COMPUTER'],['Videogiochi','CREARE UN VIDEOGIOCO'],['Sicurezza','ATTENTO AL PHISHING'],['Hardware','SCHEDA MADRE E MEMORIA RAM']];
const SP=[100,200,500,50,300,1000,200,400,'BANCAROTTA',150,600,300,800,'PERDI TURNO',250,500];
const SC=['#27d3ff','#ffd23f','#2ee59d','#ff9f1c','#b583ff','#ff7ab8'];
const SITE='https://www.secondarieclago.edu.it/',CS='https://cspace.spaggiari.eu//pub/PGII0004/Doc_Vari_2425/';
const LINKS=[
['🏫','Sito ufficiale della scuola',SITE,1],
['📄','Presentazione indirizzo Informatica (PDF)',CS+'Orientamento/Presentazioni/Presentazione_corso_inf.pdf?_t=1731347532'],
['💻','Pagina dell’indirizzo Informatico',SITE+'percorsi-studio?id=210'],
['🎬','Video: Intelligenza Artificiale',CS+'Video%20indirizzi/INF/IA.MOV?_t=1700074555'],
['🏗️','Video: nuovi laboratori del Polo Tecnologico',CS+'INIZIATIVE&EVENTI/VIDEO/Video%20scuola_laboratori_nuovi%20.mp4?_t=1700074555'],
['🌐','Video: lezione di Sistemi e reti',CS+'Video%20indirizzi/INF/Video-INF.mp4?_t=1700074555'],
['📅','Open Day e Mini Stage: date e prenotazioni',SITE+'pagine/orientamento'],
['🎒','Studente per un giorno',SITE+'pagine/prenotazioni---studente-per-un-giorno'],
['🖼️','Locandina e brochure',SITE+'pagine/locandina-brochure']];
const school=()=>`<div class="panel school"><h2>🏫 SCOPRI LA NOSTRA SCUOLA</h2><p>Presentazioni, video e informazioni ufficiali sull’indirizzo Informatica (si aprono in una nuova scheda).</p><div class="lk">${LINKS.map(l=>`<a class="btn ${l[3]?'':'g'}" href="${l[2]}" target="_blank" rel="noopener noreferrer"><span>${l[0]}</span> ${l[1]}</a>`).join('')}</div></div>`;
const QN=5;const GAMES=[{id:'ruota',ic:'🔤',t:'RUOTA DELLE LETTERE',c:'#ff9f1c',d:'Sfida a 2 squadre: gira la ruota, scegli le lettere e indovina la frase misteriosa!'},{id:'ruotaq',ic:'🎡',t:'RUOTA DEI QUIZ',c:'#ffd23f',d:'Gira la ruota, poi rispondi alla domanda a scelta multipla per vincere i punti!'},{id:'robot',ic:'🤖',t:'GUIDA IL ROBOT',c:'#27d3ff',d:'Programma RoboBot con le istruzioni giuste e portalo fino al Server!'},{id:'pin',ic:'🔐',t:'CYBER ESCAPE: TROVA IL PIN',c:'#2ee59d',d:'Risolvi 4 stazioni informatiche, scopri le cifre e inserisci il PIN!'}];
/* ===== STATO ===== */
const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
let S={done:{}},snd=true,P=null;
try{const x=JSON.parse(localStorage.getItem('rr_open'));if(x&&x.done)S=x}catch(_){}
const save=()=>{try{localStorage.setItem('rr_open',JSON.stringify(S))}catch(_){}};
const total=()=>Object.values(S.done).reduce((a,d)=>a+d.pts,0), nd=()=>Object.keys(S.done).length, ALL=ACT.length+4;
const MAX=ACT.length*(QN*PT+BONUS)+4*BONUS;
/* ===== SUONI ===== */
let AC;function beep(f,d=.12,t='square',dl=0){if(!snd)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain();o.type=t;o.frequency.value=f;g.gain.setValueAtTime(.08,AC.currentTime+dl);g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+dl+d);o.connect(g);g.connect(AC.destination);o.start(AC.currentTime+dl);o.stop(AC.currentTime+dl+d)}catch(_){}}
const sOk=()=>{beep(660,.1);beep(880,.18,'square',.1)},sKo=()=>beep(150,.3,'sawtooth'),sClk=()=>beep(440,.06),sWin=()=>[523,659,784,1047].forEach((f,i)=>beep(f,.2,'triangle',i*.12));
$('#sb').onclick=()=>{snd=!snd;$('#sb').textContent=snd?'🔊':'🔇';sClk()};
/* ===== UI ===== */
const calm=()=>matchMedia('(prefers-reduced-motion:reduce)').matches, cssv=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
/* contatore animato per il punteggio */
function cnt(el,v){const a=+el.dataset.v||0;el.dataset.v=v;if(a===v||calm()){el.textContent=v;return}const t0=performance.now();(function f(t){const p=Math.min((t-t0)/600,1);el.textContent=Math.round(a+(v-a)*(1-Math.pow(1-p,3)));if(p<1&&+el.dataset.v===v)requestAnimationFrame(f)})(t0)}
function hud(){cnt($('#sc'),total());$('#pt').textContent=nd()+'/'+ALL;$('#pb').style.width=(nd()/ALL*100)+'%'}
let REDRAW=null; /* ridisegna il canvas del gioco aperto (cambio tema, font caricati) */
function go(html,s){unsay();REDRAW=null;document.body.dataset.s=s||'';$('#main').innerHTML='<div class="scr">'+(NAVS.includes(s)?navBar():'')+html+'</div>';hud();window.scrollTo({top:0,behavior:'smooth'})}
function toast(m,k){const t=$('#toast');t.textContent=m;t.className=(k||'')+' s';clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('s'),2800)}
/* messaggio in pagina al posto di alert(): k = 'ok' oppure 'ko' */
function say(m,k){const d=$('#dlg');$('#dlgT').textContent=m;$('#dlgI').textContent=k==='ok'?'🏆':'⚠️';d.dataset.k=k||'';d.classList.remove('hidden');$('#dlgOk').focus({preventScroll:true})}
function unsay(){$('#dlg').classList.add('hidden')}
$('#dlgOk').onclick=()=>{sClk();unsay()};$('#dlg').onclick=e=>{if(e.target.id==='dlg')unsay()};
function conf(n=50){const E=['🎉','⭐','💻','🟧','✨','🏆','👾'];for(let i=0;i<n;i++){const s=document.createElement('span');s.className='cf';s.textContent=E[i%E.length];s.style.left=Math.random()*100+'vw';s.style.animationDuration=(2+Math.random()*2.5)+'s';s.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),5500)}}
const LOGO=$('#hl').src;
$('#hl').onclick=()=>{sClk();start()};
/* ===== SCHERMATE ===== */
const WORD='INFORMATICA';
/* adatta la parola gigante alla larghezza dello schermo */
function fitWord(){const s=$('#hw');if(!s)return;const c=document.createElement('canvas').getContext('2d');c.font='900 100px "Big Shoulders Display","Arial Narrow",Impact,sans-serif';
 const ws=[...WORD].map(ch=>c.measureText(ch).width),gap=6,H=Math.round(c.measureText('I').actualBoundingBoxAscent)||72;let x=0;
 s.setAttribute('viewBox','0 0 '+(ws.reduce((a,b)=>a+b,0)+gap*(WORD.length-1))+' '+H);$('#wfill').setAttribute('y2',H);
 s.querySelectorAll('text').forEach((t,i)=>{t.setAttribute('x',x);t.setAttribute('y',H);x+=ws[i]+gap})}
addEventListener('resize',fitWord);
function start(){
 go(`<section class="hero">
 <div class="hero-word" aria-hidden="true"><svg id="hw" preserveAspectRatio="none"><defs><linearGradient id="wfill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="72"><stop offset="0" stop-color="#f15a22"/><stop offset="1" stop-color="#a73a12"/></linearGradient></defs>${[...WORD].map((ch,i)=>`<text style="--i:${i}">${ch}</text>`).join('')}</svg></div>
 <aside class="hero-note"><p>Mettiti alla prova, supera le sfide e scopri se hai la stoffa per diventare un informatico!</p><b>${MAX} PUNTI IN PALIO</b></aside>
 <div class="hero-main"><img class="big" src="${LOGO}" alt="IIS Rosselli – Polo tecnologico economico professionale">
 <h1>BENVENUTO NEL MONDO DELL’INFORMATICA!</h1>
 <div class="term" id="tm"></div><button class="btn big-btn" id="go" style="visibility:hidden">▶ INIZIA L’AVVENTURA</button></div>
 <aside class="hero-list"><h2>${ALL} MISSIONI</h2><ol>${[...ACT,...GAMES].map(a=>`<li><span>${a.ic}</span>${a.t}</li>`).join('')}</ol></aside>
 </section>`,'start');
 fitWord();
 const L=['> avvio sistema Rosselli...','> caricamento sfide... OK','> giocatore pronto_'];let i=0,j=0,out='';const tm=$('#tm');
 (function type(){if(!tm.isConnected)return;if(i>=L.length){$('#go').style.visibility='visible';return}
  out+=L[i][j++];tm.innerHTML=esc(out).replace(/\n/g,'<br>')+'<b>█</b>';if(j>=L[i].length){i++;j=0;out+='\n';setTimeout(type,250)}else setTimeout(type,28)})();
 $('#go').onclick=()=>{sWin();menu()};
}
function card(a,onclick,label){const d=S.done[a.id];return `<div class="card" style="--c:${a.c}"><span class="no">${ORDER.indexOf(a.id)+1}</span><div class="ic">${a.ic}</div><h3>${a.t}</h3><p>${a.d}</p>${d?`<div class="tag">✔ Completata · ${d.pts} pt</div>`:''}<button class="btn" data-a="${a.id}">${d?'↻ RIGIOCA':label}</button></div>`}
function menu(){
 const all=nd()>=ALL;
 go(`<div class="mh"><img class="il" src="assets/informatica.png" alt="Logo Informatica"><h2>🎮 SCEGLI LA TUA MISSIONE</h2></div><div class="mg">${ACT.map(a=>card(a,0,'▶ INIZIA')).join('')}${GAMES.map(a=>card(a,0,'▶ GIOCA')).join('')}</div>
 <div class="row"><button class="btn g" data-nv="start">🏠 Home</button><button class="btn" data-nv="next">⏭ Prossimo gioco</button></div><div class="row">${all?'<button class="btn" id="fin">🏁 VEDI IL RISULTATO FINALE</button>':`<div class="chip">Completa tutte le missioni per sbloccare il finale: ${nd()}/${ALL}</div>`}</div>
 ${school()}`,'menu');
 document.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{sClk();openG(b.dataset.a)});
 if(all)$('#fin').onclick=final;
}
function begin(id){CUR=id;const A=ACT.find(a=>a.id===id);P={id,i:0,ok:0,r:[],qs:sh(A.qs).slice(0,QN).map(shq)};ask()}
function ask(){
 const A=ACT.find(a=>a.id===P.id),Q=P.qs[P.i];P.lock=0;
 const dots=P.qs.map((_,i)=>`<i class="${i<P.i?P.r[i]:i===P.i?'on':''}"></i>`).join('');
 go(`<div class="panel qp" style="--c:${A.c}"><div class="qh"><span class="ft">${A.ic} ${A.t}</span><span class="qn">${P.i+1}/${P.qs.length}</span></div><div class="dots">${dots}</div>
 ${Q.e?`<div class="big-e">${Q.e}</div>`:''}<p class="q">${esc(Q.q)}</p>${Q.k?`<pre>${esc(Q.k)}</pre>`:''}
 ${Q.in?`<input class="inp" id="in" autocomplete="off" autocapitalize="characters" placeholder="Scrivi qui…"><div class="center"><button class="btn" id="ck">VERIFICA</button></div>`
 :`<div class="opts">${Q.o.map((o,k)=>`<button class="opt" data-k="${k}"><b>${'ABCD'[k]}</b><span>${esc(o)}</span></button>`).join('')}</div>`}
 <div id="fb"></div></div><div class="row"><button class="btn g" id="mn">⌂ MENU</button></div>`,'play');
 $('#mn').onclick=menu;
 if(Q.in){$('#ck').onclick=()=>answer(null);$('#in').onkeydown=e=>{if(e.key==='Enter')answer(null)};$('#in').focus({preventScroll:true})}
 else document.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(+b.dataset.k));
}
function answer(k){
 if(P.lock)return;const A=ACT.find(a=>a.id===P.id),Q=P.qs[P.i];let ok;
 if(Q.in){const v=$('#in').value.trim().toUpperCase();if(!v)return;ok=v===Q.a;$('#in').disabled=true;$('#ck').remove()}
 else{ok=k===Q.a;document.querySelectorAll('.opt').forEach((b,i)=>{b.disabled=true;if(i===Q.a)b.classList.add('ok');else if(i===k)b.classList.add('ko')})}
 P.lock=1;P.r[P.i]=ok?'ok':'ko';if(ok){P.ok++;sOk()}else sKo();
 const last=P.i===P.qs.length-1;
 $('#fb').innerHTML=`<div class="fb ${ok?'ok':'ko'}"><b>${ok?'✅ Esatto! +'+PT+' punti':'❌ Quasi!'+(Q.in?' La risposta era '+Q.a:'')}</b><br>${esc(Q.x)}</div><div class="row"><button class="btn" id="nx">${last?'🏁 VEDI RISULTATO':'AVANTI ▶'}</button></div>`;
 $('#nx').onclick=()=>{sClk();last?finish():(P.i++,ask())};$('#nx').focus({preventScroll:true});
}
function finish(){
 const A=ACT.find(a=>a.id===P.id),n=P.qs.length,pts=P.ok*PT+BONUS,old=S.done[P.id];
 if(!old||pts>=old.pts)S.done[P.id]={pts,ok:P.ok};save();
 const msg=P.ok===n?'Perfetto! Sei un fenomeno! 🚀':P.ok>=n-1?'Ottimo lavoro! 💪':P.ok>=2?'Bella prova! Riprova per fare ancora meglio.':'Non mollare: i migliori informatici imparano dagli errori!';
 P.ok>=n-1?(conf(),sWin()):beep(330,.25,'triangle');
 done(`${A.ic} ${A.t}`,P.ok+'/'+n+' risposte corrette',pts,msg,()=>begin(P.id));
}
function done(t,sub,pts,msg,again){
 go(`<div class="panel center res"><div class="ft">MISSIONE COMPLETATA</div><h2>${t}</h2><p>${sub}</p><div class="score">+${pts}</div><p>${msg}</p>
 <div class="row"><button class="btn g" id="ag">↻ RIPROVA</button><button class="btn" id="mn">⌂ TORNA AL MENU</button>${nd()>=ALL?'<button class="btn" id="fin">🏁 VAI AL FINALE</button>':''}</div></div>`,'res');
 $('#ag').onclick=again;$('#mn').onclick=menu;if(nd()>=ALL)$('#fin').onclick=final;
}
function ruota(){CUR='ruota';
 const R={sc:[0,0],nm:['Squadra A','Squadra B'],t:0,ang:0,spin:false,over:false,k:0,st:'spin'},V='AEIOU',g=id=>document.getElementById(id),live=()=>!!g('wc');
 go(`<h2>🎡 RUOTA DELLA FORTUNA</h2><div class="tm2">${[0,1].map(i=>`<div class="team" id="tc${i}"><input id="tn${i}" value="${R.nm[i]}" maxlength="14" aria-label="Nome squadra ${i+1}"><b id="ts${i}">0</b> pt</div>`).join('')}</div>
 <div class="panel rg"><div><canvas id="wc" width="720" height="720"></canvas><div class="center"><button class="btn" id="sp">🎡 GIRA LA RUOTA!</button></div></div>
 <div><div class="ft" id="cat"></div><div class="wd" id="bd"></div><div class="msg" id="ms"></div><div id="wn" class="row" style="margin:0"></div><div class="kb" id="kb"></div>
 <div id="fr" class="row" style="display:none;margin:0 0 10px"><input class="inp" id="fi" style="margin:0;flex:1;min-width:180px" placeholder="Scrivi la frase intera"><button class="btn" id="fc">CONFERMA</button></div>
 <div class="row rc" style="justify-content:flex-start;margin-top:6px"><button class="btn g" id="bv">🛒 Vocale (${COST} pt)</button><button class="btn g" id="bf">🎯 Frase finale</button><button class="btn g" id="bp">⏭ Passa turno</button><button class="btn g" id="bn">🔄 Nuova frase</button></div></div></div>
 <div class="row"><button class="btn g" id="mn">⌂ MENU</button></div>`,'ruota');
 const nm=()=>R.nm[R.t],later=(f,m)=>{const k=R.k;setTimeout(()=>{if(live()&&R.k===k)f()},m)};
 const ms=(t,c)=>{g('ms').textContent=t;g('ms').style.color=c||'var(--tx)'};
 const ui=()=>[0,1].forEach(i=>{g('ts'+i).textContent=R.sc[i];g('tc'+i).classList.toggle('on',R.t===i)});
 const solved=()=>[...R.ph[1]].every(c=>c===' '||R.g.includes(c));
 function board(n){g('bd').innerHTML=R.ph[1].split(' ').map(w=>'<div>'+[...w].map(c=>R.g.includes(c)?`<span class="lb ${c===n?'n':''}">${c}</span>`:'<span class="lb h">_</span>').join('')+'</div>').join('')}
 function keys(m){g('kb').innerHTML=[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(l=>`<button class="k ${V.includes(l)?'v':''}" data-l="${l}" ${((m==='c'&&!V.includes(l))||(m==='v'&&V.includes(l)))&&!R.g.includes(l)?'':'disabled'}>${l}</button>`).join('');
  document.querySelectorAll('.k').forEach(b=>b.onclick=()=>pick(b.dataset.l))}
 function draw(){const x=g('wc').getContext('2d'),n=SP.length,arc=2*Math.PI/n,m=180,r=170;x.setTransform(g('wc').width/360,0,0,g('wc').width/360,0,0);x.clearRect(0,0,360,360);x.save();x.translate(m,m);x.rotate(R.ang);
  SP.forEach((v,i)=>{const sp=typeof v==='string';x.beginPath();x.moveTo(0,0);x.arc(0,0,r,i*arc,(i+1)*arc);x.closePath();x.fillStyle=sp?(v[0]==='B'?'#2a2a3a':'#6b1f33'):SC[i%6];x.fill();x.lineWidth=2;x.strokeStyle='#0b0e18';x.stroke();
   x.save();x.rotate(i*arc+arc/2);x.textAlign='right';x.fillStyle=sp?'#fff':'#0b0e18';x.font=(sp?'900 11px':'900 16px')+' "Bricolage Grotesque",Arial,sans-serif';x.fillText(v,r-12,5);x.restore()});
  x.restore();x.beginPath();x.arc(m,m,24,0,7);x.fillStyle='#f15a22';x.fill();x.lineWidth=4;x.strokeStyle='#fff';x.stroke();
  x.beginPath();x.moveTo(m-15,2);x.lineTo(m+15,2);x.lineTo(m,36);x.closePath();x.fillStyle='#fff';x.fill();x.strokeStyle='#f15a22';x.lineWidth=3;x.stroke()}
 function np(){R.k++;R.ph=FR[Math.random()*FR.length|0];R.g=[];R.st='spin';R.over=false;g('cat').textContent='Categoria: '+R.ph[0];g('wn').innerHTML='';g('fr').style.display='none';g('sp').disabled=false;board();keys();ms(nm()+', gira la ruota!');ui()}
 function turn(){if(R.over)return;R.t=1-R.t;R.st='spin';keys();g('sp').disabled=false;ms('Tocca a '+nm()+': gira la ruota!');ui()}
 function res(v){
  if(v==='BANCAROTTA'){R.sc[R.t]=0;ui();sKo();ms('💥 BANCAROTTA! '+nm()+' perde tutti i punti.','var(--rd)');later(turn,2200)}
  else if(v==='PERDI TURNO'){sKo();ms('🛑 PERDI TURNO! '+nm()+' cede la mano.','var(--rd)');later(turn,2200)}
  else{R.val=v;R.st='c';sOk();ms(`Spicchio da ${v} pt: scegli una CONSONANTE!`,'var(--gr)');keys('c')}}
 function pick(l){
  if(R.st!=='c'&&R.st!=='v')return;const v=R.st==='v',c=[...R.ph[1]].filter(x=>x===l).length;R.g.push(l);keys();
  if(c){if(!v)R.sc[R.t]+=c*R.val;R.st='spin';sOk();board(l);ui();if(solved())return win(false);
   ms(`✅ La ${l} compare ${c} volta/e${v?'':' (+'+c*R.val+' pt)'}! ${nm()} continua: gira ancora o compra una vocale.`,'var(--gr)');g('sp').disabled=false}
  else{R.st='wait';sKo();ms(`❌ La ${l} non c’è. Il turno passa all’altra squadra.`,'var(--rd)');later(turn,2000)}}
 function win(f){
  R.over=true;R.st='wait';if(f){[...R.ph[1]].forEach(c=>{if(c!==' '&&!R.g.includes(c))R.g.push(c)});R.sc[R.t]+=2000}
  board();ui();keys();g('sp').disabled=true;g('fr').style.display='none';const first=!S.done.ruota;if(first){S.done.ruota={pts:BONUS,ok:0};save();hud()}
  sWin();conf(70);ms(`🏆 ${nm()} vince la manche con ${R.sc[R.t]} pt!${f?' (+2000 per la frase finale)':''}${first?' Bonus missione: +'+BONUS+' punti!':''}`,'var(--yl)');
  
  if(nd()>=ALL){g('wn').innerHTML='<button class="btn" id="fin">🏁 VAI AL FINALE</button>';g('fin').onclick=final}}
 g('sp').onclick=()=>{
  if(R.spin||R.over||R.st!=='spin')return;R.spin=true;g('sp').disabled=true;ms(nm()+' gira la ruota…','var(--yl)');
  const n=SP.length,arc=2*Math.PI/n,idx=Math.random()*n|0,a0=R.ang,tg=-Math.PI/2-(idx+.5)*arc,d=((tg-a0)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)+10*Math.PI;let t0=null,lk=-1;
  const f=ts=>{t0=t0||ts;const p=Math.min((ts-t0)/3000,1);R.ang=a0+d*(1-Math.pow(1-p,3));draw();const k=Math.floor(R.ang/arc);if(k!==lk){lk=k;beep(1100,.03)}
   if(p<1&&live())requestAnimationFrame(f);else if(live()){R.spin=false;res(SP[idx])}};requestAnimationFrame(f);
  };
 g('bv').onclick=()=>{if(R.st!=='spin'||R.spin||R.over)return;if(R.sc[R.t]<COST){sKo();ms(`Servono ${COST} punti per una vocale: ${nm()} ne ha ${R.sc[R.t]}.`,'var(--rd)');return}
  if([...V].every(x=>R.g.includes(x))){ms('Le vocali sono finite!');return}
  R.sc[R.t]-=COST;R.st='v';g('sp').disabled=true;ui();ms('Vocale acquistata (−'+COST+' pt): scegli una VOCALE!','var(--yl)');keys('v')};
 g('bf').onclick=()=>{if(R.spin||R.over)return;if(R.st==='f'){R.st='spin';g('fr').style.display='none';g('sp').disabled=false;return}
  if(R.st!=='spin')return;R.st='f';g('sp').disabled=true;g('fr').style.display='flex';g('fi').value='';g('fi').focus()};
 const conf2=()=>{if(R.st!=='f')return;const v=g('fi').value.trim().toUpperCase().replace(/\s+/g,' ');if(!v)return;
  if(v===R.ph[1])win(true);else{R.st='wait';g('fr').style.display='none';sKo();ms(`❌ Frase sbagliata! Il turno passa all’altra squadra.`,'var(--rd)');later(turn,2000)}};
 g('fc').onclick=conf2;g('fi').onkeydown=e=>{if(e.key==='Enter')conf2()};
 g('bp').onclick=()=>{if(R.st==='spin'&&!R.spin&&!R.over){sClk();turn()}};
 g('bn').onclick=()=>{if(!R.spin){sClk();np()}};
 g('mn').onclick=()=>{R.k++;menu()};
 [0,1].forEach(i=>g('tn'+i).oninput=e=>{R.nm[i]=e.target.value||'Squadra '+'AB'[i]});
 document.onkeydown=e=>{if(!live()||e.target.tagName==='INPUT')return;const l=e.key.toUpperCase(),b=/^[A-Z]$/.test(l)&&document.querySelector(`.k[data-l="${l}"]`);if(b&&!b.disabled)b.click()};
 REDRAW=draw;draw();np();
}
const V_Wheel=`<div class="game gw">
 <section class="panel gw-wheel">
  <div class="gh"><h2><i class="fa-solid fa-dharmachakra"></i> Ruota Tech - Rosselli Rasetti</h2><span id="turnDisplay" class="pill">Turno: SQUADRA ALPHA</span></div>
  <div class="wheel-wrap"><div class="wheel-ptr"><i class="fa-solid fa-caret-down"></i></div><canvas id="wheelCanvas" width="720" height="720"></canvas></div>
  <button id="btnSpin" onclick="spinWheel()" class="btn"><i class="fa-solid fa-rotate-right"></i><span>GIRA LA RUOTA!</span></button>
 </section>
 <section class="gw-side">
  <div class="panel"><h3 class="sub"><i class="fa-solid fa-users"></i> Punteggi Squadre</h3>
   <div class="tm2">
    <div id="teamCardA" class="team v on"><span>SQUADRA ALPHA</span><b id="scoreA">0</b><small>Punti</small></div>
    <div id="teamCardB" class="team v"><span>SQUADRA BETA</span><b id="scoreB">0</b><small>Punti</small></div>
   </div></div>
  <div class="panel"><h3 class="sub"><i class="fa-solid fa-list-check"></i> Esito Estrazione</h3>
   <div id="wheelStatusLog" class="log">Premi "GIRA LA RUOTA!" per iniziare la partita!</div></div>
 </section>
</div>
<div id="questionModal" class="modal hidden"><div class="panel modal-box">
 <div class="modal-h"><span id="modalCategory" class="pill">HARDWARE PC</span><span id="modalPoints" class="pts">+200 PUNTI</span></div>
 <h3 id="modalQuestionText">Testo Domanda...</h3>
 <div id="modalAnswersContainer" class="opts one"></div>
</div></div>`;
const V_Maze=`<div class="game gm">
 <section class="panel gm-board">
  <div class="gh"><div><h2 id="levelTitle">Livello 1: Primi Passi</h2><p id="levelDesc">Programma il RoboBot per raggiungere il Server!</p></div>
   <select id="levelSelect" class="sel" onchange="loadLevel(parseInt(this.value))" aria-label="Scegli il livello"><option value="0">Livello 1</option><option value="1">Livello 2</option><option value="2">Livello 3</option><option value="3">Livello 4</option><option value="4">Livello 5</option></select></div>
  <div class="maze-wrap"><canvas id="mazeCanvas" width="720" height="720"></canvas></div>
  <div class="gm-status"><span>Microchip: <strong id="chipsStatus">0 / 0</strong></span><span id="botDirectionStatus">Direzione: <strong id="dirIndicator">EST ➔</strong></span></div>
 </section>
 <section class="gm-side">
  <div class="panel"><h3 class="sub"><i class="fa-solid fa-cubes"></i> Istruzioni di Codice</h3>
   <div class="cmds">
    <button onclick="addCommand('FORWARD')" class="cmd c-move"><i class="fa-solid fa-arrow-up"></i> Avanza</button>
    <button onclick="addCommand('TURN_LEFT')" class="cmd c-turn"><i class="fa-solid fa-rotate-left"></i> Ruota SX</button>
    <button onclick="addCommand('TURN_RIGHT')" class="cmd c-turn"><i class="fa-solid fa-rotate-right"></i> Ruota DX</button>
    <button onclick="addCommand('REPEAT_2')" class="cmd c-rep"><i class="fa-solid fa-repeat"></i> Ripeti 2x</button>
    <button onclick="addCommand('REPEAT_3')" class="cmd c-rep"><i class="fa-solid fa-rotate"></i> Ripeti 3x</button>
    <button onclick="addCommand('COLLECT')" class="cmd c-get"><i class="fa-solid fa-hand-holding"></i> Raccogli</button>
   </div></div>
  <div class="panel gm-prog">
   <div class="gh"><h3 class="sub"><i class="fa-solid fa-code"></i> Sequenza (<span id="commandCountText">0</span>)</h3><button onclick="clearProgram()" class="lnk">Cancella</button></div>
   <div id="programWorkspace" class="ws"><div id="emptyWorkspaceHint" class="hint">Clicca sulle istruzioni in alto per programmare il RoboBot!</div></div>
  </div>
  <div class="panel tools">
   <button id="btnRun" onclick="runProgram()" class="btn run"><i class="fa-solid fa-play"></i> Esegui</button>
   <button id="btnStep" onclick="stepDebug()" class="btn step"><i class="fa-solid fa-bug"></i> Passo-Passo</button>
   <button onclick="resetBotPosition()" class="btn g"><i class="fa-solid fa-rotate-left"></i> Reset</button>
  </div>
 </section>
</div>`;
const V_Pin=`<div class="game gp">
 <section class="panel gp-head">
  <div><h2><i class="fa-solid fa-key"></i> CyberEscape - Rosselli Rasetti</h2><p>Sblocca le 4 stazioni informatiche per ottenere le 4 cifre del PIN!</p></div>
  <div class="locks">${[1,2,3,4].map(n=>`<div id="lockBadge${n}" class="lock"><span class="lock-icon">🔒</span> <span>Cifra ${n}: ?</span></div>`).join('')}</div>
 </section>
 <div class="gp-grid">
  <div class="stations">${[1,2,3,4].map(n=>`<div id="stationCard${n}" class="panel station"></div>`).join('')}</div>
  <div class="panel keypad"><h3 class="sub">Terminale Evacuazione</h3>
   <div id="keypadDisplay" class="kd">_ _ _ _</div>
   <div class="keys">${[1,2,3,4,5,6,7,8,9].map(n=>`<button onclick="pressKey('${n}')" class="key">${n}</button>`).join('')}<button onclick="clearKeypad()" class="key clr">CLR</button><button onclick="pressKey('0')" class="key">0</button><button onclick="submitKeypad()" class="key ok">OK</button></div>
  </div>
 </div>
</div>`;
function final(){
 const p=total(),r=p/MAX,m=r>.85?'Sei un vero genio dell’informatica!':r>.6?'Hai un grande talento da programmatore!':'Hai fatto il primo passo: il bello viene adesso!';
 sWin();conf(90);setTimeout(()=>conf(60),1800);
 go(`<div class="panel center fin"><div class="big-e">🏆</div><h2>MISSIONE COMPIUTA!</h2><p>Complimenti! Hai completato la tua prima missione nel mondo dell’informatica!</p>
 <div class="score big">${p} / ${MAX}</div><p>${m}</p>${school()}
 <div class="row"><button class="btn" id="rp">↻ RIGIOCA</button><button class="btn g" id="st">⌂ TORNA ALL’INIZIO</button></div></div>`,'fin');
 $('#rp').onclick=()=>{S={done:{}};save();menu()};$('#st').onclick=start;
}
/* ----------------------------------------------------
           2. WEB AUDIO SYNTHESIZER
        ---------------------------------------------------- */
        let audioCtx = null;
        
        function initAudio() {
            AC = AC || new (window.AudioContext || window.webkitAudioContext)();
            if (AC.state === 'suspended') AC.resume();
            audioCtx = AC;
        }

        
        function playSound(type) {
            if (!snd) return;
            initAudio();
            try {
                const now = audioCtx.currentTime;
                if (type === 'tick') {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(600, now);
                    osc.frequency.exponentialRampToValueAtTime(200, now + 0.04);
                    gain.gain.setValueAtTime(0.1, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start(now);
                    osc.stop(now + 0.04);
                }
                else if (type === 'win') {
                    const notes = [523.25, 659.25, 783.99, 1046.50];
                    notes.forEach((freq, idx) => {
                        const osc = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();
                        osc.type = 'triangle';
                        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
                        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
                        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.1 + 0.25);
                        osc.connect(gain);
                        gain.connect(audioCtx.destination);
                        osc.start(now + idx * 0.1);
                        osc.stop(now + idx * 0.1 + 0.25);
                    });
                }
                else if (type === 'wrong') {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(160, now);
                    osc.frequency.linearRampToValueAtTime(90, now + 0.25);
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.start(now);
                    osc.stop(now + 0.25);
                }
            } catch(e){}
        }

        /* ----------------------------------------------------
           3. GAME 1: RUOTA DELLA FORTUNA ENGINE
        ---------------------------------------------------- */
        const wheelSectors = [
            { label: "100 PT", points: 100, color: "#27d3ff" },
            { label: "200 PT", points: 200, color: "#ffd23f" },
            { label: "300 PT", points: 300, color: "#2ee59d" },
            { label: "BONUS", points: 500, color: "#f15a22" },
            { label: "150 PT", points: 150, color: "#27d3ff" },
            { label: "250 PT", points: 250, color: "#ffd23f" },
            { label: "400 PT", points: 400, color: "#2ee59d" },
            { label: "500 PT", points: 500, color: "#ff5470" }
        ];

        const techQuestions = [
            { cat: "HARDWARE", text: "Quale memoria volatile si svuota quando spegni il computer?", options: ["RAM", "Hard Disk", "ROM"], correct: 0 },
            { cat: "SCORCIATOIE", text: "Quale combinazione di tasti si usa per COPIARE un file o testo?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z"], correct: 0 },
            { cat: "CYBER SAFETY", text: "Cos'è una password sicura?", options: ["12345678", "Il proprio nome", "Una combinazione di lettere, numeri e simboli"], correct: 2 },
            { cat: "WEB & INTERNET", text: "Cos'è Google Chrome?", options: ["Un Sistema Operativo", "Un Browser Web", "Un Processore"], correct: 1 },
            { cat: "CODING", text: "In informatica, cos'è un ALGORITMO?", options: ["Un componente hardware", "Una sequenza finita di istruzioni per risolvere un problema", "Un virus computer"], correct: 1 }
        ];

        let wheelCanvas;
        let wheelCtx;
        let currentAngle = 0;
        let isSpinning = false;
        let teamTurn = 'A'; // 'A' or 'B'
        let scoreA = 0;
        let scoreB = 0;
        let pendingPoints = 0;

        function drawWheel() {
            const numSectors = wheelSectors.length;
            const arc = (Math.PI * 2) / numSectors;
            const radius = wheelCanvas.width / 2 - 10;
            const centerX = wheelCanvas.width / 2;
            const centerY = wheelCanvas.height / 2;

            wheelCtx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

            for (let i = 0; i < numSectors; i++) {
                const angle = currentAngle + i * arc;
                wheelCtx.beginPath();
                wheelCtx.fillStyle = wheelSectors[i].color;
                wheelCtx.moveTo(centerX, centerY);
                wheelCtx.arc(centerX, centerY, radius, angle, angle + arc);
                wheelCtx.closePath();
                wheelCtx.fill();
                wheelCtx.strokeStyle = "#0b0e18";
                wheelCtx.lineWidth = radius * 0.012;
                wheelCtx.stroke();

                // Text
                wheelCtx.save();
                wheelCtx.translate(centerX, centerY);
                wheelCtx.rotate(angle + arc / 2);
                wheelCtx.textAlign = "right";
                wheelCtx.fillStyle = wheelSectors[i].label === "BONUS" ? "#ffffff" : "#0b0e18";
                wheelCtx.font = "900 " + Math.round(radius * 0.13) + "px 'Big Shoulders Display', 'Arial Narrow', sans-serif";
                wheelCtx.fillText(wheelSectors[i].label, radius - radius * 0.07, radius * 0.045);
                wheelCtx.restore();
            }

            // Mozzo centrale
            wheelCtx.beginPath();
            wheelCtx.arc(centerX, centerY, radius * 0.14, 0, Math.PI * 2);
            wheelCtx.fillStyle = "#f15a22";
            wheelCtx.fill();
            wheelCtx.lineWidth = radius * 0.025;
            wheelCtx.strokeStyle = "#ffffff";
            wheelCtx.stroke();
        }

        function spinWheel() {
            if (isSpinning) return;
            isSpinning = true;
            initAudio();

            let spinAngle = Math.random() * 10 + 20;
            let duration = 3000;
            let start = null;

            function animate(timestamp) {
                if (!document.getElementById("wheelCanvas")) { isSpinning = false; return; }
                if (!start) start = timestamp;
                let progress = timestamp - start;
                let easeOut = Math.pow(1 - progress / duration, 3);
                currentAngle += (spinAngle * easeOut) * 0.05;
                playSound('tick');
                drawWheel();

                if (progress < duration) {
                    requestAnimationFrame(animate);
                } else {
                    isSpinning = false;
                    onWheelStopped();
                }
            }
            requestAnimationFrame(animate);
        }

        function onWheelStopped() {
            const numSectors = wheelSectors.length;
            const arc = (Math.PI * 2) / numSectors;
            let normalizedAngle = (2 * Math.PI - (currentAngle % (2 * Math.PI))) % (2 * Math.PI);
            // Adjust offset for pointer at top (-Math.PI/2)
            normalizedAngle = (normalizedAngle + Math.PI / 2) % (2 * Math.PI);
            let sectorIndex = Math.floor(normalizedAngle / arc) % numSectors;

            const sector = wheelSectors[sectorIndex];
            pendingPoints = sector.points;

            document.getElementById("wheelStatusLog").innerHTML = `
                <div>
                    <b>ESTRATTO: ${sector.label}!</b>
                    <span>Rispondi alla domanda per aggiudicarti i punti!</span>
                </div>
            `;
            openQuestionModal();
        }

        function openQuestionModal() {
            const q = nextWheelQ();
            document.getElementById("modalCategory").innerText = q.cat;
            document.getElementById("modalPoints").innerText = `+${pendingPoints} PUNTI`;
            document.getElementById("modalQuestionText").innerText = q.text;

            const container = document.getElementById("modalAnswersContainer");
            container.innerHTML = "";

            q.options.forEach((opt, idx) => {
                const btn = document.createElement("button");
                btn.className = "opt";
                btn.innerText = `${String.fromCharCode(65 + idx)}) ${opt}`;
                btn.onclick = () => answerQuestion(idx === q.correct);
                container.appendChild(btn);
            });

            document.getElementById("questionModal").classList.remove("hidden");
        }

        function answerQuestion(isCorrect) {
            document.getElementById("questionModal").classList.add("hidden");
            if (isCorrect) {
                playSound('win');
                if (teamTurn === 'A') {
                    scoreA += pendingPoints;
                    document.getElementById("scoreA").innerText = scoreA;
                } else {
                    scoreB += pendingPoints;
                    document.getElementById("scoreB").innerText = scoreB;
                }
                confetti({ particleCount: 70, spread: 60 });
                markDone('ruotaq');
                document.getElementById("wheelStatusLog").innerText = `ESATTO! +${pendingPoints} punti assegnati!`;
            } else {
                playSound('wrong');
                document.getElementById("wheelStatusLog").innerText = `ERRATO! Nessun punto assegnato. Passa il turno!`;
            }

            // Switch turn
            teamTurn = teamTurn === 'A' ? 'B' : 'A';
            document.getElementById("turnDisplay").innerText = `Turno: SQUADRA ${teamTurn === 'A' ? 'ALPHA' : 'BETA'}`;
            document.getElementById("teamCardA").classList.toggle("on", teamTurn === 'A');
            document.getElementById("teamCardB").classList.toggle("on", teamTurn === 'B');
        }

        /* ----------------------------------------------------
           4. GAME 2: ALGOMAZE ENGINE
        ---------------------------------------------------- */
        const mazeLevels = [
            { title: "Livello 1: Primi Passi", desc: "Fai avanzare il robot al Server!", size: 5, start: {x:0, y:2, dir:1}, goal: {x:4, y:2}, walls: [], chips: [] },
            { title: "Livello 2: La Curva", desc: "Usa le rotazioni per girare l'angolo!", size: 5, start: {x:1, y:4, dir:0}, goal: {x:4, y:1}, walls: [{x:1,y:0},{x:2,y:4}], chips: [] },
            { title: "Livello 3: Firewall", desc: "Aggira gli ostacoli di sicurezza!", size: 6, start: {x:0, y:0, dir:1}, goal: {x:5, y:5}, walls: [{x:2,y:0},{x:2,y:1},{x:2,y:2},{x:4,y:3},{x:4,y:4}], chips: [] },
            { title: "Livello 4: Super Loop", desc: "Usa 'Ripeti 2x/3x' per contrarre il codice!", size: 6, start: {x:0, y:5, dir:0}, goal: {x:5, y:0}, walls: [{x:1,y:5},{x:1,y:4},{x:1,y:3}], chips: [] },
            { title: "Livello 5: Microchip", desc: "Raccogli i dati prima di arrivare al Server!", size: 6, start: {x:0, y:0, dir:2}, goal: {x:5, y:5}, walls: [{x:1,y:1},{x:3,y:3}], chips: [{x:0,y:4,collected:false}] }
        ];

        let currentLevelIdx = 0;
        let botPos = { x: 0, y: 0, dir: 1 };
        let program = [];
        let mazeCanvas;
        let mazeCtx;
        let isExecuting = false;
        let collected = [];

        function loadLevel(idx) {
            currentLevelIdx = idx;
            const lvl = mazeLevels[idx];
            document.getElementById("levelTitle").innerText = lvl.title;
            document.getElementById("levelDesc").innerText = lvl.desc;
            resetBotPosition();
            clearProgram();
        }

        function resetBotPosition() {
            const lvl = mazeLevels[currentLevelIdx];
            botPos = { x: lvl.start.x, y: lvl.start.y, dir: lvl.start.dir };
            collected = [];
            updateChips();
            drawGrid();
        }

        function drawGrid() {
            const lvl = mazeLevels[currentLevelIdx];
            const N = lvl.size;
            const cs = mazeCanvas.width / N;
            const x = mazeCtx;
            const tileA = cssv('--card'), tileB = cssv('--card2'), grid = cssv('--bd');
            const emoji = (e, cx, cy, size) => {
                x.font = size + "px 'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif";
                x.textAlign = "center"; x.textBaseline = "middle"; x.fillStyle = "#fff";
                x.fillText(e, cx, cy + size * 0.06);
            };
            const box = (c, r, pad, color) => {
                x.fillStyle = color; x.beginPath();
                x.roundRect(c * cs + pad, r * cs + pad, cs - pad * 2, cs - pad * 2, cs * 0.1); x.fill();
            };
            x.clearRect(0, 0, mazeCanvas.width, mazeCanvas.height);

            // Tiles
            for (let r = 0; r < N; r++) {
                for (let c = 0; c < N; c++) {
                    x.fillStyle = (r + c) % 2 === 0 ? tileA : tileB;
                    x.fillRect(c * cs, r * cs, cs, cs);
                    x.strokeStyle = grid; x.lineWidth = 2;
                    x.strokeRect(c * cs, r * cs, cs, cs);
                }
            }

            // Walls
            lvl.walls.forEach(w => {
                box(w.x, w.y, cs * 0.05, '#ff5470');
                emoji('🧱', w.x * cs + cs / 2, w.y * cs + cs / 2, cs * 0.5);
            });

            // Goal (il Server)
            box(lvl.goal.x, lvl.goal.y, cs * 0.06, '#2ee59d');
            emoji('🖥️', lvl.goal.x * cs + cs / 2, lvl.goal.y * cs + cs / 2, cs * 0.52);

            // Chips
            lvl.chips.forEach((c, i) => {
                if (collected.includes(i)) return;
                box(c.x, c.y, cs * 0.24, '#ffd23f');
                emoji('💾', c.x * cs + cs / 2, c.y * cs + cs / 2, cs * 0.34);
            });

            // Robot: cerchio azzurro con freccia arancione nella direzione di marcia
            const rx = botPos.x * cs + cs / 2;
            const ry = botPos.y * cs + cs / 2;
            x.save();
            x.translate(rx, ry);
            x.fillStyle = '#27d3ff';
            x.beginPath();
            x.arc(0, 0, cs * 0.33, 0, Math.PI * 2);
            x.fill();
            x.lineWidth = cs * 0.03; x.strokeStyle = '#0b0e18'; x.stroke();
            x.rotate(botPos.dir * Math.PI / 2);
            x.fillStyle = '#f15a22';
            x.beginPath();
            x.moveTo(0, -cs * 0.48); x.lineTo(cs * 0.13, -cs * 0.34); x.lineTo(-cs * 0.13, -cs * 0.34);
            x.closePath(); x.fill(); x.stroke();
            x.restore();
            emoji('🤖', rx, ry, cs * 0.4);

            const di = document.getElementById("dirIndicator");
            if (di) di.innerText = ['NORD ↑', 'EST ➔', 'SUD ↓', 'OVEST ←'][botPos.dir];
        }

        function addCommand(cmd) {
            if (isExecuting) return;
            program.push(cmd);
            renderProgramWorkspace();
        }

        function clearProgram() {
            program = [];
            renderProgramWorkspace();
        }

        const CMD = {
            FORWARD: ['fa-arrow-up', 'Avanza', 'c-move'], TURN_LEFT: ['fa-rotate-left', 'Ruota SX', 'c-turn'], TURN_RIGHT: ['fa-rotate-right', 'Ruota DX', 'c-turn'],
            REPEAT_2: ['fa-repeat', 'Ripeti 2x', 'c-rep'], REPEAT_3: ['fa-rotate', 'Ripeti 3x', 'c-rep'], COLLECT: ['fa-hand-holding', 'Raccogli', 'c-get']
        };
        function renderProgramWorkspace() {
            const ws = document.getElementById("programWorkspace");
            document.getElementById("commandCountText").innerText = program.length;
            if (program.length === 0) {
                ws.innerHTML = `<div class="hint">Clicca sulle istruzioni in alto per programmare il RoboBot!</div>`;
                return;
            }
            ws.innerHTML = program.map((c, i) => `<span class="blk ${CMD[c][2]}">${i + 1}. <i class="fa-solid ${CMD[c][0]}"></i> ${CMD[c][1]}</span>`).join("");
            ws.scrollTop = ws.scrollHeight;
        }

        function updateChips() {
            const el = document.getElementById("chipsStatus");
            if (el) el.innerText = `${collected.length} / ${mazeLevels[currentLevelIdx].chips.length}`;
        }

        function runProgram() {
            if (isExecuting || program.length === 0) return;
            resetBotPosition();
            isExecuting = true;
            const flat = [];
            program.forEach(c => {
                if ((c === 'REPEAT_2' || c === 'REPEAT_3') && flat.length) {
                    const last = flat[flat.length - 1];
                    for (let k = 1; k < parseInt(c.slice(-1)); k++) flat.push(last);
                } else if (c.indexOf('REPEAT') !== 0) flat.push(c);
            });
            let step = 0;
            const lvl = mazeLevels[currentLevelIdx];

            function finishRun(msg) {
                isExecuting = false;
                if (botPos.x === lvl.goal.x && botPos.y === lvl.goal.y && collected.length === lvl.chips.length) {
                    playSound('win');
                    confetti({ particleCount: 80 });
                    markDone('robot');
                    say("MISSIONE COMPLETATA! RoboBot è al Server!", 'ok');
                } else {
                    playSound('wrong');
                    say(msg || (collected.length < lvl.chips.length && botPos.x === lvl.goal.x && botPos.y === lvl.goal.y ? "Mancano dei microchip! Usa RACCOGLI sulle caselle gialle." : "RoboBot non è arrivato al Server. Riprova!"), 'ko');
                }
            }

            function stepLoop() {
                if (!document.getElementById("mazeCanvas")) { isExecuting = false; return; }
                if (step >= flat.length) { finishRun(); return; }
                const cmd = flat[step];
                if (cmd === 'FORWARD') {
                    const dirs = [{x:0,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0}];
                    const nx = botPos.x + dirs[botPos.dir].x, ny = botPos.y + dirs[botPos.dir].y;
                    if (nx < 0 || ny < 0 || nx >= lvl.size || ny >= lvl.size || lvl.walls.some(w => w.x === nx && w.y === ny)) {
                        finishRun("RoboBot ha sbattuto contro un ostacolo! Riprova.");
                        return;
                    }
                    botPos.x = nx; botPos.y = ny;
                    playSound('tick');
                } else if (cmd === 'TURN_LEFT') {
                    botPos.dir = (botPos.dir + 3) % 4;
                } else if (cmd === 'TURN_RIGHT') {
                    botPos.dir = (botPos.dir + 1) % 4;
                } else if (cmd === 'COLLECT') {
                    const i = lvl.chips.findIndex(c => c.x === botPos.x && c.y === botPos.y);
                    if (i >= 0 && !collected.includes(i)) { collected.push(i); playSound('win'); updateChips(); }
                }
                drawGrid();
                step++;
                setTimeout(stepLoop, 400);
            }
            stepLoop();
        }

        function stepDebug() {
            runProgram();
        }

        /* ----------------------------------------------------
           5. GAME 3: CYBERESCAPE ENGINE
        ---------------------------------------------------- */
        let solvedStations = { 1: false, 2: false, 3: false, 4: false };
        let stationDigits = { 1: '?', 2: '?', 3: '?', 4: '?' };
        let keypadInput = "";

        function solveStation(stNum, code, digitVal) {
            const card = document.getElementById(`stationCard${stNum}`);
            if (code === 'WRONG') {
                playSound('wrong');
                card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
                toast("❌ Risposta non corretta! Riprova.", 'ko');
                return;
            }
            playSound('win');
            solvedStations[stNum] = true;
            stationDigits[stNum] = digitVal;

            const badge = document.getElementById(`lockBadge${stNum}`);
            badge.className = "lock open";
            badge.innerHTML = `<span>🔓</span> <span>Cifra ${stNum}: ${digitVal}</span>`;

            document.getElementById(`st${stNum}Status`).innerText = "🔓 SBLOCCATO";
            document.getElementById(`st${stNum}Status`).className = "st-s open";
            card.classList.add('open');
        }

        function pressKey(num) {
            playSound('tick');
            if (keypadInput.length < 4) {
                keypadInput += num;
                updateKeypadDisplay();
            }
        }

        function clearKeypad() {
            keypadInput = "";
            updateKeypadDisplay();
        }

        function updateKeypadDisplay() {
            const disp = document.getElementById("keypadDisplay");
            let formatted = keypadInput.padEnd(4, '_').split('').join(' ');
            disp.innerText = formatted;
        }

        function submitKeypad() {
            if (keypadInput === pinDigits.join("")) {
                playSound('win');
                confetti({ particleCount: 150, spread: 90 });
                markDone('pin');
                say("EVACUAZIONE RIUSCITA! Codice PIN " + pinDigits.join("") + " Corretto! Benvenuti al Rosselli Rasetti!", 'ok');
            } else {
                playSound('wrong');
                say("PIN Errato! Risolvi tutte le 4 stazioni per scoprire le cifre.", 'ko');
                clearKeypad();
            }
        }

        
function markDone(id){if(!S.done[id]){S.done[id]={pts:BONUS,ok:0};save();hud();toast('✅ Missione completata: +'+BONUS+' punti!')}}
if(typeof confetti!=='function')window.confetti=()=>conf(40);
const ORDER=[...ACT.map(a=>a.id),'ruota','ruotaq','robot','pin'],NAVS=['play','res','ruota','game'];let CUR='';
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const shq=q=>{if(!q.o)return q;const ix=sh(q.o.map((_,i)=>i));return {...q,o:ix.map(i=>q.o[i]),a:ix.indexOf(q.a)}};
const navBar=()=>{const i=ORDER.indexOf(CUR);return '<div class="nv"><button class="btn g" data-nv="start" title="Home">🏠</button><button class="btn g" data-nv="menu">🎮 Menu</button><button class="btn g" data-nv="-1">◀ Indietro</button><span class="np">'+(i+1)+' / '+ORDER.length+'</span><button class="btn" data-nv="1">Avanti ▶</button></div>'};
function openG(id){const f={ruota:ruota,ruotaq:gameWheel,robot:gameMaze,pin:gamePin}[id];f?f():begin(id)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-nv]');if(!b)return;sClk();const v=b.dataset.nv;v==='start'?start():v==='menu'?menu():v==='next'?openG(ORDER.find(i=>!S.done[i])||ORDER[0]):openG(ORDER[(ORDER.indexOf(CUR)+ +v+ORDER.length)%ORDER.length])});
/* domande extra: [domanda, risposta giusta, [sbagliate], spiegazione, codice] */
const MORE={
quiz:[['Quale tra questi è un motore di ricerca?','Google',['Excel','Paint','Windows'],'Google serve a cercare informazioni sul Web.'],
['Che cosa fa il mouse?','Sposta il puntatore sullo schermo',['Stampa i fogli','Salva i file','Accende il PC'],'È una periferica di input: serve a dare comandi al computer.'],
['Che cos’è il Wi-Fi?','Una connessione a Internet senza cavi',['Un tipo di virus','Un programma di disegno','Una scheda video'],'Il Wi-Fi collega i dispositivi alla rete usando le onde radio.'],
['A cosa serve una password?','A proteggere il proprio account',['A rendere il PC più veloce','A cambiare lo sfondo'],'Una password lunga e segreta tiene lontani gli estranei.'],
['Che estensione ha di solito un documento di Word?','.docx',['.mp3','.png','.exe'],'.docx è il formato dei documenti Word.']],
code:[['Cosa stampa questo codice?','CiaoCiao',['Ciao Ciao','Ciao2','Errore'],'Moltiplicare un testo per 2 lo ripete due volte.','print("Ciao" * 2)'],
['Quanto vale y alla fine?','10',['5','15','y'],'y parte da 5 e viene raddoppiato: 5 × 2 = 10.','y = 5\ny = y * 2'],
['Cosa stampa questo codice?','Grande',['Piccola','Niente','Errore'],'Poiché 15 è maggiore di 10, la condizione è vera.','n = 15\nif n > 10:\n    print("Grande")'],
['Quante volte stampa “Hi”?','4',['3','5','1'],'range(4) ripete il ciclo 4 volte.','for i in range(4):\n    print("Hi")'],
['Cosa stampa questo codice?','7',['34','3 + 4','Errore'],'Python somma i due numeri: 3 + 4 = 7.','a = 3\nb = 4\nprint(a + b)']],
hack:[['Quale password è la più sicura?','T7!kR#92mQ',['mario2010','12345678','password'],'È lunga e mescola lettere, numeri e simboli.'],
['Il numero binario 11 quanto vale in decimale?','3',['2','11','4'],'1×2 + 1×1 = 3.'],
['Un sito inizia con “https”. Che significa?','La connessione è cifrata',['Il sito è gratis','Il sito è velocissimo'],'La “s” sta per “secure”: i dati viaggiano cifrati.'],
['Uno sconosciuto online ti chiede dove abiti. Che fai?','Non rispondo e lo dico a un adulto',['Gli do l’indirizzo','Gli mando una foto'],'Mai dare dati personali agli sconosciuti.'],
['Il binario 100 quanto vale in decimale?','4',['3','5','100'],'1×4 + 0×2 + 0×1 = 4.']],
hw:[['Quale periferica serve per ascoltare l’audio?','Le casse',['Lo scanner','La stampante','Il microfono'],'Casse e cuffie sono periferiche di output audio.'],
['Quale periferica trasforma un foglio in file digitale?','Lo scanner',['La stampante','Il monitor','Le casse'],'Lo scanner acquisisce immagini e documenti.'],
['Quale componente fornisce corrente a tutto il PC?','L’alimentatore',['Il mouse','Lo scanner','Il router'],'Trasforma la corrente della presa in quella adatta ai componenti.'],
['Quale dispositivo collega casa a Internet e distribuisce il Wi-Fi?','Il router',['La webcam','Il monitor','La tastiera'],'Il router smista i dati tra i dispositivi e Internet.'],
['Quale periferica serve per stampare su carta?','La stampante',['Lo scanner','Il microfono'],'La stampante è una periferica di output.']],
logic:[['Quale numero continua? 3, 6, 9, 12, …','15',['14','16','18'],'Si aggiunge 3 ogni volta.'],
['Quale numero continua? 100, 90, 80, 70, …','60',['50','65','75'],'Si sottrae 10 ogni volta.'],
['Se oggi è giovedì, che giorno sarà fra 3 giorni?','Domenica',['Sabato','Lunedì','Venerdì'],'Giovedì → venerdì → sabato → domenica.'],
['Quale parola non c’entra con le altre? Mouse, Tastiera, Monitor, Pizza','Pizza',['Mouse','Tastiera','Monitor'],'Le altre tre sono parti di un computer.'],
['Quale numero continua? 5, 10, 20, 40, …','80',['60','50','100'],'Ogni numero è il doppio del precedente.']]};
ACT.forEach(a=>(MORE[a.id]||[]).forEach(m=>a.qs.push({q:m[0],o:[m[1],...m[2]],a:0,x:m[3],k:m[4]})));
[['Internet e Web','CERCARE CON UN MOTORE DI RICERCA'],['Sicurezza','NON DIRE A NESSUNO LA PASSWORD'],['Programmazione','UN ALGORITMO RISOLVE PROBLEMI'],['Dispositivi','LO SMARTPHONE HA LA FOTOCAMERA'],['Reti','IL WIFI COLLEGA I DISPOSITIVI'],['Videogiochi','IL GIOCO HA TANTI LIVELLI'],['Intelligenza Artificiale','L ASSISTENTE VOCALE CAPISCE LE DOMANDE']].forEach(f=>FR.push(f));
/* ruota dei quiz: [categoria, domanda, giusta, [sbagliate]] */
[['HARDWARE','Come si chiama il “cervello” del computer?','CPU',['Mouse','Monitor','Router']],
['HARDWARE','Quale componente archivia i file anche a PC spento?','SSD',['RAM','Casse']],
['WEB & INTERNET','Cosa significa scaricare un file (download)?','Copiarlo da Internet al proprio dispositivo',['Cancellarlo','Stamparlo']],
['WEB & INTERNET','Quale di questi è un social network?','Instagram',['Excel','Photoshop','Linux']],
['CYBER SAFETY','Cos’è il phishing?','Un tentativo di truffa per rubare i tuoi dati',['Un videogioco','Un antivirus','Un cavo di rete']],
['CYBER SAFETY','Cosa fai se ricevi un messaggio offensivo online?','Lo segnalo e ne parlo con un adulto',['Rispondo con insulti','Non dico nulla a nessuno']],
['CYBER SAFETY','Puoi pubblicare la foto di un amico senza il suo permesso?','No, serve il suo consenso',['Sì, sempre','Solo se è una foto bella']],
['CODING','Quale di questi è un linguaggio di programmazione?','Python',['Word','Paint','Chrome']],
['CODING','Cos’è un bug?','Un errore nel programma',['Un tasto della tastiera','Un tipo di cavo']],
['CODING','Cosa fa un ciclo (loop) in un programma?','Ripete delle istruzioni',['Spegne il computer','Cancella il codice','Cambia lo schermo']],
['SCORCIATOIE','Quale scorciatoia annulla l’ultima azione?','Ctrl + Z',['Ctrl + C','Ctrl + V']],
['SCORCIATOIE','Quale scorciatoia salva un documento?','Ctrl + S',['Ctrl + P','Ctrl + X','Ctrl + A']],
['BINARIO','Quali cifre usa il sistema binario?','0 e 1',['Da 0 a 9','A e B']],
['INTELLIGENZA ARTIFICIALE','Quale di questi usa l’intelligenza artificiale?','Un assistente vocale che capisce le domande',['Un righello','Una matita','Una gomma']],
['SOFTWARE','Quale di questi è un sistema operativo?','Windows',['Google','Word','Instagram']],
['STORIA','Chi è considerata la prima programmatrice della storia?','Ada Lovelace',['Marie Curie','Rita Levi-Montalcini']]].forEach(m=>techQuestions.push({cat:m[0],text:m[1],options:[m[2],...m[3]],correct:0}));
let wBag=[];
function nextWheelQ(){if(!wBag.length)wBag=sh(techQuestions.map((_,i)=>i));const q=techQuestions[wBag.pop()],ix=sh(q.options.map((_,i)=>i));return {...q,options:ix.map(i=>q.options[i]),correct:ix.indexOf(q.correct)}}
/* stazioni del PIN: ogni partita ne pesca una a caso per stazione e il PIN cambia */
const PS={1:['Hardware',[['Qual è il “cervello” del computer che elabora i calcoli?','La CPU',['La tastiera','Il monitor']],['Quale memoria si svuota quando spegni il PC?','La RAM',['L’SSD','Lo scanner']],['Quale periferica serve per digitare?','La tastiera',['Lo schermo','Le casse']],['Dove si collegano tutti i componenti del PC?','Alla scheda madre',['Alla webcam','Al mouse']]]],
2:['Scorciatoie',[['Dopo aver copiato con Ctrl + C, come si INCOLLA?','Ctrl + V',['Ctrl + Z','Ctrl + X']],['Quale scorciatoia annulla l’ultima azione?','Ctrl + Z',['Ctrl + S','Ctrl + P']],['Quale scorciatoia seleziona TUTTO il testo?','Ctrl + A',['Ctrl + Q','Ctrl + T']]]],
3:['Web Safety',[['Ricevi un’email: “Hai vinto uno smartphone! Clicca qui!”. Cosa fai?','La cancello: è una truffa',['Clicco subito','La inoltro a tutti']],['Quale password è più sicura?','Qx9!mT4#vL',['ciao123','il mio nome']],['Un conoscente online ti chiede la password. Cosa fai?','Non la do a nessuno',['La do se è gentile','La scrivo in chat']]]],
4:['Logica Robot',[['Un robot deve fare un quadrato. Quante volte ripete “Avanti + Gira a destra”?','4 volte',['2 volte','3 volte']],['Un algoritmo è…','Una sequenza di istruzioni per risolvere un problema',['Un componente del PC','Un virus']],['Quale istruzione serve a ripetere più volte la stessa azione?','Un ciclo',['Un mouse','Un file']],['Il robot trova un muro davanti: cosa serve?','Una condizione: se c’è un muro, gira',['Più batteria','Un altro robot']]]]};
let pinDigits=[0,0,0,0];
function renderStations(){pinDigits=[0,0,0,0].map(()=>Math.random()*10|0);for(let n=1;n<=4;n++){const [t,pool]=PS[n],q=pool[Math.random()*pool.length|0],o=sh([[q[1],1],...q[2].map(w=>[w,0])]);document.getElementById('stationCard'+n).innerHTML=`<div class="gh"><span class="st-t">Stazione ${n}: ${t}</span><span id="st${n}Status" class="st-s">🔒 BLOCCATO</span></div><p>${esc(q[0])}</p><div class="opts one">${o.map(x=>`<button onclick="solveStation(${n},'${x[1]?'OK':'WRONG'}',${x[1]?pinDigits[n-1]:0})" class="opt">${esc(x[0])}</button>`).join('')}</div>`}}
function gameShell(id,html,init){CUR=id;go(html,'game');init&&init()}
function gameWheel(){gameShell('ruotaq',V_Wheel,()=>{wheelCanvas=document.getElementById("wheelCanvas");wheelCtx=wheelCanvas.getContext("2d");currentAngle=0;isSpinning=false;teamTurn='A';scoreA=0;scoreB=0;REDRAW=drawWheel;drawWheel()})}
function gameMaze(){gameShell('robot',V_Maze,()=>{mazeCanvas=document.getElementById("mazeCanvas");mazeCtx=mazeCanvas.getContext("2d");isExecuting=false;REDRAW=drawGrid;loadLevel(0)})}
function gamePin(){gameShell('pin',V_Pin,()=>{solvedStations={1:false,2:false,3:false,4:false};stationDigits={1:'?',2:'?',3:'?',4:'?'};keypadInput="";renderStations()})}
$('#hh').onclick=()=>{sClk();start()};$('#hm').onclick=()=>{sClk();menu()};
addEventListener('keydown',e=>{if(!$('#dlg').classList.contains('hidden')){if(e.key==='Escape')unsay();return}if(e.target.matches('input,select,textarea')||e.ctrlKey||e.metaKey||e.altKey)return;const s=document.body.dataset.s;if(!NAVS.includes(s))return;if(e.key==='Escape')menu();else if(e.key==='ArrowRight'&&s!=='ruota')openG(ORDER[(ORDER.indexOf(CUR)+1)%ORDER.length]);else if(e.key==='ArrowLeft'&&s!=='ruota')openG(ORDER[(ORDER.indexOf(CUR)+ORDER.length-1)%ORDER.length])});
/* tema: 'dark' (predefinito) oppure 'light'; la scelta resta salvata nel browser */
function setTheme(t,sv){t=t==='light'?'light':'dark';document.documentElement.dataset.theme=t;$('#tb').setAttribute('aria-checked',t==='dark');$('#tb').title=t==='dark'?'Passa al tema chiaro':'Passa al tema scuro';document.querySelector('meta[name=theme-color]').content=t==='dark'?'#0b0e18':'#eef2fb';if(sv)try{localStorage.setItem('rr_theme',t)}catch(_){}}
$('#tb').onclick=()=>{sClk();setTheme(document.documentElement.dataset.theme==='light'?'dark':'light',1);cx.clearRect(0,0,cv.width,cv.height);REDRAW&&REDRAW()};
setTheme(document.documentElement.dataset.theme);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{fitWord();REDRAW&&REDRAW()});
/* ===== SFONDO ANIMATO ===== */
const cv=$('#bg'),cx=cv.getContext('2d');let dr=[];
function rs(){cv.width=innerWidth;cv.height=innerHeight;dr=Array.from({length:Math.ceil(cv.width/20)},()=>Math.random()*40)}
addEventListener('resize',rs);rs();
setInterval(()=>{if(document.hidden||document.body.dataset.s==='game'||calm())return;
 cx.fillStyle=cssv('--fade');cx.fillRect(0,0,cv.width,cv.height);cx.font='16px monospace';
 dr.forEach((y,i)=>{cx.fillStyle=i%3?'rgba(39,211,255,.55)':'rgba(241,90,34,.65)';cx.fillText(Math.random()<.5?'0':'1',i*20,y*20);dr[i]=y*20>cv.height&&Math.random()>.97?0:y+1})},70);
start();

