'use strict';

angular.module('seedApp').factory('egresoProducto', ['$resource',
  function($resource) {
    return $resource('./api/egresoProductos/egresoProducto', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/egresoProductos/egresoProducto/id_egresoProducto/:id_egresoProducto',
        method: 'PUT'
      },
      delete: {
        url: './api/egresoProductos/egresoProducto/id_egresoProducto/:id_egresoProducto',
        method: 'DELETE'
      }
    });
  }
]);