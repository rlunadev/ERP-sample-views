'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    // PUBLIC
    $stateProvider.state('list', {
      url: '/listMain',
      templateUrl: path + '/listDemo/list.html',
      controller: 'demoListController'
    });

    $stateProvider.state('list.detalle', {
      url: '/detalle/:listId',
      templateUrl: path + '/listDemo/detalle.html',
      controller: 'detalleListController'
    });

  }
]);
