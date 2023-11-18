class ClienteReservasPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteReservasPageView();
    }

    get clienteId() { return this.view.clienteIdInputValue; }

    async reservas(event) {
        event.preventDefault();
        this.view.form.reportValidity();
        let valid = this.view.form.checkValidity();
        if (valid) {
            this.model.reservas(this.clienteId);
            event.target.href = "car-rental-online/cliene-home-page/cliente-home-page.html";
            router.route(event);
        }else {
            console.log("No se ha podido mostrar la disponibilidad");
        }
    }
}