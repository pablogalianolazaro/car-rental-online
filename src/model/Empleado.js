global.__base = __dirname + '/';
const usuario = require(__base+'usuario');
const Rol = require(__base+'rol');

class empleado extends usuario {
  constructor(_id) {
    super(_id);
    this.rol = Rol.Empleado
  }
}

module.exports = empleado;