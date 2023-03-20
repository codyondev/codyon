import React from 'react';

import { cn } from '@libs/client';

interface BrandProps {
  name: string;
  logo: string;
  rank?: number;
}

function Brand({ logo, name, rank }: BrandProps) {
  return (
    <li className="min-w-[150px]">
      <div className="relative flex justify-center h-[80px] pb-[15px] rounded-md bg-white ">
        {rank != null && (
          <span className="absolute left-2 top-2 text-xs font-bold">
            {rank}위
          </span>
        )}
        <img
          src={logo}
          alt={`${name} 로고`}
          className={cn(
            'w-auto h-[30px]',
            rank == null ? 'self-center' : 'self-end',
          )}
        />
      </div>
      <p className="mt-2 px-2 text-gray-75 text-xs">{name}</p>
    </li>
  );
}

export default Brand;
