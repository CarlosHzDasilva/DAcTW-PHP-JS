function getDatos(pagina)
{
    pagina = pagina || 1
    let direccion = "../controlador/controlador_articulos_completos.php"

    let datos = new FormData(document.getElementById("formulario"))
    datos.append("pagina",pagina)

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

            let caja = document.createElement('div')
            caja.setAttribute("class","col-3 col-sm border")
            fila.appendChild(caja)

            let foto = document.createElement('img')
            foto.src = `./Imagenes/${respuesta.datos[i].codigo}.png`
            foto.setAttribute("class","img-fluid")
            caja.appendChild(foto)

            for (j in respuesta.datos[i]) {
                if(j.substring(0,4) != "cod_") {
                    let campo = document.createElement('div')
                    if (j == "descripcion" || j == "codigo") {
                        campo.setAttribute("class","col border d-none d-sm-block")
                    } else {
                        campo.setAttribute("class","col-3 col-sm border")
                    }
                    if (j == "precio") {
                        campo.innerHTML =  respuesta.datos[i][j] + "€"
                    } else {
                        campo.innerHTML =  respuesta.datos[i][j]
                    }

                    fila.appendChild(campo)
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
