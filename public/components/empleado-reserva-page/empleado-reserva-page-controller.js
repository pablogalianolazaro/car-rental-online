// class EmpleadoReservaPageController extends PageController {
//     constructor(model) {
//         super(model);
//         this.view = new EmpleadoReservaPageView();
//     }

//     async refresh(url) {
//         await super.refresh(url);

//         // Obtener parámetros de la URL
//         const url1 = new URL('/car-rental-online/empleado-reserva-page?numReserva=$12353&reservaId=$20');

//         // Obtener la reserva por su número
//         var reservaNum = getParameterByName('numReserva');
//         let reserva = getReservaByNumero(reservaNum);

//         // Obtener cliente y vehículo asociados a la reserva
//         let cliente = this.model.clienteById(reserva.clienteId);
//         let vehiculo = this.model.vehiculoById(reserva.vehiculoId);

//         // Mostrar la información en la vista
//         this.view.setReserva(reserva, cliente, vehiculo);
//     }

//     /*async refresh(url) {
//         await super.refresh(url);
//         //const url1 = new URL('/car-rental-online/empleado-reserva-page?numReserva=$12353&reservaId=$20');
//         //Obtenemos reserva
//         var reservaNum = getParameterByName('numReserva');
//         let reserva = getReservaByNumero(reservaNum);
//         let cliente = this.model.clienteById(reserva.clienteId);
//         let vehiculo = this.model.vehiculoById(reserva.vehiculoId);
//         this.view.setReserva(reserva1, cliente, vehiculo);
        
//     }*/

//     getIdReserva() {
//         const id = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         return reserva.id;
//     }

//     getMatriculaVehiculo() {
//         const id = this.getParam("id");
//         const vehiculo = this.model.vehiculoById(id);
//         return vehiculo.matricula;
//     }

//     getIdVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         return vehiculo.id;
//     }

//     getMatriculaVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         return vehiculo.matricula;
//     }

//     getMarcaVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         return vehiculo.marca;
//     }

//     getModeloVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         return vehiculo.modelo;
//     }

//     getTipoVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         return vehiculo.tipo;
//     }

//     getEtiquetaVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         return vehiculo.etiqueta;
//     }

//     getDescripcionVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         return vehiculo.descripcion;
//     }

//     getCostoVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         return vehiculo.costoDia;
//     }

//     getDisponibleVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         if (vehiculo.disponible){
//             return "SI";
//         } else{
//             return "NO";
//         }
//     }

//     getEliminadoVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         if (vehiculo.eliminado){
//             return "SI";
//         } else{
//             return "NO";
//         }
//     }

//     getRevisionVehiculo() {
//         const idReserva = this.getParam("id");
//         const reserva = this.model.reservaById(id);
//         const vehiculoId = reserva.vehiculoId;
//         const vehiculo = this.model.vehiculoById(vehiculoId);
//         if (vehiculo.revision){
//             return "SI";
//         } else{
//             return "NO";
//         }
//     }

//     async signout(event){
//         this.model.signout();
//         event.target.href = "car-rental-online/invitado-home-page";
//         router.route(event);
//     }

//     async entregarVehiculo(event) {
//         try {
//             // Llamada al modelo para entregar el vehículo
//             await this.model.entregarVehiculo(this.reservaId);
//             //navegar a empleado-reservas-page
//             event.target.href = "car-rental-online/empleado-reservas-page";
//         } catch (error) {
//             console.error('Error al entregar el vehículo:', error);
//         }
//     }

//     async devolverVehiculo() {
//         try {
//             // Llamada al modelo para devolver el vehículo (sincrónica)
//             modeloReservas.devolverVehiculo();

//             // Navegar a la página de listado de reservas
//             navegarAListaReservas();
//         } catch (error) {
//             console.error('Error al devolver el vehículo:', error);
//         }
//     }

//     async navegarAListaReservas() {
//         console.log('Redirigiendo a la página de listado de reservas para empleados');
//         window.location.href = 'empleado-reservas-page.html';
//     }
// }


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