//Inicio del DOM
document.addEventListener('DOMContentLoaded', carga);

//Declaramos los elementos con los que vamos a interactuar
function carga() {
  console.log("Carga completada");

  document.getElementById("verde").addEventListener('click', semaforo);
  document.getElementById("ambar").addEventListener('click', semaforo);
  document.getElementById("rojo").addEventListener('click', semaforo);
  document.getElementById("reset").addEventListener('click', semaforo);
}

//Función semáforo, asigna los colores y mensajes
function semaforo(e) {
  console.log("Botón pulsado: " + e.target.id);
  
  switch(e.target.id) {
    case "rojo" :
      removeOthers();
      result(0);
      break;
    case "ambar" :
      removeOthers();
      result(1);
      break;
    case "verde" :
      removeOthers();
      result(2);
      break;
    case "reset" :
      removeOthers();
      result(3);
      break;
  }
}

//Función que llama aporta los resultados
function result(option) {
  let menssage = [
    "¡Está en rojo! Deténgase antes del semáforo",
    "¡Está en ámbar! Precaución, reduzca su velocidad",
    "¡Está en verde! Puedes pasar",
    "El semáforo está apagado"
  ]
  let color = [
    "bg-danger",
    "bg-warning",
    "bg-success",
    "bg-secondary"
  ]

  document.getElementById("resultado").innerHTML = menssage[option];
  document.getElementById("tarjeta").classList.add(color[option]);
}

//Función para eliminar color anterior al cambiar
function removeOthers() {
  document.getElementById("tarjeta").classList.remove("bg-secondary");
  document.getElementById("tarjeta").classList.remove("bg-danger");
  document.getElementById("tarjeta").classList.remove("bg-warning");
  document.getElementById("tarjeta").classList.remove("bg-success");
}
