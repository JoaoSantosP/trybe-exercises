// apiScript.js
/* const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept' : 'application/json' }
  }

  fetch(API_URL, myObject).then(responde => responde.json()).then(data => console.log(data));
};*/ 

// window.onload = () => fetchJoke();
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
  const arr = [1, 1, 2, 2, 3, 3, 5];
  const map = arr.map((number) => Math.pow(number,number)).reduce((acc, curr) => acc + curr);
 (map < 8000) ? resolve() : reject()})
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada')); 
};

fetchPromise();