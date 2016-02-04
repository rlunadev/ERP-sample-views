'use strict';
angular.module('seedApp')
.controller('RecursosLiquidacionController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.liquidacion = {};
    // $scope.liquidacions = [];
    // liquidacion.get({}, function(response) {
    // $scope.liquidacions = response;
    //});
    //tabpanel
    $scope.activeTab = 1;
    $scope.setActiveTab = function(tabToSet) {
    $scope.activeTab = tabToSet;
    }// fin tabpanel
    // subtabpanel
    $scope.SubactiveTab = 1;
    $scope.setSubActiveTab = function(tabToSet1) {
    $scope.SubactiveTab = tabToSet1;
    }// fin subtabpanel  
        $scope.saveliquidacion = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      liquidacion.save(item, function(response) {
        $scope.liquidacions.push(response);
        $scope.liquidacion = {};
      });
    }

    $scope.deleteliquidacion = function(liquidacion, index) {
      liquidacion.$delete({
          "id_liquidacion": liquidacion.id_liquidacion
        }, function(success) {
          $scope.liquidacions.splice(index, 1);
        });
    }

    $scope.liquidacion_modal = function(liquidacion) {
      $scope.liquidacion = liquidacion;
    }

    $scope.liquidacion_modifica = function(liquidacion,id_liquidacion) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        liquidacion.logotipo = dir + file.name;
        $scope.liquidacion.$update({
          'id_liquidacion': $scope.liquidacion.id_liquidacion},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.liquidacion.$update({
            'id_liquidacion': $scope.liquidacion.id_liquidacion
          }, function(response) {});
      }
    }
  }
]);
