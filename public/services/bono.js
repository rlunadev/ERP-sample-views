'use strict';

angular.module('seedApp').factory('bono', ['$resource',
  function($resource) {
    return $resource('./api/bonos/bono', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/bonos/bono/id_bono/:id_bono',
        method: 'PUT'
      },
      delete: {
        url: './api/bonos/bono/id_bono/:id_bono',
        method: 'DELETE'
      }
    });
  }
]);