<?php
if (isset($_POST)) {
    $vector = array();
    foreach($_POST as $clave => $valor){
        $vector[$clave] = $valor;
    }
    $fichas = @file_get_contents("busquedas.json");
    $fichero = json_decode($fichas, true);
    $datos = json_encode($vector,JSON_PRETTY_PRINT);
    if ($fichero == null) $fichero = array();
    array_push($fichero, $vector);
    $archivo = json_encode($fichero,JSON_PRETTY_PRINT);
    $bytes = file_put_contents("busquedas.json", $archivo);
    echo "Datos guardados con exito";
}
?>
