import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;

if (typeof window === 'undefined') {
  (async () => {
    const { server } = await import('@mocks/server');
    server.listen();
  })();
} else {
  (async () => {
    const { worker } = await import('@mocks/browser');
    worker.start();
  })();
}
