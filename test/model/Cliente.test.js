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
    cliente.dni = '12345678';
    expect(cliente.dni).to.equal('12345678');
  });

  // Agrega casos de prueba similares para otras propiedades y setters/getters

  it('Rol debería ser "Cliente"', () => {
    const cliente = new Cliente(1);
    expect(cliente.rol).to.equal('Cliente');
  });
});
