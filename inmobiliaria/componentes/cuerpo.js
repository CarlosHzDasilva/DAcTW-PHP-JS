function carga(casa) {
    document.getElementById("foto").src = "./imagenes/casa"+casa["id"]+".jpg";
    document.getElementById("descripcion").innerHTML = casa["descripcion"];
    document.getElementById("id").innerHTML = casa["id"];
    document.getElementById("anio").innerHTML = casa["año"];
    document.getElementById("garaje").innerHTML = casa["garaje"];
    document.getElementById("dormitorios").innerHTML = casa["dormitorios"];
    document.getElementById("banios").innerHTML = casa["baños"];
    document.getElementById("superficie").innerHTML = casa["superficie"];
    document.getElementById("precio").innerHTML = casa["precio"];
}
