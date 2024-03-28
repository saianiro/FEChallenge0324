// l'esecuzione del codice parte dopo il click sul bottone calcola
document.querySelector("#calcola").addEventListener("click", function(e) {
	// recuperare il dato inserito nell'input del cognome
	let inSurname = document.querySelector("#surname").value;
	let inName = document.querySelector("#name").value;
	console.log(inSurname);
	console.log(inName);

	// gestire caratteri concessi
	// spazi e apostrofi vanno RIMOSSI
	// trim rimuove spazi all'inizio e alla fine della stringa
	inSurname = inSurname.trim();
	inName = inName.trim();
	console.log(inSurname);
	console.log(inName);

	// trasformiamo tutto in maiuscolo


	// lettere accentate e ç vanno SOSTITUITI

})








