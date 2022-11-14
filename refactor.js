function returnRandomNumber() {
  return Math.random();
}
function round(num){
  return `Seu número é ${Math.round(num * 100)}!`;
}

//Adicao
function sumToRandomNumber(num) {
  return round(returnRandomNumber()) + num;
}

//Subtracao
function subtractRandomNumber(num) {
  return round(returnRandomNumber()) - num;
}

//Multiplicacao
function multiplyToRandomNumber(num) {
  return round(returnRandomNumber()) * num;
}

//Divisao
function divideRandomNumber(num) {
  return round(returnRandomNumber()) / num;
}

function operation(){
  +: () operation['+'];
  /: ()
}