class EmpleadoVehiculoPageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new EmpleadoVehiculoPageView();
  }

  getMatricula() {
    const id = this.getParam("id");
    const vehiculo = this.model.vehiculoById(id);
    return vehiculo.matricula;
  }
  getModelo() {
    const id = this.getParam("id");
    const vehiculo = this.model.vehiculoById(id);
    return vehiculo.modelo;
  }
  getMarca() {
    const id = this.getParam("id");
    const vehiculo = this.model.vehiculoById(id);
    return vehiculo.marca;
  }


  getEtiqueta() {
    const id = this.getParam("id");
    const vehiculo = this.model.vehiculoById(id);
    return vehiculo.etiqueta;
  }

  getCosto() {
    const id = this.getParam("id");
    const vehiculo = this.model.vehiculoById(id);
    return vehiculo.costoDia;
  }

  getTipo() {
    const id = this.getParam("id");
    const vehiculo = this.model.vehiculoById(id);
    return vehiculo.tipo;
  }
  getDescripcion() {
    const id = this.getParam("id");
    const vehiculo = this.model.vehiculoById(id);
    return vehiculo.descripcion;
  }

  getDisponible() {
    let id = this.getParam("id");
    let vehiculo = this.model.vehiculoById(id);
    return vehiculo.disponible;
  }
 
  //para el boton Salir de la pagina
  async salir(event) {
    //este metodo es al que luego se llama en el html al pulsar el boton
    event.preventDefault();
    this.model.signout();
    event.target.href = "car-rental-online/invitado-home-page";
     router.route(event);
  }

  //para el boton revisar de la pagina
  async revisar(event) {
    event.preventDefault();
    //este metodo es al que luego se llama en el html al pulsar el boton
    const id = this.getParam("id");
    const vehiculo = this.model.vehiculoById(id);
    if(this.model.revisionVehiculo(vehiculo)==True){
      const string="Si";
      this.view.setRevision(string);
    }else{
      const string="No";
      this.view.setRevision(string);
    }
  }

  //para el boton eliminar de la pagina
  async eliminar(event) {
    event.preventDefault();
    //este metodo es al que luego se llama en el html al pulsar el boton
    const id = this.getParam("id");
    const vehiculo= this.model.vehiculoById(id);
    let borrar = this.model.eliminarVehiculo(id);
    if (borrar == Error) {
      const string="No";
      this.view.setEliminado(string);
    } else {
      vehiculo.eliminado = true;
      const string="Si";
      this.view.setEliminado(string);
    }
    router.route(event);
  }
}
