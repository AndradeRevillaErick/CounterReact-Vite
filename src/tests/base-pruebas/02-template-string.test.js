import { getSaludo } from "../../base-pruebas/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar "Hola Erick"', () => {
        const name = 'Erick';
        const message = getSaludo( name );

        expect(message).toBe(`Hola ${ name }`)
    })
})