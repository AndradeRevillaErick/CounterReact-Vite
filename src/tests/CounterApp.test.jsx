import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";


describe('Pruebas en CounterApp', () => {

    const initialValue = 100;
    test('debe de hacer match con el snapshoot', () => {
        const { container } = render( <CounterApp value = {initialValue}/> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () => {
        render( <CounterApp value = {initialValue}/> );
        // expect( parseInt(screen.getByRole('heading', { level: 2 }).innerHTML) ).toBe(100);
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100');
        expect( screen.getByText(100) ).toBeTruthy();
    });

    test('debe de incrementar con el boton +1', () => {
        render( <CounterApp value = {initialValue}/> );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('101') ).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => {
        render( <CounterApp value = {initialValue}/> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('99') ).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', () => {
        render( <CounterApp value = {initialValue}/> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('RESSET') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'} ));

        expect( screen.getByText('100') ).toBeTruthy();
    });
})