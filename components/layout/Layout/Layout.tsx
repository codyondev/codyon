import React, { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

import { Footer, Header } from '@components/layout';

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
    <div className="relative max-w-mobile mx-auto shadow-root bg-gray-778 min-h-[100vh] max-h-[100vh] overflow-auto">
      {showHeader && <Header />}
      <main className="bg-gray-778 pb-[100px]">{children}</main>
      {/* GNB */}
      {showGNB && <Footer />}
      <ToastContainer
        hideProgressBar
        position="top-center"
        toastStyle={{
          textAlign: 'center',
        }}
      />
    </div>
  );
}

export default Layout;

(Layout as React.FC<LayoutProps>).defaultProps = {
  showGNB: true,
  showHeader: true,
};
