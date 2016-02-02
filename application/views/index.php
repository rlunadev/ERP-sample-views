<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Software de Gestión</title>
    <!-- tags -->
    <meta name="robots" content="index, follow">
    <meta name="keywords" content="Ronald Luna, Ronald Luna Ramos,ronald luna,software de gestion ideal para empresas ">
    <meta name="description" content="el mejor software de Bolivia">

	<link rel="stylesheet" href="./public/bower_components/bootstrap/css/bootstrap.min.css" type="text/css">
 	<link rel="stylesheet" href="./public/bower_components/bootstrap/css/AdminLTE.css" type="text/css">
    <link rel="stylesheet" href="./public/bower_components/bootstrap/css/bootstrap-media-lightbox.css" type="text/css">
    <link rel="stylesheet" href="./public/bower_components/bootstrap/css/carousel.css" type="text/css">
    <link rel="stylesheet" href="./public/bower_components/bootstrap/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="./public/bower_components/bootstrap/css/skin-blue.min.css" type="text/css">

    <!-- Construction JS File -->
    <!-- <script>window.jQuery || document.write('<script src="./public/bower_components/bootstrap/js/jquery-2.1.1.min.js"><\/script>')</script> -->
    <script src="./public/bower_components/bootstrap/js/jquery-2.1.1.min.js"></script>
    <script src="./public/bower_components/bootstrap/js/app.min.js"></script>
    <script src="./public/bower_components/bootstrap/js/bootstrap.min.js"></script>
    <script src="./public/bower_components/bootstrap/js/holder.min.js"></script>

    <!-- <script src="./public/bower_components/bower-angular-sanitize-master/angular-sanitize.js"></script> -->
    <script src="./public/bower_components/angular/angular.js"></script>
    <script src="./public/bower_components/angular-animate/angular-animate.js"></script>
    <script src="./public/bower_components/ng-file-upload/ng-file-upload.js"></script>

    <script src="./public/bower_components/angular-bootstrap/ui-bootstrap-tpls-1.1.0.js"></script>
    <script src="./public/bower_components/angular-resource/angular-resource.js"></script>
    <script src="./public/bower_components/angular-route/angular-route.js"></script>
    <script src="./public/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="./public/app.js"></script>

    <!-- rutas -->
    <script src="./public/routes/home.js"></script>
    <script src="./public/routes/inicio.js"></script>
    <script src="./public/routes/inventario.js"></script>
    <script src="./public/routes/recursos.js"></script>
    <script src="./public/routes/contabilidad.js"></script>
    <script src="./public/routes/activo.js"></script>
    <script src="./public/routes/ventas.js"></script>
    <script src="./public/routes/agenda.js"></script>

    <!-- controladores -->
    <script src="./public/controllers/main.js"></script>
    <script src="./public/controllers/inicio/inicio.js"></script>
    <script src="./public/controllers/inicio/inicio-empresa.js"></script>
    <script src="./public/controllers/inicio/inicio-sucursal.js"></script>
    <script src="./public/controllers/inicio/inicio-usuarios.js"></script>
    <script src="./public/controllers/inicio/inicio-grupos.js"></script>
    <script src="./public/controllers/inicio/inicio-parametros.js"></script>
    <script src="./public/controllers/inicio/inicio-configuracioncontable.js"></script>
    <script src="./public/controllers/inicio/inicio-bitacora.js"></script>
    <script src="./public/controllers/inicio/inicio-backup.js"></script>
    <!-- inventario -->
    <script src="./public/controllers/inventario/inventario.js"></script>
    <script src="./public/controllers/inventario/inventario-almacen.js"></script>
    <script src="./public/controllers/inventario/inventario-combinacion.js"></script>
    <script src="./public/controllers/inventario/inventario-control.js"></script>
    <script src="./public/controllers/inventario/inventario-egresoproducto.js"></script>
    <script src="./public/controllers/inventario/inventario-grupo.js"></script>
    <script src="./public/controllers/inventario/inventario-ingresoproducto.js"></script>
    <script src="./public/controllers/inventario/inventario-proveedores.js"></script>
    <script src="./public/controllers/inventario/inventario-solicitudproducto.js"></script>
    <script src="./public/controllers/inventario/inventario-tipocombinacion.js"></script>
    <script src="./public/controllers/inventario/inventario-tipoproducto.js"></script>
    <script src="./public/controllers/inventario/inventario-tiposervicio.js"></script>
    <script src="./public/controllers/inventario/inventario-traspasoproducto.js"></script>
    <!-- RRHH -->
    <script src="./public/controllers/recursos/recursos.js"></script>
    <script src="./public/controllers/recursos/recursos-aguinaldo.js"></script>
    <script src="./public/controllers/recursos/recursos-anticipo.js"></script>
    <script src="./public/controllers/recursos/recursos-bajamedica.js"></script>
    <script src="./public/controllers/recursos/recursos-bonos.js"></script>
    <script src="./public/controllers/recursos/recursos-cargo.js"></script>
    <script src="./public/controllers/recursos/recursos-departamento.js"></script>
    <script src="./public/controllers/recursos/recursos-descuentos.js"></script>
    <script src="./public/controllers/recursos/recursos-faltas.js"></script>
    <script src="./public/controllers/recursos/recursos-liquidacion.js"></script>
    <script src="./public/controllers/recursos/recursos-parametros.js"></script>
    <script src="./public/controllers/recursos/recursos-sueldos.js"></script>
    <script src="./public/controllers/recursos/recursos-trabajadores.js"></script>
    <script src="./public/controllers/recursos/recursos-vacaciones.js"></script>
    <!-- contabilidad -->
    <script src="./public/controllers/contabilidad/contabilidad.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-egresodinero.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-impuestomensual.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-ingresodinero.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-librocompras.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-librodiario.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-libroventas.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-plandecuenta.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-reportefinanciero.js"></script>
    <script src="./public/controllers/contabilidad/contabilidad-traspasodinero.js"></script>
    <!-- Activo -->
    <script src="./public/controllers/activo/activo.js"></script>
    <script src="./public/controllers/activo/activo-alta.js"></script>
    <script src="./public/controllers/activo/activo-baja.js"></script>
    <script src="./public/controllers/activo/activo-traspaso.js"></script>
    <script src="./public/controllers/activo/activo-tipo.js"></script>
    <!-- Ventas -->
    <script src="./public/controllers/ventas/ventas.js"></script>
    <script src="./public/controllers/ventas/ventas-centronegocios.js"></script>
    <script src="./public/controllers/ventas/ventas-clientes.js"></script>
    <script src="./public/controllers/ventas/ventas-cotizacion.js"></script>
    <script src="./public/controllers/ventas/ventas-cuentacobrar.js"></script>
    <script src="./public/controllers/ventas/ventas-cuentapagar.js"></script>
    <script src="./public/controllers/ventas/ventas-preventa.js"></script>
    <script src="./public/controllers/ventas/ventas-producto.js"></script>
    <script src="./public/controllers/ventas/ventas-proyectos.js"></script>
    <script src="./public/controllers/ventas/ventas-servicios.js"></script>
    <!-- agenda -->
    <script src="./public/controllers/agenda/agenda.js"></script>
    <script src="./public/controllers/agenda/agenda-actas.js"></script>
    <script src="./public/controllers/agenda/agenda-block.js"></script>
    <script src="./public/controllers/agenda/agenda-egreso.js"></script>
    <script src="./public/controllers/agenda/agenda-ingreso.js"></script>
    <script src="./public/controllers/agenda/agenda-gastos.js"></script>
    <script src="./public/controllers/agenda/agenda-memorandum.js"></script>
    <script src="./public/controllers/agenda/agenda-proyecto.js"></script>
    <script src="./public/controllers/agenda/agenda-trabajo.js"></script>
    <script src="./public/controllers/agenda/agenda-traspaso.js"></script>
    <!-- servicio -->
    <script src="./public/services/parametro.js"></script>
    <script src="./public/services/actividadEconomica.js"></script>
    <script src="./public/services/sucursal.js"></script>
    <script src="./public/services/usuario.js"></script>
    <script src="./public/services/tc.js"></script>
    <script src="./public/services/rubro.js"></script>
    <script src="./public/services/ciudad.js"></script>
    <script src="./public/services/ingresoProducto.js"></script>
    <script src="./public/services/egresoProducto.js"></script>
    <script src="./public/services/plandecuenta.js"></script>
    <script src="./public/services/almacen.js"></script>
    <!-- RRHH -->
    <script src="./public/services/trabajador.js"></script>
    <script src="./public/services/departamento.js"></script>
    <script src="./public/services/cargo.js"></script>
    </head>
    <body class="homepage" style="background:#ECF0F5">
        <div id="fb-root"></div>
            <script>
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "http://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.5";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            </script>

        <div ng-app="seedApp">
          <div ui-view>

          </div>
        </div>
        <footer>
        <div class="footer-lunascrid" style="position:fixed;bottom:0;width:100%;background:#222" >
      <!-- <div class="footer-lunascrid" style=""> -->
        <div class="container" >
          <p class="pull-right" class="blanco" style="color:white">
            <b> Celular:</b> 74002070 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Ubicación:</b> El Alto - Bolivia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" href="http://www.lunascrid.com"> 2016</a>
          </p>
        </div>
      </div>
    </footer>
    </body>
</html>
