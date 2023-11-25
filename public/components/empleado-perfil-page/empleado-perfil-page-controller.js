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

    get usuarioNombres() { return this.view.usuarioNombresInputValue; }
    get usuarioApellidos() { return this.view.usuarioApellidosInputValue; }
    get usuarioEmail() { return this.view.usuarioEmailInputValue; }
    get usuarioTelefono() { return this.view.usuarioTelefonoInputValue; }
    get usuarioDireccion() { return this.view.usuarioDireccionInputValue; }
    get usuarioPassword1() { return this.view.usuarioPassword1InputValue; }

    async setPerfilEvent(event) { //este metodo es al que luego se llama en el html al pulsar el boton
        event.preventDefault();
        //this.view.form.reportValidity();
        let valid = this.view.form.checkValidity();
        if (valid) {
            //Sacamos el usuario
            let usuario = this.model.perfil();
            // registramos al usuario
            let objeto = new Object();
            objeto.nombre = this.usuarioNombres; 
            objeto.apellido = this.usuarioApellidos;
            objeto.email = this.usuarioEmail;
            objeto.telefono = this.usuarioTelefono;
            objeto.direccion = this.usuarioDireccion;
            objeto.password = this.usuarioPassword1;
            this.model.setPerfil(usuario.dni, objeto);
            event.target.href = "/car-rental-online/invitado-home-page/empleado-home-page.html";
            router.route(event);
        }else{
            console.log("No se ha podido registrar el empleado");
        }
    }


    
}