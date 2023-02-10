import { NextPage } from 'next';
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';

import Layout from '@components/layout';
import Answer from '@components/mbti/answer';
import Article from '@components/mbti/article';

const SemgTest: NextPage = () => {
  const [on, setOn] = useState<boolean>(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

  const onSelect: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setTimer(setTimeout(() => setOn(false), 300));
  }, []);

  useEffect(() => {
    setOn(true);
  }, []);

  useEffect(() => {
    if (!on) setTimer(setTimeout(() => setOn(true), 500));
    return () => {
      clearTimeout(timer);
    };
  }, [on]);

  return (
    <Layout showGNB={false}>
      <section className="p-layoutX pt-[10px]">
        <h1 className="font-bold text-lg mb-6">패션 취향 분석 검사</h1>
        <Article
          on={on}
          order={1}
          text="나는 어느 정도 노출있는 옷도 과감하게 시도할 수 있습니다."
        />
        <p className="mt-2 mx-auto font-medium text-[10px] w-fit text-gray-75">
          Tip | 너무 오래 고민하지 말고 바로 떠오르는 답을 고르는 게 좋아요!
        </p>
        <ul className="mt-6 flex mx-auto flex-col gap-y-5 transition-all">
          {[
            { icon: '❤️‍🔥', text: '매우 그런 편이다' },
            { icon: '❤️', text: '조금 그런 편이다' },
            { icon: '❤️‍🩹', text: '조금 그렇지 않은 편이다' },
            { icon: '💔', text: '매우 그렇지 않은 편이다' },
          ].map((item, index) => (
            <Answer
              key={item.text}
              index={index}
              {...item}
              current={on}
              onChange={onSelect}
              value={item.text}
            />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default SemgTest;
