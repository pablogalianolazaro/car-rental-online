
class EmpleadoReservasPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new EmpleadoReservasPageView();
    }

    get reservasTotales(){return this.model.getReservas();}
    
    //para mostrar todas las reservas del sistema
    async refresh(url) { //este metodo es al que luego se llama en el html al pulsar el boton
      //esperamos a recargar la url
      await super.refresh(url);
      this.view.setReservas(this.reservasTotales);
    }

    //para el boton Salir de la pagina
    async salir(event) { //este metodo es al que luego se llama en el html al pulsar el boton
        event.preventDefault();
        this.model.signout();
        event.target.href = '/car-rental-online/invitado-home-page';
        router.route(event);
        }
 
    //para cuando haces click en el numero de la reserva
    async reservaNum(event) { //este metodo es al que luego se llama en el html al pulsar el boton
        //event.preventDefault();
        const numReserva=this.view.getNum();
        //buscamos la reserva correspondiente a ese numero
        let reserva = this.model.reservaByNumero(numReserva);
        //obtenemos su id
        let reservaId= reserva.id;
        //ya lo podemos pasar como parametro en la url
        event.target.href = '/car-rental-online/empleado-reserva-page?numero=${numReserva}&id=${reservaId}';
        event.target.href = '/car-rental-online/empleado-reserva-page?numero=12345';
        router.route(event);
        }
        
    }
