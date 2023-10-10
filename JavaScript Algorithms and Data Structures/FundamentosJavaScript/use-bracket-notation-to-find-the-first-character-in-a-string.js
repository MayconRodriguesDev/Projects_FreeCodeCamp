// Configuração
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
firstLetterOfLastName = lastName[0]; 


let reversedString = "";

for (let i = 0; i < lastName.length; i++) {
  reversedString = lastName[i] + reversedString;
}

console.log(reversedString);