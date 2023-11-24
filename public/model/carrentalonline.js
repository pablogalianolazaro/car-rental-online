class CarRentalOnline {

    _vehiculos;
    _clientes;
    _empleados;
    _reservas;
    _lastId;
    _usuario;

    constructor() {
        this._vehiculos = [];
        this._clientes = [];
        this._empleados = [];
        this._reservas = [];
        this._lastId = 0;
        this._usuario = null;
    }

    genId() { return ++this._lastId; }

    getClientes() {
        return this._clientes;
    }

    getVehiculos() {
        return this._vehiculos;
    }

    getReservas() {
        return this._reservas;
    }

    getEmpleados() {
        return this._empleados;
    }

    agregarCliente(obj) {
        let cliente_aux = new Empleado();
        Object.assign(cliente_aux, obj);

        if (this._clientes.length > 0) {
            if (this._clientes.some(cliente => cliente.dni === cliente_aux.dni) ||
                this._clientes.some(cliente => cliente.email === cliente_aux.email)) {
                throw new Error("Cliente ya existente.");
            }
        }
        if (Rol.Cliente !== cliente_aux.rol) {
            throw new Error("No es un cliente.");
        }

        let cliente = new Cliente(this.genId());
        cliente.dni = obj.dni
        cliente.nombres = obj.nombres;
        cliente.apellidos = obj.apellidos;
        cliente.direccion = obj.direccion;
        cliente.email = obj.email;
        cliente.password = obj.password;
        cliente.telefono = obj.telefono;

        this._clientes.push(cliente);
    }

    agregarEmpleado(obj) {
        let empleado_aux = new Empleado();
        Object.assign(empleado_aux, obj);

        if (this._empleados.length > 0) {
            if (this._empleados.some(empleado => empleado.dni === empleado_aux.dni) ||
                this._empleados.some(empleado => empleado.email === empleado_aux.email)) {
                throw new Error("Empleado ya existente.");
            }
        }
        if (Rol.Empleado !== empleado_aux.rol) {
            throw new Error("No es un empleado.");
        }

        let empleado = new Empleado(this.genId());
        empleado.dni = obj.dni
        empleado.nombres = obj.nombres;
        empleado.apellidos = obj.apellidos;
        empleado.direccion = obj.direccion;
        empleado.email = obj.email;
        empleado.password = obj.password;
        empleado.telefono = obj.telefono;

        this._empleados.push(empleado);
    }

    signin(email, password, rol) {

        let usuario;

        if (rol === Rol.Cliente) {
            usuario = this._clientes.find(cliente => cliente._email === email);
            if (usuario && usuario.password === password) {
                this._usuario = usuario;
            } else {
                throw new Error("Credenciales incorrectas.");
            }
        } else if (rol === Rol.Empleado) {
            usuario = this._empleados.find(empleado => empleado._email === email && empleado._password === password);
            if (usuario) {
                this._usuario = usuario;
            } else {
                throw new Error("Credenciales incorrectas.");
            }
        } else {
            throw new Error("Credenciales incorrectas.");
        }
    }

    signup(obj) {
        if (obj.rol == Rol.Cliente) {
            if (this._clientes.some(cliente => cliente._email == obj.email)) {
                throw new Error("Email ya registrado.");
            } else {
                this.agregarCliente(obj);
            }
        } else if (obj.rol == Rol.Empleado) {
            if (this._empleados.some(empleado => empleado._email == obj.email)) {
                throw new Error("Email ya registrado.")
            } else {
                this.agregarEmpleado(obj);
            }
        }
    }

    signout() {
        this._usuario = null;
    }

    disponibilidad(vehiculoId, inicio, fin) {
        if (this._reservas.some(reserva =>
            (reserva._inicio == inicio && reserva._vehiculoId == vehiculoId) ||
            (reserva._fin == fin && reserva._vehiculoId == vehiculoId))) {
            return false;
        }
        return true;
    }

    disponibles(marca, modelo, tipo, etiqueta, costoDia, inicio, fin) {
        let cochesDisponibles = [];
        
        for (const vehiculo of this.getVehiculos()) {
          if (
            marca === vehiculo.marca &&
            modelo === vehiculo.modelo &&
            tipo === vehiculo.tipo &&
            etiqueta === vehiculo.etiqueta &&
            costoDia >= vehiculo.costoDia
          ) {
            if (this.disponibilidad(vehiculo.id, inicio, fin)) {
              cochesDisponibles.push(vehiculo);
            }
          }
        }
        return cochesDisponibles;
    }

    perfil() {
        if (!this._usuario) {
            throw new Error("No se ha iniciado sesión.");
        }
        return this._usuario;
    }

    reservar(reserva) {
        if (!this._usuario) {
            throw new Error("El cliente no ha iniciado sesión.");
        }

        if (this._usuario.rol !== Rol.Cliente) {
            throw new Error("Solo los clientes pueden realizar reservas.");
        }

        if (!(reserva instanceof Reserva)) {
            throw new Error("Se espera una instancia de Reserva como parámetro.");
        }

        const clienteId = this._usuario.id;

        if (reserva.clienteId !== clienteId) {
            throw new Error("El cliente de la reserva no coincide con el cliente actual.");
        }

        const vehiculo = this.vehiculoById(reserva.vehiculoId);

        if (!vehiculo || !vehiculo.disponible) {
            throw new Error("Vehículo no encontrado o no disponible.");
        }

        const fechaInicio = new Date(reserva.inicio);
        const fechaFin = new Date(reserva.fin);

        if (fechaInicio >= fechaFin) {
            throw new Error("La fecha de inicio debe ser anterior a la fecha de fin.");
        }

        const ahora = new Date();
        if (fechaInicio <= ahora) {
            throw new Error("La fecha de inicio debe ser futura.");
        }

        // Verificar disponibilidad del vehículo para el período especificado
        const disponibilidad = this.disponibilidad(reserva.vehiculoId, reserva.inicio, reserva.fin);

        if (!disponibilidad) {
            throw new Error("Vehículo no disponible para el período especificado.");
        }

        // Asignar _id y número a la reserva
        reserva.id = this.genId();
        reserva.numero = this._reservas.length + 1;

        // Agregar la reserva al registro
        this._reservas.push(reserva);

        // Actualizar disponibilidad del vehículo
        vehiculo.disponible = false;

        return true;
    }

    cancelar(numero) {
        let eliminada = this._reservas.findIndex(reserva => reserva._numero == numero);
        if (eliminada >= 0 && eliminada <= this._reservas.length) {
            this._reservas.splice(eliminada, 1);
        } else {
            throw new Error("Reserva no encontrada.");
        }
    }

    agregarVehiculo(obj) {
        if (this._vehiculos.length > 0) {
            if (this._vehiculos.some(vehiculo => vehiculo.matricula === obj.matricula)) {
                throw new Error("El vehiculo ya estaba agregado.");
            }
        }
        let vehiculo = new Vehiculo(obj._id);
        vehiculo.matricula = obj.matricula;
        vehiculo.marca = obj.marca;
        vehiculo.modelo = obj.modelo;
        vehiculo.etiqueta = obj.etiqueta;
        vehiculo.tipo = obj.tipo;
        vehiculo.disponible = obj.disponible;
        vehiculo.eliminado = obj.eliminado;
        vehiculo.costoDia = obj.costoDia;
        vehiculo.descripcion = obj.descripcion;

        this._vehiculos.push(vehiculo);
    }

    eliminarVehiculo(vehiculoId) {
        let eliminado = this._vehiculos.findIndex(vehiculo => vehiculo.id == vehiculoId);
        if (eliminado >= 0 && eliminado <= this._vehiculos.length && this._vehiculos[eliminado].disponible == true && this._vehiculos[eliminado].eliminado == false) {
            this._vehiculos.splice(eliminado, 1);
        } else {
            throw new Error("Vehiculo no encontrado o no disponible.");
        }
    }

    entregarVehiculo(numero) {
        const reserva = this._reservas.find(reserva => reserva._numero === numero);

        if (!reserva) {
            throw new Error("Vehiculo no existente o no disponible.");
        }

        const vehiculo = this.vehiculoById(reserva._vehiculoId);
        if (!vehiculo || !vehiculo.disponible) {
            throw new Error("Vehículo no existente o no disponible.");
        }

        vehiculo.disponible = false;
        const fechaEntrega = new Date();
        reserva._entrega = fechaEntrega;
    }

    devolverVehiculo(numero) {
        for (let i = 0; i < this._reservas.length; i++) {
            if (this.reservas[i]._numero == numero) {
                if (this.reservas[i]._vehiculoId = null || this.reservas[i]._disponible == true) {
                    throw new Error("Vehiculo no existente o ya disponible");
                } else {
                    this.reservas[i]._disponible = true;
                    const fecha = new Date();
                    this.reservas[i]._devolución = fecha;
                }
            }
        }
    }

    reservas(clienteId) {
        const reservas_cliente = [];

        for (let i = 0; i < this._reservas.length; i++) {
            if (this._reservas[i]._clienteId == clienteId) {
                reservas_cliente.push(this._reservas[i]);
            }
        }
        if (reservas_cliente.length === 0) {
            throw new Error("No existe cliente con ese id.");
        }

        return reservas_cliente;
    }

    clienteByEmail(email) {
        const cliente = this._clientes.find(cliente => cliente._email == email);
        if (!cliente) {
            throw new Error("No existe un cliente con ese email.")
        }
        return cliente;
    }

    empleadoByEmail(email) {
        const empleado = this._empleados.find(empleado => empleado._email == email);
        if (!empleado) {
            throw new Error("No existe un empleado con ese email.")
        }
        return empleado;
    }

    vehiculoPorMatricula(matricula) {
        const vehiculo = this._vehiculos.find(vehiculo => vehiculo._matricula == matricula);
        if (!vehiculo) {
            throw new Error("No existe un vehiculo con esa matricula.")
        }
        return vehiculo;
    }

    reservaByNumero(numero) {
        const reserva = this._reservas.find(reserva => reserva._numero == numero);
        if (!reserva) {
            throw new Error("No existe una reserva con ese numero.")
        }
        return reserva;
    }

    clienteById(clienteId) {
        const cliente = this._clientes.find(cliente => cliente._id == clienteId);
        if (!cliente) {
            throw new Error("No existe un cliente con ese id.")
        }
        return cliente;
    }

    empleadoById(empleadoId) {
        const empleado = this._empleados.find(empleado => empleado._id == empleadoId);
        if (!empleado) {
            throw new Error("No existe un empleado con ese id.")
        }
        return empleado;
    }

    vehiculoById(vehiculoId) {
        const vehiculo = this._vehiculos.find(vehiculo => vehiculo._id == vehiculoId);
        if (!vehiculo) {
            throw new Error("No existe un vehiculo con ese id.")
        }
        return vehiculo;
    }

    reservaById(vehiculoId) {
        const reserva = this._reservas.find(reserva => reserva._vehiculoId === vehiculoId);
        if (!reserva) {
            throw new Error("No existe una reserva que contenga el ID del vehículo.")
        }
        return reserva;
    }
}