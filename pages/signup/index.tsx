import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useState } from 'react';

import { CodyonHeader } from '@components/UI';
import { CheckEmail, SignUpForm } from '@components/auth';
import { AuthLayout } from '@components/layout';

function SignUpPage() {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>회원가입 - CODY ON</title>
        <meta name="description" content="CodyOn 회원가입 페이지" />
      </Head>
      <AuthLayout>
        <header>
          <CodyonHeader />
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
                onClick={() => {
                  signIn('kakao');
                }}
              >
                카카오로 시작하기
              </button>
              <div className="to be deleted class">
                {session
                  ? `로그인 정보 : ${JSON.stringify(session.user)}`
                  : '로그인된 상태가 아닙니다'}
              </div>
            </section>
          </>
        )}
      </AuthLayout>
    </>
  );
}

export default SignUpPage;
