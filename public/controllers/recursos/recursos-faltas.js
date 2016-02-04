'use strict';
angular.module('seedApp')
.controller('RecursosFaltasController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.falta = {};
    // $scope.faltas = [];
    // falta.get({}, function(response) {
    // $scope.faltas = response;
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
        $scope.savefalta = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      falta.save(item, function(response) {
        $scope.faltas.push(response);
        $scope.falta = {};
      });
    }

    $scope.deletefalta = function(falta, index) {
      falta.$delete({
          "id_falta": falta.id_falta
        }, function(success) {
          $scope.faltas.splice(index, 1);
        });
    }

    $scope.falta_modal = function(falta) {
      $scope.falta = falta;
    }

    $scope.falta_modifica = function(falta,id_falta) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        falta.logotipo = dir + file.name;
        $scope.falta.$update({
          'id_falta': $scope.falta.id_falta},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.falta.$update({
            'id_falta': $scope.falta.id_falta
          }, function(response) {});
      }
    }
  }
]);
