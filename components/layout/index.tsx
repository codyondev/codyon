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
    <div className="relative max-w-mobile mx-auto min-h-[100vh] shadow-root bg-gray-778">
      {showHeader && <Header />}
      <main className="bg-gray-778 overflow-y-auto pb-[80px]">{children}</main>
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
