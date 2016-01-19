'use strict';

angular.module('seedApp').factory('comunicado', ['$resource',
  function($resource) {
    return $resource('./api/comunicados/comunicado', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/comunicados/comunicado/id_comunicados/:id_comunicados',
        method: 'PUT'
      },
      delete: {
        url: './api/comunicados/comunicado/id_comunicados/:id_comunicados',
        method: 'DELETE'
      }
    });
  }
]);