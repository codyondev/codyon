import { classname } from '@lib/client';
import React, { HTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  value?: string;
  overrideClassName?: string;
  type?: string;
}

export default function Input({
  register,
  value,
  overrideClassName,
  ...rest
}: InputProps) {
  return (
    <input
      className={classname(
        overrideClassName ?? '',
        value?.trim() ? 'bg-white border-gray-29 border' : 'bg-gray-778',
        'text-[14px] px-[1.4em] py-[1.1em] rounded-md text-dark outline-none focus:border-darkmint focus:border-2 placeholder:text-gray-88',
      )}
      {...rest}
      {...register}
    />
  );
}
