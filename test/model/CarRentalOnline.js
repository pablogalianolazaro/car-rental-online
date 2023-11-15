const assert = require("chai").assert;
const { expect } = require("chai");
const Vehiculo = require('../../src/model/vehiculo');
const Cliente = require('../../src/model/Cliente');
const Empleado = require('../../src/model/empleado');
const Reserva = require('../../src/model/reserva');
const CarRentalOnline = require("../../src/model/carrentalonline");
const Rol = require("../../src/model/rol");
const { E } = require("../../src/model/tipo-vehiculo");

describe("CarRentalOnline", function () {
  const VEHICULOS = [new Vehiculo(1), new Vehiculo(2), new Vehiculo(3), new Vehiculo(4)];

  VEHICULOS[0].matricula = "ABC123";
  VEHICULOS[0].marca = "Toyota";
  VEHICULOS[0].modelo = "Camry";
  VEHICULOS[0].etiqueta = "Sedán";
  VEHICULOS[0].tipo = "Automóvil";
  VEHICULOS[0].disponible = true;
  VEHICULOS[0].eliminado = false;
  VEHICULOS[0].costoDia = 50;
  VEHICULOS[0].descripcion = "Vehículo cómodo y confiable";

  VEHICULOS[1].matricula = "XYZ789";
  VEHICULOS[1].marca = "Honda";
  VEHICULOS[1].modelo = "Civic";
  VEHICULOS[1].etiqueta = "Sedán";
  VEHICULOS[1].tipo = "Automóvil";
  VEHICULOS[1].disponible = true;
  VEHICULOS[1].eliminado = false;
  VEHICULOS[1].costoDia = 45;
  VEHICULOS[1].descripcion = "Vehículo económico y eficiente";

  VEHICULOS[2].matricula = "LMN456";
  VEHICULOS[2].marca = "Ford";
  VEHICULOS[2].modelo = "Focus";
  VEHICULOS[2].etiqueta = "Sedán";
  VEHICULOS[2].tipo = "Automóvil";
  VEHICULOS[2].disponible = true;
  VEHICULOS[2].eliminado = false;
  VEHICULOS[2].costoDia = 55;
  VEHICULOS[2].descripcion = "Vehículo versátil y moderno";

  VEHICULOS[3].matricula = "LMN457";
  VEHICULOS[3].marca = "Ford";
  VEHICULOS[3].modelo = "Focus";
  VEHICULOS[3].etiqueta = "Sedán";
  VEHICULOS[3].tipo = "Automóvil";
  VEHICULOS[3].disponible = false;
  VEHICULOS[3].eliminado = false;
  VEHICULOS[3].costoDia = 55;
  VEHICULOS[3].descripcion = "Vehículo versátil y moderno";

  const RESERVAS = [new Reserva(1), new Reserva(2), new Reserva(3), new Reserva(4)];

  RESERVAS[0].inicio = new Date("2023-10-25").toISOString();
  RESERVAS[0].fin = new Date("2023-10-30").toISOString();
  RESERVAS[0].costo = 500;
  RESERVAS[0].numero = "12345";
  RESERVAS[0].entrega = "LugarA";
  RESERVAS[0].devolución = "LugarB";
  RESERVAS[0].fecha = new Date();
  RESERVAS[0].clienteId = 13;
  RESERVAS[0].vehiculoId = 1;

  RESERVAS[1].inicio = new Date("2023-9-25").toISOString();
  RESERVAS[1].fin = new Date("2023-9-30").toISOString();
  RESERVAS[1].costo = 600;
  RESERVAS[1].numero = "34556";
  RESERVAS[1].entrega = "Lugar1";
  RESERVAS[1].devolución = "Lugar2";
  RESERVAS[1].fecha = new Date();
  RESERVAS[1].clienteId = 2;
  RESERVAS[1].vehiculoId = 2;

  RESERVAS[2].inicio = new Date("2023-8-25").toISOString();
  RESERVAS[2].fin = new Date("2023-8-30").toISOString();
  RESERVAS[2].costo = 700;
  RESERVAS[2].numero = "78922";
  RESERVAS[2].entrega = "Lugar3";
  RESERVAS[2].devolución = "Lugar4";
  RESERVAS[2].fecha = new Date();
  RESERVAS[2].clienteId = 3;
  RESERVAS[2].vehiculoId = 3;

  RESERVAS[3].inicio = new Date("2023-7-25").toISOString();
  RESERVAS[3].fin = new Date("2023-7-30").toISOString();
  RESERVAS[3].costo = 800;
  RESERVAS[3].numero = "78923";
  RESERVAS[3].entrega = "Lugar4";
  RESERVAS[3].devolución = "Lugar5";
  RESERVAS[3].fecha = new Date();
  RESERVAS[3].clienteId = 3;
  RESERVAS[3].vehiculoId = 23;

  const CLIENTES = [new Cliente(1), new Cliente(2), new Cliente(3)];

  CLIENTES[0].dni = "123456789";
  CLIENTES[0].nombres = "Juan";
  CLIENTES[0].apellidos = "Pérez";
  CLIENTES[0].direccion = "Calle 123";
  CLIENTES[0].email = "juan@email.com";
  CLIENTES[0].password = "contraseña";
  CLIENTES[0].rol = Rol.Cliente;
  CLIENTES[0].telefono = "555-555-555";

  CLIENTES[1].dni = "967854321";
  CLIENTES[1].nombres = "Pepe";
  CLIENTES[1].apellidos = "López";
  CLIENTES[1].direccion = "Calle 456";
  CLIENTES[1].email = "pepe@email.com";
  CLIENTES[1].password = "contraseña";
  CLIENTES[1].rol = Rol.Cliente;
  CLIENTES[1].telefono = "666-666-666";

  CLIENTES[2].dni = "345612789";
  CLIENTES[2].nombres = "Marta";
  CLIENTES[2].apellidos = "Martínez";
  CLIENTES[2].direccion = "Calle 789";
  CLIENTES[2].email = "marta@email.com";
  CLIENTES[2].password = "contraseña";
  CLIENTES[2].rol = Rol.Cliente;
  CLIENTES[2].telefono = "777-777-777";

  const EMPLEADOS = [new Empleado(1), new Empleado(2), new Empleado(3)];

  EMPLEADOS[0].dni = "987654321";
  EMPLEADOS[0].nombres = "María";
  EMPLEADOS[0].apellidos = "González";
  EMPLEADOS[0].direccion = "Avenida 456";
  EMPLEADOS[0].email = "maria@email.com";
  EMPLEADOS[0].password = "contraseña";
  EMPLEADOS[0].rol = "Empleado";
  EMPLEADOS[0].telefono = "555-555-556";

  EMPLEADOS[1].dni = "978456312";
  EMPLEADOS[1].nombres = "David";
  EMPLEADOS[1].apellidos = "Sánchez";
  EMPLEADOS[1].direccion = "Avenida 123";
  EMPLEADOS[1].email = "david@email.com";
  EMPLEADOS[1].password = "contraseña";
  EMPLEADOS[1].rol = "Empleado";
  EMPLEADOS[1].telefono = "555-555-557";

  EMPLEADOS[2].dni = "478264645";
  EMPLEADOS[2].nombres = "Pepa";
  EMPLEADOS[2].apellidos = "Muñoz";
  EMPLEADOS[2].direccion = "Avenida 789";
  EMPLEADOS[2].email = "pepa@email.com";
  EMPLEADOS[2].password = "contraseña";
  EMPLEADOS[2].rol = "Empleado";
  EMPLEADOS[2].telefono = "555-555-558";


  let car_rental_online;

  beforeEach(function () { car_rental_online = new CarRentalOnline(); });

  it("Constructor CarRentalOnline ", function () {
    assert.deepEqual(car_rental_online._lastId, 0);
    assert.deepEqual(car_rental_online._clientes, []);
    expect(car_rental_online._clientes).deep.equal([]);
    assert.deepEqual(car_rental_online._empleados, []);
    expect(car_rental_online._empleados).deep.equal([]);
    assert.deepEqual(car_rental_online._vehiculos, []);
    expect(car_rental_online._vehiculos).deep.equal([]);
    assert.deepEqual(car_rental_online._reservas, []);
    expect(car_rental_online._reservas).deep.equal([]);
  });

  it("getClientes CarRentalOnline", function () {
    CLIENTES.forEach((u) => {
      car_rental_online.agregarCliente(u);
    });
    CLIENTES.forEach((u, i) => {
      assert.deepEqual(car_rental_online._clientes[i], u);
    });
    car_rental_online._clientes.splice(0);
  });

  it("getEmpleados CarRentalOnline", function () {
    EMPLEADOS.forEach((u) => {
      car_rental_online.agregarEmpleado(u);
    });
    EMPLEADOS.forEach((u, i) => {
      assert.deepEqual(car_rental_online._empleados[i], u);
    });
    car_rental_online._empleados.splice(0);
  });

  it("getVehiculos CarRentalOnline", function () {
    VEHICULOS.forEach((u) => {
      car_rental_online.agregarVehiculo(u);
    });
    VEHICULOS.forEach((u, i) => {
      assert.deepEqual(car_rental_online._vehiculos[i], u);
    });
    car_rental_online._vehiculos.splice(0);
  });

  it("getReservas CarRentalOnline", function () {
    RESERVAS.forEach((u, i) => {
      car_rental_online._reservas[i] = u;
    });
    RESERVAS.forEach((u, i) => {
      assert.deepEqual(car_rental_online._reservas[i], u);
    });
  });

  it("agregarCliente CarRentalOnline", function () {
    CLIENTES.forEach((u) => {
      car_rental_online.agregarCliente(u);
    })

    CLIENTES.forEach((cliente, i) => {
      assert.deepEqual(car_rental_online._clientes[i], cliente);
    });

    try {
      car_rental_online.agregarCliente(CLIENTES[1]);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Cliente ya existente.");
    }

    try {
      car_rental_online.agregarCliente(EMPLEADOS[1]);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No es un cliente.");
    }
  });

  it("agregarEmpleado CarRentalOnline", function () {
    EMPLEADOS.forEach((u) => {
      car_rental_online.agregarEmpleado(u);
    });

    EMPLEADOS.forEach((empleado, i) => {
      assert.deepEqual(car_rental_online._empleados[i], empleado);
    });

    try {
      car_rental_online.agregarEmpleado(EMPLEADOS[1]);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Empleado ya existente.");
    }

    try {
      car_rental_online.agregarEmpleado(CLIENTES[1]);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No es un empleado.");
    }
  });

  it("agregarVehiculo CarRentalOnline", function () {
    VEHICULOS.forEach((u) => {
      car_rental_online.agregarVehiculo(u);
    })

    VEHICULOS.forEach((vehiculo, i) => {
      assert.deepEqual(car_rental_online._vehiculos[i], vehiculo);
    });

    try {
      car_rental_online.agregarVehiculo(VEHICULOS[1]);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "El vehiculo ya estaba agregado.");
    }

  });

  it("signinCliente CarRentalOnline", function () {

    CLIENTES.forEach((u) => {
      car_rental_online.agregarCliente(u);
    });

    car_rental_online.signin(CLIENTES[0].email, CLIENTES[0].password, CLIENTES[0].rol);
    assert.deepEqual(car_rental_online._usuario, CLIENTES[0]);
    car_rental_online.signin(CLIENTES[1].email, CLIENTES[1].password, CLIENTES[1].rol);
    assert.deepEqual(car_rental_online._usuario, CLIENTES[1]);
    car_rental_online.signin(CLIENTES[2].email, CLIENTES[2].password, CLIENTES[2].rol);
    assert.deepEqual(car_rental_online._usuario, CLIENTES[2]);

    try {
      car_rental_online.signin(CLIENTES[0].email, CLIENTES[1].password, CLIENTES[0].rol);
      assert.fail("Credenciales incorrectas.");
    } catch (error) {
      assert.strictEqual(error.message, "Credenciales incorrectas.");
    }

    try {
      car_rental_online.signin(CLIENTES[0].email, CLIENTES[0].password, EMPLEADOS[0].rol);
      assert.fail("Credenciales incorrectas.");
    } catch (error) {
      assert.strictEqual(error.message, "Credenciales incorrectas.");
    }
  });

  it("signinEmpleado CarRentalOnline", function () {
    EMPLEADOS.forEach((u) => {
      car_rental_online.agregarEmpleado(u);
    });

    car_rental_online.signin(EMPLEADOS[0].email, EMPLEADOS[0].password, EMPLEADOS[0].rol);
    assert.deepEqual(car_rental_online._usuario, EMPLEADOS[0]);
    car_rental_online.signin(EMPLEADOS[1].email, EMPLEADOS[1].password, EMPLEADOS[1].rol);
    assert.deepEqual(car_rental_online._usuario, EMPLEADOS[1]);
    car_rental_online.signin(EMPLEADOS[2].email, EMPLEADOS[2].password, EMPLEADOS[2].rol);
    assert.deepEqual(car_rental_online._usuario, EMPLEADOS[2]);

    try {
      car_rental_online.signin(EMPLEADOS[0].email, EMPLEADOS[1].password, EMPLEADOS[0].rol);
      assert.fail("Credenciales incorrectas.");
    } catch (error) {
      assert.strictEqual(error.message, "Credenciales incorrectas.");
    }

    try {
      car_rental_online.signin(EMPLEADOS[0].email, EMPLEADOS[0].password, CLIENTES[0].rol);
      assert.fail("Credenciales incorrectas.");
    } catch (error) {
      assert.strictEqual(error.message, "Credenciales incorrectas.");
    }
  });

  it("signup CarRentalOnline", function () {

    const USUARIOS2 = [new Cliente(1), new Cliente(2), new Cliente(3)];

    USUARIOS2[0]._dni = "987624331";
    USUARIOS2[0]._nombres = "Angel";
    USUARIOS2[0]._apellidos = "Ramirez";
    USUARIOS2[0]._direccion = "Avenida 732";
    USUARIOS2[0]._email = "angel@email.com";
    USUARIOS2[0]._password = "contraseña";
    USUARIOS2[0]._telefono = "555-555-116";

    USUARIOS2[1]._dni = "978466332";
    USUARIOS2[1]._nombres = "Luis";
    USUARIOS2[1]._apellidos = "Hernandez";
    USUARIOS2[1]._direccion = "Avenida 213";
    USUARIOS2[1]._email = "luis@email.com";
    USUARIOS2[1]._password = "contraseña";
    USUARIOS2[1]._telefono = "555-555-227";

    USUARIOS2[2]._dni = "478204635";
    USUARIOS2[2]._nombres = "Silvia";
    USUARIOS2[2]._apellidos = "Lopez";
    USUARIOS2[2]._direccion = "Avenida 444";
    USUARIOS2[2]._email = "silvia@email.com";
    USUARIOS2[2]._password = "contraseña";
    USUARIOS2[2]._telefono = "555-555-348";

    const EMPLEADOS2 = [new Empleado(4), new Empleado(5), new Empleado(6)];

    EMPLEADOS2[0]._dni = "987654331";
    EMPLEADOS2[0]._nombres = "Maria";
    EMPLEADOS2[0]._apellidos = "Romero";
    EMPLEADOS2[0]._direccion = "Avenida 676";
    EMPLEADOS2[0]._email = "maria@email.com";
    EMPLEADOS2[0]._password = "contraseña";
    EMPLEADOS2[0]._telefono = "555-555-516";

    EMPLEADOS2[1]._dni = "978456332";
    EMPLEADOS2[1]._nombres = "Fernando";
    EMPLEADOS2[1]._apellidos = "Gomez";
    EMPLEADOS2[1]._direccion = "Avenida 113";
    EMPLEADOS2[1]._email = "fernando@email.com";
    EMPLEADOS2[1]._password = "contraseña";
    EMPLEADOS2[1]._telefono = "555-555-527";

    EMPLEADOS2[2]._dni = "478264635";
    EMPLEADOS2[2]._nombres = "Enrique";
    EMPLEADOS2[2]._apellidos = "Martinez";
    EMPLEADOS2[2]._direccion = "Avenida 777";
    EMPLEADOS2[2]._email = "enrique@email.com";
    EMPLEADOS2[2]._password = "contraseña";
    EMPLEADOS2[2]._telefono = "555-555-548";

    USUARIOS2.forEach((cliente, i) => {
      car_rental_online.signup(cliente);
      assert.deepEqual(car_rental_online._clientes[i], cliente);
    });

    try {
      car_rental_online.signup(USUARIOS2[0]);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Email ya registrado.");
    }

    EMPLEADOS2.forEach((empleado, i) => {
      car_rental_online.signup(empleado);
      assert.deepEqual(car_rental_online._empleados[i], empleado);
    });

    try {
      car_rental_online.signup(EMPLEADOS2[0]);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Email ya registrado.");
    }

  });

  it("signoutCliente CarRentalOnline", function () {
    CLIENTES.forEach((u) => {
      car_rental_online.agregarCliente(u);
    });

    car_rental_online.signin(CLIENTES[0].email, CLIENTES[0].password, CLIENTES[0].rol);
    assert.deepEqual(car_rental_online._usuario, CLIENTES[0]);
    car_rental_online.signout();
    assert.deepEqual(car_rental_online._usuario, null);
    car_rental_online.signin(CLIENTES[1].email, CLIENTES[1].password, CLIENTES[1].rol);
    assert.deepEqual(car_rental_online._usuario, CLIENTES[1]);
    car_rental_online.signout();
    assert.deepEqual(car_rental_online._usuario, null);
    car_rental_online.signin(CLIENTES[2].email, CLIENTES[2].password, CLIENTES[2].rol);
    assert.deepEqual(car_rental_online._usuario, CLIENTES[2]);
    car_rental_online.signout();
    assert.deepEqual(car_rental_online._usuario, null);
  });

  it("signoutEmpleado CarRentalOnline", function () {
    EMPLEADOS.forEach((u) => {
      car_rental_online.agregarEmpleado(u);
    });

    car_rental_online.signin(EMPLEADOS[0].email, EMPLEADOS[0].password, EMPLEADOS[0].rol);
    assert.deepEqual(car_rental_online._usuario, EMPLEADOS[0]);
    car_rental_online.signout();
    assert.deepEqual(car_rental_online._usuario, null);
    car_rental_online.signin(EMPLEADOS[1].email, EMPLEADOS[1].password, EMPLEADOS[1].rol);
    assert.deepEqual(car_rental_online._usuario, EMPLEADOS[1]);
    car_rental_online.signout();
    assert.deepEqual(car_rental_online._usuario, null);
    car_rental_online.signin(EMPLEADOS[2].email, EMPLEADOS[2].password, EMPLEADOS[2].rol);
    assert.deepEqual(car_rental_online._usuario, EMPLEADOS[2]);
    car_rental_online.signout();
    assert.deepEqual(car_rental_online._usuario, null);
  });

  it("reservar CarRentalOnline", function () {

    CLIENTES.forEach((u) => {
      car_rental_online.agregarCliente(u);
    });

    car_rental_online.signin(CLIENTES[0].email, CLIENTES[0].password, CLIENTES[0].rol);

    RESERVAS.forEach((u, i) => {
      car_rental_online._reservas[i] = u;
    });

    VEHICULOS.forEach((u) => {
      car_rental_online.agregarVehiculo(u);
    });

    let reserva1 = new Reserva(4);
    reserva1.inicio = new Date("2023-11-24").toISOString();
    reserva1.fin = new Date("2023-11-30").toISOString();
    reserva1.costo = 500;
    reserva1.numero = "12345";
    reserva1.entrega = "LugarA";
    reserva1.devolución = "LugarB";
    reserva1.fecha = new Date();
    reserva1.clienteId = 13;
    reserva1.vehiculoId = 1;

    let reserva2 = new Reserva(5);
    reserva2.inicio = new Date(RESERVAS[0].inicio);
    reserva2.fin = new Date("2023-11-30").toISOString();
    reserva2.costo = 500;
    reserva2.numero = "12345";
    reserva2.entrega = "LugarA";
    reserva2.devolución = "LugarB";
    reserva2.fecha = new Date();
    reserva2.clienteId = 13;
    reserva2.vehiculoId = 1;


    let reserva3 = new Reserva(6);
    reserva3.inicio = new Date("2023-10-25").toISOString();
    reserva3.fin = new Date("2023-11-30").toISOString();
    reserva3.costo = 500;
    reserva3.numero = "12345";
    reserva3.entrega = "LugarA";
    reserva3.devolución = "LugarB";
    reserva3.fecha = new Date();
    reserva3.clienteId = 13;
    reserva3.vehiculoId = 23;

    assert.deepEqual(car_rental_online.reservar(reserva1.vehiculoId, reserva1.inicio, reserva1.fin), true);

    try {
      car_rental_online.reservar(reserva2.vehiculoId, reserva2.inicio, reserva2.fin);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Vehiculo no disponible.");
    }
    try {
      car_rental_online.reservar(reserva3.vehiculoId, reserva3.inicio, reserva3.fin);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Vehiculo no encontrado.");
    }

    car_rental_online.signout();
    try {
      car_rental_online.reservar(reserva3.vehiculoId, reserva3.inicio, reserva3.fin);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "El cliente no ha iniciado sesión.");
    }

  });

  it("disponibilidad CarRentalOnline", function () {

    RESERVAS.forEach((u, i) => {
      car_rental_online._reservas[i] = u;
    });

    let reserva1 = new Reserva(20);
    reserva1.inicio = new Date("2023-11-24").toISOString();
    reserva1.fin = new Date("2023-11-30").toISOString();
    reserva1.costo = 500;
    reserva1.numero = "12345";
    reserva1.entrega = "LugarA";
    reserva1.devolución = "LugarB";
    reserva1.fecha = new Date();
    reserva1.clienteId = 13;
    reserva1.vehiculoId = 1;

    let reserva2 = new Reserva(21);
    reserva2.inicio = new Date("2023-10-25").toISOString();
    reserva2.fin = new Date("2023-11-30").toISOString();
    reserva2.costo = 500;
    reserva2.numero = "12345";
    reserva2.entrega = "LugarA";
    reserva2.devolución = "LugarB";
    reserva2.fecha = new Date();
    reserva2.clienteId = 13;
    reserva2.vehiculoId = 1;

    let reserva3 = new Reserva(1);
    reserva3.inicio = new Date("2022-10-25").toISOString();
    reserva3.fin = new Date("2023-10-30").toISOString();
    reserva3.costo = 500;
    reserva3.numero = "12345";
    reserva3.entrega = "LugarA";
    reserva3.devolución = "LugarB";
    reserva3.fecha = new Date();
    reserva3.clienteId = 13;
    reserva3.vehiculoId = 1;

    assert.deepEqual(car_rental_online.disponibilidad(reserva1.vehiculoId, reserva1.inicio, reserva1.fin), true);
    assert.deepEqual(car_rental_online.disponibilidad(reserva2.vehiculoId, reserva2.inicio, reserva2.fin), false);
    assert.deepEqual(car_rental_online.disponibilidad(reserva3.vehiculoId, reserva3.inicio, reserva3.fin), false);

  });
  
  it("disponibles CarRentalOnline", () => {

    VEHICULOS.forEach((u) => {
      car_rental_online.agregarVehiculo(u);
    });

    RESERVAS.forEach((u, i) => {
      car_rental_online._reservas[i] = u;
    });
    
    let comprueba = car_rental_online.disponibles(VEHICULOS[0].marca, VEHICULOS[0].modelo, VEHICULOS[0].tipo, VEHICULOS[0].etiqueta, VEHICULOS[0].costoDia, new Date(1564567200000).toISOString(), new Date(1564567200000).toISOString());
    for(let i = 0; i< comprueba.length; i++){
      assert.strictEqual(car_rental_online.disponibilidad(comprueba[i]._id, "2023-12-01","2023-12-02"), true);
    }

  });

  it("perfil CarRentalOnline", function () {
    CLIENTES.forEach((u) => {
      car_rental_online.agregarCliente(u);
    });

    car_rental_online.signin(CLIENTES[0].email, CLIENTES[0].password, CLIENTES[0].rol);
    assert.deepEqual(car_rental_online.perfil(), CLIENTES[0]);
    car_rental_online.signin(CLIENTES[1].email, CLIENTES[1].password, CLIENTES[1].rol);
    assert.deepEqual(car_rental_online.perfil(), CLIENTES[1]);
    car_rental_online.signin(CLIENTES[2].email, CLIENTES[2].password, CLIENTES[2].rol);
    assert.deepEqual(car_rental_online.perfil(), CLIENTES[2]);

    EMPLEADOS.forEach((u, i) => {
      car_rental_online._empleados[i] = u;
    });

    car_rental_online.signin(EMPLEADOS[0].email, EMPLEADOS[0].password, EMPLEADOS[0].rol);
    assert.deepEqual(car_rental_online.perfil(), EMPLEADOS[0]);
    car_rental_online.signin(EMPLEADOS[1].email, EMPLEADOS[1].password, EMPLEADOS[1].rol);
    assert.deepEqual(car_rental_online.perfil(), EMPLEADOS[1]);
    car_rental_online.signin(EMPLEADOS[2].email, EMPLEADOS[2].password, EMPLEADOS[2].rol);
    assert.deepEqual(car_rental_online.perfil(), EMPLEADOS[2]);

  });

  it("cancelar CarRentalOnline", function () {
    RESERVAS.forEach((u, i) => {
      car_rental_online._reservas[i] = u;
    });

    car_rental_online.cancelar(RESERVAS[0].numero);
    try {
      car_rental_online.reservaByNumero(RESERVAS[0].numero);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe una reserva con ese numero.");
    }
    car_rental_online.cancelar(RESERVAS[1].numero);
    try {
      car_rental_online.reservaByNumero(RESERVAS[1].numero);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe una reserva con ese numero.");
    }
    car_rental_online.cancelar(RESERVAS[2].numero);
    try {
      car_rental_online.reservaByNumero(RESERVAS[2].numero);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe una reserva con ese numero.");
    }
  });

  it("eliminarVehiculo CarRentalOnline", function () {
    VEHICULOS.forEach((u) => {
      car_rental_online.agregarVehiculo(u);
    });

    car_rental_online.eliminarVehiculo(VEHICULOS[0].id);
    try {
      car_rental_online.vehiculoById(VEHICULOS[0].id);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un vehiculo con ese id.");
    }
    car_rental_online.eliminarVehiculo(VEHICULOS[1].id);
    try {
      car_rental_online.vehiculoById(VEHICULOS[1].id);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un vehiculo con ese id.");
    }
    car_rental_online.eliminarVehiculo(VEHICULOS[2].id);
    try {
      car_rental_online.vehiculoById(VEHICULOS[2].id);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un vehiculo con ese id.");
    }
  });

  it("entregarVehiculo CarRentalOnline", function () {

    let reserva1 = new Reserva(20);
    reserva1.inicio = new Date("2023-11-24");
    reserva1.fin = new Date("2023-11-30");
    reserva1.costo = 500;
    reserva1.numero = "12345";
    reserva1.entrega = "LugarA";
    reserva1.devolución = "LugarB";
    reserva1.fecha = new Date();
    reserva1.clienteId = 13;
    reserva1.vehiculoId = 1;

    let reserva2 = new Reserva(21);
    reserva2.inicio = new Date("2023-10-25");
    reserva2.fin = new Date("2023-11-30");
    reserva2.costo = 500;
    reserva2.numero = "12345";
    reserva2.entrega = "LugarA";
    reserva2.devolución = "LugarB";
    reserva2.fecha = new Date();
    reserva2.clienteId = 13;
    reserva2.vehiculoId = 1;

    let reserva3 = new Reserva(10);
    reserva3.inicio = new Date("2022-10-25");
    reserva3.fin = new Date("2023-10-30");
    reserva3.costo = 500;
    reserva3.numero = "200";
    reserva3.entrega = "LugarA";
    reserva3.devolución = "LugarB";
    reserva3.fecha = new Date();
    reserva3.clienteId = 13;
    reserva3.vehiculoId = 1;

    car_rental_online.reservas[0] = reserva1;
    car_rental_online.reservas[1] = reserva2;
    car_rental_online.reservas[2] = reserva3;

    VEHICULOS.forEach((u, i) => {
      car_rental_online.agregarVehiculo(u);
    });

    try {
      car_rental_online.entregarVehiculo(reserva1.numero);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Vehiculo no existente o no disponible.");
    }
    try {
      car_rental_online.entregarVehiculo(reserva2.numero);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Vehiculo no existente o no disponible.");
    }
    try {
      car_rental_online.entregarVehiculo(reserva3.numero);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "Vehiculo no existente o no disponible.");
    }
  });

  it("reservas CarRentalOnline", function () {
    RESERVAS.forEach((u, i) => {
      car_rental_online._reservas[i] = u;
    });

    let reservas_aux = [];
    reservas_aux.push(RESERVAS[0]);
    assert.deepEqual(car_rental_online.reservas(RESERVAS[0].clienteId), reservas_aux);
    reservas_aux = [];
    reservas_aux.push(RESERVAS[1]);
    assert.deepEqual(car_rental_online.reservas(RESERVAS[1].clienteId), reservas_aux);
    reservas_aux = [];
    reservas_aux.push(RESERVAS[2]);
    reservas_aux.push(RESERVAS[3]);
    assert.deepEqual(car_rental_online.reservas(RESERVAS[2].clienteId), reservas_aux);

    try {
      car_rental_online.reservas(1);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe cliente con ese id.");
    }
  });

  it("clienteByEmail CarRentalOnline", function () {
    CLIENTES.forEach((u, i) => {
      car_rental_online._clientes[i] = u;
    });

    assert.strictEqual(car_rental_online.clienteByEmail(CLIENTES[0].email), CLIENTES[0]);
    assert.strictEqual(car_rental_online.clienteByEmail(CLIENTES[1].email), CLIENTES[1]);
    assert.strictEqual(car_rental_online.clienteByEmail(CLIENTES[2].email), CLIENTES[2]);

    try {
      car_rental_online.clienteByEmail("pablo.galiano2@alu.uclm.es");
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un cliente con ese email.");
    }
  });

  it("empleadoByEmail CarRentalOnline", function () {
    EMPLEADOS.forEach((u, i) => {
      car_rental_online._empleados[i] = u;
    });

    assert.strictEqual(car_rental_online.empleadoByEmail(EMPLEADOS[0].email), EMPLEADOS[0]);
    assert.strictEqual(car_rental_online.empleadoByEmail(EMPLEADOS[1].email), EMPLEADOS[1]);
    assert.strictEqual(car_rental_online.empleadoByEmail(EMPLEADOS[2].email), EMPLEADOS[2]);

    try {
      car_rental_online.empleadoByEmail("pablo.galiano2@alu.uclm.es");
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un empleado con ese email.");
    }
  });

  it("vehiculoPorMatricula CarRentalOnline", function () {
    VEHICULOS.forEach((u, i) => {
      car_rental_online._vehiculos[i] = u;
    });

    assert.strictEqual(car_rental_online.vehiculoPorMatricula(VEHICULOS[0].matricula), VEHICULOS[0]);
    assert.strictEqual(car_rental_online.vehiculoPorMatricula(VEHICULOS[1].matricula), VEHICULOS[1]);
    assert.strictEqual(car_rental_online.vehiculoPorMatricula(VEHICULOS[2].matricula), VEHICULOS[2]);
    assert.strictEqual(car_rental_online.vehiculoPorMatricula(VEHICULOS[3].matricula), VEHICULOS[3]);

    try {
      car_rental_online.vehiculoPorMatricula("34557");
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un vehiculo con esa matricula.");
    }
  });

  it("reservaByNumero CarRentalOnline", function () {
    RESERVAS.forEach((u, i) => {
      car_rental_online._reservas[i] = u;
    });

    assert.strictEqual(car_rental_online.reservaByNumero(RESERVAS[0].numero), RESERVAS[0]);
    assert.strictEqual(car_rental_online.reservaByNumero(RESERVAS[1].numero), RESERVAS[1]);
    assert.strictEqual(car_rental_online.reservaByNumero(RESERVAS[2].numero), RESERVAS[2]);
    assert.strictEqual(car_rental_online.reservaByNumero(RESERVAS[3].numero), RESERVAS[3]);

    try {
      car_rental_online.reservaByNumero("34557");
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe una reserva con ese numero.");
    }
  });

  it("clienteById CarRentalOnline", function () {
    CLIENTES.forEach((u, i) => {
      car_rental_online._clientes[i] = u;
    });

    assert.strictEqual(car_rental_online.clienteById(CLIENTES[0]._id), CLIENTES[0]);
    assert.strictEqual(car_rental_online.clienteById(CLIENTES[1]._id), CLIENTES[1]);
    assert.strictEqual(car_rental_online.clienteById(CLIENTES[2]._id), CLIENTES[2]);

    try {
      car_rental_online.clienteById(4);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un cliente con ese id.");
    }
  });

  it("empleadoById CarRentalOnline", function () {
    EMPLEADOS.forEach((u, i) => {
      car_rental_online._empleados[i] = u;
    });

    assert.strictEqual(car_rental_online.empleadoById(EMPLEADOS[0]._id), EMPLEADOS[0]);
    assert.strictEqual(car_rental_online.empleadoById(EMPLEADOS[1]._id), EMPLEADOS[1]);
    assert.strictEqual(car_rental_online.empleadoById(EMPLEADOS[2]._id), EMPLEADOS[2]);

    try {
      car_rental_online.empleadoById(4);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un empleado con ese id.");
    }
  });

  it("vehiculoById CarRentalOnline", function () {
    VEHICULOS.forEach((u, i) => {
      car_rental_online._vehiculos[i] = u;
    });

    assert.strictEqual(car_rental_online.vehiculoById(VEHICULOS[0]._id), VEHICULOS[0]);
    assert.strictEqual(car_rental_online.vehiculoById(VEHICULOS[1]._id), VEHICULOS[1]);
    assert.strictEqual(car_rental_online.vehiculoById(VEHICULOS[2]._id), VEHICULOS[2]);
    assert.strictEqual(car_rental_online.vehiculoById(VEHICULOS[3]._id), VEHICULOS[3]);

    try {
      car_rental_online.vehiculoById(5);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe un vehiculo con ese id.");
    }
  });

  it("reservaById CarRentalOnline", function () {

    RESERVAS.forEach((u, i) => {
      car_rental_online._reservas[i] = u;
    });

    assert.strictEqual(car_rental_online.reservaById(RESERVAS[0].vehiculoId), RESERVAS[0]);
    assert.strictEqual(car_rental_online.reservaById(RESERVAS[1].vehiculoId), RESERVAS[1]);
    assert.strictEqual(car_rental_online.reservaById(RESERVAS[2].vehiculoId), RESERVAS[2]);
    assert.strictEqual(car_rental_online.reservaById(RESERVAS[3].vehiculoId), RESERVAS[3]);

    try {
      car_rental_online.reservaById(5);
      assert.fail("Se esperaba un error");
    } catch (error) {
      assert.strictEqual(error.message, "No existe una reserva que contenga el ID del vehículo.");
    }
  });
});