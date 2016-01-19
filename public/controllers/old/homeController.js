'use strict';

angular.module('seedApp')
.controller('homeController', ['$scope',
  function($scope) {
  	$scope.saveProduct = function(item) {
      Product.save(item, function(response) {
        $scope.products.push(response);
      });
    }
  }
]);
