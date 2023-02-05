import type { NextPage } from 'next';
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
    </Layout>
  );
};

export default Home;
