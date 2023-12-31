class ClienteDisponibilidadPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteDisponibilidadPageView();
    }

    async refresh(url) {
        await super.refresh(url);
        let vehiculosDisponibles = (this.model.disponibles(this.model._vehiculos[0].marca, this.model._vehiculos[0].modelo, this.model._vehiculos[0].tipo, this.model._vehiculos[0].etiqueta, this.model._vehiculos[0].costoDia, new Date("2024-10-25").toISOString(), new Date("2024-10-25").toISOString()));
        let reservas = (this.model.getReservas());
        this.view.setVehiculos(vehiculosDisponibles);
    }  

    async reservar(event) {
        event.preventDefault();
        const matriculaNum=this.view.getNum();
        //buscamos el vehiculo correspondiente a esa matricula
        let vehiculo = this.model.vehiculoPorMatricula(matriculaNum);
        const id = vehiculo._id;
        if(this.model._usuario!=null){
            event.target.href = `/car-rental-online/cliente-reservar-page?id=${id}`;
            router.route(event);
        }
    }

    async signout(event) {
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
        router.route(event);
    }
}