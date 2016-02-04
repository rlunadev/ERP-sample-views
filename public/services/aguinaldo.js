'use strict';

angular.module('seedApp').factory('aguinaldo', ['$resource',
  function($resource) {
    return $resource('./api/aguinaldos/aguinaldo', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/aguinaldos/aguinaldo/id_aguinaldo/:id_aguinaldo',
        method: 'PUT'
      },
      delete: {
        url: './api/aguinaldos/aguinaldo/id_aguinaldo/:id_aguinaldo',
        method: 'DELETE'
      }
    });
  }
]);