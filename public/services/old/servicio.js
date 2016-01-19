'use strict';

angular.module('seedApp').factory('servicio', ['$resource',
  function($resource) {
    return $resource('./api/servicios/servicio', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/servicios/servicio/id_servicio/:id_servicio',
        method: 'PUT'
      },
      delete: {
        url: './api/servicios/servicio/id_servicio/:id_servicio',
        method: 'DELETE'
      }
    });
  }
]);