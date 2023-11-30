const assert = require("chai").assert;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const Vehiculo = require('../../src/model/vehiculo');
const Cliente = require('../../src/model/Cliente');
const Empleado = require('../../src/model/empleado');
const Reserva = require('../../src/model/reserva');
const Rol = require("../../src/model/rol");
const CarRentalOnline = require("../../src/model/CarRentalOnline");

const URL = 'http://localhost:3000/car-rental-online/api';

describe(URL, function () {

    const CLIENTES = [new Cliente(), new Cliente(), new Cliente()], 
    EMPLEADOS = [new Empleado(), new Empleado(), new Empleado()], 
    VEHICULOS = [new Vehiculo(1), new Vehiculo(2), new Vehiculo(3), new Vehiculo(4)], 
    RESERVAS = [new Reserva(1), new Reserva(2), new Reserva(3), new Reserva(4)];
    let clientes, empleados, vehiculos, reservas, car_rental_online;

    before(async function(){

        car_rental_online = new CarRentalOnline();

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

    });

    beforeEach(async function(){
        response = await chai.request(URL).put('/vehiculos').send(VEHICULOS);
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        vehiculos = response.body;
        vehiculos.forEach((u, iu) => {
            assert.exists(u._id)
            assert.equal(u, VEHICULOS[iu]);
        })

        response = await chai.request(URL).put('/clientes').send(CLIENTES);
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        clientes = response.body;
        clientes.forEach((c, ic) => {
            assert.exists(c._id)
            assert.deepEqual(c, CLIENTES[ic]);
        })

        response = await chai.request(URL).put('/empleados').send(EMPLEADOS);
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        empleados = response.body;
        empleados.forEach((e, ie) => {
            assert.exists(e._id)
            assert.deepEqual(e, CLIENTES[ie]);
        })

        response = await chai.request(URL).put('/reservas').send(RESERVAS);
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        reservas = response.body;
        reservas.forEach((r, ir) => {
            assert.exists(r._id)
            assert.deepEqual(r, CLIENTES[ir]);
        })
    })

    // VEHICULOS

    it(`GET ${URL}/vehiculos`, async function () {

        VEHICULOS.forEach((u) => {
            car_rental_online.agregarVehiculo(u);
        });

        let response = await chai.request(URL).get('/vehiculos').send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let resultado = response.body;
        assert.deepEqual(resultado, vehiculos);
    });

    it(`PUT ${URL}/vehiculos`, async function () {
        let VEHICULOS2 = [new Vehiculo(), new Vehiculo()];

        VEHICULOS2[0].matricula = "ABC124";
        VEHICULOS2[0].marca = "Toyota";
        VEHICULOS2[0].modelo = "Yaris";
        VEHICULOS2[0].etiqueta = "Sedán";
        VEHICULOS2[0].tipo = "Automóvil";
        VEHICULOS2[0].disponible = true;
        VEHICULOS2[0].eliminado = false;
        VEHICULOS2[0].costoDia = 30;
        VEHICULOS2[0].descripcion = "Vehículo cómodo y confiable";

        VEHICULOS2[1].matricula = "XYZ782";
        VEHICULOS2[1].marca = "BMW";
        VEHICULOS2[1].modelo = "X2";
        VEHICULOS2[1].etiqueta = "Suv";
        VEHICULOS2[1].tipo = "Automóvil";
        VEHICULOS2[1].disponible = true;
        VEHICULOS2[1].eliminado = false;
        VEHICULOS2[1].costoDia = 35;
        VEHICULOS2[1].descripcion = "Vehículo económico y eficiente";

        let response = await chai.request(URL).put(`/vehiculos`).send(VEHICULOS2);
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let resultado = response.body;
        assert.equal(resultado.length, VEHICULOS2.length);

        resultado.forEach((v, iv) => {
            assert.deepEqual(v, VEHICULOS2[iv]);
        })

        vehiculos = resultado;
        response = await chai.request(URL).get(`/vehiculos`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        resultado = response.body;
        assert.deepEqual(resultado, vehiculos);
    });

    // POST

    it(`DELETE ${URL}/vehiculos/:vid`, async function () {
        let vid = 1;
        let response = await chai.request(URL).delete(`/vehiculos/${vid}`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let vehiculos = response.body;
        assert.deepEqual(vehiculos, VEHICULOS[0]);
        response = await chai.request(URL).get(`/vehiculos`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        vehiculos = response.body;
        assert.deepEqual(vehiculos, [VEHICULOS[1], VEHICULOS[2]]);
    });

    // CLIENTES

    it(`GET ${URL}/clientes`, async function () {
        let response = await chai.request(URL).get('/clientes').send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let resultado = response.body;
        assert.deepEqual(resultado, clientes);
    });

    it(`DELETE ${URL}/clientes/:cid`, async function () {
        let cid = 1;
        let response = await chai.request(URL).delete(`/clientes/${cid}`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let clientes = response.body;
        assert.deepEqual(clientes, CLIENTES[0]);
        response = await chai.request(URL).get(`/clientes`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        clientes = response.body;
        assert.deepEqual(clientes, [CLIENTES[1], CLIENTES[2]]);
        });

    // EMPLEADOS

    it(`GET ${URL}/empleados`, async function () {
        let response = await chai.request(URL).get('/empleados').send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let resultado = response.body;
        assert.deepEqual(resultado, empleados);
    });

    it(`DELETE ${URL}/empleados/:eid`, async function () {
        let eid = 1;
        let response = await chai.request(URL).delete(`/empleados/${eid}`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let empleados = response.body;
        assert.deepEqual(empleados, EMPLEADOS[0]);
        response = await chai.request(URL).get(`/empleados`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        empleados = response.body;
        assert.deepEqual(clientes, [EMPLEADOS[1], EMPLEADOS[2]]);
        });

    // RESERVAS

    it(`GET ${URL}/reservas`, async function () {
        let response = await chai.request(URL).get('/reservas').send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let resultado = response.body;
        assert.deepEqual(resultado, reservas);
    });

    it(`DELETE ${URL}/reservas?numero=`, async function () {
        let numero = 1;
        let response = await chai.request(URL).delete(`/reservas?numero=${numero}`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        let reservas = response.body;
        assert.deepEqual(reservas, RESERVAS[0]);
        response = await chai.request(URL).get(`/reservas`).send();
        assert.equal(response.status, 200);
        assert.isTrue(response.ok);
        reservas = response.body;
        assert.deepEqual(reservas, [RESERVAS[1], RESERVAS[2]]);
        });

})