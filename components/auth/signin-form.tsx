import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import ErrorMessage from '@components/common/error-message';
import Input from '@components/common/input';
import { PASSWORD_REGEXP } from '@constants/index';
import { cn } from '@libs/client';
import { signup } from '@libs/client/request';

interface SignInFormType {
  email: string;
  password: string;
}

export default function SignInForm() {
  const [loginError, setLoginError] = useState<boolean>(false);
  const { register, watch, handleSubmit, formState } = useForm<SignInFormType>({
    mode: 'onBlur',
  });
  const { isLoading, mutate } = useMutation(signup<SignInFormType, any>, {
    onSuccess: () => {
      setLoginError(true);
    },
    onError: () => {
      setLoginError(true);
    },
  });
  const { errors, isDirty, isValid } = formState;
  const isDisable = !isDirty || !isValid || isLoading;

  const onSubmit = async (data: SignInFormType) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-2 mt-2">
        <Input
          placeholder="이메일"
          register={register('email', { required: true })}
          value={watch('email')}
          error={errors.email}
          aria-label="email"
        />
        <Input
          placeholder="비밀번호"
          type="password"
          register={register('password', {
            required: true,
            pattern: { message: 'not_match', value: PASSWORD_REGEXP },
          })}
          value={watch('password')}
          error={errors.password}
          aria-label="password"
        />
      </div>
      <button
        type="submit"
        disabled={isDisable}
        className={cn(
          'w-full text-center mt-8 py-5 rounded-md text-[17px] font-semibold relative',
          isDisable ? 'bg-gray-778 text-gray-88' : 'bg-mint text-white',
        )}
      >
        이메일로 로그인하기
        {loginError && <ErrorMessage message="login_failed" />}
      </button>
    </form>
  );
}
