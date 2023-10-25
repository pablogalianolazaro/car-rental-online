const assert = require("chai").assert;
const { expect } = require("chai");
const CarRentalOnline = require("../../src/model/CarRentalOnline");

describe("CarRentalOnline", function () {
    const VEHICULOS = [
        new Vehiculo(1, 'ABC123', 'Toyota', 'Camry', 'Sedán', 'Automóvil', true, false, 50, 'Vehículo cómodo y confiable'),
        new Vehiculo(2, 'XYZ789', 'Honda', 'Civic', 'Sedán', 'Automóvil', true, false, 45, 'Vehículo económico y eficiente'),
        new Vehiculo(3, 'LMN456', 'Ford', 'Focus', 'Sedán', 'Automóvil', true, false, 55, 'Vehículo versátil y moderno'),
    ];
    const RESERVAS = [
        new Reserva(1, new Date('2023-10-25'), new Date('2023-10-30'), 500, '12345', 'LugarA', 'LugarB', new Date(), 1, 1),
        new Reserva(2, new Date('2023-9-25'), new Date('2023-9-30'), 600, '34556', 'Lugar1', 'Lugar2', new Date(), 2, 2),
        new Reserva(3, new Date('2023-8-25'), new Date('2023-8-30'), 700, '78922', 'Lugar3', 'Lugar4', new Date(), 3, 3)];
    const CLIENTES = [
        new Cliente(1, '123456789', 'Juan', 'Pérez', 'Calle 123', 'juan@email.com', 'contraseña', 'Cliente', '555-555-555'),
        new Cliente(2, '967854321', 'Pepe', 'López', 'Calle 456', 'pepe@email.com', 'contraseña', 'Cliente', '666-666-666'),
        new Cliente(3, '345612789', 'Marta', 'Martínez', 'Calle 789', 'marta@email.com', 'contraseña', 'Cliente', '777-777-777')];

    const EMPLEADOS = [
        new Empleado(1, '987654321', 'María', 'González', 'Avenida 456', 'maria@email.com', 'contraseña', 'Empleado', '555-555-556'),
        new Empleado(2, '978456312', 'David', 'Sánchez', 'Avenida 123', 'david@email.com', 'contraseña', 'Empleado', '555-555-557'),
        new Empleado(3, '478264645', 'Pepa', 'Muñoz', 'Avenida 789', 'pepa@email.com', 'contraseña', 'Empleado', '555-555-558')];

    let car_rental_online;

    beforeEach(function () { car_rental_online = new CarRentalOnline(); });

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
        })
        assert.deepEqual(car_rental_online.agregarCliente(CLIENTES[1]), Error);
        assert.deepEqual(car_rental_online.agregarCliente(EMPLEADOS[1]), Error);
    });

    it("agregarEmpleado CarRentalOnline", function () {
        EMPLEADOS.forEach((u, i) => {
            assert.deepEqual(car_rental_online._empleados[i], u);
        })
        assert.deepEqual(car_rental_online.agregarEmpleado(EMPLEADOS[1]), Error);
        assert.deepEqual(car_rental_online.agregarEmpleado(CLIENTES[1]), Error);
    });

    it("agregarVehiculo CarRentalOnline", function () {
        VEHICULOS.forEach((u, i) => {
            assert.deepEqual(car_rental_online._vehiculos[i], u);
        })
        assert.deepEqual(car_rental_online.agregarVehiculo(VEHICULO[1]), Error);
    });

    it("signinCliente CarRentalOnline", function () {
        CLIENTES.forEach((u,i) =>{
            car_rental_online.signin(u._email, u._password, u._rol);
            assert.deepEqual(car_rental_online.usuario, u);
        });
        assert.deepEqual(car_rental_online.signin(EMPLEADOS[1]._email, CLIENTES[1]._password, CLIENTES[1]._rol), Error);
        assert.deepEqual(car_rental_online.signin(CLIENTES[1]._email, CLIENTES[2]._password, CLIENTES[1]._rol), Error);
        assert.deepEqual(car_rental_online.signin(CLIENTES[2]._email, CLIENTES[2]._password, EMPLEADOS[1]._rol), Error);
    });

    it("signinEmpleado CarRentalOnline", function () {
        EMPLEADOS.forEach((u,i) =>{
            car_rental_online.signin(u._email, u._password, u._rol);
            assert.deepEqual(car_rental_online.usuario, u);
        });
        assert.deepEqual(car_rental_online.signin(CLIENTES[1]._email, EMPLEADOS[1]._password, EMPLEADOS[1]._rol), Error);
        assert.deepEqual(car_rental_online.signin(EMPLEADOS[1]._email, EMPLEADOS[2]._password, EMPLEADOS[1]._rol), Error);
        assert.deepEqual(car_rental_online.signin(EMPLEADOS[2]._email, EMPLEADOS[2]._password, CLIENTES[1]._rol), Error);
    });

    //12
    it("signup CarRentalOnline", function () {
        let USUARIOS2 = [
            
        ]
        let EMPLEADOS2 = [

        ]

        assert.deepEqual(car_rental_online._clientes[0], Error);
        assert.deepEqual(car_rental_online._clientes[1], Error);
        assert.deepEqual(car_rental_online._clientes[2], Error);

        USUARIOS2.forEach((u,i) =>{
            car_rental_online.signup(u);
            assert.deepEqual(car_rental_online._clientes[3+i], u);
        });

        assert.deepEqual(car_rental_online._empleados[0], Error);
        assert.deepEqual(car_rental_online._empleados[1], Error);
        assert.deepEqual(car_rental_online._empleados[2], Error);


        EMPLEADOS2.forEach((u,i) =>{
            car_rental_online.signup(u);
            assert.deepEqual(car_rental_online._empleados[3+i], u);
        });
    });

    //13
    it("signoutCliente CarRentalOnline", function () {
        CLIENTES[1].signout;
        assert.deepEqual(car_rental_online.usuario,null)
        
        
    });

    //14
    it("signoutEmpleado CarRentalOnline", function () {
        
        // Verificar que al inicio no hay usuario logueado
        assert.strictEqual(EMPLEADOS[1], null, 'Al inicio no hay usuario logueado');
        // Verificar que el empleado ha ingresado
        car_rental_online.signup(EMPLEADOS[1]);
        assert.strictEqual(EMPLEADOS[1], _empleados[_empleados.length-1], 'El empleado ha ingresado');
        //Verificar que ha hecho sign out
        car_rental_online.signout();
        assert.strictEqual(EMPLEADOS[1], null, 'El cliente ha salido');
        
    });

    //15
    it("reservar CarRentalOnline", function () {
    car_rental_online.signout(CLIENTES[1]);
    assert.throws(() => {
      car_rental_online.reservar(RESERVAS[1]);
    }, Error, 'No hay un cliente que ha ingresado en el sistema');

    car_rental_online.signin(CLIENTES[1]);
    car_rental_online.reservar(RESERVAS[2]);
    assert.throws(() => {
      car_rental_online.reservar(RESERVAS[2]);
    }, Error, 'Existe otra reserva en conflicto con el mismo vehículo');
    assert.throws(() => {
        car_rental_online.reservar(5, new Date('2023-10-25'), new Date('2023-10-30'), 500, '12345', 'LugarA', 'LugarB', new Date(), 1, 9);
      }, Error, 'El vehículo no existe');

      assert.strictEqual(RESERVAS[2]._numero, 34556, 'El número de reserva es correcto');
      assert.deepStrictEqual(RESERVAS[2]._inicio, new Date('2023-9-25'), 'La fecha de inicio es correcta');
      assert.deepStrictEqual(RESERVAS[2]._fin, new Date('2023-9-30'), 'La fecha de fin es correcta');
      assert.strictEqual(RESERVAS[2]._clienteId, 2, 'El ID del cliente es correcto');
      assert.strictEqual(RESERVAS[2]._vehiculoId, 2, 'El ID del vehículo es correcto');
      assert.strictEqual(RESERVAS[2]._costo, 600, 'El costo de la reserva es correcto');
    });

    //16
    it("disponibilidad CarRentalOnline", function(){

    });

    //17
    it("disponibles CarRentalOnline", function(){

    });

    //18
    it("perfil CarRentalOnline", function(){

    });

    //19
    it("cancelar CarRentalOnline", function(){

    });

    //20
    it("eliminarVehiculo CarRentalOnline", function(){

    });

    //21
    it("entregarVehiculo CarRentalOnline", function(){

    });

    //22
    it("devolverVehiculo CarRentalOnline", function(){

    });

    //23
    it("reservasByClienteId CarRentalOnline", function(){

    });

    //24
    it("clienteByEmail CarRentalOnline", function(){
        let clientes = CLIENTES.map(u => car_rental_online.agregarCliente(u._nombres))
        assert.deepEqual(car_rental_online.clienteByEmail(CLIENTES[0]), 'juan@email.com');
        assert.deepEqual(car_rental_online.clienteByEmail(cliente), 'No existe un cliente con ese email.')
    });

    //25
    it("empleadoByEmail CarRentalOnline", function(){
        assert.deepEqual(car_rental_online.empleadoByEmail(EMPLEADOS[0]), 'maria@email.com');
        assert.deepEqual(car_rental_online.empleadoByEmail(new Empleado(1, '123456789', 'Juan', 'Pérez', 'Calle 123', 'pablo@email.com', 'contraseña', 'Cliente', '555-555-555')), 'No existe un empleado con ese email.')
    });

    //26
    it("vehiculoByMatricula CarRentalOnline", function(){
        assert.deepEqual(car_rental_online.vehiculoPorMatricula(VEHICULOS[0]), 'ABC123');
        assert.deepEqual(car_rental_online.vehiculoPorMatricula(new Vehiculo(1, 'ABD123', 'Toyota', 'Camry', 'Sedán', 'Automóvil', true, false, 50, 'Vehículo cómodo y confiable')), 'No existe un vehiculo con esa matricula.')
    });

    //27
    it("reservasByNumero CarRentalOnline", function(){
        assert.deepEqual(car_rental_online.reservaByNumero(RESERVAS[0]), );
        assert.deepEqual(car_rental_online.reservaByNumero(new Reserva(1, new Date('2023-10-25'), new Date('2023-10-30'), 500, '12345', 'LugarA', 'LugarB', new Date(), 1, 1)), 'No existe una reserva con ese numero.')
    });

    //28
    it("clienteById CarRentalOnline", function(){
        assert.deepEqual(car_rental_online.clienteById(CLIENTES[0]), 1);
        assert.deepEqual(car_rental_online.clienteById(new Cliente(50, '123456789', 'Juan', 'Pérez', 'Calle 123', 'pablo@email.com', 'contraseña', 'Cliente', '555-555-555')), 'No existe un cliente con ese id.')
    });

    //29
    it("empleadoById CarRentalOnline", function(){
        assert.deepEqual(car_rental_online.empleadoById(EMPLEADOS[0]), 1);
        assert.deepEqual(car_rental_online.empleadoById(new Empleado(50, '123456789', 'Juan', 'Pérez', 'Calle 123', 'pablo@email.com', 'contraseña', 'Cliente', '555-555-555')), 'No existe un empleado con ese id.')
    });

    //30
    it("vehiculoById CarRentalOnline", function(){
        assert.deepEqual(car_rental_online.vehiculoById(VEHICULOS[0]), 'ABC123');
        assert.deepEqual(car_rental_online.vehiculoById(new Vehiculo(1, 'ABD123', 'Toyota', 'Camry', 'Sedán', 'Automóvil', true, false, 50, 'Vehículo cómodo y confiable')), 'No existe un vehiculo con ese id.')
    });

    //31
    it("vehiculoById CarRentalOnline", function(){
        assert.deepEqual(car_rental_online.reservaByNumero(RESERVAS[0]), 1);
        assert.deepEqual(car_rental_online.reservaByNumero(new Reserva(1, new Date('2023-10-25'), new Date('2023-10-30'), 500, '12345', 'LugarA', 'LugarB', new Date(), 1, 50)), 'No existe una reserva que contenga el ID del vehículo.')
    });
});