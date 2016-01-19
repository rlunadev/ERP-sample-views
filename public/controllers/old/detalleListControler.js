'use strict';

angular.module('seedApp')
.controller('detalleListController', ['$scope', '$stateParams',
  function($scope, $stateParams) {
  	console.log($stateParams);
  	$scope.getById = function(id) {
        var result = null;
        $scope.list.forEach(function(item) {
            if (item.id == id) {
                result = item;
            }
        });
        return result;
    }

   $scope.loadItem = function(id) {
   		$scope.item = $scope.getById(id);
   }

   $scope.loadItem($stateParams.listId);
  }
]);
