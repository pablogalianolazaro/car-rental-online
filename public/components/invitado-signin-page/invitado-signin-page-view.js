class InvitadoSigninPageView extends PageView {
    constructor() { super('invitado-signin-page'); }

    get form() { return document.getElementById('ingresar'); }
    get invitadoEmailInput() { return document.getElementById('invitadoEmail'); }
    get invitadoEmailInputValue() { return this.invitadoEmailInput.value; }
    get invitadoPasswordInput() { return document.getElementById('invitadoPassword'); }
    get invitadoPasswordInputValue() { return this.invitadoPasswordInput.value; }

}