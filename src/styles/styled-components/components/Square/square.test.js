import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Square from ".";


describe('vou realizar alguns testes com o Square', () => {

    it('verifica se a width do square tem 200px', () => {
        const container = render(<Square />)
    
        expect(container.firstChild).toHaveStyle('width: 200px')
    }

    )

})