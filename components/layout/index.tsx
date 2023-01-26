import React, { PropsWithChildren } from 'react';

interface LayoutProps {
  showGNB?: boolean;
  showHeader?: boolean;
}

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header />
      <main>{children}</main>
      {/* GNB */}
      <aside />
      <footer />
    </>
  );
}

export default Layout;
