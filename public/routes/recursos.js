'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';
    
    $stateProvider.state('main.recursos', {
      url: 'recursos',
      templateUrl: path + '/recursos/index.html',
      controller: 'RecursosController'
    });

    //INICIO RECURSOS Submenu
    $stateProvider.state('main.recursos.trabajadores', {
      url: '/trabajadores',
      templateUrl: path + '/recursos/paginas/trabajadores.html',
      controller: 'RecursosTrabajadoresController'
    });
    $stateProvider.state('main.recursos.departamento', {
      url: '/departamento',
      templateUrl: path + '/recursos/paginas/departamento.html',
      controller: 'RecursosDepartamentoController'
    });
    $stateProvider.state('main.recursos.cargo', {
      url: '/cargo',
      templateUrl: path + '/recursos/paginas/cargo.html',
      controller: 'RecursosCargoController'
    });
    $stateProvider.state('main.recursos.parametrosRRHH', {
      url: '/parametrosRRHH',
      templateUrl: path + '/recursos/paginas/parametrosRRHH.html',
      controller: 'RecursosParametrosController'
    });
    $stateProvider.state('main.recursos.anticipo', {
      url: '/anticipo',
      templateUrl: path + '/recursos/paginas/anticipo.html',
      controller: 'RecursosAnticipoController'
    });
    $stateProvider.state('main.recursos.planillaBono', {
      url: '/planillaBono',
      templateUrl: path + '/recursos/paginas/planillaBono.html',
      controller: 'RecursosPlanillaBonoController'
    });
    $stateProvider.state('main.recursos.planillaSueldo', {
      url: '/planillaSueldo',
      templateUrl: path + '/recursos/paginas/planillaSueldo.html',
      controller: 'RecursosPlanillaSueldoController'
    });
    $stateProvider.state('main.recursos.planillaAguinaldo', {
      url: '/planillaAguinaldo',
      templateUrl: path + '/recursos/paginas/planillaAguinaldo.html',
      controller: 'RecursosPlanillaAguinaldoController'
    });
    $stateProvider.state('main.recursos.liquidacion', {
      url: '/liquidacion',
      templateUrl: path + '/recursos/paginas/liquidacion.html',
      controller: 'RecursosLiquidacionController'
    });
    $stateProvider.state('main.recursos.vacaciones', {
      url: '/vacaciones',
      templateUrl: path + '/recursos/paginas/vacaciones.html',
      controller: 'RecursosVacacionesController'
    });
    $stateProvider.state('main.recursos.bajaMedica', {
      url: '/bajaMedica',
      templateUrl: path + '/recursos/paginas/bajaMedica.html',
      controller: 'RecursosBajaMedicaController'
    });
    $stateProvider.state('main.recursos.faltas', {
      url: '/faltas',
      templateUrl: path + '/recursos/paginas/faltas.html',
      controller: 'RecursosFaltasController'
    });
    $stateProvider.state('main.recursos.descuentos', {
      url: '/descuentos',
      templateUrl: path + '/recursos/paginas/descuentos.html',
      controller: 'RecursosDescuentosController'
    });

    //fin RECURSOS Submenu

  }
]);
