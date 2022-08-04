<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link rel="stylesheet" href="./componentes/cuerpo.css" type="text/css">
    <title>Document</title>
</head>

<body>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="p-2">
                <?php
                for ($i = $_SESSION["actual"] * 7; $i <= ($_SESSION["actual"] * 7) + 6; $i++) {
                    if ($i >= count($lista->coches)) break;
                    $coche = $lista->coches[$i];
                ?>
                    <div class="row">
                        <div class="col-md-2 p-1 d-flex justify-content-center align-items-center border border-primary bg-light">
                            <img class="img-fluid p-1" style="width : 100px" src="imagenes/<?= $coche->fichero ?>" alt="Foto del coche">
                        </div>
                        <div class="col-md-2 p-1 d-flex justify-content-center align-items-center border text-center pt-4 border-primary bg-light">
                            <?= $coche->marca ?>
                        </div>
                        <div class="col-md-3 p-1 d-flex justify-content-center align-items-center border text-center pt-4 border-primary bg-light">
                            <?= $coche->modelo ?>
                        </div>
                        <div class="col-md-2 p-1 d-flex justify-content-center align-items-center border text-center pt-4 border-primary bg-light">
                            <?= $coche->precio ?>
                        </div>
                        <div class="col-md-2 p-1 d-flex justify-content-center align-items-center text-center pt-4 border border-primary bg-light">
                            <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='carga(<?= json_encode($coche) ?>)'>Seleccionar</button>
                        </div>
                    </div>
                <?php } ?>
                <nav class="mt-2" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="<?php if ($_SESSION['actual'] == 0) {
                                                            echo '#';
                                                        } else {
                                                            echo '?actual=' . $_SESSION['actual'] - 1;
                                                        } ?>" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only"></span>
                            </a>
                        </li>
                        <?php for ($i = 0; $i < $_SESSION["paginas"]; $i++) { ?>
                            <li class="page-item <?php if ($_SESSION['actual'] == $i) {
                                                        echo 'active';
                                                    } ?>"><a class="page-link" href="<?php {
                                                                                                                                        echo '?actual=' . $i;
                                                                                                                                    } ?>"><?= $i + 1 ?></a></li>
                        <?php } ?>

                        <li class="page-item">
                            <a class="page-link" href="<?php if ($_SESSION['actual'] == $_SESSION["paginas"] - 1) {
                                                            echo '#';
                                                        } else {
                                                            echo '?actual=' . $_SESSION['actual'] + 1;
                                                        } ?>" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col p-md-3 border border-primary rounded-3 bg-light">
                        <div class="card">
                            <img src="./imagenes/logo.png" id="foto" class="card-img-top p-5" alt="Foto del coche">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><label><strong>Id:</strong></label> <span id="id"></span></li>
                                <li class="list-group-item"><label><strong>Marca:</strong></label> <span id="marca"></span></li>
                                <li class="list-group-item"><label><strong>Modelo:</strong></label> <span id="modelo"></span></li>
                                <li class="list-group-item"><label><strong>Años:</strong></label> <span id="anios"></span></li>
                                <li class="list-group-item"><label><strong>Kilometraje:</strong></label> <span id="kilometraje"></span></li>
                                <li class="list-group-item"><label><strong>Combustible:</strong></label> <span id="combustible"></span></li>
                                <li class="list-group-item"><label><strong>Precio:</strong></label> <span id="precio"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="./componentes/cuerpo.js"></script>
</body>

</html>