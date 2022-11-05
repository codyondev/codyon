import React, { HTMLAttributes, memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { classname } from '@lib/client';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  value?: string;
  overrideClassName?: string;
  type?: string;
}

const Input = function ({
  register,
  value,
  overrideClassName,
  ...rest
}: InputProps) {
  return (
    <input
      className={classname(
        overrideClassName ?? '',
        value?.trim()
          ? 'bg-white border-gray-29'
          : 'bg-gray-778 border-gray-778',
        'text-[14px] px-[1.4em] py-[1.1em] rounded-md text-dark outline-none focus:border-darkmint focus:border-1 placeholder:text-gray-88 border',
      )}
      {...rest}
      {...register}
    />
  );
};

export default memo(Input, (prev, next) => prev.value === next.value);
