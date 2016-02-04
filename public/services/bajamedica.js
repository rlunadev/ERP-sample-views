'use strict';

angular.module('seedApp').factory('bajamedica', ['$resource',
  function($resource) {
    return $resource('./api/bajamedicas/bajamedica', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/bajamedicas/bajamedica/id_bajamedica/:id_bajamedica',
        method: 'PUT'
      },
      delete: {
        url: './api/bajamedicas/bajamedica/id_bajamedica/:id_bajamedica',
        method: 'DELETE'
      }
    });
  }
]);