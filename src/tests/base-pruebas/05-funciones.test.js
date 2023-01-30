import { getUser, getUsuarioActivo } from "../../base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect( testUser ).toEqual( user );
     });

     test('getUsuarioActivo debe de retornar un ojeto', () => {
        const name = 'Erick';

        const testName = {
            uid: 'ABC567',
            username: name
        };

        const getUsuario = getUsuarioActivo( name );

        expect( testName ).toEqual( getUsuario );
     });
})