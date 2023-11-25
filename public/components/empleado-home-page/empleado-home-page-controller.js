class EmpleadoHomePageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoHomePageView();
        
    }
    async refresh(url) { await super.refresh(url); }
}