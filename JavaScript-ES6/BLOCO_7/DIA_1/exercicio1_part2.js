const fatorialNumber = (number) => {
  let multiplicador1 =  number - 1;
  for (let i = multiplicador1 ; i >= 1; i--) {
    
    number *= i  
  }
  return number
}
console.log(fatorialNumber(4))