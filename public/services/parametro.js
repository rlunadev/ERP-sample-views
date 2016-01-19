'use strict';

angular.module('seedApp').factory('parametro', ['$resource',
  function($resource) {
    return $resource('./api/parametros/parametro', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/parametros/parametro/id_parametro/:id_parametro',
        method: 'PUT'
      },
      delete: {
        url: './api/parametros/parametro/id_parametro/:id_parametro',
        method: 'DELETE'
      }
    });
  }
]);