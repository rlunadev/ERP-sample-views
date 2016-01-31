'use strict';
angular.module('seedApp')
.controller('InicioUsuariosController', [
  '$scope', 'upload', '$filter', 'usuario', 'sucursal',

  function($scope, upload, $filter, usuario, sucursal) {

    //USUARIO
    var dir = "./public/img/";
    $scope.usuario = {};
    $scope.usuarios = [];
    $scope.sucursals = [];
    usuario.get({}, function(response) {
      $scope.usuarios = response;
    });
    sucursal.get({}, function(response) {
      $scope.sucursals = response;
    });

    $scope.saveusuario = function(item) {
      var name = $scope.name;
      var file = $scope.file;
      upload.saveImage(file).then(function(res) {});
      item.logotipo = dir + file.name;
      item.fecha_creacion = $filter('date')(new Date(), 'yyyy-MM-dd');
      usuario.save(item, function(response) {
        $scope.usuarios.push(response);
        $scope.usuario = {};
      });
    }

    $scope.deleteusuario = function(usuario, index) {
      usuario.$delete({
          "id_usuario": usuario.id_usuario
        }, function(success) {
          $scope.usuarios.splice(index, 1);
        });
    }

    $scope.usuario_modal = function(usuario) {
      $scope.usuario = usuario;
    }

    $scope.usuario_modifica = function(usuario,id_usuario) {
      try {
        var name = $scope.name;
        var file = $scope.file;
        upload.saveImage(file).then(function(res) {});
        usuario.logotipo = dir + file.name;
        $scope.usuario.$update({
          'id_usuario': $scope.usuario.id_usuario},
          function(response) {});
      } catch(e) {
        console.log("ERROR");
        $scope.usuario.$update({
            'id_usuario': $scope.usuario.id_usuario
          }, function(response) {});
      }
    }
  }
]);
