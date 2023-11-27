class ClienteReservarPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteReservarPageView();
    }

    // Datos Cliente

    getClienteDni() {
        return this.usuario.dni;
    }

    getClienteNombre() {
        return this.usuario.nombre;
    }

    getClienteApellidos() {
        return this.usuario.apellidos;
    }

    getClienteEmail() {
        return this.usuario.email;
    }

    getClienteDireccion() {
        return this.usuario.direccion;
    }

    getClienteTelefono() {
        return this.usuario.telefono;
    }

    // Datos Vehiculo

    getMatricula() {
        const matricula = this.getParam("matricula");
        return matricula;
    }

    getIdVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.id;
    }

    getMarcaVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.marca;
    }

    getModeloVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.modelo;
    }

    getTipoVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.tipo;
    }

    getEtiquetaVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.etiqueta;
    }

    getCostoVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.costoDia;
    }

    getDisponibleVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        if (vehiculo.disponible){
            return "SI";
        } else{
            return "NO";
        }
    }

    getEliminadoVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        if (vehiculo.eliminado){
            return "SI";
        } else{
            return "NO";
        }
    }

    getRevisionVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        if (vehiculo.revision){
            return "SI";
        } else{
            return "NO";
        }
    }

    getRecalcularCosto() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        const costoDia = vehiculo.costoDia;
        
    }

    getCalcularDias() {

    }

    getReservar(event) {
        if(this.model.reserva()){
            event.target.href="car-rental-online/cliente-reserva-page"
            router.route(event);
        } else {
            console.log();
        }
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page";
        router.route(event);
    }
}