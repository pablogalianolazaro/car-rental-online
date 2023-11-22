class EmpleadoAgregarVehiculoPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoAgregarVehiculoPageView();
    }

    get Matricula() { return this.view.vehiculoMatriculaInputValue; }
    get Marca() { return this.view.vehiculoMarcaInputValue; }
    get Modelo() { return this.view.vehiculoModeloInputValue; }
    get Tipo() { return this.view.vehiculoTipoInputValue; }
    get Etiqueta() { return this.view.vehiculoEtiquetaInputValue; }
    get Descripcion() { return this.view.vehiculoDescripcionInputValue; }
    get Costo() { return this.view.vehiculoCostoInputValue; }

    async agregarVehiculo(event) {
        event.preventDefault();
        let valid = this.view.form.checkValidity();
        if (valid) {
            const vehiculo = new Vehiculo();
            
            vehiculo.matricula = this.Matricula;
            vehiculo.marca = this.Marca;
            vehiculo.modelo = this.Modelo;
            vehiculo.etiqueta = this.Etiqueta;
            vehiculo.tipo = this.Tipo;
            vehiculo.disponible = true;
            vehiculo.eliminado = false;
            vehiculo.costoDia = this.Costo;
            vehiculo.descripcion = this.Descripcion;

            this.model.agregarVehiculo(vehiculo)

            event.target.href = "car-rental-online/empleado-vehiculos-page"
            router.route(event);
        }
    }

    async signout(event) {
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
        router.route(event);
    }

}