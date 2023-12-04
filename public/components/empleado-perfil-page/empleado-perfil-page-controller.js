class EmpleadoPerfilPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoPerfilPageView();
    }

    //obtenemos los valores de la vista(que esta obtiene del formulario) para poder instanciar un nuevo usuario y registrarlo en el event
    async refresh(url) {
        await super.refresh(url);
        let usuario = this.model._usuario;
        this.view.setUsuario(usuario);
    
    }
    get usuarioDni(){ return this.view.usuarioDniInputValue}
    get usuarioNombres() { return this.view.usuarioNombresInputValue; }
    get usuarioApellidos() { return this.view.usuarioApellidosInputValue; }
    get usuarioEmail() { return this.view.usuarioEmailInputValue; }
    get usuarioTelefono() { return this.view.usuarioTelefonoInputValue; }
    get usuarioDireccion() { return this.view.usuarioDireccionInputValue; }
    get usuarioPassword1() { return this.view.usuarioPassword1InputValue; }

    async setPerfilEvent(event) { //este metodo es al que luego se llama en el html al pulsar el boton
        event.preventDefault();
        let valid = this.view.form.reportValidity();
        //let valid = this.view.form.checkValidity();
        if (valid) {
            // registramos al usuario
            let objeto = new Object();
            objeto.dni = this.view.usuarioDniInputValue;
            objeto.nombres = this.view.usuarioNombresInputValue;
            objeto.apellidos = this.view.usuarioApellidosInputValue;
            objeto.email = this.view.usuarioEmailInputValue;
            objeto.telefono = this.view.usuarioTelefonoInputValue;
            objeto.direccion = this.view.usuarioDireccionInputValue;
            objeto.password =  this.view.usuarioPasswordInputValue;
            this.model.setPerfil(usuario.dni, objeto);
            event.target.href = "/car-rental-online/empleado-home-page.html";
            router.route(event);
        }else{
            console.log("No se ha podido cambiar los datos del empleado");
            event.target.href = "car-rental-online/empleado-perfil-page"
        }
    }

    async signout(event) {
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
        router.route(event);
    }
}