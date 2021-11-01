
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


/*Dichiaro la variabile della scelta Pari o dispari dell'utente*/
let oddEven;

/*Farà comparire Pari o dispari almeno una volta e lo farà ricomparire finchè l'input dell'utente 
non sarà diverso da "pari" o dispari(dovranno essere entrambe vere), se anche solo una è falsa 
si spezza il loop*/
do{ oddEven = prompt("Pari o dispari?") } 
while ( oddEven.toLowerCase() !== "pari" && oddEven.toLowerCase() !=="dispari");

/*Numero che inserirà l'utente, stesse condizioni di prima (entrambe devono essere vere per far ricomparire
il messaggio*/
let numeroUtente;
do{numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"))}
while( numeroUtente > 5 || numeroUtente< 1 )


/*Usiamo randomize per il computer*/
let numeroComputer = randomize()

/*Sommiamo il numero generato con quello dell'utente*/
const somma = numeroComputer + numeroUtente;

/* Stabiliamo se la somma è pari o dispari*/
// Creiamo due Boolean false di default che diventeranno veri con la nostra funzione

oddOrEven(somma);

// Dichiariamo chi ha vinto.
if (oddOrEven(somma) === oddEven.toLowerCase()){
    alert("hai vinto")
}  else {
    alert("hai perso")
}

// Funzione per generare numeri da 1 a 5
function randomize(){
    const numGen = Math.floor(Math.random() * 5) + 1;
    return numGen;
}

// Funzione per capire se numero è pari o dispari
function oddOrEven(numero){

if (numero % 2 === 0){
    return "pari";
} else{
    return "dispari";
}
}