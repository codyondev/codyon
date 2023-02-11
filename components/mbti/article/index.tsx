import React, { CSSProperties } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import styles from './index.module.scss';

const duration = 300;

const defaultStyle: CSSProperties = {
  transition: `opacity ${duration}ms ease-out`,
  opacity: 0,
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
};

interface ArticleProps {
  order: number;
  text: string;
  on: boolean;
  thumbnail?: string;
}

function Article({ order, text, on, thumbnail }: ArticleProps) {
  return (
    <div className={styles.articleWrapper}>
      <Transition timeout={duration} in={on} unmountOnExit mountOnEnter>
        {(state) => (
          <>
            {thumbnail && (
              <img
                src={thumbnail}
                alt={`${order}번째 문제 썸네일`}
                className="max-h-[190px] mx-auto mb-[10px]"
              />
            )}
            <span
              className={styles.title}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              Q{order}.
            </span>
            <p
              className={styles.text}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              {text}
            </p>
          </>
        )}
      </Transition>
    </div>
  );
}

export default Article;
