const usuario = require('./usuario');
const rol = require('./rol');

class Cliente extends usuario {
  constructor(_id) {
    super(_id);
    this.rol = rol.Cliente;
  }

  
}
module.exports = Cliente;