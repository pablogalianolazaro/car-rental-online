class EmpleadoAgregarVehiculoPageView extends PageView {
    constructor() { super('empleado-agregar-vehiculo-page'); }

    get form() { return document.getElementById('myButton'); }
    get vehiculoMatriculaInput() { return document.getElementById('matricula'); }
    get vehiculoMatriculaInputValue() { return this.vehiculoMatriculaInput.value; }
    get vehiculoMarcaInput() { return document.getElementById('marca'); }
    get vehiculoMarcaInputValue() { return this.vehiculoMarcaInput.value; }
    get vehiculoModeloInput() { return document.getElementById('Modelo'); }
    get vehiculoModeloInputValue() { return this.vehiculoModeloInput.value; }
    get vehiculoTipoInput() { return document.getElementById('tipo'); }
    get vehiculoTipoInputValue() { return this.vehiculoTipoInput.value; }
    get vehiculoEtiquetaInput() { return document.getElementById('etiqueta'); }
    get vehiculoEtiquetaInputValue() { return this.vehiculoEtiquetaInput.value; }
    get vehiculoDescripciónInput() { return document.getElementById('Descripcion'); }
    get vehiculoDescripciónInputValue() { return this.vehiculoDescripciónInput.value; }
    get vehiculoCostoInput() { return document.getElementById('Costo'); }
    get vehiculoCostoInputValue() { return this.vehiculoCostoInput.value; }

}