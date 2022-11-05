import SignUp from '@pages/signup';
import { fireEvent } from '@testing-library/dom';
import { cleanup, render } from '@testing-library/react';

import { createWrapper } from '../testUtils';

describe('SignUp Page', () => {
  it('email validation test', () => {
    const { getByLabelText, getByText } = render(<SignUp />, {
      wrapper: createWrapper(),
    });
    fireEvent.input(getByLabelText('email'), { target: { value: '' } });
    expect(getByText('이메일로 가입하기')).toBeDisabled();
  });

  it('password validation test', () => {
    const { getByLabelText, getByText } = render(<SignUp />, {
      wrapper: createWrapper(),
    });
    fireEvent.input(getByLabelText('password'), { target: { value: '' } });
    expect(getByText('이메일로 가입하기')).toBeDisabled();
  });

  it('password validation test 2', () => {
    const { getByLabelText, getByText } = render(<SignUp />, {
      wrapper: createWrapper(),
    });
    fireEvent.input(getByLabelText('password'), {
      target: { value: 'this is test' },
    });
    expect(getByText('이메일로 가입하기')).toBeDisabled();
  });

  // it('domain change test', async () => {
  //   const { getByLabelText, getByText } = render(<SignUp />, {
  //     wrapper: createWrapper(),
  //   });
  //   fireEvent.click(getByText('직접 입력'));
  //   expect(getByLabelText('input-domain')).toBeInTheDocument();
  // });
});
