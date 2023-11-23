class ClienteReservaPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClienteReservaPageView();
    }

    async refresh(url) {
        await super.refresh(url);
        const url1 = new URL('/car-rental-online/empleado-reserva-page?numReserva=$12353&reservaId=$20');
        //Obtenemos reserva
        var reservaNum = getParameterByName('numReserva');
        let reserva = getReservaByNumero(reservaNum);
        /**let reserva1 = new Reserva(20);
        reserva1.inicio = new Date("2023-11-24").toISOString();
        reserva1.fin = new Date("2023-11-30").toISOString();
        reserva1.costo = 500;
        reserva1.numero = "12345";
        reserva1.entrega = "LugarA";
        reserva1.devolución = "LugarB";
        reserva1.fecha = new Date();
        reserva1.clienteId = 13;
        reserva1.vehiculoId = 1;*/
        //Obtenemos Cliente
        let cliente = this.model.clienteById(reserva.clienteId);
        /**let cliente = new Cliente(1);
        cliente.dni = "123456789";
        cliente.nombres = "Juan";
        cliente.apellidos = "Pérez";
        cliente.direccion = "Calle 123";
        cliente.email = "juan@email.com";
        cliente.password = "contraseña";
        cliente.rol = Rol.Cliente;
        cliente.telefono = "555-555-555";*/
        //Obtenemos vehiculos
        let vehiculo = this.model.vehiculoById(reserva.vehiculoId);
        /**let vehiculo = new Vehiculo(1);
        vehiculo.matricula = "ABC123";
        vehiculo.marca = "Toyota";
        vehiculo.modelo = "Camry";
        vehiculo.etiqueta = "Sedán";
        vehiculo.tipo = "Automóvil";
        vehiculo.disponible = true;
        vehiculo.eliminado = false;
        vehiculo.costoDia = 50;
        vehiculo.descripcion = "Vehículo cómodo y confiable";*/






        this.view.setReserva(reserva1, cliente, vehiculo);

        
    }

    cancelarReserva() {
        this.modelo.cancelarReserva(this.reservaId);
    }

    
}