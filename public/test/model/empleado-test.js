describe('Empleado', function() {
    it('Constructor debería inicializar las propiedades', () => {
      const empleado = new Empleado(0);
      expect(empleado._id).to.equal(0);
      expect(empleado._rol).to.equal(Rol.Empleado);
    });
   
    it('Setter y Getter para DNI', () => {
      const empleado = new Empleado(1);
      empleado.dni = '12345678';
      expect(empleado.dni).to.equal('12345678');
    });
  
    it('Setter y Getter para Nombres', () => {
      const empleado = new Empleado(3);
      empleado.nombres = 'Ana';
      expect(empleado.nombres).to.equal('Ana');
    });
  
    it('Setter y Getter para Apellidos', () => {
      const empleado = new Empleado(4);
      empleado.apellidos = 'González';
      expect(empleado.apellidos).to.equal('González');
    });
  
    it('Setter y Getter para Dirección', () => {
      const empleado = new Empleado(5);
      empleado.direccion = 'Calle 456';
      expect(empleado.direccion).to.equal('Calle 456');
    });
  
    it('Setter y Getter para Email', () => {
      const empleado = new Empleado(6);
      empleado.email = 'ana@example.com';
      expect(empleado.email).to.equal('ana@example.com');
    });
  
    it('Setter y Getter para Password', () => {
      const empleado = new Empleado(7);
      empleado.password = 'pass123' ;
      expect(empleado.password).to.equal('pass123');
    });
  
    it('Setter y Getter para Teléfono', () => {
      const empleado = new Empleado(8);
      empleado.telefono = '987654321';
      expect(empleado.telefono).to.equal('987654321');
    });
  
    it('Rol debería ser "Empleado"', () => {
      const empleado = new Empleado(9);
      expect(empleado.rol).to.equal(Rol.Empleado);
    });
    
  });

