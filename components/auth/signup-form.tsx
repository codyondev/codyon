import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import ErrorMessage from '@components/common/error-message';
import Input from '@components/common/input';
import Select from '@components/common/select';
import CircleAlert from '@components/icons/circle-alert';
import { EMAIL_DOMAIN, PASSWORD_REGEXP } from '@constants/index';
import { cn } from '@lib/client';
import { signup } from '@lib/client/request';
import { Option } from '@models/form';

interface SignUpFormType {
  email: string;
  domain: string;
  password: string;
}

interface SignUpFormProps {
  setConfirm: (confirm: boolean) => void;
}

const options: Option[] = EMAIL_DOMAIN.map((domain) => ({
  label: `@${domain}`,
  value: domain,
})).concat({ label: '직접 입력', value: 'directly' });

export default function SignUpForm({ setConfirm }: SignUpFormProps) {
  const [directly, setDirectly] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);
  const { register, watch, resetField, handleSubmit, formState, setError } =
    useForm<SignUpFormType>({ mode: 'onBlur' });
  const { isLoading, mutate } = useMutation(signup<SignUpFormType, any>, {
    onSuccess: () => {
      setLoginError(true);
      setConfirm(true);
    },
    onError: () => {
      setLoginError(true);
    },
  });
  const { errors, isDirty, isValid } = formState;
  const isDisable = !isDirty || !isValid || isLoading;

  const onChangeDirectly = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const isDirectly = e.target.value === 'directly';
    setDirectly(isDirectly);
    if (isDirectly) {
      resetField('domain', { keepTouched: false });
    }
  };

  const onSubmit = async (data: SignUpFormType) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CircleAlert className="inline" />{' '}
      <span className="align-middle text-[12px] text-gray-75">
        이메일 인증이 필요해요
      </span>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <Input
          placeholder="이메일"
          register={register('email', { required: true })}
          value={watch('email')}
          error={errors.email}
          aria-label="email"
        />
        {directly ? (
          <Input
            placeholder="직접입력"
            register={register('domain', { required: true })}
            value={watch('domain')}
            error={errors.domain}
            aria-label="input-domain"
          />
        ) : (
          <Select
            register={register('domain')}
            options={options}
            onChangeDirectly={onChangeDirectly}
            aria-label="select-domain"
          />
        )}
        <Input
          placeholder="비밀번호"
          type="password"
          overrideClassName="col-span-2"
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
        이메일로 가입하기
        {loginError && <ErrorMessage message="login_failed" />}
      </button>
    </form>
  );
}
