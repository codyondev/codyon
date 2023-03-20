import React, { HTMLAttributes, memo } from 'react';

function UnHappy({ ...rest }: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="7.5" cy="7.5" r="7" fill="white" stroke="#45C6D7" />
      <path
        d="M3.78394 10V10C5.86084 8.24228 8.87411 8.14441 11.0607 9.76364L11.3799 10"
        stroke="#45C6D7"
      />
      <circle cx="5" cy="5" r="1" fill="#45C6D7" />
      <circle cx="10" cy="5" r="1" fill="#45C6D7" />
    </svg>
  );
}

export default UnHappy;
