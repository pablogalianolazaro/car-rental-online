class EmpleadoReservaPageView extends PageView {
    constructor() { super('empleado-reserva-page');}
    async refresh(url, reservaId) {
        await super.refresh(url);
    }
    
    setReserva(reserva, empleado, vehiculo){

        console.log("costo",reserva.fecha);
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

    setReservas(vehiculosTodos){
        let container = document.getElementById('tablalistadovehiculos');
        let html = `<thead><tr><th>Matrícula</th><th>Marca</th><th>Modelo</th><th>Eliminado</th><th>Disponible</th><th>Revisión</th></tr></thead><tbody>`;

        vehiculosTodos.forEach((vehiculo) => {
            // Determinar el color de fondo según el estado del vehículo
            let colorFondo = '';
            if (vehiculo.eliminado) {
                colorFondo = 'red';
            } else if (vehiculo.entregado) {
                colorFondo = 'blue';
            } else {
                colorFondo = 'green';
            }

            html += `<tr style="background-color: ${colorFondo};">
                        <td><a onclick="router.controller.verVehiculo('${vehiculo._id}')">${vehiculo.matricula}</a></td>
                        <td>${vehiculo.marca}</td>
                        <td>${vehiculo.modelo}</td>
                        <td>${vehiculo.eliminado ? 'Sí' : 'No'}</td>
                        <td>${vehiculo.entregado ? 'Sí' : 'No'}</td>
                        <td>${vehiculo.revision ? 'Sí' : 'No'}</td>
                    </tr>`;
                
            /*html += `<tr style="background-color: ${colorFondo};"><td><a onclick="router.controller.verVehiculo('${vehiculo._id}')">${vehiculo.matricula}</a></td><td>Marca1</td><td>Modelo1</td><td>Sí</td><td>No</td><td>No</td></tr>
                       <tr><td><a>${vehiculo.matricula}</a></td><td>Marca2</td><td>Modelo2</td><td>No</td><td>No</td><td>Sí</td></tr>
                       <tr><td><a>${vehiculo.matricula}</a></td><td>Marca3</td><td>Modelo3</td><td>No</td><td>No</td><td>No</td></tr>
                       <tr><td><a>${vehiculo.matricula}</a></td><td>Marca4</td><td>Modelo4</td><td>No</td><td>Sí</td><td>No</td></tr>
                       <tr><td><a>${vehiculo.matricula}</a></td><td>Marca5</td><td>Modelo5</td><td>No</td><td>Sí</td><td>No</td></tr>`;*/

        });

        html += `<div class = "divagregarbutton"><a class="ingresar-button-signin-invitado"><button onclick="router.controller.agregar(event)">Agregar</button></a></div>`;

        container.innerHTML = html;
    }

    async refresh(url, vehiculos) { await super.refresh(url); }
    
}

class EmpleadoReservaPageView extends PageView {
    constructor() { super('empleado-reserva-page'); }

    async refresh(url) {
        await super.refresh(url);
        // Cargar y mostrar la reserva según la información proporcionada en la URL
        router.controller.refresh(window.location.href);
    }

    setReserva(reserva, cliente, vehiculo) {
        // Implementar la lógica para mostrar los detalles de la reserva en el formulario
        const reservaDetails = document.getElementById('reservaDetails');
        reservaDetails.innerHTML = `
            <p><label>Código</label>${reserva.codigo}</p>
            <p><label>Fecha</label>${reserva.fecha}</p>
            <p><label>Inicio</label>${reserva.inicio}</p>
            <p><label>Fin</label>${reserva.fin}</p>
            <p><label>Entrega</label>${reserva.entrega}</p>
            <p><label>Devolución</label>${reserva.devolucion}</p>
            <!-- Añadir más detalles de la reserva según sea necesario -->
        `;
    }
}