import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import AdvertisingBanner from '@components/landing/advertising-banner';
import Brand from '@components/landing/brand';
import RoleModel from '@components/landing/role-model';
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
        <AdvertisingBanner
          title="빼곡히 잡힌 연말 약속에 입을 옷이 걱정된다면"
          description="무신사에서 연말룩 첫 구매시 50% 할인"
          thumbnail=""
        />
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
      <section className="p-layoutX mt-[15px]">
        <h2 className="font-bold text-lg">롤 모델</h2>
        <ul className="grid grid-cols-2 gap-x-[9px] mt-6">
          <RoleModel
            job="모델"
            name="ahepf"
            thumbnail="/images/ahepf.svg"
            description="에스파 같은 스타일리의 원조!! 이 언니가 하면 모노톤이 화려함"
          />
          <RoleModel
            job="가수"
            name="BIBI"
            thumbnail="/images/bibi.svg"
            description="꺄 비비 스타일링이 항상 예뻐요 당당한 성격까지 너무 닮고 싶어요 작곡까지 각볏한 비비..."
          />
        </ul>
      </section>
      <section className="p-layoutX mt-[15px]">
        <h2 className="font-bold text-lg">애정 브랜드</h2>
        <ul className="flex gap-x-[15px] mt-6 overflow-auto">
          <Brand logo="/images/wooyoungmi.svg" name="우영미" rank={1} />
          <Brand logo="/images/y-project.svg" name="와이프로젝트" rank={2} />
          <Brand logo="/images/wooyoungmi.svg" name="우영미" rank={3} />
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
