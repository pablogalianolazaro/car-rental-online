const Usuario = require('Usuario.js');


class Cliente extends Usuario {
  constructor(_id, rol) {
    super(_id);
    this._rol = rol.Cliente; // Sobrescribe la propiedad de rol para establecerlo como "Cliente"
  }
}

module.exports = Cliente;