class EmpleadoVehiculosPageController extends PageController{
    constructor(model) {
        super(model);
        this.view = new EmpleadoVehiculosPageView();
    }

    async refresh(url) {
        await super.refresh(url);
        
        let vehiculosTodos = (this.model.getVehiculos());
        this.view.setVehiculos(vehiculosTodos);
    }

    async verVehiculo(event) {
        const matriculaNum=this.view.getNum();
        let vehiculo = this.model.vehiculoPorMatricula(matriculaNum);
        const id = vehiculo._id;
        // Navegar a la página empleado-vehiculo-page con el ID del vehículo como parámetro
        event.target.href = `/car-rental-online/empleado-vehiculo-page?id=${id}`;
        router.route(event);
    }
    
    async agregar(event) {
        event.preventDefault();
        if(this.model._usuario!=null){
            event.target.href = `/car-rental-online/empleado-agregar-vehiculo-page`;
            router.route(event);
        }
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page";
        router.route(event);
    }
}
