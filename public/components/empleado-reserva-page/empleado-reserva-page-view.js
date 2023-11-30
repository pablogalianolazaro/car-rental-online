class EmpleadoReservaPageView extends PageView {
    constructor() { super('empleado-reserva-page'); }
    async refresh(url) { await super.refresh(url); }

    async refresh(url) {
        await super.refresh(url);}
   
    setReserva(reserva, cliente, vehiculo){

        
        //Reserva
        document.getElementById('Fecha').innerHTML= reserva.fecha;
        document.getElementById('Inicio').innerHTML = reserva.inicio;
        document.getElementById('Fin').innerHTML = reserva.fin;
        document.getElementById('reservaEntrega').innerHTML = reserva.entrega;
        document.getElementById('reservaDevolucion').innerHTML = reserva.devolución;
        //Cliente
        document.getElementById('dni').innerHTML= cliente.dni;
        document.getElementById('nombres').innerHTML = cliente.nombres;
        document.getElementById('apellidos').innerHTML = cliente.apellidos;
        document.getElementById('Direccion').innerHTML = cliente.direccion;
        document.getElementById('telefono').innerHTML = cliente.telefono;
        document.getElementById('email').innerHTML = cliente.email;
        //Vehiculo
        document.getElementById('matricula').innerHTML= vehiculo.matricula;
        document.getElementById('marca').innerHTML = vehiculo.marca;
        document.getElementById('modelo').innerHTML = vehiculo.modelo;
        document.getElementById('tipo').innerHTML = vehiculo.tipo;
        document.getElementById('etiqueta').innerHTML = vehiculo.etiqueta;
        document.getElementById('costoPorDia').innerHTML = vehiculo.costoDia;
        document.getElementById('descripcion').innerHTML = vehiculo.descripcion;
        document.getElementById('disponible').innerHTML = vehiculo.disponible;
        document.getElementById('eliminado').innerHTML = vehiculo.eliminado;
        document.getElementById('revision').value = vehiculo.revision;

        //Coste
        document.getElementById('costofin').innerHTML = reserva.costo;
   
    }



}