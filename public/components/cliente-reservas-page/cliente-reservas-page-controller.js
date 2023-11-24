class ClienteReservasPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteReservasPageView();
    }

    async refresh(url) {
        await super.refresh(url);
        let reservas = (this.model.getReservas());
        let idCliente = (this.model.perfil().id);
        let reservasFiltradas = reservas.filter(reserva => reserva.clienteId === idCliente);
        this.view.setReservas(reservasFiltradas);
    }  

    async signout(event) {
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
        router.route(event);
    }
}