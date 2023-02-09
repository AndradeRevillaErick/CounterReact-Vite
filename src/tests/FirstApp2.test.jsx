import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en FirstApp', () => { 
    
    const title    = 'Hay wey mi mente';
    const subTitle = 'im subtitle';

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title = { title }/>);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el menasje "Hay wey mi mente"', () => {
        render( <FirstApp title = { title }/>);
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title = { title }/>);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render( 
            <FirstApp 
                title = { title }
                subTitle = { subTitle }
            />
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);
    });
 })