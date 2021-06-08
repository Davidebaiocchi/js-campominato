// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
// sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore 
// inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.


// creo un array per poi aggiungere i 16 numeri casuali.
var randomNumbers = [];


// creo i 16 numeri random e li pusho nell array
while (randomNumbers.length < 16) {
    var numeroCasuale = Math.floor(Math.random() * 100 )+1;

    if (!randomNumbers.includes(numeroCasuale)) {
        randomNumbers.push(numeroCasuale);
    }  
}
console.log(randomNumbers);

// creo un array per contenere i numeri dell'utente
var arrayUserNumbers = [];
console.log(arrayUserNumbers);

// chiedo all utente un numero da 1 a 100 per 84 volte
while (arrayUserNumbers.length < 84) {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
    if(userNumber <= 100 && userNumber >= 1){
        if(!randomNumbers.includes(userNumber)) {

            if (!arrayUserNumbers.includes(userNumber)) {
                arrayUserNumbers.push(userNumber);
            } else {
                alert('Numero precendentemente utilizzato!')
            }
        } else {
            alert('Hai Perso!')
            break;
        }
    } else {
        alert('Test de cas solo i numeri da 1 a 100');
    }
   
}

// dichiarare punteggio
alert('Il tuo punteggio è: ' + arrayUserNumbers.length);