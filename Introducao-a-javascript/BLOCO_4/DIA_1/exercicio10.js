let custo = 200 ;
let custoFinal = custo /100 * 20 + custo; 
let lucro = (custoFinal - custo) * 1000;

if(custo < 0 && custoFinal < 0){
console.log("Error");
}else{
  console.log("Seu lucro é de :",lucro);
};