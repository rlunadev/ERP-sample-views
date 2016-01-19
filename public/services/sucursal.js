'use strict';

angular.module('seedApp').factory('sucursal', ['$resource',
  function($resource) {
    return $resource('./api/sucursals/sucursal', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/sucursals/sucursal/id_sucursal/:id_sucursal',
        method: 'PUT'
      },
      delete: {
        url: './api/sucursals/sucursal/id_sucursal/:id_sucursal',
        method: 'DELETE'
      }
    });
  }
]);