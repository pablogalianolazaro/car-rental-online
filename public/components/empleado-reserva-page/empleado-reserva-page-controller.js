class EmpleadoReservaPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoReservaPageView();
    }

    async refresh(url) {
        await super.refresh(url);
        //const url1 = new URL('/car-rental-online/empleado-reserva-page?numReserva=$12353&reservaId=$20');
        //Obtenemos reserva
        //var reservaNum = getParameterByName('numReserva');
        let reserva = this.model.reservaByNumero('12345');
        console.log(reserva.numero);
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

        this.view.setReserva(reserva, cliente, vehiculo);

        
    }

    getNumeroReserva(){
        return this.getParam('numReserva');
    }
    async entregar(event) {
        event.preventDefault();
        const numero= this.getNumeroReserva();
        console.log('entregar.numero: '+numero);
        this.model.entregarVehiculo(numero);
        event.target.href = `car-rental-online/empleado-reservas-page?numReserva=${numero}`;
        router.route(event);
    }

    async devolver(event){
        event.preventDefault();
        const numero=this.getNumeroReserva();
        console.log('devolver.numero: '+numero);
        this.model.devolverVehiculo(numero);
        event.target.href = "car-rental-online/empleado-reservas-page";
        router.route(event);
    }

    async signout(event){
        this.model.signout();
        event.target.href = "car-rental-online/invitado-home-page";
        router.route(event);
    }

    
}