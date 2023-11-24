class ClienteReservasPageView extends PageView {
    constructor() { super('cliente-reservas-page'); }

    setReservas(reservas) {
        let container = document.getElementById('tablalistadoreservas');
        let html = `<thead><tr><th>Identificador</th><th>Matrícula</th><th>Inicio</th><th>Fin</th></tr></thead><tbody>`;
    
        reservas.forEach((reserva) => {
            html += `
                <tr style = "text-align: center";><td><a>${reserva.id}</a></td><td><a>1234ABC</a></td><td>${reserva.inicio}</td><td>${reserva.fin}</td></tr>`;
        });
    
        html += `</tbody><tfoot>
                <tr><td id="totalreservas" colspan="4" style="text-align: right; border-bottom:1px solid black"><strong>Total reservas: ${reservas.length}</strong></td></tr>
                <tr><td colspan="3" style="text-align: right; border-bottom: 1px solid transparent;"></td></tr></tfoot>`;
    
        container.innerHTML = html;
    }
}