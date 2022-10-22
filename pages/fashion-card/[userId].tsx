import FlipCard from '@components/fashoin-card/flip-card';
import { classname } from '@lib/client';
import { NextPage } from 'next';
import React, { useState } from 'react';

const FasionCardWithUser: NextPage = function () {
  const [rotate, setRotate] = useState<boolean>(false);

  const onToggleRotate = () => setRotate((prev) => !prev);

  return (
    <>
      <header className="h-[45px] w-full flex justify-center items-center bg-white">
        <h1 className="text-center">My Card</h1>
      </header>
      <main>
        <FlipCard rotate={rotate} layoutClassName="mt-[150px] mx-auto" />
        <button
          className={classname(
            'block mx-auto mt-[50px] w-[240px] h-[60px] rounded-full text-[#0C4CC4] transition-all duration-300',
            rotate ? 'bg-white border border-[#0C4CC3]' : 'bg-[#E4EBF8]',
          )}
          type="button"
          onClick={onToggleRotate}
        >
          {rotate ? '카드 앞면 보기' : '카드 뒷면 보기'}
        </button>
      </main>
      <footer className="fixed bottom-[40px] w-full flex justify-center items-center max-w-mobile">
        <button
          className="text-[0.8rem] py-[1.7em] px-[50px] rounded-full bg-white text-[#858585]"
          type="button"
        >
          이미지 파일로 다운로드하기
        </button>
      </footer>
    </>
  );
};

export default FasionCardWithUser;
