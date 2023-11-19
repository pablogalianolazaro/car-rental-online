class InvitadoSigninPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new InvitadoSigninPageView();
    }

    get invitadoEmail() { return this.view.invitadoEmailInputValue; }
    get invitadoPassword() { return this.view.invitadoPasswordInputValue; }
    get invitadoRol() { return this.view.invitadoRolInputValue; }

    async signin(event) {
        event.preventDefault();
        this.view.form.reportValidity();
        let valid = this.view.form.checkValidity();
        if (valid) {
            if(this.model.signin(this.invitadoEmail, this.invitadoPassword, this.invitadoRol)){
                if(this.invitadoRol == Rol.Cliente){
                    event.target.href = "car-rental-online/cliente-home-page/cliente-home-page.html";
                }else{
                    event.target.href = "car-rental-online/empleado-home-page/empleado-home-page.html";
                }
            }
            router.route(event);
        }else {
            console.log("No se ha podido ingresar");
        }
    }
}