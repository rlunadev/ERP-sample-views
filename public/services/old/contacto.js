'use strict';

angular.module('seedApp').factory('contacto', ['$resource',
  function($resource) {
    return $resource('./api/contactos/contacto', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/contactos/contacto/id_contacto/:id_contacto',
        method: 'PUT'
      },
      delete: {
        url: './api/contactos/contacto/id_contacto/:id_contacto',
        method: 'DELETE'
      }
    });
  }
]);