let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = [];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 > 0){
    numerosImpares.push(numbers[i]);
  }
}

if(numerosImpares.length == []){
  console.log("Nenhum valor impar encontrado");
}else if(numerosImpares.length > []){
  console.log(numerosImpares);
}
/*if(div > 0){
  numerosImpares.push.numbers[i]
}*/
