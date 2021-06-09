// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
// sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore 
// inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.

document.getElementById("hidden").hidden=true;

// scegli difficoltà
var x = 0;
var difficoltà = prompt('Scegli difficoltà tra: 0 (facile), 1 (medio), 2 (difficile)')
if(difficoltà == '0') {
    x = 100;
} else if (difficoltà == '1') {
    x = 80;
} else if (difficoltà == '2') {
    x = 50;
}

// creo un array per poi aggiungere i 16 numeri casuali.
var randomNumbers = [];

// creo i 16 numeri random e li pusho nell array
while (randomNumbers.length < 16) {
    var numeroCasuale = Math.floor(Math.random() * x )+1;

    if (!randomNumbers.includes(numeroCasuale)) {
        randomNumbers.push(numeroCasuale);
    }  
}
console.log(randomNumbers);

// creo un array per contenere i numeri dell'utente
var arrayUserNumbers = [];
console.log(arrayUserNumbers);



// chiedo all utente un numero da 1 a 100 per 84 volte
while (arrayUserNumbers.length < (x - 16)) {
    var userNumber = parseInt(prompt('Inserisci un numero da 1 a ' + x));

    if(userNumber <= x && userNumber >= 1){
        if(!randomNumbers.includes(userNumber)) {

            if (!arrayUserNumbers.includes(userNumber)) {
                arrayUserNumbers.push(userNumber);
            } else {
                alert('Numero precendentemente utilizzato!');
            }
        } else {
            alert('Hai Perso!')
            break;
        }
    } else {
        alert('Solo i numeri da 1 a ' + x);
    }
   
}

// dichiarare punteggio
document.getElementById("hidden").hidden=false;
document.getElementById('punteggio').innerHTML =arrayUserNumbers.length;
