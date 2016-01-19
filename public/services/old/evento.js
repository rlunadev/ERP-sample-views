'use strict';

angular.module('seedApp').factory('evento', ['$resource',
  function($resource) {
    return $resource('./api/eventos/evento', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/eventos/evento/id_eventos/:id_eventos',
        method: 'PUT'
      },
      delete: {
        url: './api/eventos/evento/id_eventos/:id_eventos',
        method: 'DELETE'
      }
    });
  }
]);