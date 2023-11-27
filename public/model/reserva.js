class Reserva {
  constructor(_id) {
    this._id = _id;
    this._inicio = null;
    this._fin = null;
    this._costoDia = 0;  // Nuevo atributo para almacenar el costo del alquiler del vehículo por día
    this._costo = 0;
    this._numero = '';
    this._entrega = '';
    this._devolucion = '';
    this._fecha = new Date().toISOString();
    this._clienteId = '';
    this._vehiculoId = '';
  }
  
  // Definición de setters y getters
  // Nuevos getters y setters para el atributo costoDia
  get costoDia() {
    return this._costoDia;
  }

  set costoDia(costoDia) {
    this._costoDia = Math.round((costoDia + Number.EPSILON) * 100) / 100;
  }

  get inicio() {
    return this._inicio;
  }

  // Modificación de setters para que recalcule el costo de la reserva
  set inicio(inicio) {
    this._inicio = new Date(inicio).toISOString();
    //this.costo();
  }

  get fin() {
    return this._fin;
  }

  // Modificación de setters para que recalcule el costo de la reserva
  set fin(fin) {
    this._fin = new Date(fin).toISOString();
    //this.recalcularCosto();
  }

  get costo() {
    return Math.round((this._costo + Number.EPSILON) * 100) / 100;
  }

  // Modificación de setters para que recalcule el costo de la reserva
  set costo(costo) {
    this._costo = Math.round((costo + Number.EPSILON) * 100) / 100;
  }

  get numero() {
    return this._numero;
  }

  set numero(numero) {
    this._numero = numero;
  }

  get entrega() {
    return this._entrega;
  }

  set entrega(entrega) {
    this._entrega = entrega;
  }

  get devolucion() {
    return this._devolucion;
  }

  set devolucion(devolucion) {
    this._devolucion = devolucion;
  }

  get fecha() {
    return this._fecha;
  }

  set fecha(fecha) {
    this._fecha = new Date(fecha).toISOString();
  }

  get clienteId() {
    return this._clienteId;
  }

  set clienteId(clienteId) {
    this._clienteId = clienteId;
  }

  get vehiculoId() {
    return this._vehiculoId;
  }

  set vehiculoId(vehiculoId) {
    this._vehiculoId = vehiculoId;
  }
}