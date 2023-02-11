import { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect } from 'react';

import Layout from '@components/layout';
import { DefaultFeedSettings } from '@custom-types/kakao';

const Semg: NextPage = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) return;
    window.Kakao.Share.createDefaultButton<DefaultFeedSettings>({
      container: '#kakaotalk-sharing-btn',
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      itemContent: {
        profileText: 'Kakao',
        profileImageUrl:
          'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageUrl:
          'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageText: 'Cheese cake',
        titleImageCategory: 'Cake',
        items: [
          {
            item: 'Cake1',
            itemOp: '1000원',
          },
          {
            item: 'Cake2',
            itemOp: '2000원',
          },
          {
            item: 'Cake3',
            itemOp: '3000원',
          },
          {
            item: 'Cake4',
            itemOp: '4000원',
          },
          {
            item: 'Cake5',
            itemOp: '5000원',
          },
        ],
        sum: 'Total',
        sumOp: '15000원',
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  }, []);

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
        <button id="kakaotalk-sharing-btn">KakaoShare</button>

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
