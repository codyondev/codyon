import axios from 'axios';
import { DefaultSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import React, { useState } from 'react';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'react-toastify/ReactToastify.css';

import wrapper from '@store/index';

import '../styles/globals.css';

axios.defaults.baseURL = 'https://www.codyon.site';

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState; session: DefaultSession }>) {
  const [queryClient] = useState(new QueryClient());

  return (
    <>
      <Script
        id="kakao-sdk"
        async
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.js"
        integrity="sha384-OfbOqPoV2XcfZpqrLgqYCNSNBJW4JU/lLrtKk0cpkWvCrDRotHaQ9SSMGeP7u8NB"
        crossOrigin="anonymous"
        strategy="lazyOnload"
        onLoad={() =>
          window.Kakao?.init(process.env.NEXT_PUBLIC_KAKAO_SCRIPT_KEY ?? '')
        }
      />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
