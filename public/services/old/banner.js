'use strict';

angular.module('seedApp').factory('banner', ['$resource',
  function($resource) {
    return $resource('./api/banners/banner', {
    }, {
      save: {
        method: 'POST'
       },
      get: {
        method: 'GET',
        isArray: true
      },
      update: {
        url: './api/banners/banner/id_banner/:id_banner',
        method: 'PUT'
      },
      delete: {
        url: './api/banners/banner/id_banner/:id_banner',
        method: 'DELETE'
      }
    });
  }
]);