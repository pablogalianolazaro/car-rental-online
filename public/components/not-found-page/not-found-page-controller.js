class NotFoundPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new NotFoundPageView();
    }
}