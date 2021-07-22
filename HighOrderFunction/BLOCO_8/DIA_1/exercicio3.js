const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (gabarito, reposta, myFunc) =>{
let contador = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    const pega = myFunc(gabarito[index], reposta[index]);  
    contador += pega
  };
  return `Pontuação: ${contador} respostas corretas.`
}

const myFunc = (ra, ru) => {
if(ra === ru){
  return 1;
  } if(ru === 'N.A'){
  return 0;
    }
     return -0.5;
};

console.log(repeat(rightAnswers, studentAnswers, myFunc));

