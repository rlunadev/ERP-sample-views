'use strict';

angular.module('seedApp').factory('convocatoria', ['$resource',
  function($resource) {
    return $resource('./api/convocatorias/convocatoria', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/convocatorias/convocatoria/id_convocatorias/:id_convocatorias',
        method: 'PUT'
      },
      delete: {
        url: './api/convocatorias/convocatoria/id_convocatorias/:id_convocatorias',
        method: 'DELETE'
      }
    });
  }
]);