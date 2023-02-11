import React, { CSSProperties, useMemo } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { cn } from '@libs/client';

import styles from './index.module.scss';

const duration = 300;

const defaultStyle: CSSProperties = {
  transition: `all ${duration}ms ease-out`,
  opacity: 0,
  transform: 'translate3d(101%, 0, 0)',
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
          transform: 'translate3d(0, 0, 0)',
          transitionDelay: `${index * 50}ms`,
        },
        entered: {
          opacity: 1,
          transform: undefined,
          transitionDelay: undefined,
        },
        exiting: {
          opacity: 0,
          transform: 'translate3d(-101%, 0, 0)',
          transitionDelay: `${index * 50}ms`,
        },
        exited: {
          opacity: 0,
          transform: 'translate3d(101%, 0, 0)',
          transitionDelay: undefined,
        },
      }),
      [index],
    );

  return (
    <Transition timeout={300} in={current} unmountOnExit>
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
            <span className={styles.icon}>{icon}</span>
            {text}
          </label>
        </li>
      )}
    </Transition>
  );
}

export default Answer;
