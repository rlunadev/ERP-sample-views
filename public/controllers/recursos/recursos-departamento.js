'use strict';
angular.module('seedApp')
.controller('RecursosDepartamentoController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.departamento = {};
    // $scope.departamentos = [];
    // departamento.get({}, function(response) {
    // $scope.departamentos = response;
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
        $scope.savedepartamento = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      departamento.save(item, function(response) {
        $scope.departamentos.push(response);
        $scope.departamento = {};
      });
    }

    $scope.deletedepartamento = function(departamento, index) {
      departamento.$delete({
          "id_departamento": departamento.id_departamento
        }, function(success) {
          $scope.departamentos.splice(index, 1);
        });
    }

    $scope.departamento_modal = function(departamento) {
      $scope.departamento = departamento;
    }

    $scope.departamento_modifica = function(departamento,id_departamento) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        departamento.logotipo = dir + file.name;
        $scope.departamento.$update({
          'id_departamento': $scope.departamento.id_departamento},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.departamento.$update({
            'id_departamento': $scope.departamento.id_departamento
          }, function(response) {});
      }
    }
  }
]);
