//Inicio del DOM
  document.getElementById("calcular").addEventListener('click', imcCalculator);
  document.getElementById("reset").addEventListener('click', resetForm);

//Función de cálculo
function imcCalculator() {
  fetch("./imcTable.json")
    .then(Response => Response.json())
    .then(data => {
      //Declaración de datos para el cálculo
      let estatura = (document.getElementById("estatura").value) / 100;
      let peso = document.getElementById("peso").value;
      let sexo = document.getElementById("sexo").value;
      let edad = document.getElementById("edad").value;
      let imc = (peso / (estatura ** 2)).toPrecision(4);
      let TMB;
      let TMBCorrector = parseFloat(document.getElementById("ejercicio").value);
      //Fallback, se pulsa Calcular sin introducir datos
      let mensaje1;
      let mensaje2 = "No ha seleccionado Sexo y/o Edad, por lo que no podemos recomendar un Índice de Masa Corporal.";
      let mensaje3 = "No ha seleccionado Sexo, no es posible calcular su Tasa Metabólica Basal.";

      //Comprobación del IMC en la tabla general
      for (let index = 0; index < data.general.length; index++) {
        if (imc > data.general[index].imcMinRef && imc <= data.general[index].imcMaxRef) {
          mensaje1 = data.general[index].mensaje;
          break;
        }
      }

      //Comprobación, por sexo, del Índice de Masa Corporal (IMC) recomendado y la Tasa Metabólica Basal (TMB)
      if (sexo == "hombre" && !isNaN(imc)) {
        for (let index = 0; index < data.hombres.length; index++) {
          if (edad >= data.hombres[index].edadMin && edad <= data.hombres[index].edadMax) {
            mensaje2 = `Aunque, para un hombre de ${edad} años, el IMC recomendado es ${data.hombres[index].imcRecomendado}.`;
            break;
          }
        }
        TMB = (TMBCorrector * (66 + (13.7 * peso) + (5 * estatura * 100) - (6.75 * edad))).toFixed(2);
        mensaje3 = `Su Tasa Metabólica Basal (TMB) es de ${TMB} kcal.`;
      } else if (sexo == "mujer" && !isNaN(imc)) {
        for (let index = 0; index < data.mujeres.length; index++) {
          if (edad >= data.mujeres[index].edadMin && edad <= data.mujeres[index].edadMax) {
            mensaje2 = `Aunque, para una mujer de ${edad} años, el IMC recomendado es ${data.hombres[index].imcRecomendado}.`;
            break;
          }
        }
        TMB = (TMBCorrector * (655 + (9.6 * peso) + (1.8 * (estatura * 100)) - (4.7 * edad))).toFixed(2);
        mensaje3 = `Su Tasa Metabólica Basal (TMB) es de ${TMB} kcal.`;
      }

      //Muestra un resultado
      if (!isNaN(imc)) {
        document.getElementById("imc").innerHTML = `Su indice de masa corporal es ${imc}. ${mensaje1} ${mensaje2} ${mensaje3}`;
      } else {
        document.getElementById("imc").innerHTML = `Datos insuficientes o incompatibles con el modelo de cálculo. Inténtelo de nuevo.`;
      }
    })
}

//Función de reinicio
function resetForm() {
  document.getElementById("estatura").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("sexo").value = "1";
  document.getElementById("ejercicio").value = "1";
  document.getElementById("imc").innerHTML = "";
}
