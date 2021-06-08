// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
// sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore 
// inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.


// creo un array per poi aggiungere i 16 numeri casuali.
var randomNumber = [];
console.log(randomNumber);


// creo i 16 numeri random e li pusho nell array
while (randomNumber.length < 16) {
    var numeroCasuale = Math.floor(Math.random() * 100);

    if (randomNumber.includes(numeroCasuale) == false) {
        randomNumber.push(numeroCasuale);
    }  
}

// creo un array per contenere i numeri dell'utente
var arrayUserNumbers = [];
console.log(userNumber);

// chiedo all utente un numero da 1 a 100 per 84 volte
while (arrayUserNumbers.length < 84 && ) {
    var Usernumber
}