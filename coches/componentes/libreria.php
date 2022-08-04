<?php
function write_to_console($valores) {
    $mensaje = 'console.log(' . json_encode($valores) . ');';
    $mensaje = sprintf('<script>%s</script>', $mensaje);
    echo $mensaje;
    return json_encode($valores);
}

function carga() {
    $lista = json_decode(file_get_contents("./coches.json"));
    $paginas = ceil(count($lista->coches)/7);
    write_to_console("Número de páginas: $paginas");
    $_SESSION['paginas'] = $paginas;
    return $lista;
}
?>
