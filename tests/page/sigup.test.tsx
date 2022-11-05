import SignUp from '@pages/signup';
import { render } from '@testing-library/react';

describe('SignUp Page', () => {
  it('render page', () => {
    render(<SignUp />);
  });
});
