'use strict';

angular.module('seedApp')
.controller('demoListController', ['$scope',
  function($scope) {
    var list = [
        {
            id: "1",
            key: "TITULO  1",
            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmodamet, consectetur adipisicing elit, sed do eiusmodametconsectetur adipisicing elit, sed do eiusmodamet, consectetur adipisicing elit, sed do eiusmodamet, consectetur adipisicing elit, sed do eiusmodamet, consectetur adipisicing elitsed do eiusmodamet, consectetur adipisicing elit, sed do eiusmod"
        },
        {
            id: "2",
            key: "TITULO 2",
            value: "VALOR 2"
        }
    ];
    $scope.list = list;
  }
]);
