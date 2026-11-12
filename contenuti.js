/* ==========================================================================
   CONTENUTI EXTRA (domande, stazioni PIN, esercizi CTF)
   Caricato prima di app.js. Modifica qui per aggiungere o correggere i testi.
   Formati:
   - EXTRA e EXTRA_W : [domanda, risposta giusta, [sbagliate], spiegazione, codice(opz.)]
   - PIN_ST         : stazioni del Cyber Escape (se manca "w" la risposta si scrive)
   - CTF            : esercizi del CTF Lab (la risposta si scrive, maiuscole indifferenti)
   ========================================================================== */

/* domande extra per le 5 missioni a quiz: ogni partita ne pesca 5 a caso */
const EXTRA={
quiz:[['Quale di questi è un browser?','Firefox',['Windows','Excel','Paint'],'Un browser serve per navigare sul Web: Firefox, Chrome, Edge, Safari.'],
['Che cos’è il “cloud”?','Computer in Internet dove salvare i file',['Una nuvola vera','Un tipo di mouse','Un cavo speciale'],'Il cloud (es. Google Drive) conserva i tuoi file su server collegati a Internet.'],
['Che cos’è un “hashtag”?','Una parola con # che raggruppa i post',['Un virus','Un tasto del PC','Una password'],'L’hashtag (#) permette di trovare tutti i post sullo stesso argomento.'],
['Cosa succede se non aggiorni mai il telefono?','Restano falle di sicurezza aperte',['Va più veloce','Si scarica meno','Nulla'],'Gli aggiornamenti correggono errori e buchi di sicurezza.'],
['Quale unità è la più grande?','Gigabyte',['Kilobyte','Megabyte','Byte'],'Byte < Kilobyte < Megabyte < Gigabyte.'],
['Che cos’è un “bug”?','Un errore in un programma',['Un insetto vero','Una password','Una periferica'],'Il termine bug (insetto) indica un errore nel software.'],
['Cosa significa “Wi-Fi gratuito aperto”?','Una rete senza password: meglio non inserire dati personali',['Internet più veloce','Una rete sicurissima','Una rete solo per scuola'],'Sulle reti aperte altri possono spiare ciò che invii.'],
['Quale di questi NON è un sistema operativo?','Photoshop',['Android','Windows','macOS'],'Photoshop è un programma per modificare le immagini.']],
code:[['Cosa stampa questo codice?','Ciao Mario',['Mario Ciao','Ciao nome','Errore'],'Il valore di nome viene stampato dopo “Ciao”.','nome = "Mario"\nprint("Ciao", nome)'],
['Quanto vale z alla fine?','9',['6','3','12'],'3 × 3 = 9.','z = 3\nz = z * z'],
['Cosa stampa questo codice?','Piccolo',['Grande','Niente','Errore'],'5 non è maggiore di 10, quindi si esegue la parte “else”.','n = 5\nif n > 10:\n    print("Grande")\nelse:\n    print("Piccolo")'],
['Quante volte stampa “Go”?','5',['4','6','1'],'range(5) ripete il ciclo 5 volte.','for i in range(5):\n    print("Go")'],
['Cosa stampa questo codice?','6',['24','2 * 3','Errore'],'In Python * significa moltiplicazione: 2 * 3 = 6.','print(2 * 3)'],
['Trova l’errore!','Manca il : dopo la condizione',['Manca print','x non può valere 3','Manca ==','Nessun errore'],'Dopo un “if” serve sempre il simbolo : (due punti).','x = 3\nif x > 1\n    print("Ok")'],
['Cosa stampa questo ciclo?','0 1 2 3',['1 2 3 4','0 1 2','3 3 3 3'],'range(4) parte da 0 e arriva a 3.','for i in range(4):\n    print(i)'],
['Cosa stampa questo codice?','Ciao!',['Ciao + !','Errore','!Ciao'],'Il + unisce due testi uno dopo l’altro.','print("Ciao" + "!")']],
hack:[['Cesare +1: “NBSJP”. Qual è il nome vero?','MARIO',['NARIO','LAURA','MAGIA'],'N→M, B→A, S→R, J→I, P→O: MARIO.'],
['Il numero binario 110 quanto vale in decimale?','6',['5','7','110'],'1×4 + 1×2 + 0×1 = 6.'],
['Quale password NON devi mai usare?','12345678',['Qx9!mT4#vL','Tr0v4-L’4ns1a!','b9$Kd2#pW'],'Le password banali si scoprono in un secondo.'],
['Un amico ti chiede la password del tuo account “per giocare”. Che fai?','Non la do a nessuno, nemmeno agli amici',['La do se è un amico fidato','La scrivo in chat','La do se mi chiede “per favore”'],'La password è personale: nessuno ha bisogno di conoscerla.'],
['Che cos’è la verifica in due passaggi?','Una seconda conferma (es. codice sul telefono) per entrare',['Una password doppia','Un antivirus','Un tipo di virus'],'Anche se rubano la password, senza il secondo codice non entrano.'],
['Il binario 1000 quanto vale in decimale?','8',['4','10','1000'],'È 1×8 e tre zeri: 8.'],
['Un SMS dice: “La tua banca: conferma subito i dati su questo link”. Che fai?','Non clicco: chiamo la banca ai numeri ufficiali',['Clicco e inserisco i dati','Rispondo all’SMS','Lo inoltro agli amici'],'Le banche non chiedono mai dati o password tramite link.']],
hw:[['Quale componente salva i dati anche a PC spento?','L’SSD',['La RAM','La CPU','Il mouse'],'La RAM si svuota, l’SSD no.'],
['Quale periferica serve per parlare in una videochiamata?','Il microfono',['Lo scanner','La stampante','Il router'],'Il microfono è una periferica di input audio.'],
['Quale dispositivo mostra le immagini?','Il monitor',['La tastiera','Il mouse','Lo scanner'],'Il monitor è una periferica di output.'],
['Quale periferica è sia di input sia di output?','Lo schermo touch',['La stampante','Il mouse','La tastiera'],'Lo schermo touch mostra le immagini e riceve i tuoi tocchi.'],
['Quale componente si scalda di più e ha bisogno di una ventola?','La CPU',['Il mouse','La tastiera','Il cavo HDMI'],'Il processore lavora tantissimo e va raffreddato.'],
['A cosa serve una chiavetta USB?','A trasportare file da un computer all’altro',['A stampare','A collegarsi al Wi-Fi','A raffreddare il PC'],'È una piccola memoria portatile.'],
['Cosa fa la scheda di rete?','Collega il PC a una rete o a Internet',['Disegna la grafica','Alimenta il PC','Stampa i fogli'],'Senza scheda di rete (cavo o Wi-Fi) non ci si collega a Internet.'],
['Quale unità si usa per misurare la velocità di un processore?','Gigahertz (GHz)',['Kilogrammi','Litri','Volt'],'Più GHz in genere significano più operazioni al secondo.']],
logic:[['Quale numero continua? 10, 20, 30, 40, …','50',['45','60','100'],'Si aggiunge 10 ogni volta.'],
['Quale numero continua? 1, 3, 5, 7, …','9',['8','10','11'],'Sono i numeri dispari: si aggiunge 2.'],
['Quale lettera continua? A, C, E, G, …','I',['H','J','F'],'Si salta sempre una lettera: A, (B), C, (D), E, (F), G, (H), I.'],
['Un orologio segna le 3:00. Quanti gradi ha l’angolo fra le lancette?','90°',['30°','60°','180°'],'Alle 3 le lancette sono perpendicolari: 90°.'],
['Chi è più alto? Anna è più alta di Bea, Bea più alta di Carla.','Anna',['Bea','Carla','Non si sa'],'Anna > Bea > Carla, quindi Anna è la più alta.'],
['Quale numero continua? 2, 6, 18, 54, …','162',['108','72','216'],'Si moltiplica per 3 ogni volta: 54 × 3 = 162.'],
['Quale parola non c’entra? Python, Java, Scratch, Pomodoro','Pomodoro',['Python','Java','Scratch'],'Le altre tre sono linguaggi di programmazione.']]};

