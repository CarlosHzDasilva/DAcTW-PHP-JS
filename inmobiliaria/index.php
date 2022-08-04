<?php if ( empty(session_id()) ) session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link rel="shortcut icon" href="./imagenes/favicon.ico" type="image/x-icon">
    <title>Inmobiliaria</title>
</head>
<body class="d-flex flex-column min-vh-100 p-3 bg-info bg-gradient">
    <?php
    include("componentes/libreria.php");
    $componente =  isset($_GET['componente']) ? $_GET['componente'] : "componentes/cuerpo.php";
    if (isset($_GET['actual'])) {
        write_to_console("Valor recibido de actual:".$_GET['actual']);
        $_SESSION['actual'] = $_GET['actual'];
    } else {
        $_SESSION["actual"] = 0;
    }
    write_to_console("Al cargar:".$_SESSION['actual'])
    ?>
    <?php $lista = carga();?>
    <?php include_once "componentes/encabezado.php";?>
    <?php include_once $componente;?>
    <?php include_once "componentes/pie.php";?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
