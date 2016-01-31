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
  }
]);
