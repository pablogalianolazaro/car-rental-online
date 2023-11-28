class ClienteReservarPageView extends PageView {
    constructor() {
        super('cliente-reservar-page');

    }

    getFechaInicio(){return document.getElementById('ReservaFechaInicio').innerHTML}
    getFechaFin(){return document.getElementById('ReservaFechaFin').innerHTML}

    async refresh(url) {
        await super.refresh(url);

        const fechaActual = new Date().toISOString().substring(0, 16);


        //RESERVA
        document.querySelector('input[name="reservaFecha"]').value = fechaActual;
        document.getElementById('ReservaFecha').innerHTML = fechaActual;
        document.getElementById('ReservaFechaInicio').innerHTML = fechaActual;
        document.getElementById('ReservaFechaFin').innerHTML = fechaActual;
        document.getElementById('costoTotal').innerHTML = this.controller.recalcularCosto();
        //CLIENTE
        document.getElementById('ClienteDni').innerHTML = this.controller.getClienteDni();
        document.getElementById('ClienteNombre').innerHTML = this.controller.getClienteNombre();
        document.getElementById('ClienteApellidos').innerHTML = this.controller.getClienteApellidos();
        document.getElementById('ClienteDireccion').innerHTML = this.controller.getClienteDireccion();
        document.getElementById('ClienteTelefono').innerHTML = this.controller.getClienteTelefono();
        document.getElementById('ClienteEmail').innerHTML = this.controller.getClienteEmail();
        //VEHICULO
        document.getElementById('MatriculaId').innerHTML = this.controller.getMatriculaVehiculo();
        document.getElementById('MarcaId').innerHTML = this.controller.getMarcaVehiculo();
        document.getElementById('ModeloId').innerHTML = this.controller.getModeloVehiculo();
        document.getElementById('TipoId').innerHTML = this.controller.getTipoVehiculo();
        document.getElementById('EtiquetaId').innerHTML = this.controller.getEtiquetaVehiculo();
        document.getElementById('DescripcionId').innerHTML = this.controller.getDescripcionVehiculo();
        document.getElementById('CostoId').innerHTML = this.controller.getCostoVehiculo();
        document.getElementById('DisponibleId').innerHTML = this.controller.getDisponibleVehiculo();
        document.getElementById('EliminadoId').innerHTML = this.controller.getEliminadoVehiculo();
        document.getElementById('RevisionId').innerHTML = this.controller.getRevisionVehiculo();
    }

    
    
    
}
