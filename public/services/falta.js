'use strict';

angular.module('seedApp').factory('falta', ['$resource',
  function($resource) {
    return $resource('./api/faltas/falta', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/faltas/falta/id_falta/:id_falta',
        method: 'PUT'
      },
      delete: {
        url: './api/faltas/falta/id_falta/:id_falta',
        method: 'DELETE'
      }
    });
  }
]);