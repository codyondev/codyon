import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

import CheckEmail from '@components/auth/check-email';
import SignInForm from '@components/auth/signin-form';
import SignUpForm from '@components/auth/signup-form';
import CodyOnHeader from '@components/common/codyon-header';
import AuthLayout from '@components/layout/auth';

const SignIn: NextPage = function () {
  return (
    <>
      <Head>
        <title>로그인 - CODY ON</title>
        <meta name="description" content="CodyOn 로그인 페이지" />
      </Head>
      <AuthLayout>
        <header>
          <CodyOnHeader />
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
};

export default SignIn;
