import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById dede de regresar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toEqual({ id:1, name:'Batman', owner:'DC'});
    });

    test('getHeroeById dede de regresar un heroe por ID debe retornar undefine si no existe', () => {
        const id = 100;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toBeFalsy();
    });

    test('getHeroesByOwner debe de regresar solo heroes de DC ', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        // console.log(heroesDC);
        // console.log(heroesDC.length);

        expect( heroesDC.length ).toBe(3);
        expect( heroesDC ).toEqual([
            {id:1, name:'Batman', owner:'DC'},
            {id:3, name:'Superman', owner:'DC'},
            {id:4, name:'Flash', owner:'DC'}
        ]);
        // heroesDC.forEach(ownerTest => {
        //     expect(ownerTest).toEqual({ id:1, name:'Batman', owner:'DC'});
        // });


    });

    test('getHeroesByOwner debe de regresar solo heroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
    });
 })