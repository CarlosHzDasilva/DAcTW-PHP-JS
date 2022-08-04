<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Document</title>
</head>
<body>
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <p class="fw-bold text-center">Ingrese datos de la propiedad solicitada y forma de contacto</p>
        <p class="text-center">Solicite la casa con las caracteristicas de su gusto y nosotros con mucho gusto nos pondremos en contacto con ud para
            poder concertar una visita lo antes posible
        </p>
        <form id="formulario" class="row g-3 needs-validation mt-4 p-3 border border-primary rounded-3 bg-light" novalidate onclick="guardaBusqueda(event)">
            <div class="col-5 mb-3">
                <label for="tipo">Tipo de Propiedad</label>
                <select class="form-control" id="tipo" name="campo">
                    <option value=0 >Casa</option>
                    <option value=1>Piso</option>
                    <option value=2>Terreno urbano</option>
                    <option value=3>Terreno rural</option>
                </select>
            </div>
            <div class="col-4 mb-3">
                <label for="precio">Precio Maximo</label>
                <input type="number" min=0 class="form-control" id="precio" name="campo" placeholder="Precio maximo" required>
                <div class="invalid-tooltip">
                    Ingrese Precio Máximo
                </div>
            </div>
            <div class="col-md-3 mb-3">
                <label for="dormitorios">Dormitorios</label>
                <input type="number" min=0 class="form-control" id="dormitorios" name="campo" placeholder="Dormitorios" required>
                <div class="invalid-tooltip">
                    Ingrese minimo de dormitorios.
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="ciudad">Ciudad</label>
                <input type="text" class="form-control" id="ciudad" name="campo" placeholder="Ciudad" required>
                <div class="invalid-tooltip">
                    Ingrese Ciudad válida.
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="email">Email</label>
                <input type="mail" min=0 class="form-control" id="email" name="campo" placeholder="Email" required>
                <div class="invalid-tooltip">
                    Ingrese su correo electrónico.
                </div>
            </div>
            <button class="btn btn-primary col-md-12" type="submit" >Enviar formulario</button>
            <p class="col-md-12 fw-bold" type="button" id="mensaje"></p>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src=componentes/formulario.js defer></script>
</body>
</html>
