'use strict';
var app=angular.module('seedApp')
.controller('vistaController', ['$scope','$filter',
  //lista los productos
  function($scope,$filter) {
    // inicio tabpanel
    $scope.activeTab = 1;
    $scope.setActiveTab = function(tabToSet) {
    $scope.activeTab = tabToSet;
    }
    // fin tabpanel

    // inicio subtabpanel
    $scope.SubactiveTab = 1;
    $scope.setSubActiveTab = function(tabToSet1) {
    $scope.SubactiveTab = tabToSet1;
    }

  }
]);