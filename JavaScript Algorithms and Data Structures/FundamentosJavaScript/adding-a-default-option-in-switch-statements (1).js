function switchOfStuff(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha
switch (val){
  case "a":
  answer = "apple" ;
  break;
  case "b":
  answer = "bird" ;
  break;
  case "c":
  answer = "cat" ;
  break;
  default:
  answer = "stuff" ;
  break;
}
  // Altere apenas o código acima desta linha
  return answer;
}

switchOfStuff(1);

console.log("a - "+switchOfStuff("a"));
console.log("b - "+switchOfStuff("b"));
console.log("c - "+switchOfStuff("c"));
console.log("default - "+switchOfStuff());