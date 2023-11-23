class EmpleadoVehiculosPageView extends PageView {
    constructor() { super('empleado-vehiculos-page'); }
    async refresh(url, vehiculos) {
        await super.refresh(url);
        this.mostrarVehiculos(vehiculos);
    }

    mostrarVehiculos(vehiculos) {
        // Lógica para mostrar la lista de vehículos en la vista
        const listaVehiculosElemento = document.getElementById('listaVehiculos');

        // Limpiar la lista antes de mostrar los vehículos
        listaVehiculosElemento.innerHTML = '';

        // Iterar sobre cada vehículo y crear elementos en la lista
        vehiculos.forEach(vehiculo => {
            const vehiculoElemento = document.createElement('div');
            
            // Asignar un color según el estado del vehículo
            if (vehiculo.eliminado) {
                vehiculoElemento.style.color = 'red';
            } else if (vehiculo.entregado) {
                vehiculoElemento.style.color = 'blue';
            } else {
                vehiculoElemento.style.color = 'green';
            }

            // Agregar la matrícula como un enlace que navega a la página del vehículo
            const enlaceMatricula = document.createElement('a');
            enlaceMatricula.href = `empleado-vehiculo-page.html?vehiculoId=${vehiculo._id}`;
            enlaceMatricula.textContent = `Matrícula: ${vehiculo.matricula}`;

            // Agregar elementos al DOM
            vehiculoElemento.appendChild(enlaceMatricula);
            listaVehiculosElemento.appendChild(vehiculoElemento);
        });
    }
}
