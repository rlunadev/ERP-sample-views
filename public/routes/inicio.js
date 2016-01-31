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
  }
]);
