const assert = require("chai").assert;
const TipoVehiculo = require('../../src/model/tipo-vehiculo');
const Vehiculo = require('../../src/model/vehiculo');

describe('Vehiculo', () => {
  // Casos de prueba para el constructor
  it('El constructor debe asignar correctamente el _id', () => {
    const vehiculo = new Vehiculo('1');
    assert.strictEqual(vehiculo._id, '1');
  });

  it('El constructor debe inicializar _eliminado en false', () => {
    const vehiculo = new Vehiculo('1');
    assert.isFalse(vehiculo._eliminado);
  });

  it('El constructor debe inicializar _disponible en true', () => {
    const vehiculo = new Vehiculo('1');
    assert.isTrue(vehiculo._disponible);
  });

  // Casos de prueba para setters y getters
  it('Setter y getter de matricula deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.matricula = 'ABC123';
    assert.strictEqual(vehiculo.matricula, 'ABC123');
  });

  it('Setter y getter de marca deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.marca = 'Toyota';
    assert.strictEqual(vehiculo.marca, 'Toyota');
  });

  it('Setter y getter de modelo deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.modelo = 'Camry';
    assert.strictEqual(vehiculo.modelo, 'Camry');
  });

  it('Setter y getter de etiqueta deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.etiqueta = 'CERO';
    assert.strictEqual(vehiculo.etiqueta, 'CERO');
  });

  it('Setter y getter de tipo deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.tipo = 'C';
    assert.strictEqual(vehiculo.tipo, 'C');
  });

  it('Setter y getter de disponible deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.disponible = false;
    assert.isFalse(vehiculo.disponible);
  });

  it('Setter y getter de eliminado deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.eliminado = true;
    assert.isTrue(vehiculo.eliminado);
  });

  it('Setter y getter de costoDia deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.costoDia = 50.75;
    assert.strictEqual(vehiculo.costoDia, 50.75);
  });

  it('Setter y getter de descripcion deben funcionar correctamente', () => {
    const vehiculo = new Vehiculo('1');
    vehiculo.descripcion = 'Vehículo de prueba';
    assert.strictEqual(vehiculo.descripcion, 'Vehículo de prueba');
  });
});


