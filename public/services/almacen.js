'use strict';

angular.module('seedApp').factory('almacen', ['$resource',
  function($resource) {
    return $resource('./api/almacens/almacen', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/almacens/almacen/id_almacen/:id_almacen',
        method: 'PUT'
      },
      delete: {
        url: './api/almacens/almacen/id_almacen/:id_almacen',
        method: 'DELETE'
      }
    });
  }
]);