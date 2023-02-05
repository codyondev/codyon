import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Layout from '@components/layout';

const Home: NextPage = function () {
  return (
    <Layout>
      <nav className="p-layoutX mt-[10px] flex gap-x-[28px]">
        <Link href="/fashin-card" className="font-bold text-xl">
          패션 카드
        </Link>
        <Link href="/my-style" className="font-bold text-xl text-[#CECECE]">
          마이 스타일
        </Link>
      </nav>
      <section className="bg-white p-layout mt-5">
        <article className="bg-[#E3EEED] h-[80px] rounded-md flex items-center px-5 justify-between">
          {/* 이미지로 교체 예정 */}
          <div />
          <p className="text-[10px]">
            <strong className="text-xs block">
              빼곡히 잡힌 연말 약속에 입을 옷이 걱정된다면
            </strong>
            무신사에서 연말룩 첫 구매시 50% 할인
          </p>
        </article>
      </section>
      <section className="p-layoutX mt-[15px]">
        <h2 className="font-bold text-lg">패션 프로필</h2>
        <article className="mt-6 rounded-md bg-[#242424] h-[150px] flex justify-center py-[10px]">
          <div>
            <div className="w-[85px] h-[105px] overflow-hidden rounded-[100%] outline-dashed outline-1 outline-offset-2 outline-white">
              <img src="/images/example-1.svg" alt="" />
            </div>
          </div>
          <div>
            <p className="w-[125px] text-[#CECECE] text-[10px] font-light leading-[13px] break-all">
              날이 좋아서, 날이 좋지 않아서, 날이 적당해서. 모든 날에 화려하고
              싶었다.
            </p>
            <div className="flex gap-x-[10px]">
              <button
                className="text-darkmint text-[10px] border border-darkmint bg-[#404040] py-[2px] px-[8px] rounded-[10px]"
                type="button"
              >
                Fancy
              </button>
              <button
                className="text-darkmint text-[10px] border border-darkmint bg-[#404040] py-[2px] px-[8px] rounded-[10px]"
                type="button"
              >
                drEssy
              </button>
              <button
                className="text-darkmint text-[10px] border border-darkmint bg-[#404040] py-[2px] px-[8px] rounded-[10px]"
                type="button"
              >
                Mature
              </button>
              <button
                className="text-darkmint text-[10px] border border-darkmint bg-[#404040] py-[2px] px-[8px] rounded-[10px]"
                type="button"
              >
                Gonzo
              </button>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Home;
