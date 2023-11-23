const assert = require('chai').assert;
const ClientePerfilPageController = require('../../src/controladores/cliente-perfil-page-controller');
const Rol = require('../../src/modelos/Rol');
const Cliente = require('../../src/modelos/cliente');

describe('ClientePerfilPageController', () => {
    it('debería actualizar el perfil del cliente correctamente', async () => {
        // Configuración de prueba
        const perfilInicial = {
            _id: 1,
            _rol: Rol.Cliente,
            _dni: '12345678',
            _nombres: 'Ana',
            _apellidos: 'González',
            _email: 'ana@example.com',
            _telefono: '987654321',
            _direccion: 'Calle 456',
            _password: 'pass123',
        };

        const perfilActualizado = {
            _id: 1,
            _rol: Rol.Cliente,
            _dni: '12345678',
            _nombres: 'Ana',
            _apellidos: 'González',
            _email: 'anagonz@example.com',
            _telefono: '987654321',
            _direccion: 'Calle 457',
            _password: 'newpass456',
        };

        const mockModel = {
            async setPerfil(perfil) {
                // Lógica simulada para el método setPerfil en tu modelo
                // Aquí podrías verificar si el perfil se actualiza correctamente en el modelo
                assert.deepStrictEqual(perfil, perfilActualizado);
            },
        };

        const controller = new ClientePerfilPageController(mockModel);

        // Simulación de datos del formulario
        const mockEvent = { preventDefault: () => {} };
        controller.view.usuarioDniInput.value = perfilActualizado._dni;
        controller.view.usuarioNombresInput.value = perfilActualizado._nombres;
        controller.view.usuarioApellidosInput.value = perfilActualizado._apellidos;
        controller.view.usuarioEmailInput.value = perfilActualizado._email;
        controller.view.usuarioTelefonoInput.value = perfilActualizado._telefono;
        controller.view.usuarioDireccionInput.value = perfilActualizado._direccion;
        controller.view.usuarioPassword1Input.value = perfilActualizado._password;

        // Ejecución del método setPerfil
        await controller.setPerfil(mockEvent);

    });
});
