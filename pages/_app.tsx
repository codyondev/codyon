import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(new QueryClient());

  useEffect(() => {
    if (window.Kakao.isInitialized()) return;
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SCRIPT_KEY ?? '');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
