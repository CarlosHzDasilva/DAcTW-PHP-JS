let form = document.forms.numberForm.numbers;
let checker = document.getElementById('checker');
const button = document.getElementById('submit-button');
let dividers = document.getElementById('dividers');

const check = () => {
  let dividersArray = [];
  let number = Number(form.value);
  if (number >= 0 && number <= 5000) {
    checker.innerHTML = `El número ${form.value} está en rango.`;
    for (let index = 0; index < number; index++) {
      if (number % index === 0) {
        dividersArray.push(index);
      }
    }
    dividers.innerHTML = dividersArray;
  } else {
    checker.innerHTML = `Entrada no válida. Inserte números de 0 a 100.`;
    dividers.innerHTML = "-";
  }
}

button.addEventListener('click', check)
