const Usuario = require('Usuario.js');

class Cliente extends Usuario {
  constructor(_id) {
    super(_id);
    this._rol = 'Cliente'; // Sobrescribe la propiedad de rol para establecerlo como "Cliente"
  }
}

module.exports = Cliente;