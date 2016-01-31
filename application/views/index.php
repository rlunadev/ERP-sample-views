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

    <!-- controladores -->
    <script src="./public/controllers/main.js"></script>
    <script src="./public/controllers/inicio/inicio.js"></script>
    <script src="./public/controllers/inicio/inicio-empresa.js"></script>
    <script src="./public/controllers/inicio/inicio-sucursal.js"></script>

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
