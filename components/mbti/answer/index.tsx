import React, { CSSProperties } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

const duration = 300;

const defaultStyle: CSSProperties = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: 'translateX(30%)',
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 1, transform: 'translateX(0%)' },
  entered: { opacity: 1, transform: 'translateX(0%)' },
  exiting: { opacity: 0, transform: 'translateX(-101%)' },
  exited: { opacity: 0, transform: 'translateX(-101%)' },
};

interface AnswerProps {
  current: boolean;
  index: number;
  icon: React.ReactNode;
  text: string;
}

function Answer({ current, index, icon, text }: AnswerProps) {
  return (
    <Transition timeout={300} in={current}>
      {(state) => (
        <li
          className="bg-white min-h-[70px] shadow-button rounded-[50px] flex items-center px-[48px] font-semibold cursor-pointer"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            transitionDelay: `${index * 50}ms`,
          }}
        >
          <span className="text-4xl mr-7">{icon}</span>
          {text}
        </li>
      )}
    </Transition>
  );
}

export default Answer;
