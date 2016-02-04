'use strict';
angular.module('seedApp')
.controller('RecursosDescuentosController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.descuento = {};
    // $scope.descuentos = [];
    // descuento.get({}, function(response) {
    // $scope.descuentos = response;
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
        $scope.savedescuento = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      descuento.save(item, function(response) {
        $scope.descuentos.push(response);
        $scope.descuento = {};
      });
    }

    $scope.deletedescuento = function(descuento, index) {
      descuento.$delete({
          "id_descuento": descuento.id_descuento
        }, function(success) {
          $scope.descuentos.splice(index, 1);
        });
    }

    $scope.descuento_modal = function(descuento) {
      $scope.descuento = descuento;
    }

    $scope.descuento_modifica = function(descuento,id_descuento) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        descuento.logotipo = dir + file.name;
        $scope.descuento.$update({
          'id_descuento': $scope.descuento.id_descuento},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.descuento.$update({
            'id_descuento': $scope.descuento.id_descuento
          }, function(response) {});
      }
    }
  }
]);
