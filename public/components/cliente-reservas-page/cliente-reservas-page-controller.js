class ClienteReservasPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteReservasPageView();
    }

    async refresh(url) {
        await super.refresh(url);
        let reservas = (this.model.getReservas());
        //let idCliente = (this.model.perfil().id);
        let idCliente = 1;
        let reservasFiltradas = reservas.filter(reserva => reserva.clienteId === idCliente);
        this.view.setReservas(reservasFiltradas);
    }

    async signout(event) {
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page"
        router.route(event);
    }

    async reservaId(event) {
        event.preventDefault();
         const numReserva=event.target.innerText;
         console.log(numReserva);
         let reserva = this.model.reservaByNumero(numReserva);
         let reservaId= reserva.id;
         event.target.href = `/car-rental-online/cliente-reserva-page?numero=${numReserva}&id=${reservaId}`;
         router.route(event);
    }
}