'use strict';

angular.module('seedApp').factory('vacacion', ['$resource',
  function($resource) {
    return $resource('./api/vacacions/vacacion', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/vacacions/vacacion/id_vacacion/:id_vacacion',
        method: 'PUT'
      },
      delete: {
        url: './api/vacacions/vacacion/id_vacacion/:id_vacacion',
        method: 'DELETE'
      }
    });
  }
]);