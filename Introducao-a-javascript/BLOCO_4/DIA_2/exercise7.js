let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMenor = numbers[0]
for(let i of numbers){
  if(i < numeroMenor){
    numeroMenor = i;
  }
}
console.log(numeroMenor);