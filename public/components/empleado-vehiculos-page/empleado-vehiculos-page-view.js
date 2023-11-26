class EmpleadoVehiculosPageView extends PageView {
    constructor() { super('empleado-vehiculos-page'); }

    setVehiculos(vehiculosTodos){
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
                
            /*html += `<tr><td><a>${vehiculo.matricula}</a></td><td>Marca1</td><td>Modelo1</td><td>Sí</td><td>No</td><td>No</td></tr>
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
