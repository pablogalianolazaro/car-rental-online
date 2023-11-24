class ClienteReservarPageView extends PageView {
    constructor() {
        super('cliente-reservar-page');
        this._matriculaInput = document.getElementById('matricula');
        this._marcaInput = document.getElementById('marca');
        this._modeloInput = document.getElementById('modelo');
        // ... (otros campos de la vista)
        this._clienteIdInput = document.getElementById('clienteId'); // Agregar campo para el ID del cliente
        this._calcularCostoBtn = document.getElementById('calcularCostoBtn'); // Botón para recalcular costo
    }

    async refresh(url) {
        await super.refresh(url);

        // Lógica para obtener la matrícula del vehículo desde la URL
        const params = new URLSearchParams(window.location.search);
        const matricula = params.get('matricula');

        // Lógica para obtener el ID del cliente desde el modelo
        const clienteId = this.controller.model.usuario.id;

        // Lógica para mostrar los datos del vehículo
        const vehiculo = this.controller.model.vehiculoPorMatricula(matricula);
        this._matriculaInput.value = vehiculo.matricula;
        this._marcaInput.value = vehiculo.marca;
        this._modeloInput.value = vehiculo.modelo;
        // ... (otros campos de la vista)

        // Mostrar el ID del cliente en el campo correspondiente
        this._clienteIdInput.value = clienteId;

        // Asignar evento al botón para recalcular el costo
        this._calcularCostoBtn.addEventListener('click', () => this.recalcularCosto());
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
