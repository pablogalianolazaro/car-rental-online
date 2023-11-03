const chai = require('chai');
const expect = chai.expect;
const Cliente = require('src\model\Cliente.js');

describe('Cliente', () => {
  it('Constructor debería inicializar las propiedades', () => {
    const cliente = new Cliente(1);
    expect(cliente._id).to.equal(1);
    expect(cliente._rol).to.equal('Cliente');
    // Asegúrate de agregar más expect() para otras propiedades según sea necesario
  });

  it('Setter y Getter para DNI', () => {
    const cliente = new Cliente(1);
    cliente.dni('12345678');
    expect(cliente.dni).to.equal('12345678');
  });

  // Agrega casos de prueba similares para otras propiedades y setters/getters

  it('Rol debería ser "Cliente"', () => {
    const cliente = new Cliente(1);
    expect(cliente.rol).to.equal(rol.Cliente);
  });
  it('Constructor debería inicializar las propiedades _id y _rol', () => {
    const cliente = new Empleado(1);
    expect(cliente._id).to.equal(1);
    expect(cliente._rol).to.equal('Empleado');
  });

  it('Setter y Getter para DNI', () => {
    const cliente = new Empleado(2);
    cliente.dni('87654321')
    expect(cliente.dni).to.equal('87654321');
  });

  it('Setter y Getter para Nombres', () => {
    const cliente = new Cliente(3);
    cliente.nombres('Ana')
    expect(cliente.nombres).to.equal('Ana');
  });

  it('Setter y Getter para Apellidos', () => {
    const cliente = new Cliente(4);
    cliente.apellidos('González');
    expect(cliente.apellidos).to.equal('González');
  });

  it('Setter y Getter para Dirección', () => {
    const cliente = new Cliente(5);
    cliente.direccion('Calle 456');
    expect(cliente.direccion).to.equal('Calle 456');
  });

  it('Setter y Getter para Email', () => {
    const cliente = new cliente(6);
    cliente.email('ana@example.com');
    expect(cliente.email).to.equal('ana@example.com');
  });

  it('Setter y Getter para Password', () => {
    const cliente = new Cliente(7);
    cliente.password('pass123');
    expect(cliente.password).to.equal('pass123');
  });

  it('Setter y Getter para Teléfono', () => {
    const cliente = new Cliente(8);
    cliente.telefono('987654321');
    expect(cliente.telefono).to.equal('987654321');
  });

  it('Rol debería ser "Empleado"', () => {
    const cliente = new Empleado(9);
    expect(cliente.rol).to.equal(rol.cliente);
  });
});
