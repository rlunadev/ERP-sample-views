'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';
  
    $stateProvider.state('main.activo', {
        url: 'activo',
        templateUrl: path + '/activo/index.html',
        controller: 'ActivoController'
      });    
    //INCIO ACTIVO SUBMENU
    $stateProvider.state('main.activo.altaActivo', {
      url: '/altaActivo',
      templateUrl: path + '/activo/paginas/altaActivo.html',
      controller: 'ActivoAltaController'
    });
    $stateProvider.state('main.activo.bajaActivo', {
      url: '/bajaActivo',
      templateUrl: path + '/activo/paginas/bajaActivo.html',
      controller: 'ActivoBajaController'
    });
    $stateProvider.state('main.activo.tipoActivo', {
      url: '/tipoActivo',
      templateUrl: path + '/activo/paginas/tipoActivo.html',
      controller: 'ActivoTipoController'
    });
    $stateProvider.state('main.activo.traspasoActivo', {
      url: '/traspasoActivo',
      templateUrl: path + '/activo/paginas/traspasoActivo.html',
      controller: 'ActivoTraspasoController'
    });
    //FIN ACTIVO SUBMENU
  }
]);
