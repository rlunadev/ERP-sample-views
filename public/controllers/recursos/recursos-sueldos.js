'use strict';
angular.module('seedApp')
.controller('RecursosPlanillaSueldoController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.sueldo = {};
    // $scope.sueldos = [];
    // sueldo.get({}, function(response) {
    // $scope.sueldos = response;
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
        $scope.savesueldo = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      sueldo.save(item, function(response) {
        $scope.sueldos.push(response);
        $scope.sueldo = {};
      });
    }

    $scope.deletesueldo = function(sueldo, index) {
      sueldo.$delete({
          "id_sueldo": sueldo.id_sueldo
        }, function(success) {
          $scope.sueldos.splice(index, 1);
        });
    }

    $scope.sueldo_modal = function(sueldo) {
      $scope.sueldo = sueldo;
    }

    $scope.sueldo_modifica = function(sueldo,id_sueldo) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        sueldo.logotipo = dir + file.name;
        $scope.sueldo.$update({
          'id_sueldo': $scope.sueldo.id_sueldo},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.sueldo.$update({
            'id_sueldo': $scope.sueldo.id_sueldo
          }, function(response) {});
      }
    }
  }
]);
