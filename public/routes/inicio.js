'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    // PUBLIC
    $stateProvider.state('main.inicio', {
      url: 'inicio',
      templateUrl: path + '/inicio/index.html',
      controller: 'InicioController'
    });

    //INICIO SUBMENUS
    $stateProvider.state('main.inicio.empresa', {
      url: '/empresa',
      templateUrl: path + '/inicio/paginas/empresa.html',
      controller: 'InicioEmpresaController'
    });
    $stateProvider.state('main.inicio.sucursal', {
      url: '/sucursal',
      templateUrl: path + '/inicio/paginas/sucursal.html',
      controller: 'InicioSucursalController'
    });
    $stateProvider.state('main.inicio.usuarios', {
      url: '/usuarios',
      templateUrl: path + '/inicio/paginas/usuarios.html',
      controller: 'InicioUsuariosController'
    });
    $stateProvider.state('main.inicio.grupos', {
      url: '/grupos',
      templateUrl: path + '/inicio/paginas/grupos.html',
      controller: 'InicioGruposController'
    });
    $stateProvider.state('main.inicio.parametros', {
      url: '/parametros',
      templateUrl: path + '/inicio/paginas/parametros.html',
      controller: 'InicioParametrosController'
    });
    $stateProvider.state('main.inicio.configuracionContable', {
      url: '/configuracionContable',
      templateUrl: path + '/inicio/paginas/configuracionContable.html',
      controller: 'InicioConfiguracionContableController'
    });
    $stateProvider.state('main.inicio.bitacora', {
      url: '/bitacora',
      templateUrl: path + '/inicio/paginas/bitacora.html',
      controller: 'InicioBitacoraController'
    });
    $stateProvider.state('main.inicio.backup', {
      url: '/backup',
      templateUrl: path + '/inicio/paginas/backup.html',
      controller: 'InicioBackupController'
    });
  }
]);
