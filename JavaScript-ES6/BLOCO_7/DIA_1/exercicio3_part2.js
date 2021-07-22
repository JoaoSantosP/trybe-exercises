let getButton = document.querySelector('button');
let getSpan = document.querySelector('span');
let soma = getSpan.innerHTML = 0 
let clickCount = 0;
getButton.addEventListener('click', (event) => {
  clickCount += 1
  getSpan.innerHTML = clickCount;

})