class ClientePerfilPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClientePerfilPageView();
    }

     //obtenemos los valores de la vista(que esta obtiene del formulario) para poder instanciar un nuevo usuario y registrarlo en el event
     async refresh(url) {
        await super.refresh(url);
        let usuario = this.model._usuario;
        this.view.setUsuario(usuario);
    
    }

    // Obtener valores de la vista
    get usuarioDni() { return this.view.usuarioDniInputValue; }
    get usuarioNombres() { return this.view.usuarioNombresInputValue; }
    get usuarioApellidos() { return this.view.usuarioApellidosInputValue; }
    get usuarioEmail() { return this.view.usuarioEmailInputValue; }
    get usuarioTelefono() { return this.view.usuarioTelefonoInputValue; }
    get usuarioDireccion() { return this.view.usuarioDireccionInputValue; }
    get usuarioPassword1() { return this.view.usuarioPassword1InputValue; }

    // Método para establecer el perfil del cliente
    async setPerfil(event) {
        event.preventDefault();
        //this.view.form.reportValidity();
        let valid = this.view.form.checkValidity();

        if (valid) {
            let usuario = this.model.perfil();

            let objeto = new Object();
            objeto.dni = this.usuarioDni;
            objeto.nombres = this.usuarioNombres;
            objeto.apellidos = this.usuarioApellidos;
            objeto.email = this.usuarioEmail;
            objeto.telefono = this.usuarioTelefono;
            objeto.direccion = this.usuarioDireccion;
            objeto.password = this.usuarioPassword1;
            objeto.rol = Rol.Cliente;

            this.model.setPerfil(this.usuarioDni, objeto);
            event.target.href = "/car-rental-online/invitado-home-page/cliente-home-page.html";
            router.route(event);
        } else {
            console.log("No se ha podido registrar el cliente");
        }
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page";
        router.route(event);
    }
}
