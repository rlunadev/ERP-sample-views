'use strict';
angular.module('seedApp')
.controller('InicioEmpresaController', [
  '$scope', '$filter', 'parametro', 'actividadEconomica',

  function($scope, $filter, parametro, actividadEconomica) {
    //PARAMETRO
    $scope.parametros = {};
    $scope.actividadEconomicas = {};

    parametro.get({}, function(response) {
      $scope.parametros = response;
    });

    // Modifica  Parametro
    $scope.parametro_modifica = function(parametro, id_parametro) {
      $scope.parametro = parametro;
      $scope.parametro.fecha_vencimiento =
        $filter('date')(parametro.fecha_vencimiento, 'yyyy-MM-dd');
      $scope.parametro.logotipo = parametro.logotipo;
      $scope.parametro.$update({
        'id_parametro': $scope.parametro.id_parametro
      }, function(response){});
      console.log($scope.parametro.fecha_vencimiento);
    }

    //ACTIVIDAD ECONOMICA
    actividadEconomica.get({}, function(response) {
      $scope.actividadEconomicas = response;
    });

    $scope.saveactividadEconomica = function(item) {
      actividadEconomica.save(item, function(response) {
      $scope.actividadEconomicas.push(response);
      });
    }

    $scope.deleteactividadEconomica = function(actividadEconomica, index) {
      actividadEconomica.$delete({
        "id_actividadEconomica": actividadEconomica.id_actividadEconomica
      }, function (success) {
        $scope.actividadEconomicas.splice(
          $scope.actividadEconomicas.indexOf(actividadEconomica), 1
        );
      });
    }
  }
]);
