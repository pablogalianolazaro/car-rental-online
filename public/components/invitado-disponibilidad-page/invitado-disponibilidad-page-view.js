class InvitadoDisponibilidadPageView extends PageView {
    constructor() { super('invitado-disponibilidad-page') }

    //este metodo añade los vehiculos que se le pasen por parametro al html
    setVehiculos(vehiculosDisponibles){
        let container = document.getElementById('cell-listardisponibilidad-invitado');
        let html= "";
        // Iterar sobre la lista de vehículos
        vehiculosDisponibles.forEach((vehiculo) => {
            // Crear el HTML para cada vehículo
            html = html.concat(`<div class="header-listardisponibilidad-invitado">
            <label style="margin:10px 10px; display: inline-block; margin-left: 0px;">${vehiculo.marca}</label>
            <label style="font-size: 12px; display:flex; flex-direction: column; margin:3px 10px;margin-left: 0px">${vehiculo.modelo}</label>
            </div>
            <img class="image-listardisponibilidad-invitado" src="" alt="">
            <p class="description-listardisponibilidad-invitado">${vehiculo.descripcion}<br>
            <button onclick="router.controller.reservar(event)">Reservar</button></p>
                    `);
        });
            
        container.innerHTML=html;
    }
    async refresh(url) { await super.refresh(url); }
    
}