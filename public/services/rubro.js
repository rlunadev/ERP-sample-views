'use strict';

angular.module('seedApp').factory('rubro', ['$resource',
  function($resource) {
    return $resource('./api/rubros/rubro', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/rubros/rubro/id_rubro/:id_rubro',
        method: 'PUT'
      },
      delete: {
        url: './api/rubros/rubro/id_rubro/:id_rubro',
        method: 'DELETE'
      }
    });
  }
]);