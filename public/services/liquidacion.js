'use strict';

angular.module('seedApp').factory('liquidacion', ['$resource',
  function($resource) {
    return $resource('./api/liquidacions/liquidacion', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/liquidacions/liquidacion/id_liquidacion/:id_liquidacion',
        method: 'PUT'
      },
      delete: {
        url: './api/liquidacions/liquidacion/id_liquidacion/:id_liquidacion',
        method: 'DELETE'
      }
    });
  }
]);