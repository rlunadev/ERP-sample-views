'use strict';

angular.module('seedApp').factory('plandecuenta', ['$resource',
  function($resource) {
    return $resource('./api/plandecuentas/plandecuenta', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/plandecuentas/plandecuenta/id_plandecuenta/:id_plandecuenta',
        method: 'PUT'
      },
      delete: {
        url: './api/plandecuentas/plandecuenta/id_plandecuenta/:id_plandecuenta',
        method: 'DELETE'
      }
    });
  }
]);