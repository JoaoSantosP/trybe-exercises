const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (objeto, key, valor) => {
  const obj = {};
  Object.defineProperty(obj, key, {value: valor, enumerable:true});
  return Object.assign(objeto, obj)

}
console.log(addTurno(lesson2, "turno", "manhã"));

