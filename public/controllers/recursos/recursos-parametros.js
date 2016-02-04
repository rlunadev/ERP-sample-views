'use strict';
angular.module('seedApp')
.controller('RecursosParametrosController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.parametros_rrhh = {};
    // $scope.parametros_rrhhs = [];
    // parametros_rrhh.get({}, function(response) {
    // $scope.parametros_rrhhs = response;
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
        $scope.saveparametros_rrhh = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      parametros_rrhh.save(item, function(response) {
        $scope.parametros_rrhhs.push(response);
        $scope.parametros_rrhh = {};
      });
    }

    $scope.deleteparametros_rrhh = function(parametros_rrhh, index) {
      parametros_rrhh.$delete({
          "id_parametros_rrhh": parametros_rrhh.id_parametros_rrhh
        }, function(success) {
          $scope.parametros_rrhhs.splice(index, 1);
        });
    }

    $scope.parametros_rrhh_modal = function(parametros_rrhh) {
      $scope.parametros_rrhh = parametros_rrhh;
    }

    $scope.parametros_rrhh_modifica = function(parametros_rrhh,id_parametros_rrhh) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        parametros_rrhh.logotipo = dir + file.name;
        $scope.parametros_rrhh.$update({
          'id_parametros_rrhh': $scope.parametros_rrhh.id_parametros_rrhh},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.parametros_rrhh.$update({
            'id_parametros_rrhh': $scope.parametros_rrhh.id_parametros_rrhh
          }, function(response) {});
      }
    }
  }
]);
