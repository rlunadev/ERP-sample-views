'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    $stateProvider.state('main.agenda', {
      url: 'agenda',
      templateUrl: path + '/agenda/index.html',
      controller: 'AgendaController'
    });
    //inicio AGENDA SUBMENU
    $stateProvider.state('main.agenda.blockNotas', {
      url: '/blockNotas',
      templateUrl: path + '/agenda/paginas/blockNotas.html',
      controller: 'AgendaBlockController'
    });
    $stateProvider.state('main.agenda.actasReunion', {
      url: '/actasReunion',
      templateUrl: path + '/agenda/paginas/actasReunion.html',
      controller: 'AgendaActasController'
    });
    $stateProvider.state('main.agenda.memorandum', {
      url: '/memorandum',
      templateUrl: path + '/agenda/paginas/memorandum.html',
      controller: 'AgendaMemorandumController'
    });
    $stateProvider.state('main.agenda.reciboIngreso', {
      url: '/reciboIngreso',
      templateUrl: path + '/agenda/paginas/reciboIngreso.html',
      controller: 'AgendaReciboIngresoController'
    });
    $stateProvider.state('main.agenda.reciboEgreso', {
      url: '/reciboEgreso',
      templateUrl: path + '/agenda/paginas/reciboEgreso.html',
      controller: 'AgendaReciboEgresoController'
    });
    $stateProvider.state('main.agenda.reciboTraspaso', {
      url: '/reciboTraspaso',
      templateUrl: path + '/agenda/paginas/reciboTraspaso.html',
      controller: 'AgendaTraspasoController'
    });
    $stateProvider.state('main.agenda.informeGastos', {
      url: '/informeGastos',
      templateUrl: path + '/agenda/paginas/informeGastos.html',
      controller: 'AgendaGastosController'
    });
    $stateProvider.state('main.agenda.informeTrabajo', {
      url: '/informeTrabajo',
      templateUrl: path + '/agenda/paginas/informeTrabajo.html',
      controller: 'AgendaTrabajoController'
    });
    $stateProvider.state('main.agenda.proyecto', {
      url: '/proyecto',
      templateUrl: path + '/agenda/paginas/proyecto.html',
      controller: 'AgendaProyectoController'
    });

  }
]);
