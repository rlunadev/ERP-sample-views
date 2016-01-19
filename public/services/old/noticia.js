'use strict';

angular.module('seedApp').factory('noticia', ['$resource',
  function($resource) {
    return $resource('./api/noticias/noticia', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/noticias/noticia/id_noticia/:id_noticia',
        method: 'PUT'
      },
      delete: {
        url: './api/noticias/noticia/id_noticia/:id_noticia',
        method: 'DELETE'
      }
    });
  }
]);