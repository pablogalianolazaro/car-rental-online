const assert = require("chai").assert;
const Reserva = require('../src/model/Reserva');

describe('Reserva', () => {
  // Casos de prueba para el constructor
  it('El constructor debe asignar correctamente el _id', () => {
    const reserva = new Reserva('1');
    assert.strictEqual(reserva._id, '1');
  });

  // Casos de prueba para setters y getters
  it('Setter y getter de inicio deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.inicio = '2023-11-01T10:00:00.000Z';
    assert.strictEqual(reserva.inicio, '2023-11-01T10:00:00.000Z');
  });

  it('Setter y getter de fin deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.fin = '2023-11-05T14:30:00.000Z';
    assert.strictEqual(reserva.fin, '2023-11-05T14:30:00.000Z');
  });

  it('Setter y getter de costo deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.costo = 120.5;
    assert.strictEqual(reserva.costo, 120.5);
  });

  it('Setter y getter de numero deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.numero = 'R001';
    assert.strictEqual(reserva.numero, 'R001');
  });

  it('Setter y getter de entrega deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.entrega = 'Lugar de entrega';
    assert.strictEqual(reserva.entrega, 'Lugar de entrega');
  });

  it('Setter y getter de devolucion deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.devolucion = 'Lugar de devolución';
    assert.strictEqual(reserva.devolucion, 'Lugar de devolución');
  });

  it('Setter y getter de fecha deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.fecha = '2023-11-01T08:00:00.000Z';
    assert.strictEqual(reserva.fecha, '2023-11-01T08:00:00.000Z');
  });

  it('Setter y getter de clienteId deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.clienteId = 'C001';
    assert.strictEqual(reserva.clienteId, 'C001');
  });

  it('Setter y getter de vehiculoId deben funcionar correctamente', () => {
    const reserva = new Reserva('1');
    reserva.vehiculoId = 'V001';
    assert.strictEqual(reserva.vehiculoId, 'V001');
  });
});
