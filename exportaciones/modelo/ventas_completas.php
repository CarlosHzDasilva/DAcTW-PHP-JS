<?php
    require_once "db.php";

    class Ventas_Completas
    {
        private $pdo;

        public function __construct() {
            try {
                $this->pdo = new DB;
            } catch (PDOException $e) {
              echo $e;
            }
        }

        public function listar($filtro,$pagina) {
            try {
                $resultado = $this->pdo->conexion()->prepare("Select * from tabla_completa where producto like :filtro limit :pagina,10");
                $resultado->bindValue(':filtro',"%".$filtro."%",PDO::PARAM_STR);
                $resultado->bindValue(':pagina',(intval($pagina)-1) * 10,PDO::PARAM_INT);
                $resultado->execute();
                return $resultado->fetchall(PDO::FETCH_OBJ);
            } catch (Exception $e){
                echo $e->getMessage();
            }
        }


        public function contar($filtro) {
            try {
                $resultado = $this->pdo->conexion()->prepare("Select count(*) as cantidad from tabla_completa where producto like :filtro");
                $resultado->bindValue(':filtro',"%".$filtro."%",PDO::PARAM_STR);
                $resultado->execute();
                return $resultado->fetch(PDO::FETCH_OBJ);
            } catch (Exception $e){
                echo $e->getMessage();
            }
        }
    }
?>
