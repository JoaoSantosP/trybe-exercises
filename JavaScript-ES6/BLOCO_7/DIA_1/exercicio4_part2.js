const array = ['javascript', 'html', 'css', 'ingles', 'bash']
let boasVindas;
function searchLetterX(nome) {
   boasVindas = `Ola eu sou o ${nome}!`;
  
  const listaDeHabilidades = () => {
  let lista = ` ${boasVindas}
  
  Minhas cinco principais habilidades sao :
  `
  array.forEach((element) => {
    lista = `${lista}

    -${element}`
  });
  return lista
}
return listaDeHabilidades()
}

console.log( searchLetterX('Joao'));