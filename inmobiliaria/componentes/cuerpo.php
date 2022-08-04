<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <link rel="stylesheet" href="cuerpo.css" type="text/css">
    <title>Document</title>
</head>
<body>
    <div class="container-fluid  mt-4">
        <div class="row">
        <div class="col-8 p-2">
        <?php
            write_to_console("Pagina actual : ".$_SESSION["actual"]);
            for($i= $_SESSION["actual"] * 7;$i <= ($_SESSION["actual"]*7)+6;$i++) {
                if ($i >= count($lista)) break;
                $casa = $lista[$i];
                write_to_console(json_encode($casa));?>
                    <div class="row">
                        <div class="col-md-2 p-1 d-flex justify-content-center align-items-center border border-primary bg-light">
                            <img class="img-fluid p-1" style="width : 100px" src="imagenes/casa<?= $casa->id ?>.jpg" alt="Foto del alumno">
                        </div>
                        <div class="col-md-5 p-1 d-flex justify-content-center align-items-center border text-center pt-4 border-primary bg-light">
                            <?= $casa->descripcion ?>
                        </div>
                        <div class="col-md-1 p-1 d-flex justify-content-center align-items-center border text-center pt-4 border-primary bg-light">
                            <?= $casa->superficie ?><?= "mt<sup>2</sup>" ?>
                        </div>
                        <div class="col-md-2 p-1 d-flex justify-content-center align-items-center border text-center pt-4 border-primary bg-light">
                            <?= $casa->precio ?><?= "€" ?>
                        </div>
                        <div class="col-md-2 p-1 d-flex justify-content-center align-items-center text-center pt-4 border border-primary bg-light">
                        <button type="button" class="btn btn-primary btn-sm"  onclick='carga(<?=json_encode($casa)?>)'>Seleccionar</button>
                        </div>
                    </div>
        <?php }?>
            <nav aria-label="Page navigation example">
		        <ul class="pagination">
			        <li class="page-item">
			            <a class="page-link" href="<?php if($_SESSION['actual'] == 0){echo '#';} else {echo '?actual='. $_SESSION['actual'] -1;}?>" aria-label="Previous">
			            	<span aria-hidden="true">&laquo;</span>
			            	<span class="sr-only"></span>
			            </a>
			        </li>
			        <?php for($i = 0; $i< $_SESSION["paginas"];$i++) { ?>
			        	<li class="page-item <?php if($_SESSION['actual'] == $i){echo 'active';}?>"><a class="page-link" href="<?php {echo '?actual='.$i;} ?>"><?= $i+1 ?></a></li>
			        <?php } ?>

			        <li class="page-item">
			            <a class="page-link" href="<?php if($_SESSION['actual'] == $_SESSION["paginas"]-1){echo '#';} else {echo '?actual='. $_SESSION['actual'] +1;}?>" aria-label="Next">
			            	<span aria-hidden="true">&raquo;</span>
			            	<span class="sr-only"></span>
			            </a>
			        </li>
		        </ul>
		    </nav>
        </div>
        <div class="col-4 p-3 border border-primary rounded-3 bg-light" >
            <div class="card">
            <img src="./imagenes/casa.jpg" id="foto" class="card-img-top" alt="Foto de la Casa">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" ><label><strong>Descripcion:</strong></label> <span id="descripcion"></span></li>
                <li class="list-group-item" ><label><strong>Id:</strong></label> <span id="id"></span></li>
                <li class="list-group-item" ><label><strong>Año:</strong></label> <span id="anio"></span></li>
                <li class="list-group-item" ><label><strong>Garaje:</strong></label> <span id="garaje"></span></li>
                <li class="list-group-item" ><label><strong>Dormitorios:</strong></label> <span id="dormitorios"></span></li>
                <li class="list-group-item" ><label><strong>Baños:</strong></label> <span id="banios"></span></li>
                <li class="list-group-item" ><label><strong>Superficie:</strong></label> <span id="superficie"></span></li>
                <li class="list-group-item" ><label><strong>Precio:</strong></label> <span id="precio"></span></li>
            </ul>
        </div>
        </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="./componentes/cuerpo.js" defer></script>
</body>
</html>
