import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '@components/common/input';
import Select from '@components/common/select';
import CircleAlert from '@components/icons/circle-alert';
import { EMAIL_DOMAIN } from '@lib/client';
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
  const { register, watch, resetField } = useForm<SignUpFormType>();
  const [directly, setDirectly] = useState<boolean>(false);

  const onChangeDirectly = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const isDirectly = e.target.value === 'directly';
    setDirectly(isDirectly);
    if (isDirectly) {
      resetField('domain');
    }
  };
  return (
    <form>
      <CircleAlert className="inline" />{' '}
      <span className="align-middle text-[12px] text-gray-75">
        이메일 인증이 필요해요
      </span>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <Input
          placeholder="이메일"
          register={register('email', { required: true })}
          value={watch('email')}
        />
        {directly ? (
          <Input
            placeholder="직접입력"
            register={register('domain', { required: true })}
            value={watch('domain')}
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
          register={register('password', { required: true })}
          value={watch('password')}
        />
      </div>
      <button
        type="submit"
        className="w-full text-center mt-8 py-5 rounded-md bg-gray-778 text-gray-88 text-[17px] font-semibold"
      >
        이메일로 가입하기
      </button>
    </form>
  );
}
