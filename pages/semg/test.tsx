import { NextPage } from 'next';
import React from 'react';

import Layout from '@components/layout';

const SemgTest: NextPage = () => {
  return (
    <Layout showGNB={false}>
      <section className="p-layoutX pt-[10px]">
        <h1 className="font-bold text-lg">패션 취향 분석 검사</h1>
        <div className="bg-white shadow-button px-[35px] mt-6 min-h-[180px] py-5">
          <span className="block mx-auto w-fit text-2xl text-darkmint font-semibold">
            Q1.
          </span>
          <p className="font-semibold leading-5 text-center text-lg mt-5">
            나는 어느 정도 노출있는 옷도 과감하게 시도할 수 있습니다.
          </p>
        </div>
        <p className="mt-2 mx-auto font-medium text-[10px] w-fit text-gray-75">
          Tip | 너무 오래 고민하지 말고 바로 떠오르는 답을 고르는 게 좋아요!
        </p>
        <ul className="mt-6 flex mx-auto flex-col gap-y-5">
          <li className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold">
            <span className="text-4xl mr-7">❤️‍🔥</span>매우 그런 편이다
          </li>
          <li className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold">
            <span className="text-4xl mr-7">❤️</span>조금 그런 편이다
          </li>
          <li className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold">
            <span className="text-4xl mr-7">❤️‍🩹</span>조금 그렇지 않은 편이다
          </li>
          <li className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold">
            <span className="text-4xl mr-7">💔</span>매우 그렇지 않은 편이다
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default SemgTest;
