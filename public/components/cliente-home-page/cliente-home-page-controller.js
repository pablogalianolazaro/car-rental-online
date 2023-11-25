class ClienteHomePageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteHomePageView();
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page";
        router.route(event);
    }
}