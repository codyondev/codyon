import { Option } from 'models/form';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import SignUpForm from '@components/auth/signup-form';
import Input from '@components/common/input';
import { EMAIL_DOMAIN } from '@lib/client';

const SignUp: NextPage = function () {
  return (
    <>
      <Head>
        <title>회원가입 - CODY ON</title>
        <meta name="description" content="CodyOn 회원가입 페이지" />
      </Head>
      <div className="px-[18px] pt-8">
        <section>
          <h1 className="text-center font-medium site-name">CODY ON</h1>
          <h3 className="text-center text-[12px] text-gray-75 mt-1">
            패션 CODE로 소통하는 코디 공유 서비스
          </h3>
        </section>
        <section className="mt-11">
          <SignUpForm />
        </section>
        <section className="mt-16 text-[12px] font-light">
          <p className="px-2">
            <span className="mr-1 font-bold">추천</span>비밀번호 필요없는
            카톡으로 3초만에 시작하기
          </p>
          <button
            type="button"
            className="block mt-2 w-full text-center py-5 bg-kakao rounded-md text-[17px] font-semibold"
          >
            카카오로 시작하기
          </button>
        </section>
      </div>
    </>
  );
};

export default SignUp;
