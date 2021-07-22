function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');//ul

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
;
createDaysOfTheWeek();

// Escreva seu código abaixo.//
//=========================
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
 
 const daysNum = document.querySelector('#days');
 
 for(let i = 0; i < dezDaysList.length; i += 1){
   const day = dezDaysList[i];//1
   const dayItem = document.createElement('li');
   
   if(day === 24 |  day === 31){
    dayItem.className = 'day holiday';
    dayItem.innerHTML = day;
    daysNum.appendChild(dayItem);
   } else if (day === 4 | day === 11 | day === 18 ){
     dayItem.className = 'day friday';
     dayItem.innerHTML = day;
     daysNum.appendChild(dayItem);
   } else if (day === 25){
     dayItem.className = 'day holiday friday';
     dayItem.innerHTML = day;
     daysNum.appendChild(dayItem);
   } else{
     dayItem.innerHTML = day;
     dayItem.className = 'day';
     daysNum.appendChild(dayItem);
   };
  };
};
createDaysOfTheMonth();
//==============


function createButton (feriado){//botao filho "buttons-container"

  const divPai = document.querySelector('.buttons-container');

  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = feriado;
  divPai.appendChild(button);


};
createButton("Feriados");
//===============

function clicar() {
  const click = document.querySelector('#btn-holiday');
  const diasHolidays = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const newColor = 'blue';
   
  click.addEventListener('click', function() {
     for(let i = 0; i < diasHolidays.length; i += 1){
      if(diasHolidays[i].style.backgroundColor === newColor){
        diasHolidays[i].style.backgroundColor = backgroundColor;
      } else {
        diasHolidays[i].style.backgroundColor = newColor;
      }
    }
   });
};
clicar();
//=============


function createButtoFriday (sexta) {
const buttonContainer = document.querySelector('.buttons-container');

const buttoFriday = document.createElement('button');
buttoFriday.id = 'btn-friday';
buttoFriday.innerHTML = sexta;
buttonContainer.appendChild(buttoFriday);
}
createButtoFriday("Sexta-feira");
//=============

let dezFridays = [ 4, 11, 18, 25 ];
function changeText (dezFridays) {
  const clickFriday = document.querySelector('#btn-friday');
  const getFriday = document.querySelectorAll('.friday');
  const text = 'mufasa!!';
  
  clickFriday.addEventListener('click', function () {
    for (let i = 0; i < getFriday.length; i += 1){
      if(getFriday[i].innerHTML !== text){
        getFriday[i].innerHTML = text;
      }else {
        getFriday[i].innerHTML = dezFridays[i];
      }
    }
    
  })
}
changeText(dezFridays);
//===================

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
dayMouseOver();
//====================

function dayMouseOut () {
  const days = document.querySelector('#days');

  days.addEventListener('mouseout', function (parametro) {
    parametro.target.style.fontSize = '20px';
    parametro.target.style.fontWeight = '200';  
  })
};
dayMouseOut();
//====================

function addTasks (string) {
  const myTasks = document.querySelector('.my-tasks');
  const addSpan = document.createElement('span');
  addSpan.innerHTML = string;
  myTasks.appendChild(addSpan);
};
addTasks("cozinhar");
//=====================

function legendColor (cor) {
  const myTasks = document.querySelector('.my-tasks');
  const divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = cor;
  myTasks.appendChild(divTask);

};
const cor =legendColor('red');
//==========================

function taskSelect () {
  const divTask = document.querySelector('.task');//div

  divTask.addEventListener('click', task )
  function task (event) {
    if(event.target.className === 'task'){
      event.target.className = 'task selected';
    }else {
      event.target.className ='task';
    }
    console.log(event.target);
    console.log(event.type);
  }
 
};

taskSelect();
//=============================

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');//div selecionada
  let days = document.querySelector('#days');//ul
  let taskDiv = document.querySelector('.task');//div sem selecionar pega a classe task
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function (event) {
    let = eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};
setDayColor();
