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

            // Registramos al clientecliente-reserv
            this.model.signup(nuevoUsuario);

            // Navegar a la página de inicio para clientes después de guardar el perfil
            event.target.href = "/car-rental-online/cliente-home-page/cliente-home-page.html";
            router.route(event);
        } else {
            console.log("No se ha podido registrar el cliente");
        }
    }
}
