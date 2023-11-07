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

  set matricula(matricula) {
    this._matricula = matricula;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(modelo) {
    this._modelo = modelo;
  }

  get etiqueta() {
    return this._etiqueta;
  }

  set etiqueta(etiqueta) {
    this._etiqueta = etiqueta;
  }

  get tipo() {
    return this._tipo;
  }

  set tipo(tipo) {
    this._tipo = tipo;
  }

  get disponible() {
    return this._disponible;
  }

  set disponible(disponible) {
    this._disponible = disponible;
  }

  get eliminado() {
    return this._eliminado;
  }

  set eliminado(eliminado) {
    this._eliminado = eliminado;
  }

  get costoDia() {
    return Math.round((this._costoDia + Number.EPSILON) * 100) / 100;
  }

  set costoDia(costoDia) {
    this._costoDia = Math.round((costoDia + Number.EPSILON) * 100) / 100;
  }

  get descripcion() {
    return this._descripcion;
  }

  set descripcion(descripcion) {
    this._descripcion = descripcion;
  }
}