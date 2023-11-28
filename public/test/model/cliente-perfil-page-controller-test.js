describe('Cliente', function() {
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


