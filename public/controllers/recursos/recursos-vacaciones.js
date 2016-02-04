'use strict';
angular.module('seedApp')
.controller('RecursosVacacionesController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.vacacion = {};
    // $scope.vacacions = [];
    // vacacion.get({}, function(response) {
    // $scope.vacacions = response;
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
        $scope.savevacacion = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      vacacion.save(item, function(response) {
        $scope.vacacions.push(response);
        $scope.vacacion = {};
      });
    }

    $scope.deletevacacion = function(vacacion, index) {
      vacacion.$delete({
          "id_vacacion": vacacion.id_vacacion
        }, function(success) {
          $scope.vacacions.splice(index, 1);
        });
    }

    $scope.vacacion_modal = function(vacacion) {
      $scope.vacacion = vacacion;
    }

    $scope.vacacion_modifica = function(vacacion,id_vacacion) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        vacacion.logotipo = dir + file.name;
        $scope.vacacion.$update({
          'id_vacacion': $scope.vacacion.id_vacacion},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.vacacion.$update({
            'id_vacacion': $scope.vacacion.id_vacacion
          }, function(response) {});
      }
    }
  }
]);
