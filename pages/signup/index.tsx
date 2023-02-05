import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

import CheckEmail from '@components/auth/check-email';
import SignUpForm from '@components/auth/signup-form';
import CodyOnHeader from '@components/common/codyon-header';
import AuthLayout from '@components/layout/auth';

const SignUp: NextPage = function () {
  const [confirm, setConfirm] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>회원가입 - CODY ON</title>
        <meta name="description" content="CodyOn 회원가입 페이지" />
      </Head>
      <AuthLayout>
        <header>
          <CodyOnHeader />
        </header>
        {confirm ? (
          <CheckEmail />
        ) : (
          <>
            <section className="mt-11">
              <SignUpForm setConfirm={setConfirm} />
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
          </>
        )}
      </AuthLayout>
    </>
  );
};

export default SignUp;
