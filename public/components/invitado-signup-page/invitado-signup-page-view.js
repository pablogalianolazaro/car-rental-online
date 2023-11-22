class InvitadoSignupPageView extends PageView {
    constructor() { super('invitado-signup-page') }

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
    get usuarioPasswordInput() { return document.getElementById('clientePassword'); }
    get usuarioPasswordInputValue() { return this.usuarioPasswordInput.value; }
    get usuarioPassword2Input() { return document.getElementById('clientePassword2'); }
    get usuarioPassword2InputValue() { return this.usuarioPassword2Input.value; }
    async refresh(url) { await super.refresh(url); }
}