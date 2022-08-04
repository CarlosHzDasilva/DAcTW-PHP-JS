<?php
    require_once "../modelo/articulos_completos.php";

    $datos = new Articulos_Completos();

    $jsondata["cantidad"] = $datos->contar($_POST["filtro"]);
    $jsondata["datos"] = $datos->listar($_POST["filtro"],$_POST["pagina"]);
    echo json_encode($jsondata);
?>
