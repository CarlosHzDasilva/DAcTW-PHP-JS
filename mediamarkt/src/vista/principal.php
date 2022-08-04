<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <title>Medium Market</title>
    <script src="principal.js" defer></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <?php include_once "./compartidos/encabezado.php"?>
    <h1 class="text-center mt-3">Lista de Ventas</h1>
    <d1iv class="d-flex justify-content-center align-items-center mt-2">
        <form class="d-flex flex-column justify-content-center align-items-center" id="formulario" action="" method="POST">
            <label for="filtro"><strong>Texto para filtrar:</strong></label>
            <input type="text" id="filtro" name="filtro">
            <input class ="btn btn-primary mt-1" type="button" id="buscar" value="Buscar">
        </form>
    </d1iv>
    <div class="d-flex justify-content-center align-items-center mt-2">
        <div class="mx-1">
            <label for="cantidad"><strong>Cantidad:</strong></label>
            <span class="m-1" id="cantidad"></span>
        </div>
        <div class="mx-1">
            <label for="paginas"><strong>Paginas:</strong></label>
            <span class="m-1" id="paginas"></span>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-2" id="paginacion">
            <input class="btn btn-primary mx-1" id="anterior" type="button" value="<">
            <input class="btn btn-primary mx-1" id="pagina" type="button" value="1">
            <input class="btn btn-primary mx-1" id="siguiente" type="button" value=">">
    </div>
    <div id="contenedor" class="container mt-3">
        <div class="row">
            <div class="col border" id="imagen">Imagen</div>
            <div class="col border d-none d-sm-block" id="codigo">Código</div>
            <div class="col border d-none d-sm-block" id="descripcion">Descripción</div>
            <div class="col border" id="marca">Marca</div>
            <div class="col border" id="tamanio">Tamaño</div>
            <div class="col border" id="precio">Precio</div>
        </div>
    </div>



    <?php include_once "./compartidos/pie.php"?>
</body>
</html>
