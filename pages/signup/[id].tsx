import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import CodyonHeader from '@components/common/codyon-header';
import AuthLayout from '@components/layout/auth-layout';
import Email from '@public/images/email.svg';

const ConfirmEmail: NextPage = () => {
  return (
    <AuthLayout>
      <header>
        <CodyonHeader />
      </header>
      <section className="mt-[4.7rem] flex flex-col items-center">
        <Image src={Email} width={100} height={100} />
        <span className="mt-[0.625rem] text-[12px] text-gray-75">
          회원가입 완료!
        </span>
        <p className="text-center mt-[1.875rem] text-[14px] text-gray-75">
          코디온 가입이 완료됐습니다.
          <br />{' '}
          <span className="font-semibold text-black">패션 MBTI테스트</span>를
          통해 나의{' '}
          <span className="font-semibold text-black">패션 CODE를</span>{' '}
          알아보세요
        </p>
      </section>
      <section className="mt-[6.875rem]">
        <button type="button" role="link" className="button primary">
          로그인 페이지로 이동하기
        </button>
      </section>
    </AuthLayout>
  );
};

export default ConfirmEmail;
