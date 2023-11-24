class EmpleadoVehiculoPageView extends PageView {
    constructor() { super('empleado-vehiculo-page') }
   
    async refresh(url){
        await super.refresh(url);
      //await mensajes.refresh();
      document.getElementById('MatriculaId').innerHTML = this.controller.getMatricula();
      document.getElementById('MarcaId').innerHTML = this.controller.getMarca();
      document.getElementById('ModeloId').innerHTML = this.controller.getModelo();
      document.getElementById('TipoId').innerHTML = this.controller.getTipo();
      document.getElementById('EtiquetaId').innerHTML = this.controller.getEtiqueta();
      document.getElementById('DescripcionId').innerHTML = this.controller.getDescripcion();
      document.getElementById('CostoId').innerHTML = this.controller.getCosto();
      document.getElementById('RevisionId').innerHTML = this.controller.getDisponible();
    }
    setRevision(string){
        document.getElementById('RevisionId').innerHTML = string;
    }
    setEliminado(string){
        document.getElementById('EliminadoId').innerHTML = string;
    }
    
}