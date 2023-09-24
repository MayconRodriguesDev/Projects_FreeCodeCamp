function nextInLine(testArr, item) {
  // Altere apenas o código abaixo desta linha

testArr.push(item);
const itemRemovido = testArr.shift();
  return itemRemovido;
  // Altere apenas o código acima desta linha
}

// Configuração
let testArr = [1, 2, 3, 4, 5];

// Exibir o código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));