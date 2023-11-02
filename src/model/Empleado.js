const Usuario = require('Usuario.js');
module.exports = Empleado;
class Empleado extends Usuario {
  constructor(_id, rol) {
    super(_id);
    this._rol = rol.Empleado; // Sobrescribe la propiedad de rol para establecerlo como "Empleado"
  }
}

