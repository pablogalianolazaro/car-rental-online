class InvitadoSignupController extends PageController {
    constructor(model) {
        super(model);
        this.view = new InvitadoSignupPageView();
    }

    //obtenemos los valores de la vista(que esta obtiene del formulario) para poder instanciar un nuevo usuario y registrarlo en el event
    get usuarioDni() { return this.view.usuarioDniInputValue; }
    get usuarioNombres() { return this.view.usuarioNombresInputValue; }
    get usuarioApellidos() { return this.view.usuarioApellidosInputValue; }
    get usuarioEmail() { return this.view.usuarioEmailInputValue; }
    get usuarioTelefono() { return this.view.usuarioTelefonoInputValue; }
    get usuarioRol() { return this.view.usuarioRolInputValue; }
    get usuarioDireccion() { return this.view.usuarioDireccionInputValue; }
    get usuarioPassword1() { return this.view.usuarioPassword1InputValue; }

    async registrar(event) { //este metodo es al que luego se llama en el html al pulsar el boton
        event.preventDefault();
        this.view.form.reportValidity();
        let valid = this.view.form.checkValidity();
        if (valid) {
            // registramos al usuario segun el rol
            if(this.usuarioRol=="Cliente"){
            const nuevoUsuario = new Cliente();
            nuevoUsuario.dni = this.usuarioDni;
            nuevoUsuario.nombres = this.usuarioNombres;
            nuevoUsuario.apellidos = this.usuarioApellidos;
            nuevoUsuario.email = this.usuarioEmail;
            nuevoUsuario.telefono = this.usuarioTelefono;
            nuevoUsuario.rol = this.usuarioRol;
            nuevoUsuario.direccion = this.usuarioDireccion;
            nuevoUsuario.password = this.usuarioPassword1;
            if(this.model.signup(nuevoUsuario)){
                event.target.href = "/car-rental-online/invitado-home-page";
                router.route(event);
                }else{
                console.log("No se ha podido registrar el usuario");}
        }else if(this.usuarioRol=="Empleado"){
            const nuevoUsuario = new Empleado();
            nuevoUsuario.dni = this.usuarioDni;
            nuevoUsuario.nombres = this.usuarioNombres;
            nuevoUsuario.apellidos = this.usuarioApellidos;
            nuevoUsuario.email = this.usuarioEmail;
            nuevoUsuario.telefono = this.usuarioTelefono;
            nuevoUsuario.rol = this.usuarioRol;
            nuevoUsuario.direccion = this.usuarioDireccion;
            nuevoUsuario.password = this.usuarioPassword1;
            if(this.model.signup(nuevoUsuario)){
            event.target.href = "/car-rental-online/invitado-home-page";
            router.route(event);
            } else{
            console.log("No se ha podido registrar el usuario");}
        }
        }
    }
    async refresh(url) {
        await super.refresh(url);
    }
}
