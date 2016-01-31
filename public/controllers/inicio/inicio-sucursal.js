'use strict';
angular.module('seedApp')
.controller('InicioSucursalController', [
  '$scope', 'sucursal', '$filter',

  function($scope, sucursal, $filter) {

    //Sucursal
    $scope.sucursal = {};
    $scope.sucursals = [];
    sucursal.get({}, function(response) {
      $scope.sucursals = response;
    });

    $scope.savesucursal = function(item) {
      item.fecha_limite_emision =
        $filter('date')(item.fecha_limite_emision, 'yyyy-MM-dd');
      item.fecha_limite_emision_manual =
        $filter('date')(item.fecha_limite_emision_manual, 'yyyy-MM-dd');
      console.log($scope.sucursal.fecha_limite_emision);
      sucursal.save(item, function(response) {
        $scope.sucursals.push(response);
      });
    }

    $scope.deletesucursal = function(sucursal, index) {
      sucursal.$delete({
        "id_sucursal": sucursal.id_sucursal
        }, function(success) {
          $scope.sucursals.splice(index, 1);
        });
    }

    $scope.sucursal_modal = function(sucursal) {
      console.log(sucursal);
      $scope.sucursal = sucursal;
    }

    $scope.sucursal_modifica = function(sucursal, id_sucursal) {
      console.log("modif");
      $scope.sucursal.$update({
          'id_sucursal': $scope.sucursal.id_sucursal
        }, function(response){});
    }
  }
]);
