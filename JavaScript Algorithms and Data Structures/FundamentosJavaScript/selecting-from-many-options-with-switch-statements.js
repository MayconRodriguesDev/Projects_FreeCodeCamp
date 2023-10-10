function caseInSwitch(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha
switch (val){
  case 1 :
  answer = "alpha";
  break;
  case 2 :
  answer = "beta";
  break;
  case 3 :
  answer = "gamma";
  break;
  case 4 :
  answer = "delta";
  break;
}
// Altere apenas o código acima desta linha
  return answer;
}

caseInSwitch(1);
console.log("1 - "+caseInSwitch(1));
console.log("2 - "+caseInSwitch(2));
console.log("3 - "+caseInSwitch(3));
console.log("4 - "+caseInSwitch(4));