const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CarRentalOnline = require('./src/model/CarRentalOnline');
let model = new CarRentalOnline()

// VEHICULOS

app.get('/car-rental-online/api/vehiculos', (req, res) => {
    res.status(200).json(model.vehiculos);
});

app.put('/car-rental-online/api/vehiculos', (req, res) => {
    let vehiculos = req.body;
    model.vehiculos = vehiculos.map(u => {
        let vehiculo = model.agregarVehiculo(u);
        Object.assign(vehiculo, u)
        return vehiculo;
    });
    res.status(200).json(model.vehiculos);
});

app.post('/car-rental-online/api/vehiculos', (req, res) => {
    let vehiculo = req.body;
    vehiculo = model.agregarVehiculo(vehiculo);
    res.status(200).json(usuario);
});

app.delete('/car-rental-online/api/vehiculos/:vid', (req, res) => {
    let vid = req.params.vid;
    let vehiculo = model.vehiculoById(vid);
    if (!vehiculo)
    res.status(404).json({ message: `Vehiculo con id ${vid} no
    encontrado` });
    else {
    model.eliminarVehiculo(vid);
    res.status(200).json(vehiculo);
    }
});

app.get('/car-rental-online/api/vehículos/:vid/disponibilidad?inicio=&fin=', (req, res) => {
    let vid = req.params.vid
    let inicio = req.params.inicio
    let fin = req.params.fin
    let vehiculo = model.disponibilidad(vid, inicio, fin);
    if (!vehiculo) {
        let message = `Vehiculo no disponible`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(vehiculo);
});

app.get('/car-rental-online/api/vehiculos? marca=& modelo=& tipo=& etiqueta=& costoDia=& inicio=& fin=', (req, res) => {
    let marca = req.params.marca
    let modelo = req.params.modelo
    let tipo = req.params.tipo
    let etiqueta = req.params.etiqueta
    let costoDia = req.params.costoDia
    let inicio = req.params.inicio
    let fin = req.params.fin
    let vehiculo = model.disponibles(marca, modelo, tipo, etiqueta, costoDia, inicio, fin);
    if (!vehiculo) {
        let message = `Vehiculo no disponible`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(vehiculo);
});

app.post('/car-rental-online/api/vehiculos/:vid/revisar', (req, res) => {
    let vid = req.params.vid
    let vehiculo = model.revisarVehiculo(vid);
    if (!vehiculo) {
        let message = `Vehiculo con id ${vid} no encontrado`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(cliente);
});

app.get('/car-rental-online/api/vehiculos?matricula=', (req, res) => {
    let matricula = req.params.matricula
    let vehiculo = model.vehiculoById(matricula);
    if (!vehiculo) {
        let message = `Vehiculo con matricula ${matricula} no encontrado`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(vehiculo);
});

// CLIENTE

app.get('/car-rental-online/api/clientes', (req, res) => {
    res.status(200).json(model.clientes);
});

app.put('/car-rental-online/api/clientes', (req, res) => {
    let clientes = req.body;
    model.clientes = clientes.map(u => {
        let cliente = model.agregarCliente(u);
        Object.assign(cliente, u)
        return cliente;
    });
    res.status(200).json(model.usuarios);
});

app.delete('/car-rental-online/api/clientes/:cid', (req, res) => {
    let cid = req.params.cid;
    let cliente = model.clienteById(cid);
    if (!cliente)
    res.status(404).json({ message: `Cliente con id ${cid} no
    encontrado` });
    else {
    let eliminado = this._clientes.findIndex(cliente => cliente.id == cid);
    this._clientes.splice(eliminado, 1);
    res.status(200).json(cliente);
    }

});

app.get('/car-rental-online/api/clientes/:cid/reservas', (req, res) => {
    let cid = req.params.cid
    let reserva = model.reservasByClienteId(cid);
    if (!reserva) {
        let message = `Reserva del cliente con id ${cid} no encontrado`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(reserva);
});

app.get('/car-rental-online/api/clientes?email=', (req, res) => {
    let email = req.params.email
    let cliente = model.clienteByEmail(email);
    if (!cliente) {
        let message = `Empleado con email ${email} no encontrado`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(cliente);
});

app.get('/car-rental-online/api/clientes/:cid', (req, res) => {
    let cid = req.params.cid
    let cliente = model.clienteById(cid);
    if (!cliente) {
        let message = `Cliente con id ${cid} no encontrado`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(cliente);
});

// EMPLEADO

app.get('/car-rental-online/api/empleados', (req, res) => {
    res.status(200).json(model.empleados);
});

app.put('/car-rental-online/api/empleados', (req, res) => {
    let empleados = req.body;
    model.empleados = empleados.map(u => {
        let empleado = model.agregarEmpleado(u);
        Object.assign(empleado, u)
        return empleado;
    });
    res.status(200).json(model.empleados);
});

app.delete('/car-rental-online/api/empleados/:eid', (req, res) => {
    let eid = req.params.eid;
    let empleado = model.empleadoById(eid);
    if (!empleado)
    res.status(404).json({ message: `Empleado con id ${eid} no
    encontrado` });
    else {
    let eliminado = this._empleados.findIndex(empleado => empleado.id == eid);
    this._empleados.splice(eliminado, 1);
    res.status(200).json(empleado);
    }
});

app.get('/car-rental-online/api/empleados?email=', (req, res) => {
    let email = req.params.email
    let empleado = model.empleadoByEmail(email);
    if (!empleado) {
        let message = `Empleado con email ${email} no encontrado`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(empleado);
});

app.get('/car-rental-online/api/empleados/:eid', (req, res) => {
    let eid = req.params.eid
    let empleado = model.empleadoById(eid);
    if (!empleado) {
        let message = `Empleado con id ${eid} no encontrado`;
        console.error(message);
        res.status(404).json({ message });
    }
    else res.status(200).json(empleado);
});

// USUARIO

app.post('/car-rental-online/api/signin', (req, res) => {
    
});

app.post('/car-rental-online/api/signup', (req, res) => {

});

app.put('/car-rental-online/api/usuarios/:uid', (req, res) => {

});

// RESERVA

app.post('/car-rental-online/api/reservas', (req, res) => {
    res.status(200).json(model._reservas);
});

app.get('/car-rental-online/api/reservas', (req, res) => {
    res.status(200).json(model._reservas);
});

app.put('/car-rental-online/api/reservas', (req, res) => {
    let reservas = req.body;
    reservas.forEach((u, i) => {
        model._reservas[i+model._reservas.length] = u;
    });
    res.status(200).json(model._reservas);
});

app.delete('/car-rental-online/api/reservas?numero=', (req, res) => {
    let numero = req.params.numero;
    let reserva = model.reservaByNumero(numero);
    if (!reserva)
    res.status(404).json({ message: `Reserva con numero ${numero} no
    encontrado` });
    else {
    model.cancelar(numero);
    res.status(200).json(reserva);
    }
});

app.post('/car-rental-online/api/reservas/entregar?numero=', (req, res) => {

});

app.post('/car-rental-online/api/reservas/devolver?numero=', (req, res) => {

});

app.get('/car-rental-online/api/reservas?clienteId=', (req, res) => {
    let cid = req.params.clienteId
    let reserva = model.reservas(cid);
    if (!reserva) res.status(404).json({
        message: `Reserva para cliente con id ${cid} no encontrada`
    });
    else res.status(200).json(reserva);
});

app.get('/car-rental-online/api/reservas?numero=', (req, res) => {
    let numero = req.params.numero
    let reserva = model.reservaByNumero(numero);
    if (!reserva) res.status(404).json({
        message: `Reserva con número ${numero} no encontrada`
    });
    else res.status(200).json(reserva);
});

app.get('/car-rental-online/api/reservas/:rid', (req, res) => {
    let rid = req.params.rid
    let reserva = model.reservaById(rid);
    if (!reserva) res.status(404).json({
        message: `Reserva con id ${rid} no encontrada`
    });
    else res.status(200).json(reserva);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Ejecutando Servidor en el puerto ' + PORT);
})