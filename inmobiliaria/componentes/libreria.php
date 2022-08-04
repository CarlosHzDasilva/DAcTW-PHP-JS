<?php
function write_to_console($valores) {
    $mensaje = 'console.log(' . json_encode($valores) . ');';
    $mensaje = sprintf('<script>%s</script>', $mensaje);
    echo $mensaje;
    return json_encode($valores);
}
function carga() {
    $lista = json_decode(file_get_contents("casas.json"));
    $paginas = ceil(count($lista)/7);
    $_SESSION['paginas']=$paginas;
    return $lista;
}
?>