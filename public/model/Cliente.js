class Cliente extends usuario {
  constructor(_id) {
    super(_id);
    this.rol = Rol.Cliente;
  }
}