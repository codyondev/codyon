import { NextPage } from 'next';
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Layout from '@components/layout';
import Answer from '@components/mbti/answer';
import Article from '@components/mbti/article';
import { ARTICLE } from '@constants/article';
import { getEmoji } from '@libs/client';

const SemgTest: NextPage = () => {
  const [on, setOn] = useState<boolean>(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const [index, setIndex] = useState<number>(0);

  const { answers, text, thumbnail, order } = useMemo(
    () => ARTICLE[index],
    [index],
  );

  const onSelect: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setTimer(setTimeout(() => setOn(false), 300));
    setTimer(setTimeout(() => setIndex((prev) => prev + 1), 600));
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
        <Article on={on} order={order} text={text} thumbnail={thumbnail} />
        <p className="mt-2 mx-auto font-medium text-[10px] w-fit text-gray-75">
          Tip | 너무 오래 고민하지 말고 바로 떠오르는 답을 고르는 게 좋아요!
        </p>
        <ul className="mt-6 flex mx-auto flex-col gap-y-5 transition-all">
          {answers.map((item, i) => (
            <Answer
              key={item.text}
              text={item.text}
              value={item.text}
              icon={getEmoji(item.type)}
              index={i}
              current={on}
              onChange={onSelect}
            />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default SemgTest;
