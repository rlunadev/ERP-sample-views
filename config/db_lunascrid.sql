# MySQL-Front 5.1  (Build 4.2)

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE */;
/*!40101 SET SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES */;
/*!40103 SET SQL_NOTES='ON' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;


# Host: localhost    Database: db_lunascrid
# ------------------------------------------------------
# Server version 5.6.18-enterprise-commercial-advanced

#
# Source for table tbl_actividadeconomica
#

DROP TABLE IF EXISTS `tbl_actividadeconomica`;
CREATE TABLE `tbl_actividadeconomica` (
  `id_actividadEconomica` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT '0000-00-00',
  PRIMARY KEY (`id_actividadEconomica`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_actividadeconomica
#

LOCK TABLES `tbl_actividadeconomica` WRITE;
/*!40000 ALTER TABLE `tbl_actividadeconomica` DISABLE KEYS */;
INSERT INTO `tbl_actividadeconomica` VALUES (1,'Empresa constructora de Edificios y casas','0000-00-00');
INSERT INTO `tbl_actividadeconomica` VALUES (6,'335t','0000-00-00');
INSERT INTO `tbl_actividadeconomica` VALUES (7,'335t','0000-00-00');
/*!40000 ALTER TABLE `tbl_actividadeconomica` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_ciudad
#

DROP TABLE IF EXISTS `tbl_ciudad`;
CREATE TABLE `tbl_ciudad` (
  `id_ciudad` int(11) NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_ciudad`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_ciudad
#

LOCK TABLES `tbl_ciudad` WRITE;
/*!40000 ALTER TABLE `tbl_ciudad` DISABLE KEYS */;
INSERT INTO `tbl_ciudad` VALUES (1,'La Paz');
INSERT INTO `tbl_ciudad` VALUES (2,'Cochabamba');
INSERT INTO `tbl_ciudad` VALUES (3,'Oruro');
/*!40000 ALTER TABLE `tbl_ciudad` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_egreso_producto
#

DROP TABLE IF EXISTS `tbl_egreso_producto`;
CREATE TABLE `tbl_egreso_producto` (
  `id_egresoproducto` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `id_plan_de_cuentas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_egresoproducto`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_egreso_producto
#

LOCK TABLES `tbl_egreso_producto` WRITE;
/*!40000 ALTER TABLE `tbl_egreso_producto` DISABLE KEYS */;
INSERT INTO `tbl_egreso_producto` VALUES (1,'Inventario de Materiales',55);
/*!40000 ALTER TABLE `tbl_egreso_producto` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_ingreso_producto
#

DROP TABLE IF EXISTS `tbl_ingreso_producto`;
CREATE TABLE `tbl_ingreso_producto` (
  `id_ingresoproducto` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `id_plandecuenta` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_ingresoproducto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_ingreso_producto
#

LOCK TABLES `tbl_ingreso_producto` WRITE;
/*!40000 ALTER TABLE `tbl_ingreso_producto` DISABLE KEYS */;
INSERT INTO `tbl_ingreso_producto` VALUES (1,'Inventario de materiales',10);
INSERT INTO `tbl_ingreso_producto` VALUES (2,'ds',15);
INSERT INTO `tbl_ingreso_producto` VALUES (3,'df',30);
/*!40000 ALTER TABLE `tbl_ingreso_producto` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_parametros
#

DROP TABLE IF EXISTS `tbl_parametros`;
CREATE TABLE `tbl_parametros` (
  `id_parametro` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_comercial` varchar(255) DEFAULT NULL,
  `rubro` varchar(100) DEFAULT NULL,
  `nombre_nit` varchar(100) DEFAULT NULL,
  `nit` int(11) DEFAULT NULL,
  `representante_propietario` varchar(100) DEFAULT NULL,
  `copia_correo` varchar(255) DEFAULT NULL,
  `ci_propietario` int(11) DEFAULT NULL,
  `logotipo` varchar(255) DEFAULT NULL,
  `zona_horaria` varchar(100) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `sitio_web` varchar(100) DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `observaciones` blob,
  `n_fundempresa` int(11) DEFAULT '0',
  `n_infocal` int(11) DEFAULT '0',
  `n_licencia_funcionamiento` int(11) DEFAULT '0',
  `n_rex` int(11) DEFAULT '0',
  `n_seguro_medico` int(11) DEFAULT '0',
  `n_empleador` int(11) DEFAULT '0',
  `n_afiliado` int(11) DEFAULT '0',
  `telefono` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `n_direccion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_parametro`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_parametros
#

LOCK TABLES `tbl_parametros` WRITE;
/*!40000 ALTER TABLE `tbl_parametros` DISABLE KEYS */;
INSERT INTO `tbl_parametros` VALUES (1,'lunascrids','4','ronald luna',12341,'rluna','info@lunascrid.c',6765572,'hola','Bolivia','3','www.lunscrid.com','2016-12-10',X'6E616E',1,0,0,0,0,0,0,740020701,'ronaldluna123@hotmail.com',59144401);
/*!40000 ALTER TABLE `tbl_parametros` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_plandecuentas
#

DROP TABLE IF EXISTS `tbl_plandecuentas`;
CREATE TABLE `tbl_plandecuentas` (
  `id_plandecuenta` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(30) DEFAULT NULL,
  `cuenta` varchar(255) DEFAULT NULL,
  `moneda` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_plandecuenta`)
) ENGINE=InnoDB AUTO_INCREMENT=309 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_plandecuentas
#

LOCK TABLES `tbl_plandecuentas` WRITE;
/*!40000 ALTER TABLE `tbl_plandecuentas` DISABLE KEYS */;
INSERT INTO `tbl_plandecuentas` VALUES (1,'1.',' ACTIVO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (2,'1.03.','','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (3,'1.1.','  ACTIVO CORRIENTE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (4,'1.1.01.','    ACTIVO DISPONIBLE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (5,'1.1.01.01.','        CAJAS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (6,'1.1.01.01.01.','                Caja Moneda Nacional','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (7,'1.1.01.01.02.','                Caja Moneda Extranjera','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (8,'1.1.01.01.03.','                Caja Chica Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (9,'1.1.01.01.04.','                Caja Chica Oficina Central','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (10,'1.1.01.01.05.','                Caja Chica Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (11,'1.1.01.01.06.','                Transferencia de Fondos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (12,'1.1.01.02.','        BANCOS CUENTAS CORRIENTES/AHORRO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (13,'1.1.01.02.01.','                Banco Mercantil Santa Cruz Cta. 4010850327','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (14,'1.1.01.02.02.','                Banco Mercantil Santa Cruz Cta. 4010851801','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (15,'1.1.01.02.03.','                Banco Mercantil Santa Cruz Cta. USD 4010850334','Dolares');
INSERT INTO `tbl_plandecuentas` VALUES (16,'1.1.01.02.04.','                Banco Mercantil Santa Cruz Cta. Juan 4025417171','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (17,'1.1.01.05.','        DEPOSITO A PLAZO FIJO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (18,'1.1.01.05.01.','                DPF Menor a 1 año','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (19,'1.1.01.05.02.','                DPF Mayor a 1 año','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (20,'1.1.02.','    ACTIVO EXIGIBLE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (21,'1.1.02.01.','        CUENTAS A COBRAR A CLIENTES','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (22,'1.1.02.01.01.','                Clientes por cobrar Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (23,'1.1.02.01.02.','                Clientes por cobrar colegio medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (24,'1.1.02.02.','        CUENTAS POR COBRAR AL PERSONAL','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (25,'1.1.02.02.01.','                Anticipo al Personal','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (26,'1.1.02.02.02.','                Prestamo al Personal','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (27,'1.1.02.02.03.','                Cuenta por Cobrar al Personal Externo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (28,'1.1.02.02.04.','                ECR Mary Luz Ramos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (29,'1.1.02.02.05.','                ECR Ana Soria','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (30,'1.1.02.02.06.','                ECR Gerald Tordoya','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (31,'1.1.02.02.07.','                ECR Juan Choque','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (32,'1.1.02.02.08.','                ECR Otros','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (33,'1.1.02.02.09.','                ECR Omar Aruquipa Collet','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (34,'1.1.02.02.10.','                ECR Jorge Iriarte Vaca','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (35,'1.1.02.02.11.','                ECR Juan Sebastian Iriarte Tineo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (36,'1.1.02.02.12.','                ECR Alejandro Fernandez Tineo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (37,'1.1.02.02.13.','                ECR Pablo Torrico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (38,'1.1.02.02.14.','                ECR Eduarda Paucara','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (39,'1.1.02.03.','        CUENTAS DE SOCIOS POR COBRAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (40,'1.1.02.03.01.','                Anticipo Utilidades Jorge Iriarte Vaca','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (41,'1.1.02.03.02.','                Anticipo Utilidades Juan Sebastian Iriarte Tineo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (42,'1.1.02.03.03.','                Anticipo Utilidades Alejandro Fernandez Tineo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (43,'1.1.02.04.','        RECARGOS POR INFORMAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (44,'1.1.02.04.01.','                Recargo Por Informar al Personal','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (45,'1.1.02.04.02.','                Recargo Por Informar Otros','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (46,'1.1.02.05.','        CUENTAS FISCALES POR COBRAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (47,'1.1.02.05.01.','                Credito Fiscal IVA 13%','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (48,'1.1.02.05.02.','                IUE por compensar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (49,'1.1.02.05.03.','                Credito Fiscal Transitorio','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (50,'1.1.02.06.','        DOCUMENTOS POR COBRAR BOLETAS GARANTIA','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (51,'1.1.02.06.01.','                Boleta de Garantia Prepagada','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (52,'1.1.02.06.02.','                Boleta Garantia Linea Credito Activo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (53,'1.1.02.07.','        OTROS DEUDAS POR COBRAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (54,'1.1.02.07.01.','                Depositos en Garantia','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (55,'1.1.02.07.02.','                Retenciones de fondos en Bancos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (56,'1.1.02.07.03.','                Cta. Cte. Valkure por cobrar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (57,'1.1.03.','    ACTIVO REALIZABLE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (58,'1.1.03.01.','        INVENTARIOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (59,'1.1.03.01.02.','                Inventario de materiales Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (60,'1.1.03.01.03.','                Inventario de materiales Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (61,'1.1.03.01.04.','                Inventario de materiales Canalizacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (62,'1.1.03.02.','        MERCADERIA EN TRANSITO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (63,'1.1.03.02.01.','                Mercaderia en Transito','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (64,'1.1.03.03.','        ANTICIPO A PROVEEDORES','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (65,'1.1.03.03.01.','                Anticipo a Proveedores P/Cobrar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (66,'1.1.03.03.02.','                Anticipo a Proveedores de Servicios','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (67,'1.1.03.03.03.','                Anticipo a Proveedores de Bienes','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (68,'1.1.03.03.04.','                Anticipo a Contratistas Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (69,'1.1.03.03.05.','                Anticipo a Contratistas Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (70,'1.1.03.03.06.','                Anticipo a Contratistas Canalizacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (71,'1.1.04.','    INVERCIONES','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (72,'1.1.04.01.','        ACCIONES','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (73,'1.1.04.01.01.','                Participaciones','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (74,'1.1.04.01.02.','                Acciones','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (75,'1.1.04.01.03.','                Acciones Telefonicas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (76,'1.2.','  ACTIVO NO CORRIENTE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (77,'1.2.01.','    ACTIVO BIENES DE USO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (78,'1.2.01.01.','        ACTIVO FIJO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (79,'1.2.01.01.01.','                Terrenos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (80,'1.2.01.01.02.','                Edificios','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (81,'1.2.01.01.02.01.','                                Instalaciones Varias','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (82,'1.2.01.01.03.','                (-)Depreciacion Acum. de Edificio','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (83,'1.2.01.01.04.','                Muebles y Enseres','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (84,'1.2.01.01.05.','                (-)Depreciacion Acum. de Muebles y Enseres','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (85,'1.2.01.01.06.','                Vehiculos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (86,'1.2.01.01.07.','                (-)Depreciacion Acum. de Vehiculos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (87,'1.2.01.01.08.','                Equipo de Computacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (88,'1.2.01.01.09.','                (-)Depreciacion Acum. de Equipo de Computacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (89,'1.2.01.01.10.','                Maquinarias','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (90,'1.2.01.01.11.','                (-)Depreciacion Acum. de Maquinaria','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (91,'1.2.01.01.12.','                Herramientas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (92,'1.2.01.01.13.','                (-)Depreciacion Acum. herramientas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (93,'1.2.01.01.14.','                Instalaciones Varias','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (94,'1.2.01.01.15.','                (-)A. Fijos Depre Acum.','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (95,'1.2.01.02.','        ACTIVO INTANGIBLE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (96,'1.2.01.02.01.','                Pagina WEB','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (97,'1.2.01.02.02.','                Sistema Informatico Gemgloo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (98,'1.2.01.02.03.','                Marca o Nombre Comercial','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (99,'1.2.02.','    ACTIVO DIFERIDO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (100,'1.2.02.01.','        GASTOS PAGADOS POR ADELANTADO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (101,'1.2.02.01.01.','                Gastos de Organizacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (102,'1.2.02.01.02.','                Seguro Pagado Por adelantado','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (103,'1.2.02.01.03.','                Alquiler Pagado Por adelantado','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (104,'1.2.02.01.04.','                Suscripciones Pagados Por Adelantado','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (105,'1.2.02.01.05.','                Inventario de Material de Escritorio','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (106,'1.2.02.01.06.','                Interes Pagado P/Adelantado','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (107,'1.2.02.01.07.','                Servicio de Internet Por Adelantado','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (108,'1.2.02.01.08.','                Gastos de Instalacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (109,'1.2.03.','    OTROS ACTIVOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (110,'1.2.03.01.','        BOLETAS DE GARANTIA BAJO LINEA CREDITO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (111,'1.2.03.01.01.','                xxx','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (112,'2.',' PASIVO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (113,'2.1.','  PASIVO CORRIENTE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (114,'2.1.01.','    CUENTAS POR PAGAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (115,'2.1.01.01.','        CUENTAS DE PROVEEDORES POR PAGAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (116,'2.1.01.01.01.','                Proveedores Por pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (117,'2.1.01.01.02.','                Seguros por Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (118,'2.1.01.02.','        RETENCIONES FISCALES POR PAGAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (119,'2.1.01.02.01.','                RC-IVA Dependientes P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (120,'2.1.01.02.02.','                RC-IVA Terceros P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (121,'2.1.01.02.03.','                Debito Fiscal IVA P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (122,'2.1.01.02.04.','                IVA a Terceros P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (123,'2.1.01.02.05.','                IT a Terceros P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (124,'2.1.01.02.06.','                IUE a Terceros P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (125,'2.1.01.03.','        IMPUESTOS POR PAGAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (126,'2.1.01.03.01.','                Impuestos Transacciones P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (127,'2.1.01.03.02.','                Impuestos Por Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (128,'2.1.01.03.03.','                Impuestos Sobre Utilidades IUE P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (129,'2.1.01.03.04.','                IVA por Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (130,'2.1.01.04.','        SERVICIOS BASICOS POR PAGAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (131,'2.1.01.04.01.','                Servicios de Luz y Agua Por Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (132,'2.1.01.04.02.','                Servicios de Telf. Celular Por Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (133,'2.1.01.04.03.','                Servicios de Telefono P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (134,'2.1.01.04.04.','                Servicios de Internet P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (135,'2.1.01.05.','        COMISIONES POR PAGAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (136,'2.1.01.05.01.','                Comisiones Ventas Dptos. Por Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (137,'2.1.01.06.','        BOLETAS DE GARANTIAS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (138,'2.1.01.06.01.','                Boletas de Garantias L/C Por Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (139,'2.1.01.07.','        CUENTA AL PERSONAL POR PAGAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (140,'2.1.01.07.01.','                Sueldos y Salarios P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (141,'2.1.01.07.02.','                Aguinaldo P/Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (142,'2.1.01.07.03.','                AFPS por Pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (143,'2.1.01.07.04.','                CNS. Por pagar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (144,'2.1.01.08.','        INGRESOS COBRADOS POR ADELANTADO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (145,'2.1.01.08.01.','                Alquiler Cobrado Por Adelantado','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (146,'2.1.01.08.02.','                Intereses Cobrados Por Adelantado','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (147,'2.1.01.08.03.','                Anticipo de Clientes Venta Dpto Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (148,'2.1.01.08.04.','                Anticipo de Clientes Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (149,'2.1.01.08.05.','                Anticipo de Clientes Venta Parqueos Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (150,'2.1.01.08.06.','                Anticipo de Clientes Venta Bauleras Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (151,'2.1.01.08.07.','                Anticipo de Clientes Venta Amoblado Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (152,'2.1.01.08.08.','                Anticipo de Clientes Venta Parqueos Claveles del S','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (153,'2.1.01.08.09.','                Anticipo de Clientes Venta Bauleras Claveles del S','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (154,'2.1.01.08.10.','                Anticipo de Clientes Venta Amoblado Claveles del S','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (155,'2.1.01.08.11.','                Anticipos a Identificar','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (156,'2.2.','  PASIVO NO CORRIENTE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (157,'2.2.01.','    CUENTAS POR PAGAR','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (158,'2.2.01.01.','        OBLIGACIONES BANCARIAS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (159,'2.2.01.01.10.','                Tarjeta Credito','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (160,'2.2.01.02.','        PREVISIONES Y PROVISIONES','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (161,'2.2.01.02.01.','                Prevision para indemnizacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (162,'2.2.01.02.02.','                Prevision para Aguinaldo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (163,'3.',' PATRIMONIO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (164,'3.1.','  CAPITAL','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (165,'3.1.01.','    CAPITAL SOCIAL','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (166,'3.1.01.01.','        CAPITAL SOCIAL','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (167,'3.1.01.01.01.','                Capital Socio Juan Sebastian Iriarte Tineo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (168,'3.1.01.01.02.','                Capital Socio Alejandro Tineo Fernandez','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (169,'3.2.','  AJUSTE DE CAPITAL','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (170,'3.2.01.','    RESERVAS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (171,'3.2.01.01.','        RESERVAS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (172,'3.2.01.01.01.','                Ajuste de Capital','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (173,'3.2.02.','    AJUSTE','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (174,'3.2.02.01.','        AJUSTE AL PATRIMONIO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (175,'3.2.02.01.01.','                Ajuste Global al Patrimonio','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (176,'3.2.02.01.02.','                Ajuste de reservas Patrimoniales','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (177,'3.3.03.','    RESULTADOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (178,'3.3.03.01.','        UTILIDADES O PERDIDA ACUMULADA','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (179,'3.3.03.01.01.','                Utilidad Acumulada de la Gestion Anterior','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (180,'3.3.03.01.2','                (-) Perdida Acumulada de la Gestion Anterior','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (181,'3.3.03.02.','        UTILIDAD O PERDIDA DE LA GESTION','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (182,'3.3.03.02.01.','                Utilidad de la Gestion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (183,'3.3.03.02.02.','                (-) Perdida de la Gestion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (184,'4.',' INGRESOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (185,'4.1.','  INGRESOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (186,'4.1.01.','    INGRESOS ORDINARIOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (187,'4.1.01.01.','        INGRESOS POR VENTAS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (188,'4.1.01.01.01.','                Ventas Servicios de Construccion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (189,'4.1.01.01.02.','                Ventas de Departamentos Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (190,'4.1.01.01.03.','                Recargo sobre Ventas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (191,'4.1.01.01.04.','                (-) Descuentos sobre Ventas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (192,'4.1.01.01.05.','                (-) Devolucion de Ventas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (193,'4.1.01.01.06.','                Ventas Bauleras Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (194,'4.1.01.01.07.','                Ventas Parqueos Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (195,'4.1.01.01.08.','                Ventas Amoblado Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (196,'4.1.01.01.09.','                Ventas Bauleras Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (197,'4.1.01.01.10.','                Ventas Parqueos Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (198,'4.1.01.01.11.','                Ventas Amoblado Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (199,'4.1.02.','    INGRESOS NO ORDINARIOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (200,'4.1.02.01.','        INGRESOS NO ORDINARIOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (201,'4.1.02.01.01.','                Comisiones Percibidos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (202,'4.1.02.01.02.','                Interes Percibidos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (203,'4.1.02.01.03.','                Diferencia de Tipo de Cambio','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (204,'4.1.02.01.04.','                Descuentos por Compras','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (205,'4.1.02.01.05.','                Ajuste de Inventario','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (206,'4.1.02.01.06.','                Ingresos AITB','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (207,'4.1.02.01.07.','                Otros Ingresos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (208,'5.',' COSTOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (209,'5.1.','  COSTO DE LA MERCADERIA','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (210,'5.1.01.','    COSTO DE LA MERCADERIA','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (211,'5.1.01.01.','        COSTO DE LA MERCADERIA VENDIDA','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (212,'5.1.01.01.01.','                Costo de Obra Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (213,'5.1.01.01.02.','                Costo de Obra Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (214,'5.1.01.01.03.','                Costo de Obra Canalizacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (215,'6.',' GASTOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (216,'6.1.','  GASTOS ADMINISTRATIVOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (217,'6.1.01.','    GASTOS ADMINISTRATIVOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (218,'6.1.01.01.','        GASTOS ADMINISTRATIVOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (219,'6.1.01.01.01.','                Sueldos y Salarios','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (220,'6.1.01.01.02.','                Bono de Antiguedad','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (221,'6.1.01.01.03.','                Subsidios al personal','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (222,'6.1.01.01.04.','                Aguinaldos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (223,'6.1.01.01.05.','                Vacaciones','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (224,'6.1.01.01.06.','                Indemnizacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (225,'6.1.01.01.07.','                Aporte Social CNS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (226,'6.1.01.01.08.','                Aporte Social AFPS. Patronal','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (227,'6.1.01.01.09.','                Seguro Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (228,'6.1.01.01.10.','                Servicios Basicos Energia Electrica','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (229,'6.1.01.01.11.','                Servicios Telefonicos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (230,'6.1.01.01.12.','                Gastos de Alquileres','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (231,'6.1.01.01.13.','                Gastos de Fotocopias e Impresiones','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (232,'6.1.01.01.14.','                Material de Escritorio','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (233,'6.1.01.01.15.','                Gastos de Seguros','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (234,'6.1.01.01.16.','                Publicidad','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (235,'6.1.01.01.17.','                Correspondencia y Correo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (236,'6.1.01.01.18.','                Impuesto a las Transacciones','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (237,'6.1.01.01.19.','                Multas e Intereses Impositivos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (238,'6.1.01.01.20.','                Impuestos y patentes municipales','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (239,'6.1.01.01.21.','                Gastos suscripcion Fundempresa otros','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (240,'6.1.01.01.22.','                Mantenimiento equipos de oficina','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (241,'6.1.01.01.23.','                Depreciacion de Activos Fijos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (242,'6.1.01.01.24.','                Transporte publico y movilidad Urbana','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (243,'6.1.01.01.25.','                Insumos para Servicio de Catering','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (244,'6.1.01.01.26.','                Gastos medicos del personal','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (245,'6.1.01.01.27.','                Monitoreo de Vehiculos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (246,'6.1.01.01.28.','                Capacitacion al Personal','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (247,'6.1.01.01.29.','                Piscigranja alimento y gastos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (248,'6.1.01.01.30.','                Muestreo y Analisis Ambientales','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (249,'6.1.01.01.31.','                Combustibles y Lubricantes','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (250,'6.1.01.01.32.','                Peajes','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (251,'6.1.01.01.33.','                Equipo de Proteccion Personal EPP','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (252,'6.1.01.01.34.','                Materias e Insumos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (253,'6.1.01.01.35.','                Agroquimicos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (254,'6.1.01.01.36.','                Plantas y Plantines','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (255,'6.1.01.01.37.','                Herramientas Menores','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (256,'6.1.01.01.38.','                Gastos Tramites Legales y Notariales','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (257,'6.1.01.01.39.','                Honorarios Profesionales','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (258,'6.1.01.01.40.','                Mantenimiento y reparacion oficinas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (259,'6.1.01.01.41.','                Gastos de viajes y viaticos y alimentacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (260,'6.1.01.01.42.','                Otros Bonos y Reintegros','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (261,'6.1.01.01.43.','                AFPÂ´S','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (262,'6.1.01.01.44.','                Alimentacion del personal','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (263,'6.1.01.01.46.','                Gastos de Representacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (264,'6.1.01.01.47.','                Servicio de internet','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (265,'6.1.01.01.48.','                Gastos de imprenta','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (266,'6.1.01.01.49.','                Otros gastos de operacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (267,'6.1.01.01.50.','                Servicios Basicos Agua Potable','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (268,'6.1.01.01.51.','                Tarjetas telefonicas Viva Entel Tigo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (269,'6.1.01.01.52.','                Gastos de comercializacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (270,'6.1.06.','    GASTOS FINANCIEROS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (271,'6.1.06.01.','        GASTOS BANCARIO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (272,'6.1.06.01.01.','                Gasto de Interes Bancario','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (273,'6.1.06.01.02.','                Gastos de Chequeras y comisiones','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (274,'6.1.06.01.03.','                ITF. Impuesto Transacciones Financieras','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (275,'6.1.07.','    MANTENIMIENTO VEHICULOS Y MAQUINAS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (276,'6.1.07.01.','        MANTENIMIENTO VEHICULOS Y MAQUINAS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (277,'6.1.07.01.01.','                Volqueta Placa E/T','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (278,'6.1.07.01.02.','                Volqueta Placa E/T','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (279,'6.1.07.01.03.','                Retroexcavadora Placa E/T','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (280,'6.1.07.01.04.','                Vehiculo Suzuki Placa E/T','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (281,'6.1.07.01.12.','                Mtto. Maquinas y equipos varios','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (282,'6.1.08.','    GASTOS OPERATIVOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (283,'6.1.08.01.','        GASTO OPERATIVO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (284,'6.1.08.01.01.','                Honorarios Subcontratistas Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (285,'6.1.08.01.02.','                Honorarios Subcontratistas Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (286,'6.1.08.01.03.','                Honorarios Subcontratistas Canalizacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (287,'6.1.08.01.04.','                Alquiler Maquinaria Pesada Claveles del Sur','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (288,'6.1.08.01.05.','                Alquiler Maquinaria Pesada Colegio Medico','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (289,'6.1.08.01.06.','                Alquiler Maquinaria Pesada Canalizacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (290,'6.1.09.','    GASTOS GENERALES','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (291,'6.1.09.01.','        GASTOS GENERALES','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (292,'6.1.09.01.01.','                Devolucion Compras Anticipadas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (293,'6.2.','  EGRESOS NO ORDINARIOS','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (294,'6.2.01.','    EGRESOS NO ORDINARIO','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (295,'6.2.01.01.','        GASTOS GENERALES','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (296,'6.2.01.01.01.','                Gastos por A.I.T.B.','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (297,'6.2.01.01.02.','                Mermas y Falla en Inventario','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (298,'6.2.01.01.03.','                Perdida en Cuentas Incobrables','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (299,'6.2.01.01.04.','                Donaciones y Obsequios','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (300,'6.2.01.01.05.','                Diferencia T/C','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (301,'6.2.01.02.','        GASTOS DE DEPRECIACION','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (302,'6.2.01.02.01.','                Depreciacion Equipo de computacion','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (303,'6.2.01.02.02.','                Depreciacion Herramientas','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (304,'6.2.01.02.03.','                Depreciacion Vehiculos','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (305,'6.2.01.02.04.','                Depreciacion Maquinaria y equipo','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (306,'6.2.01.02.05.','                Depreciacion Muebles y Enseres','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (307,'6.2.01.02.06.','                Depreciacion Edificios','Bolivianos');
INSERT INTO `tbl_plandecuentas` VALUES (308,'6.2.01.02.07.','                Depreciacion Instalaciones Varias','Bolivianos');
/*!40000 ALTER TABLE `tbl_plandecuentas` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_rubro
#

DROP TABLE IF EXISTS `tbl_rubro`;
CREATE TABLE `tbl_rubro` (
  `id_rubro` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_rubro`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_rubro
#

LOCK TABLES `tbl_rubro` WRITE;
/*!40000 ALTER TABLE `tbl_rubro` DISABLE KEYS */;
INSERT INTO `tbl_rubro` VALUES (1,'Servicio');
INSERT INTO `tbl_rubro` VALUES (2,'Comercial');
INSERT INTO `tbl_rubro` VALUES (3,'trasnportes');
INSERT INTO `tbl_rubro` VALUES (4,'alimentos');
INSERT INTO `tbl_rubro` VALUES (5,'ventas');
INSERT INTO `tbl_rubro` VALUES (6,'compras');
INSERT INTO `tbl_rubro` VALUES (7,'alquiler');
/*!40000 ALTER TABLE `tbl_rubro` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_sucursal
#

DROP TABLE IF EXISTS `tbl_sucursal`;
CREATE TABLE `tbl_sucursal` (
  `id_sucursal` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) DEFAULT NULL,
  `nombre_comercial` varchar(200) DEFAULT NULL,
  `n_sucursal` int(11) DEFAULT NULL,
  `direccion` blob,
  `telefono` int(11) DEFAULT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  `n_autorizacion` int(11) DEFAULT NULL,
  `n_factura_inicial` int(11) DEFAULT NULL,
  `llave_dosificacion` varchar(255) DEFAULT NULL,
  `n_factura_final` int(11) DEFAULT NULL,
  `fecha_limite_emision` date DEFAULT NULL,
  `n_autorizacion_manual` int(11) DEFAULT NULL,
  `n_factura_inicial_manual` int(11) DEFAULT NULL,
  `fecha_limite_emision_manual` date DEFAULT NULL,
  `n_factura_final_manual` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_sucursal`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_sucursal
#

LOCK TABLES `tbl_sucursal` WRITE;
/*!40000 ALTER TABLE `tbl_sucursal` DISABLE KEYS */;
INSERT INTO `tbl_sucursal` VALUES (17,NULL,'56',5,X'736F706F6361636869',5,'Chuquisaca',5,5,'5',5,NULL,5,5,NULL,5);
INSERT INTO `tbl_sucursal` VALUES (18,NULL,'56',5,X'736F706F6361636869',5,'Chuquisaca',5,5,'5',5,NULL,5,5,NULL,5);
/*!40000 ALTER TABLE `tbl_sucursal` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_tc
#

DROP TABLE IF EXISTS `tbl_tc`;
CREATE TABLE `tbl_tc` (
  `id_tc` int(11) NOT NULL AUTO_INCREMENT,
  `dolar_venta_real` decimal(10,2) DEFAULT NULL,
  `dolar_venta_descuento` decimal(10,2) DEFAULT NULL,
  `dolar_venta_sistema` decimal(10,2) DEFAULT NULL,
  `dolar_compra_real` decimal(10,2) DEFAULT NULL,
  `dolar_compra_descuento` decimal(10,2) DEFAULT NULL,
  `dolar_compra_sistema` decimal(10,2) DEFAULT NULL,
  `ufv` decimal(10,5) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`id_tc`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_tc
#

LOCK TABLES `tbl_tc` WRITE;
/*!40000 ALTER TABLE `tbl_tc` DISABLE KEYS */;
INSERT INTO `tbl_tc` VALUES (1,6.91,6.95,6.93,6.94,6.95,6.96,2.3245,'2012-12-12');
/*!40000 ALTER TABLE `tbl_tc` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table tbl_usuarios
#

DROP TABLE IF EXISTS `tbl_usuarios`;
CREATE TABLE `tbl_usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) DEFAULT NULL,
  `password` varchar(70) DEFAULT NULL,
  `logotipo` blob,
  `nombres` varchar(255) DEFAULT NULL,
  `sucursal` varchar(100) DEFAULT NULL,
  `grupo_usuario` varchar(100) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

#
# Dumping data for table tbl_usuarios
#

LOCK TABLES `tbl_usuarios` WRITE;
/*!40000 ALTER TABLE `tbl_usuarios` DISABLE KEYS */;
INSERT INTO `tbl_usuarios` VALUES (1,'rluna','123',NULL,'ronald luna','general','admin','2012-12-12');
/*!40000 ALTER TABLE `tbl_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