/* domande extra per la Ruota dei quiz: [categoria, domanda, giusta, [sbagliate]] */
const EXTRA_W=[
['HARDWARE','Quale periferica serve per spostare il puntatore?','Il mouse',['Lo scanner','Le casse']],
['HARDWARE','Quale componente raffredda il processore?','La ventola',['Il mouse','Il monitor']],
['WEB & INTERNET','Come si chiama l’indirizzo di un sito (es. www.scuola.it)?','URL',['CPU','Bit']],
['WEB & INTERNET','Cosa significa “https” all’inizio di un indirizzo?','Il sito usa una connessione cifrata',['Il sito è gratis','Il sito è velocissimo']],
['CYBER SAFETY','Cosa devi fare se un amico ti chiede la password?','Non dargliela',['Dargliela se è amico','Scriverla in chat']],
['CODING','Quale simbolo si usa per confrontare due valori in Python?','==',['=','+']],
['CODING','Cosa significa “debug”?','Cercare e correggere gli errori',['Cancellare un programma','Spegnere il PC']],
['BINARIO','Quanto vale il binario 10 in decimale?','2',['10','1']],
['BINARIO','Quanti bit ci sono in un byte?','8',['4','16']],
['SCORCIATOIE','Quale scorciatoia incolla un testo?','Ctrl + V',['Ctrl + X','Ctrl + Z']],
['SCORCIATOIE','Quale scorciatoia seleziona tutto?','Ctrl + A',['Ctrl + S','Ctrl + P']],
['SOFTWARE','Quale di questi è un programma per scrivere testi?','Word',['Chrome','Linux']],
['INTELLIGENZA ARTIFICIALE','Cosa fa un assistente vocale?','Capisce e risponde a comandi a voce',['Stampa i fogli','Raffredda il PC']],
['STORIA','Quale azienda ha creato il sistema operativo Windows?','Microsoft',['Apple','Google']]];

