// /src/model/Vehiculo.js

import TipoVehiculo from './tipo-vehiculo';
import Etiqueta from './etiqueta';

class Vehiculo {
  constructor(_id) {
    this._id = _id;
    this._matricula = '';
    this._marca = '';
    this._modelo = '';
    this._etiqueta = Etiqueta.B;
    this._tipo = TipoVehiculo.A;
    this._disponible = true;
    this._eliminado = false;
    this._costoDia = 0;
    this._descripcion = '';
  }

  // Definición de setters y getters
  get matricula() {
    return this._matricula;
  }

  set matricula(value) {
    this._matricula = value;
  }

  get marca() {
    return this._marca;
  }

  set marca(value) {
    this._marca = value;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(value) {
    this._modelo = value;
  }

  get etiqueta() {
    return this._etiqueta;
  }

  set etiqueta(value) {
    this._etiqueta = value;
  }

  get tipo() {
    return this._tipo;
  }

  set tipo(value) {
    this._tipo = value;
  }

  get disponible() {
    return this._disponible;
  }

  set disponible(value) {
    this._disponible = value;
  }

  get eliminado() {
    return this._eliminado;
  }

  set eliminado(value) {
    this._eliminado = value;
  }

  get costoDia() {
    return Math.round((this._costoDia + Number.EPSILON) * 100) / 100;
  }

  set costoDia(value) {
    this._costoDia = Math.round((value + Number.EPSILON) * 100) / 100;
  }

  get descripcion() {
    return this._descripcion;
  }

  set descripcion(value) {
    this._descripcion = value;
  }
}

module.exports = Vehiculo;

