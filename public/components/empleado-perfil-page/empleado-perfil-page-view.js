class EmpleadoPerfilPageView extends PageView {
    constructor() { super('empleado-perfil-page') }

    get form() { return document.getElementById('registrar'); }
    get usuarioDniInput() { return document.getElementById('empleadoDni'); }
    get usuarioDniInputValue() { return this.usuarioDniInput.value; }
    get usuarioNombresInput() { return document.getElementById('empleadoNombres'); }
    get usuarioNombresInputValue() { return this.usuarioNombresInput.value; }
    get usuarioApellidosInput() { return document.getElementById('empleadoApellidos'); }
    get usuarioApellidosInputValue() { return this.usuarioApellidosInput.value; }
    get usuarioEmailInput() { return document.getElementById('empleadoEmail'); }
    get usuarioEmailInputValue() { return this.usuarioEmailInput.value; }
    get usuarioTelefonoInput() { return document.getElementById('empleadoTelefono'); }
    get usuarioTelefonoInputValue() { return this.usuarioTelefonoInput.value; }
    get usuarioRolInput() { return document.getElementById('empleadoRol'); }
    get usuarioRolInputValue() { return this.usuarioRolInput.value; }
    get usuarioDireccionInput() { return document.getElementById('empleadoDireccion'); }
    get usuarioDireccionInputValue() { return this.usuarioDireccionInput.value; }
    get usuarioPasswordInput() { return document.getElementById('empleadoPassword'); }
    get usuarioPasswordInputValue() { return this.usuarioPasswordInput.value; }
    get usuarioPassword2Input() { return document.getElementById('empleadoPassword2'); }
    get usuarioPassword2InputValue() { return this.usuarioPassword2Input.value; }
}