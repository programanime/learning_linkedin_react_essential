import { render, screen } from '@testing-library/react';
import App from './App';
import {porDos} from './functions';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/el mundo/i);
  expect(linkElement).toBeInTheDocument();
});

test("Multiplicar por dos", ()=>{
    expect(porDos(4)).toBe(8);
});


test("render an h1", ()=>{
    const { getByText } = render(<App/>)
    const h1=getByText(/el mundo/i)
    expect(h1).toHaveTextContent("el mundo");
})