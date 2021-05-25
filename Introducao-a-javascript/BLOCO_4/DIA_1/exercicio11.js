let salarioTotal = 5000;


//let salarioBruto = 0 ;////=  salarioTotal - inss; 
 function salario (salarioTotal){

  if(salarioTotal <= 1556.94){
   inss = 8 / 100 * salarioTotal;
  return salarioBruto = salarioTotal - inss;
}
else if (salarioTotal > 1556.94 && salarioTotal <= 2594.92){
   inss = 9 / 100 * salarioTotal;  
  return salarioBruto = salarioTotal - inss;
}
else if (salarioTotal > 2594.92 && salarioTotal <= 5189.82){
   inss = 11 /100 * salarioTotal;
  return salarioBruto = salarioTotal - inss;
}
else if (salarioTotal > 5189.82){
   inss = 570.88
  let valor = inss - salarioTotal;
  return salarioBruto = salarioTotal - valor;
}

}
let inssDescontado = salarioTotal - salario(salarioTotal);
console.log("Salario sem desconto de impostos:", salarioTotal, " INSS descontado:", inssDescontado,  " Salario Bruto:", salario(salarioTotal) );


//=================
//calculando o imposto de renda
let salarioBase1 = 7.5 /100 * salario(salarioTotal) - 142.80;
let salarioArredondado = Math.round(salarioBase1 * 11)/11;
let salarioBase2 = salario(salarioTotal) - salarioArredondado.toFixed(2);
let impostoDeRenda = salarioBase2.toFixed(2);
//let salarioFinal = salarioBase2;


function salarioLiquido (salarioBase2){

 if(salarioBase2 <= 1903.98 ){
    return impostoDeRenda = 0;
    
 }else if(salarioBase2 > 1903.98 && salarioBase2 <= 2826,65){

   salarioBase1 = 7.5 /100 * salario(salarioTotal) - 142.80;
    salarioArredondado = Math.round(salarioBase1 * 11)/11;
     return  impostoDeRenda = salarioArredondado.toFixed(2); 
     
 }
 else if(salarioBase2 >= 2826.66 && salarioBase2 <=3751.05){
  
   salarioBase1 = 15 /100 * salario(salarioTotal) - 354.80;
    salarioArredondado = Math.round(salarioBase1 * 11)/11;
    return  impostoDeRenda = salarioArredondado.toFixed(2);
 }
 else if(salarioBase2 >= 3751.05 && salarioBase2 <=4664.68){
  
   salarioBase1 = 22.5 /100 * salario(salarioTotal) - 636.13;
    salarioArredondado = Math.round(salarioBase1 * 11)/11;
    return  impostoDeRenda = salarioArredondado.toFixed(2);
}
else if(salarioBase2 > 4664.68){
  
   salarioBase1 = 27.5 /100 * salario(salarioTotal) - 869.36;
    salarioArredondado = Math.round(salarioBase1 * 11)/11;
    return  impostoDeRenda = salarioArredondado.toFixed(2);

}
}
console.log("Salario Liquido:",salarioBase2, " Imposto de renda descontado:",salarioLiquido(salarioBase2));