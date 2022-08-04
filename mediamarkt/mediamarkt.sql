-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: mediamarkt
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `mediamarkt`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `mediamarkt` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;

USE `mediamar`;

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articulos` (
  `codigo` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `cod_familia` int(11) NOT NULL,
  `cod_marca` int(11) NOT NULL,
  `cod_tamanio` int(11) NOT NULL,
  `tipo` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `definicion` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `smart_tv` tinyint(1) NOT NULL,
  `android_tv` tinyint(1) NOT NULL,
  `medidas_sin_peana` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `color` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `usb` int(11) NOT NULL,
  `hdmi` int(11) NOT NULL,
  `wifi` tinyint(1) NOT NULL,
  `compatible` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `precio` float NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `cod_marca` (`cod_marca`,`cod_tamanio`),
  KEY `cod_familia` (`cod_familia`),
  KEY `cod_tamanio` (`cod_tamanio`),
  CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`cod_tamanio`) REFERENCES `tamanio` (`codigo`),
  CONSTRAINT `articulos_ibfk_2` FOREIGN KEY (`cod_marca`) REFERENCES `marca` (`codigo`),
  CONSTRAINT `articulos_ibfk_3` FOREIGN KEY (`cod_familia`) REFERENCES `familias` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
INSERT INTO `articulos` VALUES ('32661hn','ODL',1,1,1,'LED','HD',0,0,'730 mm / 431 mm / 90 mm','Negro',1,3,1,'',230),('32761HN-TAB','ODL',1,1,1,'LED','HD+',0,0,'73 cm / 43.2 cm / 8.3 cm','Negro',1,3,0,'',255),('32he5606','TV ODS',1,2,1,'LED','4k',1,0,'111.58 cm/ 48 cm/ 41cm','Negro',2,1,0,'Amazon Alexa',199),('40fe5606','200HZ PPI, TDT2',1,2,2,'LED','Full HD',0,0,'90.5 cm / 52.4 cm / 75 mm','Negro',1,2,0,'',2498),('43TU7125','Crystal UHD',1,3,3,'LED','4K',0,0,'','Gris',25,2,0,'Amazon Alexa',319),('50TU7125','Crystal UHD',1,3,4,'LED','4K Real',1,1,'111.58 cm / 64.37 cm / 5.95 cm','Gris',1,2,1,'Google Assistant',3598),('55p715','',1,4,5,'LED','UHD',1,1,'122.7 cm / 71.7 cm / 7.8','Plata',2,3,0,'Google Assistant',399),('55TU7125','Crystal UHD',1,3,5,'LED','4K',1,0,'123.05 cm / 70.72 cm / 5.95 cm','Gris',1,2,0,'Google Assistant',419),('55tu8505','',1,3,5,'LED','4K',1,0,'123 cm / 70.59 cm / 5.74 cm','Negro',2,3,0,'Google Assistant',499),('65tu7125','Crystal UHD',1,3,6,'LED','4K Real',1,0,'144.8 cm / 82.9 cm / 5.95 cm','Gris',2,3,0,'Google Assistant',599),('75q60t','QLED 4K 2020',1,3,7,'QLED','4K',1,0,'167 cm / 97 cm / 6 cm','Negro',2,3,0,'Google Assistant',1199),('75tu7125','Crystal UHD',1,3,7,'LED','4K Real',1,0,'167.22 cm / 95.77 cm / 5.95 cm','Gris',1,2,0,'Google Assistant',739),('mitv43','Mi TV 4S UHD',1,5,3,'LED','4K Real',0,1,'95.96 cm / 55.68 cm / 8.09 cm','Gris',3,3,0,'Google Assistant',299),('mitv55','Mi TV 4S UHD',1,5,5,'LED','4K',0,1,'123.16 cm / 71.08 cm / 8.35 cm','Gris',3,3,0,'Google Assistant',399),('t4305','',1,3,1,'LED','HD',0,0,'73.7 cm / 43.8 cm / 7.4 cm','Negro',1,2,0,'',1999);
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `articulos_completos`
--



--
-- Table structure for table `familias`
--

DROP TABLE IF EXISTS `familias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `familias` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `familia` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `familias`
--

LOCK TABLES `familias` WRITE;
/*!40000 ALTER TABLE `familias` DISABLE KEYS */;
INSERT INTO `familias` VALUES (1,'Televisores');
/*!40000 ALTER TABLE `familias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'OK'),(2,'Thomson'),(3,'Samsung'),(4,'TCL'),(5,'Xiaomi');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tamanio`
--

DROP TABLE IF EXISTS `tamanio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tamanio` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `tamanio` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tamanio`
--

LOCK TABLES `tamanio` WRITE;
/*!40000 ALTER TABLE `tamanio` DISABLE KEYS */;
INSERT INTO `tamanio` VALUES (1,'32\"'),(2,'40\"'),(3,'43\"'),(4,'50\"'),(5,'55\"'),(6,'65\"'),(7,'75\"');
/*!40000 ALTER TABLE `tamanio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `mediamarkt`
--

USE `mediamarkt`;

--
-- Final view structure for view `articulos_completos`
--

/*!50001 DROP TABLE IF EXISTS `articulos_completos`*/;
/*!50001 DROP VIEW IF EXISTS `articulos_completos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;

/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/* Create VIEW `articulos_completos` AS select `articulos`.`codigo` AS `codigo`,concat('tv',`articulos`.`tipo`,' ',`tamanio`.`tamanio`,' - ',`marca`.`marca`,' ',`articulos`.`descripcion`,' ',`articulos`.`definicion`,' ',if(`articulos`.`smart_tv`,'smart_tv',''),' ',if(`articulos`.`android_tv`,'android tv',''),' ',`articulos`.`compatible`) AS `descripcion`,`marca`.`marca` AS `marca`,`tamanio`.`tamanio` AS `tamanio`,`articulos`.`precio` AS `precio` from ((`articulos` join `marca` on(`articulos`.`cod_marca` = `marca`.`codigo`)) join `tamanio` on(`articulos`.`cod_tamanio` = `tamanio`.`codigo`)) order by `articulos`.`precio` ;*/
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31 17:09:57
