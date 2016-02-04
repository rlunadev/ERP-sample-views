'use strict';
angular.module('seedApp')
.controller('RecursosBajaMedicaController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.bajamedica = {};
    // $scope.bajamedicas = [];
    // bajamedica.get({}, function(response) {
    // $scope.bajamedicas = response;
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
        $scope.savebajamedica = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      bajamedica.save(item, function(response) {
        $scope.bajamedicas.push(response);
        $scope.bajamedica = {};
      });
    }

    $scope.deletebajamedica = function(bajamedica, index) {
      bajamedica.$delete({
          "id_bajamedica": bajamedica.id_bajamedica
        }, function(success) {
          $scope.bajamedicas.splice(index, 1);
        });
    }

    $scope.bajamedica_modal = function(bajamedica) {
      $scope.bajamedica = bajamedica;
    }

    $scope.bajamedica_modifica = function(bajamedica,id_bajamedica) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        bajamedica.logotipo = dir + file.name;
        $scope.bajamedica.$update({
          'id_bajamedica': $scope.bajamedica.id_bajamedica},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.bajamedica.$update({
            'id_bajamedica': $scope.bajamedica.id_bajamedica
          }, function(response) {});
      }
    }
  }
]);
