class ClientePerfilPageView extends PageView {
    constructor() { super('cliente-perfil-page') }

    setUsuario(usuario){
        document.getElementById('clienteDni').value = usuario.dni;
        document.getElementById('clienteNombres').value = usuario.nombres;
        document.getElementById('clienteApellidos').value = usuario.apellidos;
        document.getElementById('clienteDireccion').value = usuario.direccion;
        document.getElementById('clienteEmail').value = usuario.email;
        document.getElementById('clienteTelefono').value = usuario.telefono;
    }

    get form() { return document.getElementById('registrar'); }
    get usuarioDniInput() { return document.getElementById('clienteDni'); }
    get usuarioDniInputValue() { return this.usuarioDniInput.value; }
    get usuarioNombresInput() { return document.getElementById('clienteNombres'); }
    get usuarioNombresInputValue() { return this.usuarioNombresInput.value; }
    get usuarioApellidosInput() { return document.getElementById('clienteApellidos'); }
    get usuarioApellidosInputValue() { return this.usuarioApellidosInput.value; }
    get usuarioEmailInput() { return document.getElementById('clienteEmail'); }
    get usuarioEmailInputValue() { return this.usuarioEmailInput.value; }
    get usuarioTelefonoInput() { return document.getElementById('clienteTelefono'); }
    get usuarioTelefonoInputValue() { return this.usuarioTelefonoInput.value; }
    get usuarioRolInput() { return document.getElementById('clienteRol'); }
    get usuarioRolInputValue() { return this.usuarioRolInput.value; }
    get usuarioDireccionInput() { return document.getElementById('clienteDireccion'); }
    get usuarioDireccionInputValue() { return this.usuarioDireccionInput.value; }
    get usuarioPassword1Input() { return document.getElementById('clientePassword'); }
    get usuarioPassword1InputValue() { return this.usuarioPassword1Input.value; }
    get usuarioPassword2Input() { return document.getElementById('clientePassword2'); }
    get usuarioPassword2InputValue() { return this.usuarioPassword2Input.value; }
}
