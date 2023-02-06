import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Layout from '@components/layout';

const Semg: NextPage = () => {
  return (
    <Layout showGNB={false}>
      <img
        src="/images/main.png"
        className="w-full h-auto"
        alt="코디온 대표 이미지"
      />
      <p className="bg-black text-darkmint text-sm py-2 text-center font-semibold">
        현재 총 20,230,114명이 참여했어요.
      </p>
      <div className="mt-6 flex justify-center gap-12">
        <button type="button">
          <img src="/images/kakao.svg" alt="카카오 아이콘" />
        </button>
        <button type="button">
          <img src="/images/chain.svg" alt="공유 아이콘" />
        </button>
      </div>
      <Link
        href="/semg/test"
        className="flex justify-center items-center text-white bg-darkmint h-[70px] min-w-[285px] rounded-[50px] font-semibold mt-6 mx-auto shadow-button w-[285px]"
        type="button"
      >
        <span className="mr-5">👀</span>테스트 시작하기
      </Link>
    </Layout>
  );
};

export default Semg;
