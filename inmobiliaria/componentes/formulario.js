(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()
  function guardaBusqueda(evt) {
      evt.preventDefault();
      evt.stopPropagation()
      console.log("Dentro de guardaBusqueda")
      if (document.getElementById("formulario").checkValidity()) {

        let datosaEnviar = {};
        let cajas = Array.from(document.getElementsByName('campo'));
        for (let elemento in cajas) {
          datosaEnviar[cajas[elemento].id] = encodeURIComponent(cajas[elemento].value);
        }
        console.log(datosaEnviar);
        let xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (xhttp.readyState == 4 && xhttp.status == 200){
                  console.log(xhttp.responseText);
                  document.getElementById("mensaje").innerHTML = xhttp.responseText;
              }
          }
        xhttp.open("POST","componentes/procesador.php",true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let paquete = conversion(datosaEnviar);
        console.log(paquete);
        xhttp.send(paquete);
      }
  }
 function conversion(datos){
  let paquete = JSON.stringify(datos);
  paquete=  paquete.replaceAll(":","=")
  paquete = paquete.replaceAll(",","&")
  paquete = paquete.replaceAll("{","")
  paquete = paquete.replaceAll("}","")
  paquete = paquete.replaceAll("\"","")
  return paquete
}
