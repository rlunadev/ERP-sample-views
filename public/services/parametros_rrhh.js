'use strict';

angular.module('seedApp').factory('parametros_rrhh', ['$resource',
  function($resource) {
    return $resource('./api/parametros_rrhhs/parametros_rrhh', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/parametros_rrhhs/parametros_rrhh/id_parametros_rrhh/:id_parametros_rrhh',
        method: 'PUT'
      },
      delete: {
        url: './api/parametros_rrhhs/parametros_rrhh/id_parametros_rrhh/:id_parametros_rrhh',
        method: 'DELETE'
      }
    });
  }
]);