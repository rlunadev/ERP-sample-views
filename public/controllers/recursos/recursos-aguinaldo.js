'use strict';
angular.module('seedApp')
.controller('RecursosPlanillaAguinaldoController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.aguinaldo = {};
    // $scope.aguinaldos = [];
    // aguinaldo.get({}, function(response) {
    // $scope.aguinaldos = response;
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
        $scope.saveaguinaldo = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      aguinaldo.save(item, function(response) {
        $scope.aguinaldos.push(response);
        $scope.aguinaldo = {};
      });
    }

    $scope.deleteaguinaldo = function(aguinaldo, index) {
      aguinaldo.$delete({
          "id_aguinaldo": aguinaldo.id_aguinaldo
        }, function(success) {
          $scope.aguinaldos.splice(index, 1);
        });
    }

    $scope.aguinaldo_modal = function(aguinaldo) {
      $scope.aguinaldo = aguinaldo;
    }

    $scope.aguinaldo_modifica = function(aguinaldo,id_aguinaldo) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        aguinaldo.logotipo = dir + file.name;
        $scope.aguinaldo.$update({
          'id_aguinaldo': $scope.aguinaldo.id_aguinaldo},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.aguinaldo.$update({
            'id_aguinaldo': $scope.aguinaldo.id_aguinaldo
          }, function(response) {});
      }
    }
  }
]);
