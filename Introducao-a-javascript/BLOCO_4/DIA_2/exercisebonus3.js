let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1  < numbers.length) {
    //== index + 1  faz com que eu pegue o elemento do meu array e incremente ele para pegar o elemento da frente depois esses dois elementos sao multiplicados e pushados para dentro do meu newArray
    newArray.push(numbers[index] * numbers[index + 1 ]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
console.log(numbers[10]);// aparece undefined por que nao existe um elemento no meu array  com esse identificador(10), sendo assim o array tem 10 possicoes mas com identificadores (ou nome) de 0 a 9