import { NextPage } from 'next';
import React, { CSSProperties, useEffect, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import Layout from '@components/layout';

const duration = 300;

const defaultStyle: CSSProperties = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'translateY(30%)',
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 1, transform: 'translateY(0%)' },
  entered: { opacity: 1, transform: 'translateY(0%)' },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const SemgTest: NextPage = () => {
  const [on, setOn] = useState<boolean>(false);

  useEffect(() => {
    setOn(true);
  }, []);

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
        <Transition timeout={300} in={on}>
          {(state) => (
            <ul
              className="mt-6 flex mx-auto flex-col gap-y-5 transition-all"
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <li className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold border border-darkmint bg-mint cursor-pointer">
                <span className="text-4xl mr-7">❤️‍🔥</span>매우 그런 편이다
              </li>
              <li className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold cursor-pointer">
                <span className="text-4xl mr-7">❤️</span>조금 그런 편이다
              </li>
              <li className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold cursor-pointer">
                <span className="text-4xl mr-7">❤️‍🩹</span>조금 그렇지 않은 편이다
              </li>
              <li className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold cursor-pointer">
                <span className="text-4xl mr-7">💔</span>매우 그렇지 않은 편이다
              </li>
            </ul>
          )}
        </Transition>
      </section>
    </Layout>
  );
};

export default SemgTest;
