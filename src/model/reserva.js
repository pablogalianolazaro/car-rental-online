// /src/model/Reserva.js

class Reserva {
    constructor(_id) {
      this._id = _id;
      this._inicio = null;
      this._fin = null;
      this._costo = 0;
      this._numero = '';
      this._entrega = '';
      this._devolucion = '';
      this._fecha = new Date().toISOString();
      this._clienteId = '';
      this._vehiculoId = '';
    }
  
    // Definición de setters y getters
    get inicio() {
      return this._inicio;
    }
  
    set inicio(value) {
      this._inicio = new Date(value).toISOString();
    }
  
    get fin() {
      return this._fin;
    }
  
    set fin(value) {
      this._fin = new Date(value).toISOString();
    }
  
    get costo() {
      return Math.round((this._costo + Number.EPSILON) * 100) / 100;
    }
  
    set costo(value) {
      this._costo = Math.round((value + Number.EPSILON) * 100) / 100;
    }
  
    get numero() {
      return this._numero;
    }
  
    set numero(value) {
      this._numero = value;
    }
  
    get entrega() {
      return this._entrega;
    }
  
    set entrega(value) {
      this._entrega = value;
    }
  
    get devolucion() {
      return this._devolucion;
    }
  
    set devolucion(value) {
      this._devolucion = value;
    }
  
    get fecha() {
      return this._fecha;
    }
  
    set fecha(value) {
      this._fecha = new Date(value).toISOString();
    }
  
    get clienteId() {
      return this._clienteId;
    }
  
    set clienteId(value) {
      this._clienteId = value;
    }
  
    get vehiculoId() {
      return this._vehiculoId;
    }
  
    set vehiculoId(value) {
      this._vehiculoId = value;
    }
  }
  
  export default Reserva;
  