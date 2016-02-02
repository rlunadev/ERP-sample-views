'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';
    // PUBLIC
    $stateProvider.state('main', {
      url: '/',
      templateUrl: path + '/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.configuracion', {
      url: 'configuracion',
      templateUrl: path + '/configuracion/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.admin', {
      url: 'admin',
      templateUrl: path + '/admin/index.html',
      controller: 'MainController'
    });
    $urlRouterProvider.otherwise('/');
  }
]);
