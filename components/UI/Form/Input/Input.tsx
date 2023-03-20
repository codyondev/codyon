import React, { HTMLAttributes, forwardRef } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@libs/client';

import ErrorMessage from '../../ErrorMessage/ErrorMessage';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  value?: string;
  overrideClassName?: string;
  type?: string;
}

function Input(
  { error, value, overrideClassName, ...rest }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>,
) {
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
        ref={ref}
        {...rest}
      />
      {error?.message === 'not_match' && (
        <ErrorMessage message={error.message} />
      )}
    </div>
  );
}

export default forwardRef(Input);
