import React, { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return <div className="px-[18px] pt-8">{children}</div>;
}
