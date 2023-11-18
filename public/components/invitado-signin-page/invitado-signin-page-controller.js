class InvitadoSigninPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new InvitadoSigninPageView();
    }

    get invitadoEmail() { return this.view.invitadoEmailInputValue; }
    get invitadoPassword() { return this.view.invitadoPasswordInputValue; }

    async ingresar(event) {
        event.preventDefault();
        this.view.form.reportValidity();
        let valid = this.view.form.checkValidity();
        if (valid) {
            this.model.signin(this.invitadoEmail, this.invitadoPassword);
            event.target.href = "car-rental-online/invitado-home-page/invitado-home-page.html";
            router.route(event);
        }else {
            console.log("No se ha podido ingresar");
        }
    }
}