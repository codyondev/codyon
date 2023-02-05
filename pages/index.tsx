import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Layout from '@components/layout';

const Home: NextPage = function () {
  return (
    <Layout>
      <nav className="p-layoutX mt-[10px] flex gap-x-[28px]">
        <Link href="/fashin-card" className="font-extrabold text-xl">
          패션 카드
        </Link>
        <Link href="/my-style" className="font-extrabold text-xl">
          마이 스타일
        </Link>
      </nav>
    </Layout>
  );
};

export default Home;
