const assert = require("chai").assert;
const TipoVehiculo = require('../../src/model/tipo-vehiculo');
const Vehiculo = require('../../src/model/vehiculo');

describe('vehiculo', function () {
  let vehiculo;
  const vehiculoId = '1';
  const matricula = 'ABC123';
  const marca = 'Toyota';
  const modelo = 'Camry';
  const etiqueta = 'CERO';
  const tipo = 'C';
  const disponible = false;
  const eliminado = true;
  const costoDia = 50.75;
  const descripcion = 'Vehículo de prueba';

  beforeEach(function () {
    vehiculo = new Vehiculo(vehiculoId);
    vehiculo.matricula = matricula;
    vehiculo.marca = marca;
    vehiculo.modelo = modelo;
    vehiculo.costoDia = costoDia;
    vehiculo.descripcion = descripcion;
  });

  describe('Constructor', function () {
    it('debería asignar correctamente el _id', function () {
      assert.strictEqual(vehiculo._id, '1');
    });

    it('debería inicializar _eliminado en false', function () {
      assert.deepEqual(vehiculo._eliminado, false);
    });

    it('debería inicializar _disponible en true', function () {
      assert.deepEqual(vehiculo._disponible, true);
    });
  });

  describe('Setters y Getters', function () {
    it('matricula debería funcionar correctamente', function () {
      assert.strictEqual(vehiculo.matricula, matricula);
    });

    it('marca debería funcionar correctamente', function () {
      assert.strictEqual(vehiculo.marca, marca);
    });
    
    it('modelo debería funcionar correctamente', function () {
      assert.strictEqual(vehiculo.modelo, modelo);
    });
    
    it('etiqueta debería funcionar correctamente', function () {
      vehiculo.etiqueta = etiqueta;
      assert.strictEqual(vehiculo.etiqueta, etiqueta);
    });
    
    it('tipo debería funcionar correctamente', function () {
      vehiculo.tipo = tipo;
      assert.strictEqual(vehiculo.tipo, tipo);
    });
    
    it('disponible debería funcionar correctamente', function () {
      assert.strictEqual(vehiculo.disponible, true);
    });
    
    it('eliminado debería funcionar correctamente', function () {
      assert.strictEqual(vehiculo.eliminado, false);
    });
    
    it('costoDia debería funcionar correctamente', function () {
      assert.strictEqual(vehiculo.costoDia, costoDia);
    });
    
    it('descripcion debería funcionar correctamente', function () {
      assert.strictEqual(vehiculo.descripcion, descripcion);
    });
  });
});
