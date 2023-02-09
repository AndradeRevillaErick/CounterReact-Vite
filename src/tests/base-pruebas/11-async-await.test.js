import { getImagen } from "../../base-pruebas/base-pruebas/11-async-await"

describe('pruebas en 11-async-await', () => { 
    test('getImage debe de retornar un URL de la imagen', async() => { 
        
        const url = await getImagen();

        expect( typeof url ).toBe('string');
     })
 })