import React, { CSSProperties, useMemo } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { cn } from '@libs/client';

import styles from './index.module.scss';

const duration = 300;

const defaultStyle: CSSProperties = {
  transition: `all ${duration}ms ease-out`,
  opacity: 0,
  transform: 'translateX(101%)',
};

interface AnswerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  current: boolean;
  index: number;
  icon: React.ReactNode;
  text: string;
}

function Answer({ current, index, icon, text, ...rest }: AnswerProps) {
  const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> =
    useMemo(
      () => ({
        entering: {
          opacity: 1,
          transform: 'translateX(0%)',
          transitionDelay: `${index * 50}ms`,
        },
        entered: {
          opacity: 1,
          transform: 'translateX(0%)',
          transitionDelay: '0ms',
        },
        exiting: {
          opacity: 0,
          transform: 'translateX(-101%)',
          transitionDelay: `${index * 50}ms`,
        },
        exited: {
          opacity: 0,
          transform: 'translateX(101%)',
          transitionDelay: '0ms',
        },
      }),
      [index],
    );

  return (
    <Transition timeout={300} in={current} unmountOnExit mountOnEnter>
      {(state) => (
        <li>
          <input
            className="sr-only peer"
            type="radio"
            name="result"
            id={text}
            {...rest}
          />
          <label
            className={cn(
              styles.answerWrapper,
              'peer-checked:bg-mint peer-checked:border-darkmint',
            )}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            htmlFor={text}
          >
            <span className={styles.text}>{icon}</span>
            {text}
          </label>
        </li>
      )}
    </Transition>
  );
}

export default Answer;
