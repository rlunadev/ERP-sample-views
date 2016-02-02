'use strict';
angular.module('seedApp')
.controller('AgendaReciboEgresoController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.almacen = {};
    // $scope.almacens = [];
    // almacen.get({}, function(response) {
    // $scope.almacens = response;
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
        $scope.savealmacen = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      almacen.save(item, function(response) {
        $scope.almacens.push(response);
        $scope.almacen = {};
      });
    }

    $scope.deletealmacen = function(almacen, index) {
      almacen.$delete({
          "id_almacen": almacen.id_almacen
        }, function(success) {
          $scope.almacens.splice(index, 1);
        });
    }

    $scope.almacen_modal = function(almacen) {
      $scope.almacen = almacen;
    }

    $scope.almacen_modifica = function(almacen,id_almacen) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        almacen.logotipo = dir + file.name;
        $scope.almacen.$update({
          'id_almacen': $scope.almacen.id_almacen},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.almacen.$update({
            'id_almacen': $scope.almacen.id_almacen
          }, function(response) {});
      }
    }
  }
]);
