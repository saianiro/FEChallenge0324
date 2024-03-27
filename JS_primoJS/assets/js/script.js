// debug iniziale: se questo messaggio non appare, js non è stato collegato
// alert("ciao!");

// VARIABILE in js
// spazio nella memoria volatile (RAM) in cui vengono memorizzati dei DATI
// assegnando loro un NOME (identificativo):

// DICHIARAZIONE della variabile: keyword let
let addendo1 = 5;
let addendo2 = 3;
let operatore = "somma";
let risultato = addendo1 + addendo2;

// DICHIARAZIONE di una COSTANTE: keyword const
const piGreco = 3.14;

console.log("il valore di addendo1 è " + addendo1);
addendo1 = addendo1 + 4;
console.log("il valore di addendo1 è " + addendo1);
console.log("il valore di piGreco è " + piGreco);
// non è possibile modificare il vale di una costante!
// la riga successiva genera un errore in console
// piGreco = piGreco + 4;
// console.log("il valore di piGreco è " + piGreco);

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

// PARAMETRI - ARGOMENTI
// la funzione viene dichiarata con 1 ARGOMENTO
function visualizzaNumero (arg) {
	alert("Il numero scelto è " + arg);
	console.log("Il numero scelto è " + arg);
	// la funzione viene invocata con 2 PARAMETRi
	somma2Numeri(arg, arg + 3);
}

// la funzione viene dichiarata con 2 ARGOMENTI
function somma2Numeri(arg1, arg2) {
	let result = arg1 + arg2;
	console.log("il risultato è " + result);
}



document.querySelector("#num1").addEventListener("click", function(){
	// la funzione viene invocata con 1 PARAMETRO
	visualizzaNumero(1);
})
document.querySelector("#num2").addEventListener("click", function(){
	visualizzaNumero(2);
})
document.querySelector("#num3").addEventListener("click", function(){
	visualizzaNumero(3);
})


let bgc;

document.querySelector("#red").addEventListener("click", function (e){
	console.log(e);
	console.log(e.target.attributes.bgcolor.value);
	bgc = e.target.attributes.bgcolor.value;
	chBackColor(bgc);
	changeCSS("rosso");
})
document.querySelector("#blue").addEventListener("click", function (e){
	console.log(e);
	console.log(e.target.attributes.bgcolor.value);
	bgc = e.target.attributes.bgcolor.value;
	chBackColor(bgc);
	changeCSS("blu");
})
document.querySelector("#yellow").addEventListener("click", function (e){
	console.log(e);
	console.log(e.target.attributes.bgcolor.value);
	bgc = e.target.attributes.bgcolor.value;
	chBackColor(bgc);
	changeCSS("giallo");
})
document.querySelector("#green").addEventListener("click", function (e){
	console.log(e);
	console.log(e.target.attributes.bgcolor.value);
	bgc = e.target.attributes.bgcolor.value;
	chBackColor(bgc);
	changeCSS("verde");
})

function chBackColor(color) {
	//document.body.style.background = color;
	document.querySelector("#target").style.background = color;
}
 function changeCSS(newClass) {
	document.querySelector("#target").classList.remove("rosso");
	document.querySelector("#target").classList.remove("blu");
	document.querySelector("#target").classList.remove("verde");
	document.querySelector("#target").classList.remove("giallo");
	document.querySelector("#target").classList.add(newClass);
}



































