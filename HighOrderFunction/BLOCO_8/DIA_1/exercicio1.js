const createObject = (nome) => {
  return {
  nomeCompleto : nome,
  email: `${nome}@trybe.com`};
};

const newEmployees = (createObject) => {
  const employees = {
    id1: createObject('Pedro_Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createObject('Luiza_Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createObject('Carla_Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createObject));