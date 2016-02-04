'use strict';

angular.module('seedApp').factory('anticipo', ['$resource',
  function($resource) {
    return $resource('./api/anticipos/anticipo', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/anticipos/anticipo/id_anticipo/:id_anticipo',
        method: 'PUT'
      },
      delete: {
        url: './api/anticipos/anticipo/id_anticipo/:id_anticipo',
        method: 'DELETE'
      }
    });
  }
]);