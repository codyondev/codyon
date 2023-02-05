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
    <div className="relative max-w-mobile mx-auto shadow-root bg-gray-778 min-h-[100vh] max-h-[100vh] overflow-auto pb-[80px]">
      {showHeader && <Header />}
      <main className="bg-gray-778">{children}</main>
      {/* GNB */}
      {showGNB && <Footer />}
    </div>
  );
}

export default Layout;

(Layout as React.FC<LayoutProps>).defaultProps = {
  showGNB: true,
  showHeader: true,
};
