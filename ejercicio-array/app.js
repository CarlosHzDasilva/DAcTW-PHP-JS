let form = document.forms.numberForm.numbers;
let checker = document.getElementById('checker');
const sendButton = document.getElementById('submit-button');
const showButton = document.getElementById('show-button');
let array = document.getElementById('array');
let counterShower = document.getElementById('counter');
let add = document.getElementById('addition');
let ave = document.getElementById('average');

let counter = 0;
let numbersArray = [];

const check = () => {
  let number = Number(form.value);
  if (number >= 0 && number <= 100) {
    checker.innerHTML = `El número ${form.value} está en rango.`;
    numbersArray.push(number);

    counterShower.innerHTML = ++counter;
    add.innerHTML = numbersArray.reduce((accumulator, current) => accumulator + current);
    ave.innerHTML = (numbersArray.reduce((accumulator, current) => accumulator + current)) / numbersArray.length;

    form.value = "";
  } else {
    checker.innerHTML = `Entrada no válida. Inserte números de 0 a 100.`;
  }
}

const show = () => {
  array.innerHTML = "";
  numbersArray.forEach(element => {
    console.log(numbersArray);
    if (numbersArray.indexOf(element) < numbersArray.length - 1) {
      array.innerHTML += `${element}, `;
    } else {
      array.innerHTML += element;
    }
  })
}

sendButton.addEventListener('click', check);
showButton.addEventListener('click', show);
