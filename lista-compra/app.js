const listInit = () => {
  let removeButton = document.createElement('button');
  removeButton.innerHTML = 'Borrar elementos';
  removeButton.setAttribute('id', 'removeButton');

  let addButton = document.createElement('button');
  addButton.innerHTML = 'Añadir elemento';
  addButton.setAttribute('id', 'addButton');

  let newElementText = document.createElement('input');
  newElementText.setAttribute('id', 'newElementText');
  newElementText.setAttribute('type', 'text');

  let newElementQuantity = document.createElement('input');
  newElementQuantity.setAttribute('id', 'newElementQuantity');
  newElementQuantity.setAttribute('type', 'number');

  let newElementType = document.createElement('select');
  newElementType.setAttribute('id', 'newElementType');

  let option1 = document.createElement('option');
  option1.setAttribute('value', 'unidad(es)');
  option1.innerText = "Unidades";

  let option2 = document.createElement('option');
  option2.setAttribute('value', 'caja(s)');
  option2.innerText = "Cajas";

  let option3 = document.createElement('option');
  option3.setAttribute('value', 'kg');
  option3.innerText = "Kg";

  let list = document.createElement('ul');
  list.setAttribute('id', 'list');

  let fieldSet = document.createElement('fieldset');
  fieldSet.setAttribute('id', 'fieldSet');

  let fieldLegend = document.createElement('legend');
  fieldLegend.innerText = "Lista de la compra";

  document.body.appendChild(fieldSet);
  fieldSet.appendChild(fieldLegend);
  fieldSet.appendChild(list);
  fieldSet.appendChild(newElementText);
  fieldSet.appendChild(newElementQuantity);
  fieldSet.appendChild(newElementType);
  newElementType.appendChild(option1);
  newElementType.appendChild(option2);
  newElementType.appendChild(option3);
  fieldSet.appendChild(addButton);
  fieldSet.appendChild(removeButton);
}

listInit();

//Arriba: Inicio de aplicación. Abajo: Funcionalidades.
let addButton = document.getElementById('addButton');

const toggle = (event) => {
  let element = event.target;
  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
}

const addElement = () => {
  let text = document.getElementById('newElementText');
  let quantity = document.getElementById('newElementQuantity');
  let type = document.getElementById('newElementType');

  let newElement = document.createElement('li');
  newElement.setAttribute('class', 'element')
  newElement.innerHTML = `${text.value} x${quantity.value} ${type.value}`;
  newElement.addEventListener('click', toggle);

  document.getElementById('list').appendChild(newElement);
}

const removeElements = () => {
  let aux = [];
  list.childNodes.forEach(element => {
    if (element.classList.contains('active')) {
      aux.push(element);
    }
  });
  aux.forEach(element => list.removeChild(element))
}

removeButton.addEventListener('click', removeElements);
addButton.addEventListener('click', addElement);
