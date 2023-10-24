const Usuario = require('Usuario.js');

class Empleado extends Usuario {
  constructor(_id) {
    super(_id);
    this._rol = 'Empleado'; // Sobrescribe la propiedad de rol para establecerlo como "Empleado"
  }
}

module.exports = Empleado;