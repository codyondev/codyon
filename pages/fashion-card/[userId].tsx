import { NextPage } from 'next';
import React from 'react';

const FasionCardWithUser: NextPage = function () {
  return (
    <>
      <header className="h-[45px] w-full flex justify-center items-center bg-white">
        <h1 className="text-center">My Card</h1>
      </header>
      <main className="">
        <div className="mt-[150px]" />
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
