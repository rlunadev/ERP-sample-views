'use strict';
angular.module('seedApp')
.controller('RecursosCargoController', [
  '$scope', 'upload', '$filter','cargo',

  function($scope, upload, $filter,cargo) {
    

   // RRHH cargo
    $scope.cargos = [];
    cargo.get({}, function(response) {
    $scope.cargos = response;
    });
    $scope.cargos = {};

  $scope.savecargo = function(item) {
    cargo.save(item, function(response) {
    $scope.cargos.push(response);
    });
  }
    //cargo
    $scope.deletecargo = function (cargo,idx) {
    cargo.$delete({ "id_cargo": cargo.id_cargo}, function (success) {
    $scope.cargos.splice(idx, 1);
    });
    }

    $scope.cargo_modal = function(cargo) {
      $scope.cargo =cargo
    }

    $scope.cargo_modifica = function(cargo,id_cargo) {
      $scope.cargo.$update({'id_cargo':$scope.cargo.id_cargo}, function(response){});
    }
  }
]);
