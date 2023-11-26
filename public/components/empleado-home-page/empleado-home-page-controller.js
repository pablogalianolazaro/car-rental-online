class EmpleadoHomePageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoHomePageView();
        
    }
    async refresh(url) { await super.refresh(url); }

    async signout(event) {
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
        router.route(event);
    }
}