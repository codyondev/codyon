import Head from 'next/head';
import React from 'react';

import CodyonHeader from '@components/UI/CodyonHeader/CodyonHeader';
import { SignInForm } from '@components/auth';
import { AuthLayout } from '@components/layout';

function SignInPage() {
  return (
    <>
      <Head>
        <title>로그인 - CODY ON</title>
        <meta name="description" content="CodyOn 로그인 페이지" />
      </Head>
      <AuthLayout>
        <header>
          <CodyonHeader />
        </header>
        <section className="mt-11">
          <SignInForm />
        </section>
        <section className="mt-16 text-[12px] font-light">
          <p className="px-2">
            <span className="mr-1 font-bold">추천</span>비밀번호 필요없는
            카톡으로 3초만에 시작하기
          </p>
          <button
            type="button"
            className="block mt-2 w-full text-center button kakao"
          >
            카카오로 시작하기
          </button>
        </section>
      </AuthLayout>
    </>
  );
}

export default SignInPage;
