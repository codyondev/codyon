import React, { PropsWithChildren } from 'react';

function AuthLayout({ children }: PropsWithChildren) {
  return <div className="px-[18px] pt-8">{children}</div>;
}

export default AuthLayout;
