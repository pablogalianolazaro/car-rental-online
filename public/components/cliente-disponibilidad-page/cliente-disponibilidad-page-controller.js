class ClienteDisponibilidadPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteDisponibilidadPageView();
    }

    get vehiculoId() { return this.view.vehiculoIdInputValue; }
    get inicio() { return this.view.inicioInputValue; }
    get final() { return this.view.finalInputValue; }

    async listarDisponibilidad(event) {
        event.preventDefault();
        this.view.form.reportValidity();
        let valid = this.view.form.checkValidity();
        if (valid) {
            this.model.disponibilidad(this.vehiculoId, this.inicio, this.final);
            event.target.href = "car-rental-online/cliene-home-page/cliente-home-page.html";
            router.route(event);
        }else {
            console.log("No se ha podido mostrar la disponibilidad");
        }
    }
}