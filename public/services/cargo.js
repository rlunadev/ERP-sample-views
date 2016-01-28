'use strict';

angular.module('seedApp').factory('cargo', ['$resource',
  function($resource) {
    return $resource('./api/cargos/cargo', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/cargos/cargo/id_cargo/:id_cargo',
        method: 'PUT'
      },
      delete: {
        url: './api/cargos/cargo/id_cargo/:id_cargo',
        method: 'DELETE'
      }
    });
  }
]);