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
            console.log(this.invitadoEmail);
            console.log(this.invitadoPassword);
            console.log(this.invitadoRol);
            
            if(this.model.signin(this.invitadoEmail, this.invitadoPassword, this.invitadoRol)){
                if(this.invitadoRol == "Cliente"){
                    event.target.href = "car-rental-online/cliente-home-page";
                }else{
                    event.target.href = "car-rental-online/empleado-home-page";
                }
            }
            router.route(event);
        }else {
            console.log("No se ha podido ingresar");
            event.target.href = "car-rental-online/invitado-signin-page"
        }
    }
}