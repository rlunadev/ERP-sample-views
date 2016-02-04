'use strict';
angular.module('seedApp')
.controller('RecursosPlanillaBonoController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.bono = {};
    // $scope.bonos = [];
    // bono.get({}, function(response) {
    // $scope.bonos = response;
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
        $scope.savebono = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      bono.save(item, function(response) {
        $scope.bonos.push(response);
        $scope.bono = {};
      });
    }

    $scope.deletebono = function(bono, index) {
      bono.$delete({
          "id_bono": bono.id_bono
        }, function(success) {
          $scope.bonos.splice(index, 1);
        });
    }

    $scope.bono_modal = function(bono) {
      $scope.bono = bono;
    }

    $scope.bono_modifica = function(bono,id_bono) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        bono.logotipo = dir + file.name;
        $scope.bono.$update({
          'id_bono': $scope.bono.id_bono},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.bono.$update({
            'id_bono': $scope.bono.id_bono
          }, function(response) {});
      }
    }
  }
]);
