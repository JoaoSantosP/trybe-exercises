let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//============================
let numeroMaior = numbers[0];// aqui foi definido um numero minimo como parametro//
//============================
for(i of numbers){//percorre o array numbers // 
  //===========================
  if(i > numeroMaior){//condiçao para saber se o indice(i) do array (numbers)é maior que o meu parametro de numero inicial(numeroMaior = numbers[0])//
    //=========================
    numeroMaior = i;//se meu indice for maior que numeroMaior entao numeroMaior passa a receber o valor do indece(i)//
    //=========================
  }
}

console.log(numeroMaior);