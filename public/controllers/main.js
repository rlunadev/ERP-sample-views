'use strict';
var app=angular.module('seedApp')
.controller('MainController', ['$scope','$filter','parametro','actividadEconomica','sucursal','usuario','rubro','ciudad','plandecuenta','ingresoproducto','trabajador','departamento','upload',
  //lista los productos

  function($scope,$filter,parametro,actividadEconomica,sucursal,usuario,rubro,ciudad,plandecuenta,ingresoproducto,trabajador,departamento,upload) {
	var dir="./public/img/";
  //RUBRO
  $scope.rubros = [];
  rubro.get({}, function(response) {
    $scope.rubros = response;
  });
  $scope.rubros = {};

  $scope.rubro_modifica = function(rubro,id_rubro) {
    $scope.rubro=rubro;
    $scope.rubro.$update({'id_rubro':$scope.rubro.id_rubro}, function(response){});
  }

  $scope.saverubro = function(item) {
    rubro.save(item, function(response) {
    $scope.rubros.push(response);
    });
  }
  $scope.deleterubro = function (rubro,index) {
    rubro.$delete({"id_rubro": rubro.id_rubro}, function (success) {
    $scope.rubro.splice(index, 1);
    });
  }
  //CIUDAD
    $scope.ciudads = [];
    ciudad.get({}, function(response) {
    $scope.ciudads = response;
    });
    $scope.ciudads = {};



    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yyyy',
      startingDay: 1
    };

    $scope.formats = ['yyyy-MM-dd'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['yyyy-M!-d!'];

    $scope.popup1 = {
      opened: false
    };
    // date final

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


  //PLAN DE CUENTA
  $scope.plandecuentas = [];
  plandecuenta.get({}, function(response) {
  $scope.plandecuentas = response;
  //console.log($scope.plandecuenta.cuenta);
  });
  $scope.plandecuentas = {};


  $scope.saveplandecuenta = function(item) {
    plandecuenta.save(item, function(response) {
    $scope.plandecuentas.push(response);
    });
  }
  $scope.deleteplandecuenta = function (plandecuenta,index) {
    plandecuenta.$delete({"id_plandecuenta": plandecuenta.id_plandecuenta}, function (success) {
    $scope.plandecuenta.splice(index, 1);
    });
  }


//INGRESO DE PRODUCTO
  $scope.ingresoproductos = [];
  ingresoproducto.get({}, function(response) {
  $scope.ingresoproductos = response;
  //console.log($scope.ingresoproducto.cuenta);
  });
  $scope.ingresoproductos = {};


  $scope.saveingresoproducto = function(item) {
    ingresoproducto.save(item, function(response) {
    $scope.ingresoproductos.push(response);
    });
  }
  $scope.deleteingresoproducto = function (ingresoproducto,index) {
    ingresoproducto.$delete({"id_ingresoproducto": ingresoproducto.id_ingresoproducto}, function (success) {
    $scope.ingresoproducto.splice(index, 1);
    });
  }


// RRHH TRABAJADOR
    $scope.trabajadors = [];
    trabajador.get({}, function(response) {
    $scope.trabajadors = response;
    });
    $scope.trabajadors = {};

    $scope.savetrabajador = function(item) {
      console.log(item);
      trabajador.save(item, function(response) {
      $scope.trabajadors.push(response);
      console.log(response);
      });
    }
    $scope.deletetrabajador = function (trabajador,idx) {
    trabajador.$delete({ "id_trabajador": trabajador.id_trabajador}, function (success) {
    $scope.trabajadors.splice(idx, 1);
    });
    }
    $scope.trabajador_modal = function(trabajador) {
      console.log(trabajador);
      $scope.trabajador =trabajador
    }
    $scope.trabajador_modifica = function(trabajador,id_trabajadors) {
      $scope.trabajador.$update({'id_trabajadors':$scope.trabajador.id_trabajadors}, function(response){});
    }
    // RRHH departamento
    $scope.departamentos = [];
    departamento.get({}, function(response) {
    $scope.departamentos = response;
    });
    $scope.departamentos = {};

  $scope.savedepartamento = function(item) {
    departamento.save(item, function(response) {
    $scope.departamentos.push(response);
    });
  }
    //departamento
    $scope.deletedepartamento = function (departamento,idx) {
    departamento.$delete({ "id_departamento": departamento.id_departamento}, function (success) {
    $scope.departamentos.splice(idx, 1);
    });
    }

    $scope.departamento_modal = function(departamento) {
      console.log(departamento);
      $scope.departamento =departamento
    }
    $scope.departamento_modifica = function(departamento,id_departamento) {
      $scope.departamento.$update({'id_departamento':$scope.departamento.id_departamento}, function(response){});
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
