'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    $stateProvider.state('main.ventas', {
      url: 'ventas',
      templateUrl: path + '/ventas/index.html',
      controller: 'VentasController'
    });
    //Inicio VENTAS Submenu
    $stateProvider.state('main.ventas.clientes', {
      url: '/clientes',
      templateUrl: path + '/ventas/paginas/clientes.html',
      controller: 'VentasClientesController'
    });
    $stateProvider.state('main.ventas.centroNegocios', {
      url: '/centroNegocios',
      templateUrl: path + '/ventas/paginas/centroNegocios.html',
      controller: 'VentasCentroNegociosController'
    });
    $stateProvider.state('main.ventas.proyectos', {
      url: '/proyectos',
      templateUrl: path + '/ventas/paginas/proyectos.html',
      controller: 'VentasProyectosController'
    });
    $stateProvider.state('main.ventas.cotizacion', {
      url: '/cotizacion',
      templateUrl: path + '/ventas/paginas/cotizacion.html',
      controller: 'VentasCotizacionController'
    });
    $stateProvider.state('main.ventas.preventa', {
      url: '/preventa',
      templateUrl: path + '/ventas/paginas/preventa.html',
      controller: 'VentasPreventaController'
    });
    $stateProvider.state('main.ventas.ventaProducto', {
      url: '/ventaProducto',
      templateUrl: path + '/ventas/paginas/ventaProducto.html',
      controller: 'VentasProductoController'
    });
    $stateProvider.state('main.ventas.ventaServicios', {
      url: '/ventaServicios',
      templateUrl: path + '/ventas/paginas/ventaServicios.html',
      controller: 'VentasServiciosController'
    });
    $stateProvider.state('main.ventas.cuentaPorPagar', {
      url: '/cuentaPorPagar',
      templateUrl: path + '/ventas/paginas/cuentaPorPagar.html',
      controller: 'VentasCuentaPagarController'
    });
    $stateProvider.state('main.ventas.cuentaPorCobrar', {
      url: '/cuentaPorCobrar',
      templateUrl: path + '/ventas/paginas/cuentaPorCobrar.html',
      controller: 'VentasCuentaCobrarController'
    });
    //fin ventas submenu
  }
]);
