'use strict';

angular.module('seedApp').factory('trabajador', ['$resource',
  function($resource) {
    return $resource('./api/trabajadors/trabajador', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/trabajadors/trabajador/id_trabajador/:id_trabajador',
        method: 'PUT'
      },
      delete: {
        url: './api/trabajadors/trabajador/id_trabajador/:id_trabajador',
        method: 'DELETE'
      }
    });
  }
]);