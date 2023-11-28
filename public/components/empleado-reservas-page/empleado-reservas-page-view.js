class EmpleadoReservasPageView extends PageView {
    constructor() { super('empleado-reservas-page') }
    
    
    getNum(){ return document.getElementById('numeroReserva').innerText}
    

    setReservas(reservas){
        let container = document.getElementById('tablita');
        let html= "";
        let contadorReservas=0;
        
        reservas.forEach((reserva) => {
            
            contadorReservas++;
            html = html.concat( `<tr style = "text-align: center";>
            <td onclick="router.controller.reservaNum(event);" id="numeroReserva">${reserva.numero}</td>
            <td>${reserva.matricula}</td>
            <td>${reserva.inicio}</td>
            <td>${reserva.fin}</td>
            </tr>`);
        });
        html +=`</tbody><tfoot><tr><td id="totalreservas" colspan="4" style="text-align: right; border-bottom:1px solid black"><strong>Reservas Totales: ${contadorReservas}</strong></td>`;
        container.innerHTML=html;
    }
    async refresh(url) { await super.refresh(url); }
    
}