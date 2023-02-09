import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en FirstApp', () => { 
    // test('debe de hacer match con el snapchot', () => {

    //     const title = 'hay wey mi mente';
    //     const { container } = render( <FirstApp title = { title }/> );

    //     expect( container ).toMatchSnapshot();
    // });

    test('debe de mostrar el titulo en un H1', () => {
        const title = 'hay wey mi mente';
        const { container, getByText, getByTestId } = render( <FirstApp title = { title }/> );
        expect( getByText(title) ).toBeTruthy();
       
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);

        expect( getByTestId('test-title').innerHTML  ).toBe( title);
    });

    test('debe de buscar el subtitulo enviado por props', () => {
        const title = 'hay wey mi mente';
        const subTitle = 'hay subtitle';
        const { getAllByText } = render( 
            <FirstApp 
                title = { title }
                subTitle = { subTitle }
            /> 
        );

        expect( getAllByText(subTitle).length ).toBe(2);
    });
 })