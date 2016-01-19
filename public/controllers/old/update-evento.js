'use strict';

angular.module('seedApp')
.controller('ModalInstanceCtrl', function ($scope, $modalInstance, evento) {

  $scope.evento = evento;
  $scope.save = function () {
    //$modalInstance.close($scope.selected.item);
    $scope.evento.$update({'id_eventos':$scope.evento.id_eventos}, function(response){
      
    });
    $modalInstance.dismiss('cancel');    
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});