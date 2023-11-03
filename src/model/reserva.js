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
  
    set inicio(inicio) {
      this._inicio = new Date(inicio).toISOString();
    }
  
    get fin() {
      return this._fin;
    }
  
    set fin(fin) {
      this._fin = new Date(fin).toISOString();
    }
  
    get costo() {
      return Math.round((this._costo + Number.EPSILON) * 100) / 100;
    }
  
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
  
  module.exports = Reserva;
  