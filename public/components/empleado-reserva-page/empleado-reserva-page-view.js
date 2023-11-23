class EmpleadoReservaPageView extends PageView {
    constructor() { super('empleado-reserva-page');}
    async refresh(url, reservaId) {
        await super.refresh(url);
        this.mostrarReserva(reservaId);
    }
    //no se si es así
    mostrarReserva(reserva) {
        // Lógica para mostrar la reserva en la vista
        const codigoElemento = document.getElementById('codigo');
        const matriculaElemento = document.getElementById('matricula');
        const fechaInicioElemento = document.getElementById('fechaInicio');
        const fechaFinElemento = document.getElementById('fechaFin');

        // Actualizar los elementos del DOM con la información de la reserva
        codigoElemento.textContent = `Código: ${reserva._id}`;
        matriculaElemento.textContent = `Matrícula: ${reserva.matricula}`;
        fechaInicioElemento.textContent = `Fecha de Inicio: ${reserva.fechaInicio}`;
        fechaFinElemento.textContent = `Fecha de Fin: ${reserva.fechaFin}`;
    }
    
}