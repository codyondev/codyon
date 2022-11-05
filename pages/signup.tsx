import React from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Input from '@components/common/input';
import Head from 'next/head';
import CircleAlert from '@components/icons/circle-alert';

interface SignUpForm {
  email: string;
  platform: string;
  password: string;
}

const SignUp: NextPage = function () {
  const { register, watch } = useForm<SignUpForm>();

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
          <form>
            <CircleAlert className="inline" />{' '}
            <span className="align-middle text-[12px] text-gray-75">
              이메일 인증이 필요해요
            </span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Input
                placeholder="이메일"
                register={register('email', { required: true })}
                value={watch('email')}
              />
              <Input
                placeholder="@naver.com"
                register={register('platform', { required: true })}
                value={watch('platform')}
              />
              <Input
                placeholder="비밀번호"
                type="password"
                overrideClassName="col-span-2"
                register={register('password', { required: true })}
                value={watch('password')}
              />
            </div>
            <button
              type="submit"
              className="w-full text-center mt-8 py-5 rounded-md bg-gray-778 text-gray-88 text-[17px] font-semibold"
            >
              이메일로 가입하기
            </button>
          </form>
        </section>
        <section className="mt-16 text-[12px] font-light">
          <span className="ml-2 mr-1 font-bold">추천</span>비밀번호 필요없는
          카톡으로 3초만에 시작하기
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
