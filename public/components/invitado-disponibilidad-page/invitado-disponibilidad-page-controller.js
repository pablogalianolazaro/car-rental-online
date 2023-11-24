
class InvitadoDisponibilidadPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new InvitadoDisponibilidadPageView();
    }

    //aqui con el refresh cogemos los supuestos vehiculos disponibles
    // y los añadimos al html con el metodo de la vista
    async refresh(url) {
        //esperamos a recargar la url
        await super.refresh(url);
        let vehiculosDisponibles= (this.model.disponibles(this.model._vehiculos[0].marca,this.model._vehiculos[0].modelo,this.model._vehiculos[0].tipo,this.model._vehiculos[0].etiqueta,this.model._vehiculos[0].costoDia,new Date("2024-10-25").toISOString(),new Date("2024-10-25").toISOString()));
        vehiculosDisponibles= vehiculosDisponibles.concat(this.model.disponibles(this.model._vehiculos[1].marca,this.model._vehiculos[1].modelo,this.model._vehiculos[1].tipo,this.model._vehiculos[1].etiqueta,this.model._vehiculos[1].costoDia,new Date("2025-10-25").toISOString(),new Date("2025-10-25").toISOString()));
        vehiculosDisponibles=vehiculosDisponibles.concat(this.model.disponibles(this.model._vehiculos[2].marca,this.model._vehiculos[2].modelo,this.model._vehiculos[2].tipo,this.model._vehiculos[2].etiqueta,this.model._vehiculos[2].costoDia,new Date("2026-10-25").toISOString(),new Date("2026-10-25").toISOString()));
        this.view.setVehiculos(vehiculosDisponibles);
    }  

    async reservar(event) { //este metodo es al que luego se llama en el html al pulsar el boton
        event.preventDefault();
        if(this.model._usuario==null){
        event.target.href = "/car-rental-online/invitado-signin-page";
        router.route(event);
        }
        
    }

}
