// debug iniziale: se questo messaggio non appare, js non è stato collegato
// alert("ciao!");

// VARIABILE in js
// spazio nella memoria volatile (RAM) in cui vengono memorizzati dei DATI
// assegnando loro un NOME (identificativo):

addendo1 = 5;
addendo2 = 3;
operatore = "somma";

// FUNZIONE in js 
// blocco di istruzioni che vengono eseguite quando la funzione viene INVOCATA
// tramite il suo NOME (identificativo).
// una funzione ha una SINGOLA DEFINIZIONE
// una funzione può avere NUMEROSE INVOCAZIONI

// definizione della funzione: keyword function

function scriviParagrafo() {
	// innerText è un METODO che permette di generare dinamicamente del TESTO
	document.querySelector("#par").innerText = "testo generato dinamicamente da innerText";
}
function scriviHTML() {
	// innerHTML è un METODO che permette di generare dinamicamente codice HTML
	document.querySelector("#div").innerHTML = "<p class='text'>testo generato dinamicamente da <strong>innerHTML</strong> con l'aggiunta di codice HTML</p>";
}

// invocazione della funzione - ovvero il suo utilizzo

document.querySelector("#pippo").addEventListener("click", function (e) {
	// sequenza di istruzioni da svolgere quando si verifica il click
	console.log("ciao belli, sono Pippo");
	alert("hai cliccato il bottone giusto");
	scriviParagrafo();
})

document.querySelector("#pluto").addEventListener("click", function (e) {
	// sequenza di istruzioni da svolgere quando si verifica il click
	console.log("ciao belli, sono Pluto");
	alert("hai cliccato il bottone giusto");
	scriviHTML();
})


document.querySelector("#red").addEventListener("click", function (e){
	console.log(e);
	console.log(e.target.attributes.bgcolor.value);
	bgc = e.target.attributes.bgcolor.value;
	chBackColor(bgc);
})
document.querySelector("#blue").addEventListener("click", function (e){
	console.log(e);
	console.log(e.target.attributes.bgcolor.value);
	bgc = e.target.attributes.bgcolor.value;
	chBackColor(bgc);
})
document.querySelector("#yellow").addEventListener("click", function (e){
	console.log(e);
	console.log(e.target.attributes.bgcolor.value);
	bgc = e.target.attributes.bgcolor.value;
	chBackColor(bgc);
})
document.querySelector("#green").addEventListener("click", function (e){
	console.log(e);
	console.log(e.target.attributes.bgcolor.value);
	bgc = e.target.attributes.bgcolor.value;
	chBackColor(bgc);
})

function chBackColor(color) {
	document.querySelector("#target").style.background = color;
}



































