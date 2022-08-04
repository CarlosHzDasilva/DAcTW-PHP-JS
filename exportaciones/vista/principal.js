function getDatos(pagina)
{
    pagina = pagina || 1
    let direccion = "../controlador/controlador_articulos_completos.php"

    let datos = new FormData(document.getElementById("formulario"))
    datos.append("pagina",pagina)

    for(let pair of datos.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
    }

    fetch(direccion,{
        method: "POST",
        body:datos
    })
    .then(res => res.json())
    .then(respuesta => {
        console.log(respuesta)

        document.getElementById("cantidad").innerHTML = respuesta.cantidad.cantidad
        document.getElementById("paginas").innerHTML = Math.ceil(respuesta.cantidad.cantidad / 10)

        let contenedor = document.getElementById("contenedor")

        let lineasABorrar = document.getElementsByClassName("filadatos")
        while (lineasABorrar.length > 0)
        {
            lineasABorrar[0].parentNode.removeChild(lineasABorrar[0])
        }

        let fragment = document.createDocumentFragment();

        for (i in respuesta.datos){
            let fila = document.createElement('div')
            fila.setAttribute("class","row filadatos")

            //Se ocultan las imagenes de la representacion de datos debido a que no se cuenta con imágenes para todos los productos en el material aportado para la actividad

            // let foto = document.createElement('img')
            // foto.src = `./imagenes/${respuesta.datos[i].codigo}.jpg`
            // foto.setAttribute("class","img-fluid")
            // foto.setAttribute("style","max-width: 15%;")
            // fila.appendChild(foto)

            for (j in respuesta.datos[i]) {
                if(j.substring(0,4) != "cod_") {
                    if (j != "f_de_pago") {
                        let campo = document.createElement('div')
                        if(j == "codigo" || j == "fecha_venta" || j == "ciudad_destinatario" || j == "forma_de_pago" || j == "cantidad") {
                            campo.setAttribute("class","col border d-none d-sm-block")
                            campo.innerHTML =  respuesta.datos[i][j]
                            fila.appendChild(campo)
                        } else {
                            campo.setAttribute("class","col-3 col-sm border")
                            campo.innerHTML =  respuesta.datos[i][j]
                            fila.appendChild(campo)
                        }
                    }
                }
            }
            fragment.appendChild(fila)
        }
        contenedor.appendChild(fragment);
    })
}

window.onload = function() {
    getDatos()
}

let buscar = document.getElementById("buscar")
buscar.addEventListener("click", event => {
    console.log(document.getElementById("filtro").value,event.target)

    document.getElementById("pagina").value = 1
    getDatos(1)
})

let anterior = document.getElementById("anterior")
anterior.addEventListener("click", event => {
    if (parseInt(document.getElementById("pagina").value) > 1) {
        document.getElementById("pagina").value =parseInt(document.getElementById("pagina").value)-1
        getDatos(document.getElementById("pagina").value)
    }

})

let siguiente = document.getElementById("siguiente")
siguiente.addEventListener("click", event => {
    if  (parseInt(document.getElementById("pagina").value) < parseInt(document.getElementById("paginas").innerHTML)) {
        document.getElementById("pagina").value =parseInt(document.getElementById("pagina").value)+1
        getDatos(parseInt(document.getElementById("pagina").value))
    }
})
