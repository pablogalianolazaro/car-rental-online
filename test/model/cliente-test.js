const assert = require('chai').assert;
const { expect } = require("chai");
const Cliente = require('../../src/model/Cliente');
const rol = require('../../src/model/rol.js');

describe('Cliente', () => {
    it('Constructor debería inicializar las propiedades', () => {
      const cliente = new Cliente(0);
      expect(cliente._id).to.equal(0);
      expect(cliente._rol).to.equal(rol.Cliente);
    });
   
    it('Setter y Getter para DNI', () => {
      const cliente = new Cliente(1);
      cliente.dni = '12345678';
      expect(cliente.dni).to.equal('12345678');
    });
  
    it('Setter y Getter para Nombres', () => {
      const cliente = new Cliente(3);
      cliente.nombres = 'Ana';
      expect(cliente.nombres).to.equal('Ana');
    });
  
    it('Setter y Getter para Apellidos', () => {
      const cliente = new Cliente(4);
      cliente.apellidos = 'González';
      expect(cliente.apellidos).to.equal('González');
    });
  
    it('Setter y Getter para Dirección', () => {
      const cliente = new Cliente(5);
      cliente.direccion = 'Calle 456';
      expect(cliente.direccion).to.equal('Calle 456');
    });
  
    it('Setter y Getter para Email', () => {
      const cliente = new Cliente(6);
      cliente.email = 'ana@example.com';
      expect(cliente.email).to.equal('ana@example.com');
    });
  
    it('Setter y Getter para Password', () => {
      const cliente = new Cliente(7);
      cliente.password = 'pass123' ;
      expect(cliente.password).to.equal('pass123');
    });
  
    it('Setter y Getter para Teléfono', () => {
      const cliente = new Cliente(8);
      cliente.telefono = '987654321';
      expect(cliente.telefono).to.equal('987654321');
    });
  
    it('Rol debería ser "Cliente"', () => {
      const cliente = new Cliente(9);
      expect(cliente.rol).to.equal(rol.Cliente);
    });
  });

