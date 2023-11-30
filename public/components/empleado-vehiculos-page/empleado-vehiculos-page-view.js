class EmpleadoVehiculosPageView extends PageView {
    constructor() { super('empleado-vehiculos-page'); }

    getNum(){ return document.getElementById('vehiculoMatricula')}

    setVehiculos(vehiculosTodos){
        let container = document.getElementById('tablalistadovehiculos');
        let html = `<thead><tr><th>Matrícula</th><th>Marca</th><th>Modelo</th><th>Disponible</th><th>Eliminado</th><th>Revisión</th></tr></thead><tbody>`;
        //let vehiculos = getVehiculos();
        //forEach vehiculo in vehiculos
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

            /*document.getElementById('MatriculaId').innerHTML = this.vehiculo.getMatricula();
            document.getElementById('MarcaId').innerHTML = this.controller.getMarca();
            document.getElementById('ModeloId').innerHTML = this.controller.getModelo();
            document.getElementById('TipoId').innerHTML = this.controller.getTipo();
            document.getElementById('EtiquetaId').innerHTML = this.controller.getEtiqueta();
            document.getElementById('DescripcionId').innerHTML = this.controller.getDescripcion();
            document.getElementById('CostoId').innerHTML = this.controller.getCosto();
            document.getElementById('RevisionId').innerHTML = this.controller.getDisponible();*/

            html += `<tr style="background-color: ${colorFondo};">
                        <td><a onclick="router.controller.verVehiculo('${vehiculo._id}')">${vehiculo.matricula}</a></td>
                        <td>${vehiculo.marca}</td>
                        <td>${vehiculo.modelo}</td>
                        <td>${vehiculo.disponible ? 'Sí' : 'No'}</td>
                        <td>${vehiculo.eliminado ? 'Sí' : 'No'}</td>
                        <td>${vehiculo.revision ? 'Sí' : 'No'}</td>
                    </tr>`;
                
            /*html += `<tr style="background-color: ${colorFondo};"><td><a onclick="router.controller.verVehiculo('${vehiculo._id}')">${vehiculo.matricula}</a></td><td>Marca1</td><td>Modelo1</td><td>Sí</td><td>No</td><td>No</td></tr>
                       <tr><td><a>${vehiculo.matricula}</a></td><td>Marca2</td><td>Modelo2</td><td>No</td><td>No</td><td>Sí</td></tr>
                       <tr><td><a>${vehiculo.matricula}</a></td><td>Marca3</td><td>Modelo3</td><td>No</td><td>No</td><td>No</td></tr>
                       <tr><td><a>${vehiculo.matricula}</a></td><td>Marca4</td><td>Modelo4</td><td>No</td><td>Sí</td><td>No</td></tr>
                       <tr><td><a>${vehiculo.matricula}</a></td><td>Marca5</td><td>Modelo5</td><td>No</td><td>Sí</td><td>No</td></tr>`;*/

        });

        html += `<div style="width: 80%; margin:auto" class = "divagregarbutton"><a class="ingresar-button-signin-invitado"><button onclick="router.controller.agregar(event)">Agregar</button></a></div>`;

        container.innerHTML = html;
    }

    async refresh(url, vehiculos) { await super.refresh(url); }
}
