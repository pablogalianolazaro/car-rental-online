const Usuario = require("../../../src/model/usuario");
const Rol = require("../../../src/model/Rol");

class ClientePerfilPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClientePerfilPageView();
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
        try {
            event.preventDefault();
            this.view.form.reportValidity();
            let valid = this.view.form.checkValidity();

            if (valid) {
                const nuevoUsuario = new Usuario();
                nuevoUsuario.dni = this.usuarioDni;
                nuevoUsuario.nombres = this.usuarioNombres;
                nuevoUsuario.apellidos = this.usuarioApellidos;
                nuevoUsuario.email = this.usuarioEmail;
                nuevoUsuario.telefono = this.usuarioTelefono;
                nuevoUsuario.direccion = this.usuarioDireccion;
                nuevoUsuario.password = this.usuarioPassword1;
                nuevoUsuario.rol = Rol.Cliente;

                // Registramos al cliente
                //no se si es así
                await this.model.setPerfil(nuevoUsuario);

                // Navegar a la página de inicio para clientes después de guardar el perfil
                router.route("/car-rental-online/cliente-home-page/cliente-home-page.html");
            } else {
                console.log("No se ha podido registrar el cliente");
            }
        } catch (error) {
            console.error("Error al registrar el cliente:", error);
        }
    }

    async signout(event){
        this.model.signout();
        //no se si es así
        event.target.href = "car-rental-online/invitado-home-page"
        //o así
        //router.route("/car-rental-online/invitado-home-page/invitado-home-page.html");
    }
}
