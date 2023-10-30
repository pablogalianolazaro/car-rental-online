const assert = require("chai").assert;
const { expect } = require("chai");
const CarRentalOnline = require("../../src/model/CarRentalOnline");

describe("CarRentalOnline", function () {
  const VEHICULOS = [
    new Vehiculo(
      1,
      "ABC123",
      "Toyota",
      "Camry",
      "Sedán",
      "Automóvil",
      true,
      false,
      50,
      "Vehículo cómodo y confiable"
    ),
    new Vehiculo(
      2,
      "XYZ789",
      "Honda",
      "Civic",
      "Sedán",
      "Automóvil",
      true,
      false,
      45,
      "Vehículo económico y eficiente"
    ),
    new Vehiculo(
      3,
      "LMN456",
      "Ford",
      "Focus",
      "Sedán",
      "Automóvil",
      true,
      false,
      55,
      "Vehículo versátil y moderno"
    ),
  ];
  const RESERVAS = [
    //el id del cliente no existe
    new Reserva(
      1,
      new Date("2023-10-25"),
      new Date("2023-10-30"),
      500,
      "12345",
      "LugarA",
      "LugarB",
      new Date(),
      13,
      1
    ),
    new Reserva(
      2,
      new Date("2023-9-25"),
      new Date("2023-9-30"),
      600,
      "34556",
      "Lugar1",
      "Lugar2",
      new Date(),
      2,
      2
    ),
    //el coche ha sido alquilado por la reserva 2
    new Reserva(
      3,
      new Date("2023-8-25"),
      new Date("2023-8-30"),
      700,
      "78922",
      "Lugar3",
      "Lugar4",
      new Date(),
      3,
      2
    ),
    //el id del coche no existe
    new Reserva(
      4,
      new Date("2023-7-25"),
      new Date("2023-7-30"),
      800,
      "78923",
      "Lugar4",
      "Lugar5",
      new Date(),
      3,
      23
    ),
  ];

  const CLIENTES = [
    new Cliente(
      1,
      "123456789",
      "Juan",
      "Pérez",
      "Calle 123",
      "juan@email.com",
      "contraseña",
      "Cliente",
      "555-555-555"
    ),
    new Cliente(
      2,
      "967854321",
      "Pepe",
      "López",
      "Calle 456",
      "pepe@email.com",
      "contraseña",
      "Cliente",
      "666-666-666"
    ),
    new Cliente(
      3,
      "345612789",
      "Marta",
      "Martínez",
      "Calle 789",
      "marta@email.com",
      "contraseña",
      "Cliente",
      "777-777-777"
    ),
  ];

  const EMPLEADOS = [
    new Empleado(
      1,
      "987654321",
      "María",
      "González",
      "Avenida 456",
      "maria@email.com",
      "contraseña",
      "Empleado",
      "555-555-556"
    ),
    new Empleado(
      2,
      "978456312",
      "David",
      "Sánchez",
      "Avenida 123",
      "david@email.com",
      "contraseña",
      "Empleado",
      "555-555-557"
    ),
    new Empleado(
      3,
      "478264645",
      "Pepa",
      "Muñoz",
      "Avenida 789",
      "pepa@email.com",
      "contraseña",
      "Empleado",
      "555-555-558"
    ),
  ];

  let car_rental_online;

  beforeEach(function () {
    car_rental_online = new CarRentalOnline();
  });

  it("Constructor CarRentalOnline ", function () {
    assert.deepEqual(car_rental_online._lastId, 0);
    assert.deepEqual(car_rental_online._cliente, []);
    expect(car_rental_online._cliente).deep.equal([]);
    assert.deepEqual(car_rental_online._empleados, []);
    expect(car_rental_online._empleados).deep.equal([]);
    assert.deepEqual(car_rental_online._vehiculos, []);
    expect(car_rental_online._vehiculos).deep.equal([]);
    assert.deepEqual(car_rental_online._reservas, []);
    expect(car_rental_online._reservas).deep.equal([]);
  });

  it("getClientes CarRentalOnline", function () {
    CLIENTES.forEach((u, i) => {
      car_rental_online._clientes[i] = u;
    });
    CLIENTES.forEach((u, i) => {
      assert.deepEqual(car_rental_online._clientes[i], u);
    });
  });

  it("getEmpleados CarRentalOnline", function () {
    EMPLEADOS.forEach((u, i) => {
      car_rental_online._empleados[i] = u;
    });
    EMPLEADOS.forEach((u, i) => {
      assert.deepEqual(car_rental_online._empleados, u);
    });
  });

  it("getVehiculos CarRentalOnline", function () {
    VEHICULOS.forEach((u, i) => {
      car_rental_online._vehiculos[i] = u;
    });
    VEHICULOS.forEach((u, i) => {
      assert.deepEqual(car_rental_online._vehiculos, u);
    });
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
    CLIENTES.forEach((u, i) => {
      assert.deepEqual(car_rental_online._clientes[i], u);
    });
    assert.deepEqual(car_rental_online.agregarCliente(CLIENTES[1]), Error);
    assert.deepEqual(car_rental_online.agregarCliente(EMPLEADOS[1]), Error);
  });

  it("agregarEmpleado CarRentalOnline", function () {
    EMPLEADOS.forEach((u, i) => {
      assert.deepEqual(car_rental_online._empleados[i], u);
    });
    assert.deepEqual(car_rental_online.agregarEmpleado(EMPLEADOS[1]), Error);
    assert.deepEqual(car_rental_online.agregarEmpleado(CLIENTES[1]), Error);
  });

  it("agregarVehiculo CarRentalOnline", function () {
    VEHICULOS.forEach((u, i) => {
      assert.deepEqual(car_rental_online._vehiculos[i], u);
    });
    assert.deepEqual(car_rental_online.agregarVehiculo(VEHICULO[1]), Error);
  });

  it("signinCliente CarRentalOnline", function () {
    CLIENTES.forEach((u, i) => {
      car_rental_online.signin(u._email, u._password, u._rol);
      assert.deepEqual(car_rental_online.usuario, u);
    });
    assert.deepEqual(
      car_rental_online.signin(
        EMPLEADOS[1]._email,
        CLIENTES[1]._password,
        CLIENTES[1]._rol
      ),
      Error
    );
    assert.deepEqual(
      car_rental_online.signin(
        CLIENTES[1]._email,
        CLIENTES[2]._password,
        CLIENTES[1]._rol
      ),
      Error
    );
    assert.deepEqual(
      car_rental_online.signin(
        CLIENTES[2]._email,
        CLIENTES[2]._password,
        EMPLEADOS[1]._rol
      ),
      Error
    );
  });

  it("signinEmpleado CarRentalOnline", function () {
    EMPLEADOS.forEach((u, i) => {
      car_rental_online.signin(u._email, u._password, u._rol);
      assert.deepEqual(car_rental_online.usuario, u);
    });
    assert.deepEqual(
      car_rental_online.signin(
        CLIENTES[1]._email,
        EMPLEADOS[1]._password,
        EMPLEADOS[1]._rol
      ),
      Error
    );
    assert.deepEqual(
      car_rental_online.signin(
        EMPLEADOS[1]._email,
        EMPLEADOS[2]._password,
        EMPLEADOS[1]._rol
      ),
      Error
    );
    assert.deepEqual(
      car_rental_online.signin(
        EMPLEADOS[2]._email,
        EMPLEADOS[2]._password,
        CLIENTES[1]._rol
      ),
      Error
    );
  });

  //12
  it("signup CarRentalOnline", function () {
    let USUARIOS2 = [
      new Usuario(
        11,
        "987624331",
        "Angel",
        "Ramirez",
        "Avenida 732",
        "angel@email.com",
        "contraseña",
        "Cliente",
        "555-555-116"
      ),
      new Usuario(
        22,
        "978466332",
        "Luis",
        "Hernandez",
        "Avenida 213",
        "luis@email.com",
        "contraseña",
        "Empleado",
        "555-555-227"
      ),
      new Usuario(
        33,
        "478204635",
        "Silvia",
        "Lopez",
        "Avenida 444",
        "silvia@email.com",
        "contraseña",
        "Cliente",
        "555-555-348"
      ),
    ];
    let EMPLEADOS2 = [
      new Empleado(
        4,
        "987654331",
        "Maria",
        "Romero",
        "Avenida 676",
        "maria@email.com",
        "contraseña",
        "Empleado",
        "555-555-516"
      ),
      new Empleado(
        5,
        "978456332",
        "Fernando",
        "Gomez",
        "Avenida 113",
        "fernando@email.com",
        "contraseña",
        "Empleado",
        "555-555-527"
      ),
      new Empleado(
        6,
        "478264635",
        "Enrique",
        "Martinez",
        "Avenida 777",
        "enrique@email.com",
        "contraseña",
        "Empleado",
        "555-555-548"
      ),
    ];

    assert.deepEqual(car_rental_online._clientes[0], Error);
    assert.deepEqual(car_rental_online._clientes[1], Error);
    assert.deepEqual(car_rental_online._clientes[2], Error);

    USUARIOS2.forEach((u, i) => {
      car_rental_online.signup(u);
      assert.deepEqual(car_rental_online._clientes[3 + i], u);
    });

    assert.deepEqual(car_rental_online._empleados[0], Error);
    assert.deepEqual(car_rental_online._empleados[1], Error);
    assert.deepEqual(car_rental_online._empleados[2], Error);

    EMPLEADOS2.forEach((u, i) => {
      car_rental_online.signup(u);
      assert.deepEqual(car_rental_online._empleados[3 + i], u);
    });
  });

  it("signoutCliente CarRentalOnline", function () {
    let CLIENTES3 = [
      new Cliente(
        23,
        "587624331",
        "Jose",
        "Fuentes",
        "Avenida 762",
        "jose@email.com",
        "contraseña",
        "Cliente",
        "555-551-116"
      ),
      new Cliente(
        24,
        "478466332",
        "Rocio",
        "Muñoz",
        "Avenida 221",
        "rocio@email.com",
        "contraseña",
        "Cliente",
        "555-552-227"
      ),
      new Cliente(
        25,
        "378204635",
        "Carla",
        "Nuñez",
        "Avenida 233",
        "carla@email.com",
        "contraseña",
        "Cliente",
        "555-553-348"
      ),
    ];
    CLIENTES3.forEach((u, i) => {
      assert.deepEqual(car_rental_online._clientes[3 + i]._usuario, null);
      car_rental_online.signup(u);
      assert.deepEqual(car_rental_online._clientes[3 + i], u);
      car_rental_online.signout(u);
      assert.deepEqual(car_rental_online._clientes[3 + i]._usuario, null);
    });
  });

  it("signoutEmpleado CarRentalOnline", function () {
    let EMPLEADOS3 = [
      new Empleado(
        4,
        "987654331",
        "Juan",
        "Romero",
        "Avenida 326",
        "juan1@email.com",
        "contraseña",
        "Empleado",
        "155-555-516"
      ),
      new Empleado(
        5,
        "978456332",
        "Susana",
        "Gomez",
        "Avenida 473",
        "susana@email.com",
        "contraseña",
        "Empleado",
        "255-555-527"
      ),
      new Empleado(
        6,
        "478264635",
        "Rebeca",
        "Martinez",
        "Avenida 902",
        "rebeca@email.com",
        "contraseña",
        "Empleado",
        "355-555-548"
      ),
    ];
    EMPLEADOS3.forEach((u, i) => {
      assert.deepEqual(car_rental_online._empleados[3 + i]._usuario, null);
      car_rental_online.signup(u);
      assert.deepEqual(car_rental_online._empleados[3 + i], u);
      car_rental_online.signout(u);
      assert.deepEqual(car_rental_online._empleados[3 + i]._usuario, null);
    });
  });

  //15
  it("reservar CarRentalOnline", function () {
    RESERVAS.forEach((u, i) => {
      car_rental_online.reservar(u._vehiculoId, u._inicio, u._fin);
    });
    assert.deepEqual(car_rental_online._reservas[0], Error);
    assert.deepEqual(car_rental_online._reservas[2], Error);
    assert.deepEqual(car_rental_online._reservas[3], Error);
    assert.strictEqual(
      RESERVAS[2]._numero,
      34556,
      "El número de reserva es correcto"
    );
    assert.deepStrictEqual(
      RESERVAS[2]._inicio,
      new Date("2023-9-25"),
      "La fecha de inicio es correcta"
    );
    assert.deepStrictEqual(
      RESERVAS[1]._fin,
      new Date("2023-9-30"),
      "La fecha de fin es correcta"
    );
    assert.strictEqual(
      RESERVAS[1]._clienteId,
      2,
      "El ID del cliente es correcto"
    );
    assert.strictEqual(
      RESERVAS[1]._vehiculoId,
      2,
      "El ID del vehículo es correcto"
    );
    assert.strictEqual(
      RESERVAS[1]._costo,
      600,
      "El costo de la reserva es correcto"
    );
  });

  //16
  it("disponibilidad CarRentalOnline", function () {

  });

  //17
  it("disponibles CarRentalOnline", function () {
    
  });

  //18
  it("perfil CarRentalOnline", function () {
    CLIENTES.forEach((u, i) => {
        assert.deepEqual(car_rental_online._clientes[i]._usuario, u);
      });
    EMPLEADOS.forEach((u, i) => {
        assert.deepEqual(car_rental_online._empleados[i]._usuario, u);
      });
  });

  //19
  it("cancelar CarRentalOnline", function () {
    RESERVAS.forEach((u, i) => {
        car_rental_online.cancelar(u._numero)
        assert.deepEqual(car_rental_online._reservas[i], Error);
      });
  });

  //20
  it("eliminarVehiculo CarRentalOnline", function () {
    car_rental_online.eliminarVehiculo(VEHICULOS[2]);
    assert.deepEqual(car_rental_online.vehiculoById(3), Error);
  });

  //21
  it("entregarVehiculo CarRentalOnline", function () {

  });

  //22
  it("devolverVehiculo CarRentalOnline", function () {

  });

  //23
  it("reservas CarRentalOnline", function () {
    let reservas = RESERVAS.map(s => car_rental_online.agregarReserva(s)); 
    reservas.forEach((s) => {assert.deepEqual(s, car_rental_online.reservas(s._clienteId));}); 
  });

  //24
  it("clienteByEmail CarRentalOnline", function () {
    let clientes = CLIENTES.map(s => car_rental_online.agregarCliente(s)); 
    clientes.forEach((s) => {assert.deepEqual(s, car_rental_online.clienteByEmail(s._email));}); 
  });

  //25
  it("empleadoByEmail CarRentalOnline", function () {
    let empleados = EMPLEADOS.map(s => car_rental_online.agregarEmpleado(s)); 
    empleados.forEach((s) => {assert.deepEqual(s, car_rental_online.empleadoByEmail(s._email));}); 
  });

  //26
  it("vehiculoByMatricula CarRentalOnline", function () {
    let vehiculos = VEHICULOS.map(s => car_rental_online.agregarVehiculo(s)); 
    vehiculos.forEach((s) => {assert.deepEqual(s, car_rental_online.vehiculoByMatricula(s._matricula));}); 
  });

  //27
  it("reservasByNumero CarRentalOnline", function () {
    let reservas = RESERVAS.map(s => car_rental_online.agregarVehiculo(s)); 
    reservas.forEach((s) => {assert.deepEqual(s, car_rental_online.reservas(s._numero));}); 
  });

  //28
  it("clienteById CarRentalOnline", function () {
    let clientes = CLIENTES.map(s => car_rental_online.agregarCliente(s)); 
    clientes.forEach((s) => {assert.deepEqual(s, car_rental_online.clienteByEmail(s._id));}); 
  });

  //29
  it("empleadoById CarRentalOnline", function () {
    let empleados = EMPLEADOS.map(s => car_rental_online.agregarEmpleado(s)); 
    empleados.forEach((s) => {assert.deepEqual(s, car_rental_online.empleadoByEmail(s._id));}); 
  });

  //30
  it("vehiculoById CarRentalOnline", function () {
    let vehiculos = VEHICULOS.map(s => car_rental_online.agregarVehiculo(s)); 
    vehiculos.forEach((s) => {assert.deepEqual(s, car_rental_online.vehiculoByMatricula(s._id));}); 
  });

  //31
  it("reservasById CarRentalOnline", function () {
    let reservas = RESERVAS.map(s => car_rental_online.agregarReserva(s)); 
    reservas.forEach((s) => {assert.deepEqual(s, car_rental_online.reservas(s._id));}); 
  });
});