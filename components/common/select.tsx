import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@libs/client';

interface SelectProps {
  register: UseFormRegisterReturn;
  onChangeDirectly: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  overrideClassName?: string;
  options: { label: string; value: string }[];
}

const Select = function ({
  register,
  overrideClassName,
  options,
  onChangeDirectly,
}: SelectProps) {
  return (
    <select
      {...register}
      className={cn(
        overrideClassName ?? '',
        'bg-white border-gray-29',
        'text-[14px] px-[1.4em] py-[1.1em] rounded-md text-dark outline-none focus:border-darkmint focus:border-1 placeholder:text-gray-88 border appearance-none',
      )}
      onChange={(e) => onChangeDirectly(e)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
