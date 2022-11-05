import React from 'react';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import Input from '@components/common/input';

interface SignUpForm {
  email: string;
  platform: string;
  password: string;
}

const SignUp: NextPage = function () {
  const { register, watch } = useForm<SignUpForm>();

  return (
    <div className="px-[18px]">
      <section />
      <section>
        <form>
          <div className="grid grid-cols-2 gap-2">
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
  );
};

export default SignUp;
