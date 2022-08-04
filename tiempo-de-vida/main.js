document.getElementById("calculate").addEventListener('click', timesAmount);

//El error está en que, al usar aux para calcular meses, si han pasado 0 años no los cuenta. Hay que sumar la diferencia de meses para tener la cantidad.

//Función de cálculo de tiempo
function timesAmount() {
  //Declaración de variables a utilizar
  let aux;
  let days;
  let months;
  let years;

  let formData = (document.getElementById("birth-date").value).split("-");
  let present = new Date();
  present.setMonth(present.getMonth() + 1);

  let birthDate = new Date(formData[0], formData[1], formData[2]);

  console.log(present);
  console.log(birthDate);

  //Comprobamos la que las fechas estén correctas, y calculamos diás, meses y años
  if (present <= birthDate) {
    console.log("No ha nacido aun");
  } else {
    aux = present.getFullYear() - birthDate.getFullYear();
    days = (aux * 365) + (aux / 4);

    console.log(days);

    if (present.getMonth() >= birthDate.getMonth() && present.getDate() >= birthDate.getDate()) {
      months = (aux * 12) ;
      years = aux;

      console.log(months);
      console.log(years);
    } else {
      months = (aux * 12) - 1;
      years = aux - 1;

      console.log(months);
      console.log(years);
    }
  }

  console.log(days);
  console.log(months);
  console.log(years);

  //Mostramos los resultados
  if (isNaN(days, months, years)) {
    document.getElementById("days").innerHTML = `Datos incorrectos`;
    document.getElementById("months").innerHTML = `Datos incorrectos`;
    document.getElementById("years").innerHTML = `Datos incorrectos`;
  } else {
    document.getElementById("days").innerHTML = `${days} días`;
    document.getElementById("months").innerHTML = `${months} meses`;
    document.getElementById("years").innerHTML = `${years} años`;
  }
}
