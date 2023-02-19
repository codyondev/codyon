import { DefaultSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import wrapper from '@store/index';

import '../styles/globals.css';

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState; session: DefaultSession }>) {
  const [queryClient] = useState(new QueryClient());

  useEffect(() => {
    if (window.Kakao.isInitialized()) return;
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SCRIPT_KEY ?? '');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
