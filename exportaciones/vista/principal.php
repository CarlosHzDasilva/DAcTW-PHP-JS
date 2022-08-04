<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <title>Lista de exportaciones</title>
    <script src="principal.js" defer></script>
</head>
<body>
    <?php include_once "./compartidos/encabezado.php"?>
    <h1 class="text-center mt-3">Lista de Ventas</h1>
    <div class="d-flex justify-content-center text-center">
        <form id="formulario" action="" method="POST">
            <label class="mt-2" for="filtro"><strong>Producto a buscar:</strong></label>
            <input class="mt-2" type="text" id="filtro" name="filtro">
            <input class="btn btn-primary mt-2" type="button" id="buscar" value="Buscar">
        </form>
    </div>
    <div class="text-center mt-3">
        <label for="cantidad"><strong>Productos:</strong></label>
        <span id="cantidad"></span>
        <label for="paginas"><strong>Paginas:</strong></label>
        <span id="paginas"></span>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-3" id="paginacion">
            <input class="btn btn-primary mx-2" id="anterior" type="button" value="<">
            <input class="btn btn-primary mx-2" id="pagina" type="button" value="1">
            <input class="btn btn-primary mx-2" id="siguiente" type="button" value=">">
        </div>
    <div id="contenedor" class="container mt-3">
        <div class="row">
            <!-- <div class="col-2 border" id="imagen">Imagen</div> -->
            <div class="col border d-none d-sm-block" id="codigo">Codigo</div>
            <div class="col border d-none d-sm-block" id="fecha">Fecha</div>
            <div class="col border" id="cliente">Cliente</div>
            <div class="col border d-none d-sm-block" id="producto">Ciudad</div>
            <div class="col border" id="ciudad_destinatario">Pais</div>
            <div class="col border" id="pais_destinatario">Producto</div>
            <div class="col border" id="precio">Precio</div>
            <div class="col border d-none d-sm-block" id="cantidad">Cantidad</div>
            <div class="col border d-none d-sm-block" id="forma_de_pago">F_de_Pago</div>
        </div>
    </div>



    <?php include_once "./compartidos/pie.php"?>
</body>
</html>
