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

// querySelectorAll

let lista = document.querySelectorAll(".item");
// lista di elemento html
console.log(lista);
// faccio 2 array di 3 elementi ciascuno
let cars = ["Lamborghini", "Maserati", "Ferrari"];
let fruits = ["Apple", "Lemon", "Strawberry"];
// l'elemento di indice 0 è il primo elemento dell'array
console.log("Il primo elemento di cars è " + cars[0]);
console.log("Il primo elemento di fruits è " + fruits[0]);

let lista2 = document.querySelectorAll(".parent");
console.log(lista2);

lista[0].innerText = "ci provo ma non sono convinta...";
lista[2].innerText = " e invece funziona";

// visualizzo il log di un elemento che NON c'è nell'array
console.log(fruits[3]);

// ciclo FOR - sintassi classica
let numbers = [12 , 40, 3, 52, 1, 9, 17, 38];
// 3 criteri : inizio, fine, incremento (index = index + 1 -> index ++)
// index = index + 2 -> index += 2
for(let index = 0; index < numbers.length; index++) {
	// SE nessuno risponde al citofono, passo alla casa successiva
	// IF controllore di flusso
	// CONDIZIONE -> SE è VERA
	if(numbers[index] > 17) {
		// istruzioni da svolgere SE la CONDIZIONE è VERA
		console.log(numbers[index] + " è MAGGIORENNE");
	}
	else {
		// istruzioni da svolgere SE la CONDIZIONE è FALSA
		console.log(numbers[index] + " è minorenne");
	}

	//let incremento = numbers[index] += 2;
	//console.log(incremento);
}

// il ciclo FOR è flessibile! 
// non ha bisogno (per forza) di un array per funzionare!
for(let index = 2; index < 11; index+=2){
	console.log(index);
}

// ciclo FOREACH - solo per gli array!
numbers.forEach(function(el){
	if(el > 17){
		console.log(el + " è MAGGIORENNE");
	}
	else {
		console.log(el + " è minorenne");
	}
})






























