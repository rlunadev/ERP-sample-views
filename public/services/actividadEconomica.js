'use strict';

angular.module('seedApp').factory('actividadEconomica', ['$resource',
  function($resource) {
    return $resource('./api/actividadEconomicas/actividadEconomica', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/actividadEconomicas/actividadEconomica/id_actividadEconomica/:id_actividadEconomica',
        method: 'PUT'
      },
      delete: {
        url: './api/actividadEconomicas/actividadEconomica/id_actividadEconomica/:id_actividadEconomica',
        method: 'DELETE'
      }
    });
  }
]);