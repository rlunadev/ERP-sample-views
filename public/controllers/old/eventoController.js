'use strict';
angular.module('seedApp')
.controller('eventoController', ['$scope', 'evento',
  function($scope, evento) {

    $scope.eventos = [];
    evento.get({}, function(response) {
      console.log(response);
      console.log("Evento");
      $scope.eventos = response;
    });
    $scope.item = {};

    $scope.saveProduct = function(item) {
      console.log(item);
      evento.save(item, function(response) {
      $scope.eventos.push(response);
      console.log(response);
      });
    }

     $scope.deleteProduct = function (product,idx) {
        console.log(product);
        evento.$delete({ "idEvento": evento.idEvento }, function (success) {
        console.log(success);
        $scope.eventos.splice(idx, 1);
        });
    }
  }
]);