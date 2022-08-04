<?php
    require_once "../modelo/ventas_completas.php";

    $datos = new Ventas_Completas();

    $jsondata["cantidad"] = $datos->contar($_POST["filtro"]);
    $jsondata["datos"] = $datos->listar($_POST["filtro"],$_POST["pagina"]);
    echo json_encode($jsondata);
?>
