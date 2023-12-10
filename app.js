const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CarRentalOnline = require('./src/model/CarRentalOnline');
let model = new CarRentalOnline()

// VEHICULOS
//GET getVehiculos()
app.get('/car-rental-online/api/vehiculos', (req, res) => {
    res.status(200).json(model.vehiculos);
});

//PUT setVehiculos(vehiculos)
app.put('/car-rental-online/api/vehiculos', (req, res) => {
    let vehiculos = req.body;
    model.vehiculos = vehiculos.map(u => {
        let vehiculo = model.agregarVehiculo(u);
        Object.assign(vehiculo, u)
        return vehiculo;
    });
    res.status(200).json(model.vehiculos);
});

//POST agregarVehiculo(vehiculo)
app.post('/car-rental-online/api/vehiculos', (req, res) => {
    let vehiculo = req.body;
    vehiculo = model.agregarVehiculo(vehiculo);
    res.status(200).json(usuario);
});

//DELETE eliminarVehiculo(vid)
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

//GET disponibilidad(vid, inicio, fin)
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

//GET disponibles(marca, modelo, tipo, etiqueta, costoDia, inicio, fin)
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

//POST revisarVehiculo(vid)
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

//GET vehiculoByMatricula (matricula)
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
//GET getClientes()
app.get('/car-rental-online/api/clientes', (req, res) => {
    res.status(200).json(model.clientes);
});

//PUT setClientes(clientes)
app.put('/car-rental-online/api/clientes', (req, res) => {
    let clientes = req.body;
    model.clientes = clientes.map(u => {
        let cliente = model.agregarCliente(u);
        Object.assign(cliente, u)
        return cliente;
    });
    res.status(200).json(model.usuarios);
});

//DELETE eliminarCliente(cid)
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

//GET reservasByClienteId(cid)
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

//GET clienteByEmail(email)
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

//GET clienteById(cid)
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
//GET getEmpleados()
app.get('/car-rental-online/api/empleados', (req, res) => {
    res.status(200).json(model.empleados);
});

//PUT setEmpleados(empleados)
app.put('/car-rental-online/api/empleados', (req, res) => {
    let empleados = req.body;
    model.empleados = empleados.map(u => {
        let empleado = model.agregarEmpleado(u);
        Object.assign(empleado, u)
        return empleado;
    });
    res.status(200).json(model.empleados);
});

//DELETE eliminarEmpleado(eid)
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

//GET empleadoByEmail(email)
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

//GET empleadoById(eid)
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
//POST signin(data)
app.post('/car-rental-online/api/signin', (req, res) => {
    
});

//POST signup(usuario)
app.post('/car-rental-online/api/signup', (req, res) => {

});

//PUT setPerfil(usuario)
app.put('/car-rental-online/api/usuarios/:uid', (req, res) => {

});

// RESERVA
//POST reservar(reserva)
app.post('/car-rental-online/api/reservas', (req, res) => {
    res.status(200).json(model._reservas);
});

//GET getReservas()
app.get('/car-rental-online/api/reservas', (req, res) => {
    res.status(200).json(model._reservas);
});

//PUT setReservas(reservas)
app.put('/car-rental-online/api/reservas', (req, res) => {
    let reservas = req.body;
    reservas.forEach((u, i) => {
        model._reservas[i+model._reservas.length] = u;
    });
    res.status(200).json(model._reservas);
});

//DELETE cancelar(numero)
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

//POST entregarVehiculo(numero)
app.post('/car-rental-online/api/reservas/entregar?numero=', (req, res) => {

});

//POST devolverVehiculo(numero)
app.post('/car-rental-online/api/reservas/devolver?numero=', (req, res) => {

});

//GET reservasByClienteId(clienteId)
app.get('/car-rental-online/api/reservas?clienteId=', (req, res) => {
    let cid = req.params.clienteId
    let reserva = model.reservas(cid);
    if (!reserva) res.status(404).json({
        message: `Reserva para cliente con id ${cid} no encontrada`
    });
    else res.status(200).json(reserva);
});

//GET reservaByNumero(numero)
app.get('/car-rental-online/api/reservas?numero=', (req, res) => {
    let numero = req.params.numero
    let reserva = model.reservaByNumero(numero);
    if (!reserva) res.status(404).json({
        message: `Reserva con número ${numero} no encontrada`
    });
    else res.status(200).json(reserva);
});

//GET reservaById(rid)
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