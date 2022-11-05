import React, { HTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import UnHappy from '@components/icons/un-happy';
import { classname } from '@lib/client';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: FieldError;
  value?: string;
  overrideClassName?: string;
  type?: string;
}

const Input = function ({
  register,
  error,
  value,
  overrideClassName,
  ...rest
}: InputProps) {
  return (
    <div className={classname(overrideClassName ?? '', 'relative')}>
      <input
        className={classname(
          value?.trim()
            ? 'bg-white border-gray-29'
            : 'bg-gray-778 border-gray-778',
          'text-[14px] px-[1.4em] py-[1.1em] rounded-md text-dark outline-none focus:border-darkmint focus:border-1 placeholder:text-gray-88 border w-full',
          error ? 'border-red-500' : '',
        )}
        {...rest}
        {...register}
      />
      {error?.message === 'not_match' && (
        <span className="w-full absolute left-0 top-[60px] text-[12px] text-darkmint px-3">
          <UnHappy className="inline mr-1" />
          영소문자와 숫자를 포함하여 8자리 이상을 입력해주세요
        </span>
      )}
    </div>
  );
};

export default Input;
