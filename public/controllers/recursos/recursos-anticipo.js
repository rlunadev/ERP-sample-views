'use strict';
angular.module('seedApp')
.controller('RecursosAnticipoController', [
  '$scope', 'upload', '$filter',

  function($scope, upload, $filter) {
    var dir = "./public/img/";
    // $scope.anticipo = {};
    // $scope.anticipos = [];
    // anticipo.get({}, function(response) {
    // $scope.anticipos = response;
    //});
    //tabpanel
      
      $scope.saveanticipo = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      anticipo.save(item, function(response) {
        $scope.anticipos.push(response);
        $scope.anticipo = {};
      });
    }

    $scope.deleteanticipo = function(anticipo, index) {
      anticipo.$delete({
          "id_anticipo": anticipo.id_anticipo
        }, function(success) {
          $scope.anticipos.splice(index, 1);
        });
    }

    $scope.anticipo_modal = function(anticipo) {
      $scope.anticipo = anticipo;
    }

    $scope.anticipo_modifica = function(anticipo,id_anticipo) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        anticipo.logotipo = dir + file.name;
        $scope.anticipo.$update({
          'id_anticipo': $scope.anticipo.id_anticipo},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.anticipo.$update({
            'id_anticipo': $scope.anticipo.id_anticipo
          }, function(response) {});
      }
    }
  }
])
.directive('uploaderModel', ["$parse", function ($parse) {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs)
    {
      iElement.on("change", function(e)
      {
        $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
      });
    }
  };
}])

.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}])
.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}])
.service('upload', ["$http", "$q", function ($http, $q)
{
  this.saveImage = function(file, name)
  {
    var deferred = $q.defer();
    var formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    return $http.post("./upload.php", formData, {
      headers: {
        "Content-type": undefined
      },
      transformRequest: angular.identity
    })
    .success(function(res)
    {
      deferred.resolve(res);
    })
    .error(function(msg, code)
    {
      deferred.reject(msg);
    })
    return deferred.promise;
  }
}]);
