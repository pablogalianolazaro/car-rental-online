class EmpleadoReservaPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoReservaPageView();
    }

    async refresh(url) {
        await super.refresh(url);

        // Obtener parámetros de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const reservaNum = urlParams.get('numReserva');
        const reservaId = urlParams.get('reservaId');

        // Obtener la reserva por su número
        const reserva = getReservaByNumero(reservaNum);

        // Obtener cliente y vehículo asociados a la reserva
        const cliente = this.model.clienteById(reserva.clienteId);
        const vehiculo = this.model.vehiculoById(reserva.vehiculoId);

        // Mostrar la información en la vista
        this.view.setReserva(reserva, cliente, vehiculo);
    }

    async refresh(url) {
        await super.refresh(url);
        const url1 = new URL('/car-rental-online/empleado-reserva-page?numReserva=$12353&reservaId=$20');
        //Obtenemos reserva
        var reservaNum = getParameterByName('numReserva');
        let reserva = getReservaByNumero(reservaNum);
        let cliente = this.model.clienteById(reserva.clienteId);
        let vehiculo = this.model.vehiculoById(reserva.vehiculoId);
        this.view.setReserva(reserva1, cliente, vehiculo);
        
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page";
        router.route(event);
    }

    async entregarVehiculo() {
        try {
            // Llamada al modelo para entregar el vehículo
            await this.model.entregarVehiculo(this.reservaId);

            // Navegar a la página de listado de reservas para empleados
            navegarAListaReservas();
        } catch (error) {
            console.error('Error al entregar el vehículo:', error);
        }
    }

    async devolverVehiculo() {
        try {
            // Llamada al modelo para devolver el vehículo (sincrónica)
            modeloReservas.devolverVehiculo();

            // Navegar a la página de listado de reservas
            navegarAListaReservas();
        } catch (error) {
            console.error('Error al devolver el vehículo:', error);
        }
    }

    async navegarAListaReservas() {
        console.log('Redirigiendo a la página de listado de reservas para empleados');
        window.location.href = 'empleado-reservas-page.html';
    }
}


