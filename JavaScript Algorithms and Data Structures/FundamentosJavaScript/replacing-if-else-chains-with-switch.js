function chainToSwitch(val) {
  let answer = "";
  // Altere apenas o código abaixo desta linha

  switch (val) {
  
  case "bob":
    answer = "Marley";
    break;
  case  42:
    answer = "The Answer";
    break;
   case  1:
    answer = "There is no #1";
    break;
   case  99:
    answer = "Missed me by this much!";
    break;
   case  7:
    answer = "Ate Nine";
    break;
 
  }
  // Altere apenas o código acima desta linha
  return answer;
}

chainToSwitch(7);

console.log("1 - "+chainToSwitch("bob"));
console.log("2 - "+chainToSwitch(42));
console.log("3 - "+chainToSwitch(1));
console.log("4 - "+chainToSwitch(99));
console.log("5 - "+chainToSwitch(7));