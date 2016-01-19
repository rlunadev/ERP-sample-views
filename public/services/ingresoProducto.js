'use strict';

angular.module('seedApp').factory('ingresoproducto', ['$resource',
  function($resource) {
    return $resource('./api/ingresoproductos/ingresoproducto', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/ingresoproductos/ingresoproducto/id_ingresoproducto/:id_ingresoproducto',
        method: 'PUT'
      },
      delete: {
        url: './api/ingresoproductos/ingresoproducto/id_ingresoproducto/:id_ingresoproducto',
        method: 'DELETE'
      }
    });
  }
]);