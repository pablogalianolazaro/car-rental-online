class ClienteReservarPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteReservarPageView();
    }
    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
    }
}