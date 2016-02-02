'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';
    
     $stateProvider.state('main.contabilidad', {
      url: 'contabilidad',
      templateUrl: path + '/contabilidad/index.html',
      controller: 'ContabilidadController'
    });
     //inicio CONTABILIDAD submenu
    $stateProvider.state('main.contabilidad.planDeCuenta', {
      url: '/planDeCuenta',
      templateUrl: path + '/contabilidad/paginas/planDeCuenta.html',
      controller: 'ContabilidadPlanCuentaController'
    });
    $stateProvider.state('main.contabilidad.ingresoDinero', {
      url: '/ingresoDinero',
      templateUrl: path + '/contabilidad/paginas/ingresoDinero.html',
      controller: 'ContabilidadIngresoDineroController'
    });
    $stateProvider.state('main.contabilidad.egresoDinero', {
      url: '/egresoDinero',
      templateUrl: path + '/contabilidad/paginas/egresoDinero.html',
      controller: 'ContabilidadEgresoDineroController'
    });
    $stateProvider.state('main.contabilidad.traspasoDinero', {
      url: '/traspasoDinero',
      templateUrl: path + '/contabilidad/paginas/traspasoDinero.html',
      controller: 'ContabilidadTraspasoDineroController'
    });
    $stateProvider.state('main.contabilidad.libroCompras', {
      url: '/libroCompras',
      templateUrl: path + '/contabilidad/paginas/libroCompras.html',
      controller: 'ContabilidadLibroCompraController'
    });
    $stateProvider.state('main.contabilidad.libroVentas', {
      url: '/libroVentas',
      templateUrl: path + '/contabilidad/paginas/libroVentas.html',
      controller: 'ContabilidadLibroVentaController'
    });
    $stateProvider.state('main.contabilidad.libroDiario', {
      url: '/libroDiario',
      templateUrl: path + '/contabilidad/paginas/libroDiario.html',
      controller: 'ContabilidadLibroDiarioController'
    });
    $stateProvider.state('main.contabilidad.impuestoMensual', {
      url: '/impuestoMensual',
      templateUrl: path + '/contabilidad/paginas/impuestoMensual.html',
      controller: 'ContabilidadImpuestoMensualController'
    });
    $stateProvider.state('main.contabilidad.reporteFinanciero', {
      url: '/reporteFinanciero',
      templateUrl: path + '/contabilidad/paginas/reporteFinanciero.html',
      controller: 'ContabilidadReporteFinancieroController'
    });
    //FIN CONTABILIDAD SUBMENU
    
  }
]);
