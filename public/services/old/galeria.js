'use strict';

angular.module('seedApp').factory('galeria', ['$resource',
  function($resource) {
    return $resource('./api/galerias/galeria', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/galerias/galeria/id_galeria/:id_galeria',
        method: 'PUT'
      },
      delete: {
        url: './api/galerias/galeria/id_galeria/:id_galeria',
        method: 'DELETE'
      }
    });
  }
]);