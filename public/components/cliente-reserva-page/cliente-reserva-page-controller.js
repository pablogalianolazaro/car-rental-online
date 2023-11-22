class ClienteReservaPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoHomePageView();
    }

    cargarReserva() {
        const reserva = this.modelo.obtenerReservaPorId(this.reservaId);
        this.view.mostrarReserva(reserva);
    }

    cancelarReserva() {
        this.modelo.cancelarReserva(this.reservaId);
        this.modelo.ca
    }

    
}