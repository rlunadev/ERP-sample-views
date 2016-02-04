'use strict';

angular.module('seedApp').factory('descuento', ['$resource',
  function($resource) {
    return $resource('./api/descuentos/descuento', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/descuentos/descuento/id_descuento/:id_descuento',
        method: 'PUT'
      },
      delete: {
        url: './api/descuentos/descuento/id_descuento/:id_descuento',
        method: 'DELETE'
      }
    });
  }
]);