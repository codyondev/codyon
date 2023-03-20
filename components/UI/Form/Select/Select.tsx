import React, { HTMLAttributes, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@libs/client';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  overrideClassName?: string;
  options: { label: string; value: string }[];
}

function Select(
  { overrideClassName, options, ...rest }: SelectProps,
  ref: React.LegacyRef<HTMLSelectElement>,
) {
  return (
    <select
      className={cn(
        overrideClassName ?? '',
        'bg-white border-gray-29',
        'text-[14px] px-[1.4em] py-[1.1em] rounded-md text-dark outline-none focus:border-darkmint focus:border-1 placeholder:text-gray-88 border appearance-none',
      )}
      ref={ref}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default forwardRef(Select);
