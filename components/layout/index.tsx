import React, { PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';

interface LayoutProps {
  showGNB?: boolean;
  showHeader?: boolean;
}

function Layout({
  children,
  showGNB,
  showHeader,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
      {/* GNB */}
      {showGNB && <Footer />}
    </>
  );
}

export default Layout;

(Layout as React.FC<LayoutProps>).defaultProps = {
  showGNB: true,
  showHeader: true,
};
