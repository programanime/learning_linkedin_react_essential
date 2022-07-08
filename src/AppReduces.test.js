import { render, screen, fireEvent } from '@testing-library/react';
import AppReduces from './AppReduces';
import {Checkbox} from './Checkbox';
import {porDos} from './functions';

test("select checkbox", ()=>{
    const {getByText} =render(<AppReduces />)
    const h1=getByText(/output/i)
    expect(h1).toHaveTextContent("output");
});

test("select checkbox", ()=>{
    const {getByLabelText}=render(<Checkbox />);
    const checkbox=getByLabelText(/not checked/);
    console.log("el estado de check es ",checkbox.checked);
    fireEvent.click(checkbox);
    console.log("el estado de check despues es ",checkbox.checked);
    expect(checkbox.checked).toEqual(true);
});