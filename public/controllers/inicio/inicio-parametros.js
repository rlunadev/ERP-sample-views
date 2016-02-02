'use strict';
angular.module('seedApp')
.controller('InicioParametrosController', [
  '$scope', 'upload', '$filter','tc',

  function($scope, upload, $filter, tc ) {
  	//Tasa De Cambio
  $scope.tcs = [];
  tc.get({}, function(response) {
  $scope.tcs = response;
  });
  $scope.tcs = {};

  $scope.tc_modifica = function(tc,id_tc) {
    $scope.tc=tc;
    $scope.tc.$update({'id_tc':$scope.tc.id_tc}, function(response){});
  }

  $scope.savetc = function(item) {
    console.log("guarda");
    console.log(item);
    tc.save(item, function(response) {
    $scope.tcs.push(response);
    });
  }
  $scope.deletetc = function (tc,index) {
    tc.$delete({"id_tc": tc.id_tc}, function (success) {
    $scope.tc.splice(index, 1);
    });
  }
  }
]);
