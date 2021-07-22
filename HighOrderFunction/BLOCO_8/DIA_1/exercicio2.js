//numero apostado
//numero sorteado

const numberRandom = (numberAposted, checkNumber) =>{
let numeroSorted = Math.floor(Math.random()* 5 + 1)
checkNumber(numberAposted, numeroSorted);
 if( checkNumber(numberAposted, numeroSorted) === true){
   return `Parabéns você ganhou!`
 }
 return `Tente novamente.`
}

const checkNumber = (numberAposted, numeroSorted) =>{
if(numberAposted === numeroSorted){
  return true;
}
return false;
}
console.log(numberRandom(4, checkNumber));