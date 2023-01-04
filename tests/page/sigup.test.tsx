import SignUp from '@pages/signup';
import { fireEvent, render, screen } from '@testing-library/react';

import { createWrapper } from '../testUtils';

describe('SignUp Page', () => {
  it('email validation test', () => {
    render(<SignUp />, {
      wrapper: createWrapper(),
    });
    fireEvent.input(screen.getByLabelText('email'), { target: { value: '' } });
    expect(screen.getByText('이메일로 가입하기')).toBeDisabled();
  });

  it('password validation test', () => {
    render(<SignUp />, {
      wrapper: createWrapper(),
    });
    fireEvent.input(screen.getByLabelText('password'), {
      target: { value: '' },
    });
    expect(screen.getByText('이메일로 가입하기')).toBeDisabled();
  });

  it('password validation test 2', () => {
    render(<SignUp />, {
      wrapper: createWrapper(),
    });
    fireEvent.input(screen.getByLabelText('password'), {
      target: { value: 'this is test' },
    });
    expect(screen.getByText('이메일로 가입하기')).toBeDisabled();
  });

  // it('domain change test', async () => {
  //   const { getByLabelText, getByText } = render(<SignUp />, {
  //     wrapper: createWrapper(),
  //   });
  //   fireEvent.click(getByText('직접 입력'));
  //   expect(getByLabelText('input-domain')).toBeInTheDocument();
  // });
});
