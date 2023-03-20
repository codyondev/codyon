import React, { HTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@libs/client';

import ErrorMessage from '../../ErrorMessage/ErrorMessage';

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
    <div className={cn(overrideClassName ?? '', 'relative')}>
      <input
        className={cn(
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
        <ErrorMessage message={error.message} />
      )}
    </div>
  );
};

export default Input;
