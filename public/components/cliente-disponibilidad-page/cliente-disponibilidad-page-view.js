class ClienteDisponibilidadPageView extends PageView {
    constructor() { super('cliente-disponibilidad-page'); }

    // setVehiculos(vehiculosDisponibles){
    //     let container = document.getElementById('cell-listardisponibilidad-invitado');
    //     let html= "";
    //     vehiculosDisponibles.forEach((vehiculo) => {
    //         html = html.concat(
    //         `<div class="header-listar-disponibilidad-invitado">
    //         <label style="margin:10px 10px; display: inline-block; margin-left: 0px;">${vehiculo.marca}</label>
    //         <label style="font-size: 12px; display:flex; flex-direction: column; margin:3px 10px;margin-left: 0px">${vehiculo.modelo}</label>
    //         </div>
    //         <img class="image-listardisponibilidad-invitado" src="" alt="">
    //         <p class="description-listardisponibilidad-invitado">${vehiculo.descripcion}<br>
    //         <button onclick="router.controller.reservar(event)">Reservar</button></p>`);
    //     });
            
    //     container.innerHTML=html;
    // }

    // setVehiculos(vehiculosDisponibles, reservas) {
    //     let container = document.getElementById('tablalistadoreservas');
    //     let html= "";
    //     vehiculosDisponibles.forEach((vehiculo, i) => {
    //     html = html.concat(
    //         `<tbody class="listar">
    //         <tr><th>Matrícula</th><th>Inicio</th><th>Fin</th></tr>
    //         <td>${vehiculo.matricula}</td><td></td><td></td>
    //         </tbody>
    //         <tfooter>
    //         <tr><td class="totalreservas" id="totalreservas" colspan="4" style="text-align: right; border-bottom:1px solid black"><strong>Disponibles:${i+1}</strong></td></tr>
    //         <tr><td colspan="4" style="text-align: right; border-bottom: 1px solid transparent;"><button id="myButton" onclick="reservar()">Reservar</button></td></tr>
    //         </tfooter>`);
    //     });
    //     container.innerHTML = html;
    // }

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