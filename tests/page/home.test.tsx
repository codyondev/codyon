import { render, screen } from '@testing-library/react';
import Home from '@pages/index';

describe('Home Component', () => {
  it('render home', () => {
    render(<Home />);
    const home = screen.getByTestId('Home');
    expect(home).toBeInTheDocument();
  });
});
