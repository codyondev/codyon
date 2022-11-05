import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '@components/common/input';
import Select from '@components/common/select';
import CircleAlert from '@components/icons/circle-alert';
import { EMAIL_DOMAIN, PASSWORD_REGEXP, classname } from '@lib/client';
import { Option } from '@models/form';

interface SignUpFormType {
  email: string;
  domain: string;
  password: string;
}

const options: Option[] = EMAIL_DOMAIN.map((domain) => ({
  label: `@${domain}`,
  value: domain,
})).concat({ label: '직접 입력', value: 'directly' });

export default function SignUpForm() {
  const { register, watch, resetField, handleSubmit, formState } =
    useForm<SignUpFormType>({ mode: 'onBlur' });
  const [directly, setDirectly] = useState<boolean>(false);
  const { errors, isDirty, isValid } = formState;

  const onChangeDirectly = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const isDirectly = e.target.value === 'directly';
    setDirectly(isDirectly);
    if (isDirectly) {
      resetField('domain', { keepTouched: false });
    }
  };

  const onSubmit = async (data: SignUpFormType) => {
    console.log(data);
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
        />
        {directly ? (
          <Input
            placeholder="직접입력"
            register={register('domain', { required: true })}
            value={watch('domain')}
            error={errors.domain}
          />
        ) : (
          <Select
            register={register('domain')}
            options={options}
            onChangeDirectly={onChangeDirectly}
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
        />
      </div>
      <button
        type="submit"
        disabled={!isDirty || !isValid}
        className={classname(
          'w-full text-center mt-8 py-5 rounded-md text-[17px] font-semibold',
          !isDirty || !isValid
            ? 'bg-gray-778 text-gray-88'
            : 'bg-darkmint text-white',
        )}
      >
        이메일로 가입하기
      </button>
    </form>
  );
}
