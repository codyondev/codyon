import Home from '@pages/index';
import { render, screen } from '@testing-library/react';

describe('Home Component', () => {
  it('render home', () => {
    render(<Home />);
    const home = screen.getByTestId('Home');
    expect(home).toBeInTheDocument();
  });
});
