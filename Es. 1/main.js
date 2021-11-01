// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma!

const userInput = prompt("Inserisci una parola")
if (userInput.toLowerCase() === reverse(userInput.toLowerCase())){
    alert(`${userInput} è palindroma`)
    console.log(userInput)
} else{
    alert(`${userInput} non è palindroma`)
    console.log(userInput)
}


// funzione per invertire parola
function reverse(parola){
let reverseWord = "";
for (let i = parola.length - 1; i >= 0; i--){
    reverseWord += parola[i];
}
return reverseWord;
}