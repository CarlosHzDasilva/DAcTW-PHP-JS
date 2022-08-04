function carga(coche) {
    document.getElementById("foto").src = "./imagenes/" + coche["fichero"];
    document.getElementById("id").innerHTML = coche["id"];
    document.getElementById("marca").innerHTML = coche["marca"];
    document.getElementById("modelo").innerHTML = coche["modelo"];
    document.getElementById("anios").innerHTML = coche["años"];
    document.getElementById("kilometraje").innerHTML = coche["kilometraje"];
    document.getElementById("combustible").innerHTML = coche["combustible"];
    document.getElementById("precio").innerHTML = coche["precio"];
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})