class ClienteDisponibilidadPageView extends PageView {
    constructor() { super('cliente-disponibilidad-page'); }

    setVehiculos(vehiculosDisponibles, reservas) {
        let container = document.getElementById('tablalistadoreservas');
        let html = `<thead><tr><th>Matrícula</th><th>Inicio</th><th>Fin</th></tr></thead><tbody>`;
    
        vehiculosDisponibles.forEach((vehiculo) => {
            html += `
                <tr style = "text-align: center";><td><a>${vehiculo.matricula}</a></td><td>23/11/2023 10:00</td><td>30/11/2023 10:00</td></tr>`;
        });
    
        html += `</tbody><tfoot>
                <tr><td id="totalreservas" colspan="3" style="text-align: right; border-bottom:1px solid black"><strong>Disponibles: ${vehiculosDisponibles.length}</strong></td></tr>
                <tr><td colspan="3" style="text-align: right; border-bottom: 1px solid transparent;"><button id="myButton" onclick="router.controller.reservar(event)">Reservar</button></td></tr></tfoot>`;
    
        container.innerHTML = html;
    }
    
    

    async refresh(url) { await super.refresh(url); }
}