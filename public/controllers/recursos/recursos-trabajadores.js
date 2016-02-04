'use strict';
angular.module('seedApp')
.controller('RecursosTrabajadoresController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.trabajador = {};
    // $scope.trabajadors = [];
    // trabajador.get({}, function(response) {
    // $scope.trabajadors = response;
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
        $scope.savetrabajador = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      trabajador.save(item, function(response) {
        $scope.trabajadors.push(response);
        $scope.trabajador = {};
      });
    }

    $scope.deletetrabajador = function(trabajador, index) {
      trabajador.$delete({
          "id_trabajador": trabajador.id_trabajador
        }, function(success) {
          $scope.trabajadors.splice(index, 1);
        });
    }

    $scope.trabajador_modal = function(trabajador) {
      $scope.trabajador = trabajador;
    }

    $scope.trabajador_modifica = function(trabajador,id_trabajador) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        trabajador.logotipo = dir + file.name;
        $scope.trabajador.$update({
          'id_trabajador': $scope.trabajador.id_trabajador},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.trabajador.$update({
            'id_trabajador': $scope.trabajador.id_trabajador
          }, function(response) {});
      }
    }
  }
]);
