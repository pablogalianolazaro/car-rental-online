describe('Cliente', function() {
    it('Constructor debería inicializar las propiedades', () => {
      const cliente = new Cliente(0);
      expect(cliente._id).to.equal(0);
      expect(cliente._rol).to.equal(Rol.Cliente);
    });
   
    it('Setter y Getter para DNI', () => {
      const cliente = new Cliente(1);
      cliente.dni = '12345678';
      expect(cliente.dni).to.equal('12345678');
    });
  
    it('Setter y Getter para Nombres', () => {
      const cliente = new Cliente(3);
      cliente.nombres = 'Ana';
      expect(cliente.nombres).to.equal('Ana');
    });
  
    it('Setter y Getter para Apellidos', () => {
      const cliente = new Cliente(4);
      cliente.apellidos = 'González';
      expect(cliente.apellidos).to.equal('González');
    });
  
    it('Setter y Getter para Dirección', () => {
      const cliente = new Cliente(5);
      cliente.direccion = 'Calle 456';
      expect(cliente.direccion).to.equal('Calle 456');
    });
  
    it('Setter y Getter para Email', () => {
      const cliente = new Cliente(6);
      cliente.email = 'ana@example.com';
      expect(cliente.email).to.equal('ana@example.com');
    });
  
    it('Setter y Getter para Password', () => {
      const cliente = new Cliente(7);
      cliente.password = 'pass123' ;
      expect(cliente.password).to.equal('pass123');
    });
  
    it('Setter y Getter para Teléfono', () => {
      const cliente = new Cliente(8);
      cliente.telefono = '987654321';
      expect(cliente.telefono).to.equal('987654321');
    });
  
    it('Rol debería ser "Cliente"', () => {
      const cliente = new Cliente(9);
      expect(cliente.rol).to.equal(Rol.Cliente);
    });

    //pruebas practica2.2 cliente-perfil-page punto 9
    it('setPerfil debería actualizar correctamente las propiedades', () => {
      // Crear una instancia de Cliente con un perfil inicial
      const cliente = new Cliente(1);
      cliente.dni = '11111111'; // DNI diferente al valor inicial

      const nuevoPerfil = {
          dni: '12345678',
          nombres: 'Ana',
          apellidos: 'González',
          direccion: 'Calle 456',
          email: 'ana@example.com',
          password: 'pass123',
          telefono: '987654321',
          rol: Rol.Cliente,
      };

      // Verificar que las propiedades iniciales sean diferentes
      expect(cliente.dni).to.not.equal(nuevoPerfil.dni);

      // Aplicar el método setPerfil
      cliente.setPerfil(nuevoPerfil);

      // Verificar que las propiedades se hayan actualizado correctamente
      expect(cliente.dni).to.equal(nuevoPerfil.dni);
      expect(cliente.nombres).to.equal(nuevoPerfil.nombres);
      expect(cliente.apellidos).to.equal(nuevoPerfil.apellidos);
      expect(cliente.direccion).to.equal(nuevoPerfil.direccion);
      expect(cliente.email).to.equal(nuevoPerfil.email);
      expect(cliente.password).to.equal(nuevoPerfil.password);
      expect(cliente.telefono).to.equal(nuevoPerfil.telefono);
      expect(cliente.rol).to.equal(nuevoPerfil.rol);
    });

});