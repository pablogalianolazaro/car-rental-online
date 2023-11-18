class ClienteDisponibilidadPageView extends PageView {
    constructor() { super('cliente-disponibilidad-page'); }

    get form() { return document.getElementById('ingresar'); }
    get vehiculoIdInput() { return document.getElementById(''); }
    get vehiculoIdInputValue() { return this.vehiculoIdInput.value; }
    get inicioInput() { return document.getElementById(''); }
    get inicioInputValue() { return this.inicioInput.value; }
    get finalInput() { return document.getElementById('')}
    get finalInputId() { return this.finalInput.value}

}