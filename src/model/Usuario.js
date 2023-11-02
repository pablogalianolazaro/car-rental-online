const Rol = require('./src/model/rol');
class Usuario {
    constructor(_id) {
      this._id = _id;
      this._dni = '';
      this._nombres = '';
      this._apellidos = '';
      this._direccion = '';
      this._email = '';
      this._password = '';
      this._telefono = '';
    }
  
    // Setter y Getter para DNI
    set dni(value) {
      this._dni = value;
    }
    get dni() {
      return this._dni;
    }
  
    // Setter y Getter para Nombres
    set nombres(value) {
      this._nombres = value;
    }
    get nombres() {
      return this._nombres;
    }
  
    // Setter y Getter para Apellidos
    set apellidos(value) {
      this._apellidos = value;
    }
    get apellidos() {
      return this._apellidos;
    }
  
    // Setter y Getter para Dirección
    set direccion(value) {
      this._direccion = value;
    }
    get direccion() {
      return this._direccion;
    }
  
    // Setter y Getter para Email
    set email(value) {
      this._email = value;
    }
    get email() {
      return this._email;
    }
  
    // Setter y Getter para Password
    set password(value) {
      this._password = value;
    }
    get password() {
      return this._password;
    }
  
    // Setter y Getter para Rol
    set rol(value) {
      this._rol = value;
    }
    get rol() {
      return this._rol;
    }
  
    // Setter y Getter para Teléfono
    set telefono(value) {
      this._telefono = value;
    }
    get telefono() {
      return this._telefono;
    }
  }
  
  // Ejemplo de uso:
  const usuario = new Usuario(1); // Se crea un usuario con _id igual a 1
  usuario.dni = '12345678';
  usuario.nombres = 'Juan';
  usuario.apellidos = 'Pérez';
  usuario.direccion = 'Calle 123';
  usuario.email = 'juan@example.com';
  usuario.password = 'password123';
  usuario.rol = 'Cliente';
  usuario.telefono = '987654321';
  
  console.log(usuario);