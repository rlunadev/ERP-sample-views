'use strict';
angular.module('seedApp').controller('MainController', ['$scope','convocatoria',
  //lista los productos
  function($scope,convocatoria) {
    
    $scope.convocatorias = [];
    convocatoria.get({}, function(response) {
    $scope.convocatorias = response;
    });
    $scope.item = {};

    $scope.deleteConvocatoria = function (convocatoria,idx) {
    console.log(convocatoria);
    convocatoria.$delete({ "id_convocatorias": convocatoria.id_convocatorias}, function (success) {
    console.log(success);
    $scope.convocatorias.splice(idx, 1);
    });
  }
  $scope.saveConvocatoria = function(item) {
      console.log(item);
      convocatoria.save(item, function(response) {
      $scope.convocatorias.push(response);
      console.log(response);
      });
    }
  $scope.convocatoria_modal = function(convocatoria) {
      console.log(convocatoria);
      $scope.convocatoria =convocatoria
  }
  $scope.convocatoria_modifica = function(convocatoria,id_convocatorias) {
      //console.log("modifica");
      $scope.convocatoria.$update({'id_convocatorias':$scope.convocatoria.id_convocatorias}, function(response){});
  }

  }
]);