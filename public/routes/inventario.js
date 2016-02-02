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
    $stateProvider.state('main.inventario.tipoProducto', {
      url: '/tipoProducto',
      templateUrl: path + '/inventario/paginas/tipoProducto.html',
      controller: 'InventarioTipoProductoController'
    });
    $stateProvider.state('main.inventario.tipoServicio', {
      url: '/tipoServicio',
      templateUrl: path + '/inventario/paginas/tipoServicio.html',
      controller: 'InventarioTipoServicioController'
    });
    $stateProvider.state('main.inventario.proveedores', {
      url: '/proveedores',
      templateUrl: path + '/inventario/paginas/proveedores.html',
      controller: 'InventarioProveedoresController'
    });
    $stateProvider.state('main.inventario.tipoCombinacion', {
      url: '/tipoCombinacion',
      templateUrl: path + '/inventario/paginas/tipoCombinacion.html',
      controller: 'InventarioTipoCombinacionController'
    });
    $stateProvider.state('main.inventario.solicitudProducto', {
      url: '/solicitudProducto',
      templateUrl: path + '/inventario/paginas/solicitudProducto.html',
      controller: 'InventarioSolicitudProductoController'
    });
    $stateProvider.state('main.inventario.ingresarProducto', {
      url: '/ingresarProducto',
      templateUrl: path + '/inventario/paginas/ingresarProducto.html',
      controller: 'InventarioIngresoProductoController'
    });
    $stateProvider.state('main.inventario.egresoProducto', {
      url: '/egresoProducto',
      templateUrl: path + '/inventario/paginas/egresoProducto.html',
      controller: 'InventarioEgresoProductoController'
    });
    $stateProvider.state('main.inventario.traspasoProducto', {
      url: '/traspasoProducto',
      templateUrl: path + '/inventario/paginas/traspasoProducto.html',
      controller: 'InventarioTraspasoProductoController'
    });
    $stateProvider.state('main.inventario.grupoSubgrupo', {
      url: '/grupoSubgrupo',
      templateUrl: path + '/inventario/paginas/grupoSubgrupo.html',
      controller: 'InventarioGrupoController'
    });
    $stateProvider.state('main.inventario.combinacion', {
      url: '/combinacion',
      templateUrl: path + '/inventario/paginas/combinacion.html',
      controller: 'InventarioCombinacionController'
    });
    $stateProvider.state('main.inventario.controlInventario', {
      url: '/controlInventario',
      templateUrl: path + '/inventario/paginas/controlInventario.html',
      controller: 'InventarioControlController'
    });

  }
]);
