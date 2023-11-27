class ClienteReservarPageView extends PageView {
    constructor() {
        super('cliente-reservar-page');

    }

    async refresh(url) {
        await super.refresh(url);
        document.getElementById('MatriculaId').innerHTML = this.controller.getMatricula();
        document.getElementById('MarcaId').innerHTML = this.controller.getMarca();
        document.getElementById('ModeloId').innerHTML = this.controller.getModelo();
        document.getElementById('TipoId').innerHTML = this.controller.getTipo();
        document.getElementById('EtiquetaId').innerHTML = this.controller.getEtiqueta();
        document.getElementById('DescripcionId').innerHTML = this.controller.getDescripcion();
        document.getElementById('CostoId').innerHTML = this.controller.getCosto();
        document.getElementById('RevisionId').innerHTML = this.controller.getDisponible();

        document.getElementById('ClienteNombre').innerHTML = this.controller.getClienteNombre();
    }

    recalcularCosto() {
        // Lógica para recalcular el costo según las fechas ingresadas
        const inicio = this._inicioInput.value;
        const fin = this._finInput.value;

        // Validar que las fechas sean válidas y recalcular el costo
        if (this.validarFechas(inicio, fin)) {
            // Lógica para obtener el costo desde el modelo
            const costoDia = this.controller.model.vehiculoPorMatricula(this._matriculaInput.value).costoDia;
            const numeroDias = this.calcularNumeroDias(inicio, fin);
            const costoTotal = costoDia * numeroDias;

            // Mostrar el costo recalculado en la vista
            this._costoInput.value = costoTotal;
        } else {
            // Manejar el caso de fechas inválidas
            alert('Las fechas ingresadas son inválidas.');
        }
    }

    // Función para validar que las fechas sean válidas
    validarFechas(inicio, fin) {
        // Lógica de validación (puedes personalizar según tus necesidades)
        // Por ejemplo, asegurarse de que la fecha de inicio sea anterior a la fecha de fin
        const fechaInicio = new Date(inicio);
        const fechaFin = new Date(fin);
        return fechaInicio < fechaFin;
    }

    // Función para calcular el número de días entre dos fechas
    calcularNumeroDias(inicio, fin) {
        const fechaInicio = new Date(inicio);
        const fechaFin = new Date(fin);
        const milisegundosPorDia = 24 * 60 * 60 * 1000;
        const diferenciaDias = Math.round((fechaFin - fechaInicio) / milisegundosPorDia);
        return diferenciaDias;
    }
}
