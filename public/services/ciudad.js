'use strict';

angular.module('seedApp').factory('ciudad', ['$resource',
  function($resource) {
    return $resource('./api/ciudads/ciudad', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/ciudads/ciudad/id_ciudad/:id_ciudad',
        method: 'PUT'
      },
      delete: {
        url: './api/ciudads/ciudad/id_ciudad/:id_ciudad',
        method: 'DELETE'
      }
    });
  }
]);