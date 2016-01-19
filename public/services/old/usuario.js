'use strict';
angular.module('seedApp').factory('usuario', ['$resource',
  function($resource) {
    return $resource('./api/usuarios/usuario', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/usuarios/usuario/id_usuario/:id_usuario',
        method: 'PUT'
      },
      delete: {
        url: './api/usuarios/usuario/id_usuario/:id_usuario',
        method: 'DELETE'
      }
    });
  }
]);