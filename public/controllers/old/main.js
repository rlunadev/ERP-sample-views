'use strict';
var app=angular.module('seedApp')
.controller('MainController', ['$scope','$filter','evento','comunicado','galeria','upload','convocatoria','noticia','banner',
  //lista los productos
  function($scope,$filter,evento,comunicado,galeria,upload,convocatoria,noticia,banner) {
	var dir="./public/assets/images/subidas/";
    //evento
	  $scope.eventos = [];
    evento.get({}, function(response) {
    $scope.eventos = response;
    });
    $scope.eventos = {};
    //comunicado
    $scope.comunicados = [];
    comunicado.get({}, function(response) {
    $scope.comunicados = response;
    });
    $scope.comunicados = {};
    //galeria
    $scope.galerias = [];
    galeria.get({}, function(response) {
    $scope.galerias = response;
    });
    $scope.galerias = {};
    //convocatoria
    $scope.convocatorias = [];
    convocatoria.get({}, function(response) {
    $scope.convocatorias = response;
    });
    $scope.galerias = {};
    //noticia
    $scope.noticias = [];
    noticia.get({}, function(response) {
    $scope.noticias = response;
    });
    //banner
    $scope.banners = [];
    banner.get({}, function(response) {
    $scope.banners = response;
    });

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
    // fin subtabpanel
        
    $scope.getById = function(id) {
        var result = null;
        $scope.comunicados.forEach(function(comunicados) {
            if (comunicados.id == id) {
                result = comunicados;
            }
        });
        return result;
    }

   $scope.loadItem = function(id) {
      $scope.comunicados = $scope.getById(id_comunicados);
   }

    $scope.saveNoticia = function(item) {
    $scope.noticias = response;
}
    //EVENTO
    $scope.deleteEvento = function (evento,idx) {
    console.log(evento);
    evento.$delete({ "id_eventos": evento.id_eventos}, function (success) {
    console.log(success);
    $scope.eventos.splice(idx, 1);
    });
	  }
	 $scope.saveEvento = function(item) {
      	
    var name = $scope.name;
		var file = $scope.file;
		upload.saveImage(file).then(function(res)
		{})
		item.imagen=dir+file.name;
		console.log(item.imagen);
    console.log(item.fecha);
      	evento.save(item, function(response) {
      	$scope.eventos.push(response);
      	console.log(response);
      	});
    }
    $scope.evento_modal = function(evento) {
      console.log(evento);
      $scope.evento =evento
    }
    $scope.evento_modifica = function(evento,id_eventos) {
      //console.log("modifica");
    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    evento.imagen=dir+file.name;
    $scope.evento.fecha=$filter('date')(new Date(),'yyyy-MM-dd');
    console.log(evento.imagen);

      $scope.evento.$update({'id_eventos':$scope.evento.id_eventos}, function(response){});
    }
    //COMUNICADO
    $scope.deleteComunicado = function (comunicado,idx) {
    console.log(comunicado);
    comunicado.$delete({ "id_comunicados": comunicado.id_comunicados}, function (success) {
    console.log(success);
    $scope.comunicados.splice(idx, 1);
    });
  }
  $scope.saveComunicado = function(item) {
    console.log(item);
    var name = $scope.name;
		var file = $scope.file;
		upload.saveImage(file).then(function(res)
		{})
		item.imagen=dir+file.name;
		$scope.item.fecha=$filter('date')(new Date(),'yyyy-MM-dd');
		console.log(item.imagen);
      comunicado.save(item, function(response) {
      $scope.comunicados.push(response);
      console.log(response);
      });
    }
  $scope.comunicado_modal = function(comunicado) {
      console.log(comunicado);
      $scope.comunicado =comunicado
  }
  $scope.comunicado_modifica = function(comunicado,id_comunicados) {
      //console.log("modifica");
    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    comunicado.imagen=dir+file.name;
    console.log(comunicado.imagen);

    $scope.comunicado.$update({'id_comunicados':$scope.comunicado.id_comunicados}, function(response){});
  }
    $scope.deletegaleria = function (galeria,idx) {
    console.log(galeria);
    galeria.$delete({ "id_galeria": galeria.id_galeria}, function (success) {
    console.log(success);
    $scope.galerias.splice(idx, 1);
    });
  }
  //GALERIA
  $scope.savegaleria = function(item) {

    var name = $scope.name;
		var file = $scope.file;
		upload.saveImage(file).then(function(res)
		{})
		item.imagen=dir+file.name;
//		$scope.item.fecha=$filter('date')(new Date(),'yyyy-MM-dd');
		console.log(item.imagen);
	    console.log(item);
      	galeria.save(item, function(response) {
      	$scope.galerias.push(response);
      	console.log(response);
      	});
    }
  $scope.galeria_modal = function(galeria) {
      console.log(galeria);
      $scope.galeria =galeria
  }
  $scope.galeria_modifica = function(galeria,id_galeria) {
      //console.log("modifica");
    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    galeria.imagen=dir+file.name;
    console.log(galeria.imagen);
    $scope.galeria.$update({'id_galeria':$scope.galeria.id_galeria}, function(response){});
  }
  
//INICIO usuario

  $scope.saveusuario = function(item) {
    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    item.imagen=dir+file.name;
//    $scope.item.fecha=$filter('date')(new Date(),'yyyy-MM-dd');
    console.log(item.imagen);
      console.log(item);
        usuario.save(item, function(response) {
        $scope.usuarios.push(response);
        console.log(response);
        });
    }
  $scope.usuario_modal = function(usuario) {
      console.log(usuario);
      $scope.usuario =usuario
  }
  $scope.usuario_modifica = function(usuario,id_usuario) {
      //console.log("modifica");
    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    usuario.imagen=dir+file.name;
    console.log(usuario.imagen);
    $scope.usuario.$update({'id_usuario':$scope.usuario.id_usuario}, function(response){});
  }
   $scope.deleteusuario = function (usuario,idx) {
    console.log(usuario);
    usuario.$delete({ "id_usuario": usuario.id_usuario}, function (success) {
    console.log(success);
    $scope.usuarios.splice(idx,1);
    });
    }
  //FIN usuario

  //INICIO BANNER
  $scope.savebanner = function(item) {

    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    item.imagen=dir+file.name;
//    $scope.item.fecha=$filter('date')(new Date(),'yyyy-MM-dd');
    console.log(item.imagen);
      console.log(item);
        banner.save(item, function(response) {
        $scope.banners.push(response);
        console.log(response);
        });
    }
  $scope.banner_modal = function(banner) {
      console.log(banner);
      $scope.banner =banner
  }
  $scope.banner_modifica = function(banner,id_banner) {
      //console.log("modifica");
    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    banner.imagen=dir+file.name;
    console.log(banner.imagen);
    $scope.banner.$update({'id_banner':$scope.banner.id_banner}, function(response){});
  }
   $scope.deletebanner = function (banner,idx) {
    console.log(banner);
    banner.$delete({ "id_banner": banner.id_banner}, function (success) {
    console.log(success);
    $scope.banners.splice(idx,1);
    });
    }
  //FIN BANNER

  //CONVOCATORIA
  $scope.deleteConvocatoria = function (convocatoria,idx) {
    console.log(convocatoria);
    convocatoria.$delete({ "id_convocatorias": convocatoria.id_convocatorias}, function (success) {
    console.log(success);
    $scope.convocatorias.splice(idx,1);
    });
    }
   $scope.saveconvocatoria = function(item) {
       
    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    item.archivo=dir+file.name;
    $scope.item.fecha=$filter('date')(new Date(),'yyyy-MM-dd');
    //console.log(item.fecha);
        convocatoria.save(item, function(response) {
        $scope.convocatorias.push(response);
        console.log(response);
        });
    }
    $scope.convocatoria_modal = function(convocatoria) {
      console.log(convocatoria);
      $scope.convocatoria =convocatoria
    }
    $scope.convocatoria_modifica = function(convocatoria,id_convocatorias) {
      //console.log("modifica");
    var name = $scope.name;
    var file = $scope.file;
    upload.saveImage(file).then(function(res)
    {})
    convocatoria.imagen=dir+file.name;
    console.log(convocatoria.imagen);

      $scope.convocatoria.$update({'id_convocatorias':$scope.convocatoria.id_convocatorias}, function(response){});
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