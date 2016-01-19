'use strict';

angular.module('seedApp').factory('tc', ['$resource',
  function($resource) {
    return $resource('./api/tcs/tc', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/tcs/tc/id_tc/:id_tc',
        method: 'PUT'
      },
      delete: {
        url: './api/tcs/tc/id_tc/:id_tc',
        method: 'DELETE'
      }
    });
  }
]);