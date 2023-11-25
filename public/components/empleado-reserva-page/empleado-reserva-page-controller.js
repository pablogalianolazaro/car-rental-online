class EmpleadoReservaPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoReservaPageView();
    }

    async cargarMostrarReserva(reservaId) {
        try {
            // Obtener la reserva por su ID
            const reserva = await obtenerReservaPorId(reservaId);

            // Mostrar la reserva en la vista
            this.view.mostrarReserva(reserva);
        } catch (error) {
            console.error('Error al cargar y mostrar la reserva:', error);
        }
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page";
        router.route(event);
    }
}

//esto no se como hacerlo
const reservasLocales = [
    { _id: '1', matricula: 'ABC123', fechaInicio: '2023-01-01', fechaFin: '2023-01-05' },
    { _id: '2', matricula: 'XYZ789', fechaInicio: '2023-02-01', fechaFin: '2023-02-10' },

];

async function obtenerReservaPorId(reservaId) {
    try {
        const reservaEncontrada = reservasLocales.find(reserva => reserva._id === reservaId);

        if (reservaEncontrada) {
            return Promise.resolve(reservaEncontrada);
        } else {
            return Promise.reject(new Error(`Reserva con ID ${reservaId} no encontrada`));
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

