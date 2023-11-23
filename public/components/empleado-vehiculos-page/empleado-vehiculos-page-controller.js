class EmpleadoVehiculosPageController extends PageController{
    constructor(model) {
        super(model);
        this.view = new EmpleadoVehiculosPageView();
    }

    async cargarVehiculos() {
        try {
            const vehiculos = await this.model.obtenerVehiculos();
            
            await this.view.refresh('car-rental-online/empleado-vehiculos-page', vehiculos);
        } catch (error) {
            console.error('Error al cargar los vehículos:', error);
        }
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
    }
}