/* Cyber Escape: ogni partita pesca 6 di queste stazioni e per ognuna una prova a caso.
   Prova a scelta: {q, a:giusta, w:[sbagliate], k:codice(opz.)}  ·  a scrittura: {q, a:RISPOSTA, k:codice(opz.)} */
const PIN_ST=[
{t:'Hardware',p:[
 {q:'Qual è il “cervello” del computer che elabora i calcoli?',a:'La CPU',w:['La tastiera','Il monitor']},
 {q:'Quale memoria si svuota quando spegni il PC?',a:'La RAM',w:['L’SSD','Lo scanner']},
 {q:'Dove si collegano tutti i componenti del PC?',a:'Alla scheda madre',w:['Alla webcam','Al mouse']},
 {q:'Quale componente disegna la grafica dei videogiochi?',a:'La scheda video (GPU)',w:['Il mouse','L’alimentatore']},
 {q:'Come si chiama il “cervello” del PC? Scrivi la sigla di 3 lettere.',a:'CPU'}]},
{t:'Scorciatoie',p:[
 {q:'Dopo aver copiato con Ctrl + C, come si INCOLLA?',a:'Ctrl + V',w:['Ctrl + Z','Ctrl + X']},
 {q:'Quale scorciatoia annulla l’ultima azione?',a:'Ctrl + Z',w:['Ctrl + S','Ctrl + P']},
 {q:'Quale scorciatoia seleziona TUTTO il testo?',a:'Ctrl + A',w:['Ctrl + Q','Ctrl + T']},
 {q:'Quale scorciatoia salva il documento?',a:'Ctrl + S',w:['Ctrl + P','Ctrl + X']}]},
{t:'Web Safety',p:[
 {q:'Ricevi un’email: “Hai vinto uno smartphone! Clicca qui!”. Cosa fai?',a:'La cancello: è una truffa',w:['Clicco subito','La inoltro a tutti']},
 {q:'Quale password è più sicura?',a:'Qx9!mT4#vL',w:['ciao123','il mio nome']},
 {q:'Un conoscente online ti chiede la password. Cosa fai?',a:'Non la do a nessuno',w:['La do se è gentile','La scrivo in chat']},
 {q:'Come si chiama una truffa che cerca di rubarti i dati con email o SMS finti?',a:'PHISHING'}]},
{t:'Logica Robot',p:[
 {q:'Un robot deve fare un quadrato. Quante volte ripete “Avanti + Gira a destra”?',a:'4 volte',w:['2 volte','3 volte']},
 {q:'Un algoritmo è…',a:'Una sequenza di istruzioni per risolvere un problema',w:['Un componente del PC','Un virus']},
 {q:'Quale istruzione serve a ripetere più volte la stessa azione?',a:'Un ciclo',w:['Un mouse','Un file']},
 {q:'Il robot trova un muro davanti: cosa serve?',a:'Una condizione: se c’è un muro, gira',w:['Più batteria','Un altro robot']}]},
{t:'Cifrario di Cesare',p:[
 {q:'Ogni lettera è spostata di +1: “DJBP”. Scrivi la parola vera.',a:'CIAO'},
 {q:'Ogni lettera è spostata di +1: “NBSF”. Scrivi la parola vera.',a:'MARE'},
 {q:'Ogni lettera è spostata di +1: “DBTB”. Scrivi la parola vera.',a:'CASA'}]},
{t:'Binario',p:[
 {q:'Quanto vale il binario 11 in decimale? Scrivi il numero.',a:'3'},
 {q:'Quanto vale il binario 100 in decimale? Scrivi il numero.',a:'4'},
 {q:'Quali cifre usa il sistema binario?',a:'Solo 0 e 1',w:['Da 0 a 9','Solo A e B']},
 {q:'Quanto vale il binario 101 in decimale? Scrivi il numero.',a:'5'}]},
{t:'Trova l’errore',p:[
 {q:'Cosa manca in questo codice per funzionare?',k:'if x > 3\n    print("Ok")',a:'I due punti : dopo la condizione',w:['La parola “stop”','Un numero in più']},
 {q:'Qual è l’errore?',k:'print("Ciao)',a:'Mancano le virgolette finali',w:['Manca il numero','Manca un for']},
 {q:'Cosa stampa questo codice? Scrivi il numero.',k:'a = 2\nb = 3\nprint(a + b)',a:'5'}]},
{t:'Reti e Internet',p:[
 {q:'Quale dispositivo distribuisce Internet in casa?',a:'Il router',w:['La stampante','Il microfono']},
 {q:'Come si chiama l’indirizzo di un sito web? (es. www.scuola.it) Scrivi la sigla di 3 lettere.',a:'URL'},
 {q:'Cosa significa Wi-Fi?',a:'Connessione senza cavi',w:['Un tipo di virus','Un programma di grafica']}]}];

