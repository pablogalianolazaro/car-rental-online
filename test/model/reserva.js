const assert = require("chai").assert;
const Reserva = require('../../src/model/reserva');

describe('Reserva', function () {
  let reserva;
  const id = '1';
  const fechaInicio = '2023-11-01T10:00:00.000Z';
  const fechaFin = '2023-11-05T14:30:00.000Z';
  const costo = 120.5;
  const numero = 'R001';
  const lugarEntrega = 'Lugar de entrega';
  const lugarDevolucion = 'Lugar de devolución';
  const fecha = '2023-11-01T08:00:00.000Z';
  const clienteId = 'C001';
  const vehiculoId = 'V001';

  beforeEach(function () {
    reserva = new Reserva(id);
    reserva.inicio = fechaInicio;
    reserva.fin = fechaFin;
    reserva.costo = costo;
    reserva.numero = numero;
    reserva.entrega = lugarEntrega;
    reserva.devolucion = lugarDevolucion;
    reserva.fecha = fecha;
    reserva.clienteId = clienteId;
    reserva.vehiculoId = vehiculoId;
  });

  describe('Constructor', function () {
    it('debería asignar correctamente el _id', function () {
      assert.strictEqual(reserva._id, id);
    });
  });

  describe('Setters y Getters', function () {
    it('inicio debería funcionar correctamente', function () {
      assert.strictEqual(reserva.inicio, fechaInicio);
    });

    it('fin debería funcionar correctamente', function () {
      assert.strictEqual(reserva.fin, fechaFin);
    });

    it('costo debería funcionar correctamente', function () {
      assert.strictEqual(reserva.costo, costo);
    });

    it('numero debería funcionar correctamente', function () {
      assert.strictEqual(reserva.numero, numero);
    });

    it('entrega debería funcionar correctamente', function () {
      assert.strictEqual(reserva.entrega, lugarEntrega);
    });

    it('devolucion debería funcionar correctamente', function () {
      assert.strictEqual(reserva.devolucion, lugarDevolucion);
    });

    it('fecha debería funcionar correctamente', function () {
      assert.strictEqual(reserva.fecha, fecha);
    });

    it('clienteId debería funcionar correctamente', function () {
      assert.strictEqual(reserva.clienteId, clienteId);
    });

    it('vehiculoId debería funcionar correctamente', function () {
      assert.strictEqual(reserva.vehiculoId, vehiculoId);
    });
  });
});
