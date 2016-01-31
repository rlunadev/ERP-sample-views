'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    $stateProvider.state('main.inventario', {
      url: 'inventario',
      templateUrl: path + '/inventario/index.html',
      controller: 'InventarioController'
    });

    // Inventario Submenu
    $stateProvider.state('main.inventario.almacen', {
      url: '/almacen',
      templateUrl: path + '/inventario/paginas/almacen.html',
      controller: 'InventarioAlmacenController'
    });
  }
]);