/* CTF Lab: 5 esercizi basilari. "a" è la risposta (si accetta anche con il formato RR{...}) */
const CTF=[
{t:'Messaggio allo specchio',q:'Un hacker ha scritto un messaggio al contrario. Leggilo da destra a sinistra: scrivi la parola che si nasconde tra le parentesi.',k:'}OAIC{RR',h:'Rovescia l’ordine delle lettere: l’ultima diventa la prima.',a:'CIAO'},
{t:'Cesare +1',q:'Ogni lettera è spostata in avanti di 1 nell’alfabeto (A→B, B→C…). Scopri la parola vera.',k:'QSPHSBNNB',h:'Per decifrare, fai un passo INDIETRO: B diventa A, C diventa B…',a:'PROGRAMMA'},
{t:'Parla come un computer',q:'Questo messaggio è in binario. Usa la tabella per trasformarlo in lettere.',k:'01010010 01000001 01001101\n\nA = 01000001\nM = 01001101\nR = 01010010',h:'Ogni gruppo di 8 cifre è una lettera: confrontalo con la tabella.',a:'RAM'},
{t:'Testo invisibile',q:'In questa scheda c’è una scritta nascosta (invisibile). Premi Ctrl + A per selezionare tutto e cerca cosa si illumina: è la risposta.',ghost:'RR{EVIDENZIA}',h:'Se non la trovi: tasto destro → Ispeziona, oppure cerca la riga con la classe “ghost”.',a:'EVIDENZIA'},
{t:'Chi è il truffatore?',q:'Due indirizzi web: quale è FALSO? Scrivi 1 oppure 2.',k:'1) www.poste.it\n2) www.poste.it.verifica-conto.ru',h:'Guarda bene la parte che viene subito prima del .it o .ru finale: è il vero proprietario del sito.',a:'2'}];
