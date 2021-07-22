const longestWord = (frase) => {
let arrayStrings = frase.split(" ");//['Antônio', 'foi','no',      'banheiro','e',       'não','sabemos', 'o', 'que',     'aconteceu']
  let maiorString = arrayStrings[0];
  for(let i of arrayStrings){
    if(i.length > maiorString.length ){
     maiorString = i;
    }
  }
  return maiorString;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));