let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//==1º for percorre o array a partir do segundo elemento.
for(let index = 1; index < numbers.length; index++ ){
  //==2º for percorre o array a partir do primeiro elemento.
  //==3º condiçao de incremento é index2 ser menor que index 1.
  for(let index2 = 0; index2 < index; index2 ++){
    //==4º se index for maior que index2 
    if(numbers[index] > numbers[index2]){
      //==5º position vai receber o valor de index.
      let position = numbers[index];
      
      //==6º index vai receber o valor de index2.
      numbers[index]= numbers[index2];
      //==7º index2 recebe o valor de position
      numbers[index2]= position;
    }
  }
}console.log(numbers) ;

