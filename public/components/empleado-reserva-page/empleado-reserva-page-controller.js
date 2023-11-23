class EmpleadoReservaPageController extends PageController{
    constructor(model){
        super(model);
        this.view = new EmpleadoReservaPageView();
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
    }
}