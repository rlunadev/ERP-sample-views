'use strict';

angular.module('seedApp').factory('departamento', ['$resource',
  function($resource) {
    return $resource('./api/departamentos/departamento', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/departamentos/departamento/id_departamento/:id_departamento',
        method: 'PUT'
      },
      delete: {
        url: './api/departamentos/departamento/id_departamento/:id_departamento',
        method: 'DELETE'
      }
    });
  }
]);