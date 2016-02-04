'use strict';

angular.module('seedApp').factory('sueldo', ['$resource',
  function($resource) {
    return $resource('./api/sueldos/sueldo', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/sueldos/sueldo/id_sueldo/:id_sueldo',
        method: 'PUT'
      },
      delete: {
        url: './api/sueldos/sueldo/id_sueldo/:id_sueldo',
        method: 'DELETE'
      }
    });
  }
]);