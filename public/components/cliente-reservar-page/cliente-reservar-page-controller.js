class ClienteReservarPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteReservarPageView();
    }
    
    async refresh(url) {
        await super.refresh(url);
    }

    //Datos Cliente
    getClienteDni() {
        return this.model._usuario.dni;
    }

    getClienteNombre() {
        return this.model._usuario.nombres;
    }

    getClienteApellidos() {
        return this.model._usuario.apellidos;
    }

    getClienteEmail() {
        return this.model._usuario.email;
    }

    getClienteDireccion() {
        return this.model._usuario.direccion;
    }

    getClienteTelefono() {
        return this.model._usuario.telefono;
    }

    // Datos Vehiculo
    getIdVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.id;
    }

    getMatriculaVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.matricula;
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

    getDescripcionVehiculo() {
        const id = this.getParam("id");
        const vehiculo = this.model.vehiculoById(id);
        return vehiculo.descripcion;
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

    // Función para calcular el número de días entre dos fechas
    calcularNumeroDias(inicio, fin) {
        const fechaInicio = new Date(inicio);
        const fechaFin = new Date(fin);
        const milisegundosPorDia = 24 * 60 * 60 * 1000;
        const diferenciaDias = Math.round((fechaFin - fechaInicio) / milisegundosPorDia);
        return diferenciaDias;
    }

    getReservar(event) {
        if(this.model.reserva()){
            event.target.href="car-rental-online/cliente-reserva-page"
            router.route(event);
        } else {
            console.log();
        }
    }

    // Función para validar que las fechas sean válidas
    validarFechas(inicio, fin) {
        const fechaInicio = this.view.getFechaInicio();
        const fechaFin = this.view.getFechaFin();
         if(fechaInicio <= fechaFin){
            return true;
         }else{
            return false;
         }
    }

    //Funcion para recalcular el costo por dias
    recalcularCosto() {
        // Lógica para recalcular el costo según las fechas ingresadas
        const inicio = Date.parse(this.view.getFechaInicio()).valueOf();

        console.log(inicio);
        const fin = Date.parse(this.view.getFechaFin()).valueOf();

        const diferencia = fin - inicio;

        //let diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;
        //console.log(diasDeDiferencia);
        

        // Validar que las fechas sean válidas y recalcular el costo
        if(inicio==fin){
            return this.model.vehiculoPorMatricula(this.getMatriculaVehiculo()).costoDia;
        }
        if ((this.validarFechas(inicio, fin))== true) {
            
            // Lógica para obtener el costo desde el modelo
            const costoDia = this.model.vehiculoPorMatricula(this.getMatriculaVehiculo()).costoDia;
            const costoTotal = costoDia * diferencia;

            // Mostrar el costo recalculado en la vista
            return costoTotal;
        } else {
            // Manejar el caso de fechas inválidas
            alert('Las fechas ingresadas son inválidas.');
        }
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page";
        router.route(event);
    }
}