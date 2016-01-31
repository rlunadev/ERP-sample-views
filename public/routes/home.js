'use strict';
angular.module('seedApp')
.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {
    var path = './public/views';

    // PUBLIC
    $stateProvider.state('main', {
      url: '/',
      templateUrl: path + '/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario', {
      url: 'inventario',
      templateUrl: path + '/inventario/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos', {
      url: 'recursos',
      templateUrl: path + '/recursos/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas', {
      url: 'ventas',
      templateUrl: path + '/ventas/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad', {
      url: 'contabilidad',
      templateUrl: path + '/contabilidad/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.activo', {
      url: 'activo',
      templateUrl: path + '/activo/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda', {
      url: 'agenda',
      templateUrl: path + '/agenda/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.configuracion', {
      url: 'configuracion',
      templateUrl: path + '/configuracion/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.admin', {
      url: 'admin',
      templateUrl: path + '/admin/index.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inicio.grupos', {
      url: '/grupos',
      templateUrl: path + '/inicio/paginas/grupos.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inicio.parametros', {
      url: '/parametros',
      templateUrl: path + '/inicio/paginas/parametros.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inicio.configuracionContable', {
      url: '/configuracionContable',
      templateUrl: path + '/inicio/paginas/configuracionContable.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inicio.bitacora', {
      url: '/bitacora',
      templateUrl: path + '/inicio/paginas/bitacora.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inicio.backup', {
      url: '/backup',
      templateUrl: path + '/inicio/paginas/backup.html',
      controller: 'MainController'
    });
    //FINAL INICIO SUBMENU
    //inicio Inventario Submenu
    $stateProvider.state('main.inventario.almacen', {
      url: '/almacen',
      templateUrl: path + '/inventario/paginas/almacen.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.tipoProducto', {
      url: '/tipoProducto',
      templateUrl: path + '/inventario/paginas/tipoProducto.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.tipoServicio', {
      url: '/tipoServicio',
      templateUrl: path + '/inventario/paginas/tipoServicio.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.proveedores', {
      url: '/proveedores',
      templateUrl: path + '/inventario/paginas/proveedores.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.tipoCombinacion', {
      url: '/tipoCombinacion',
      templateUrl: path + '/inventario/paginas/tipoCombinacion.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.solicitudProducto', {
      url: '/solicitudProducto',
      templateUrl: path + '/inventario/paginas/solicitudProducto.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.ingresarProducto', {
      url: '/ingresarProducto',
      templateUrl: path + '/inventario/paginas/ingresarProducto.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.egresoProducto', {
      url: '/egresoProducto',
      templateUrl: path + '/inventario/paginas/egresoProducto.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.traspasoProducto', {
      url: '/traspasoProducto',
      templateUrl: path + '/inventario/paginas/traspasoProducto.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.grupoSubgrupo', {
      url: '/grupoSubgrupo',
      templateUrl: path + '/inventario/paginas/grupoSubgrupo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.combinacion', {
      url: '/combinacion',
      templateUrl: path + '/inventario/paginas/combinacion.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.inventario.controlInventario', {
      url: '/controlInventario',
      templateUrl: path + '/inventario/paginas/controlInventario.html',
      controller: 'MainController'
    });
    //fin Inventario Submenu

    //INICIO RECURSOS Submenu
    $stateProvider.state('main.recursos.trabajadores', {
      url: '/trabajadores',
      templateUrl: path + '/recursos/paginas/trabajadores.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.departamento', {
      url: '/departamento',
      templateUrl: path + '/recursos/paginas/departamento.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.cargo', {
      url: '/cargo',
      templateUrl: path + '/recursos/paginas/cargo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.parametrosRRHH', {
      url: '/parametrosRRHH',
      templateUrl: path + '/recursos/paginas/parametrosRRHH.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.anticipo', {
      url: '/anticipo',
      templateUrl: path + '/recursos/paginas/anticipo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.planillaBono', {
      url: '/planillaBono',
      templateUrl: path + '/recursos/paginas/planillaBono.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.planillaSueldo', {
      url: '/planillaSueldo',
      templateUrl: path + '/recursos/paginas/planillaSueldo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.planillaAguinaldo', {
      url: '/planillaAguinaldo',
      templateUrl: path + '/recursos/paginas/planillaAguinaldo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.liquidacion', {
      url: '/liquidacion',
      templateUrl: path + '/recursos/paginas/liquidacion.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.vacaciones', {
      url: '/vacaciones',
      templateUrl: path + '/recursos/paginas/vacaciones.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.bajaMedica', {
      url: '/bajaMedica',
      templateUrl: path + '/recursos/paginas/bajaMedica.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.faltas', {
      url: '/faltas',
      templateUrl: path + '/recursos/paginas/faltas.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.recursos.descuentos', {
      url: '/descuentos',
      templateUrl: path + '/recursos/paginas/descuentos.html',
      controller: 'MainController'
    });

    //fin RECURSOS Submenu
    //Inicio VENTAS Submenu
    $stateProvider.state('main.ventas.clientes', {
      url: '/clientes',
      templateUrl: path + '/ventas/paginas/clientes.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas.centroNegocios', {
      url: '/centroNegocios',
      templateUrl: path + '/ventas/paginas/centroNegocios.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas.proyectos', {
      url: '/proyectos',
      templateUrl: path + '/ventas/paginas/proyectos.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas.cotizacion', {
      url: '/cotizacion',
      templateUrl: path + '/ventas/paginas/cotizacion.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas.preventa', {
      url: '/preventa',
      templateUrl: path + '/ventas/paginas/preventa.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas.ventaProducto', {
      url: '/ventaProducto',
      templateUrl: path + '/ventas/paginas/ventaProducto.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas.ventaServicios', {
      url: '/ventaServicios',
      templateUrl: path + '/ventas/paginas/ventaServicios.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas.cuentaPorPagar', {
      url: '/cuentaPorPagar',
      templateUrl: path + '/ventas/paginas/cuentaPorPagar.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.ventas.cuentaPorCobrar', {
      url: '/cuentaPorCobrar',
      templateUrl: path + '/ventas/paginas/cuentaPorCobrar.html',
      controller: 'MainController'
    });
    //fin ventas submenu
    //inicio CONTABILIDAD submenu
    $stateProvider.state('main.contabilidad.planDeCuenta', {
      url: '/planDeCuenta',
      templateUrl: path + '/contabilidad/paginas/planDeCuenta.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad.ingresoDinero', {
      url: '/ingresoDinero',
      templateUrl: path + '/contabilidad/paginas/ingresoDinero.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad.egresoDinero', {
      url: '/egresoDinero',
      templateUrl: path + '/contabilidad/paginas/egresoDinero.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad.traspasoDinero', {
      url: '/traspasoDinero',
      templateUrl: path + '/contabilidad/paginas/traspasoDinero.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad.libroCompras', {
      url: '/libroCompras',
      templateUrl: path + '/contabilidad/paginas/libroCompras.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad.libroVentas', {
      url: '/libroVentas',
      templateUrl: path + '/contabilidad/paginas/libroVentas.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad.libroDiario', {
      url: '/libroDiario',
      templateUrl: path + '/contabilidad/paginas/libroDiario.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad.impuestoMensual', {
      url: '/impuestoMensual',
      templateUrl: path + '/contabilidad/paginas/impuestoMensual.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.contabilidad.reporteFinanciero', {
      url: '/reporteFinanciero',
      templateUrl: path + '/contabilidad/paginas/reporteFinanciero.html',
      controller: 'MainController'
    });
    //FIN CONTABILIDAD SUBMENU
    //INCIO ACTIVO SUBMENU
    $stateProvider.state('main.activo.altaActivo', {
      url: '/altaActivo',
      templateUrl: path + '/activo/paginas/altaActivo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.activo.bajaActivo', {
      url: '/bajaActivo',
      templateUrl: path + '/activo/paginas/bajaActivo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.activo.tipoActivo', {
      url: '/tipoActivo',
      templateUrl: path + '/activo/paginas/tipoActivo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.activo.traspasoActivo', {
      url: '/traspasoActivo',
      templateUrl: path + '/activo/paginas/traspasoActivo.html',
      controller: 'MainController'
    });
    //FIN ACTIVO SUBMENU
    //inicio AGENDA SUBMENU
    $stateProvider.state('main.agenda.blockNotas', {
      url: '/blockNotas',
      templateUrl: path + '/agenda/paginas/blockNotas.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda.actasReunion', {
      url: '/actasReunion',
      templateUrl: path + '/agenda/paginas/actasReunion.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda.memorandum', {
      url: '/memorandum',
      templateUrl: path + '/agenda/paginas/memorandum.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda.reciboIngreso', {
      url: '/reciboIngreso',
      templateUrl: path + '/agenda/paginas/reciboIngreso.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda.reciboEgreso', {
      url: '/reciboEgreso',
      templateUrl: path + '/agenda/paginas/reciboEgreso.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda.reciboTraspaso', {
      url: '/reciboTraspaso',
      templateUrl: path + '/agenda/paginas/reciboTraspaso.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda.informeGastos', {
      url: '/informeGastos',
      templateUrl: path + '/agenda/paginas/informeGastos.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda.informeTrabajo', {
      url: '/informeTrabajo',
      templateUrl: path + '/agenda/paginas/informeTrabajo.html',
      controller: 'MainController'
    });
    $stateProvider.state('main.agenda.proyecto', {
      url: '/proyecto',
      templateUrl: path + '/agenda/paginas/proyecto.html',
      controller: 'MainController'
    });

    $urlRouterProvider.otherwise('/');
  }
]);
