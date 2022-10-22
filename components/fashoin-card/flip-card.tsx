import { classname } from '@lib/client';
import React from 'react';

interface FlipCardProps {
  rotate: boolean;
  layoutClassName?: string;
}

export default function FlipCard({ rotate, layoutClassName }: FlipCardProps) {
  return (
    <div
      className={classname(
        'flip',
        rotate ? 'rotate' : '',
        layoutClassName ?? '',
      )}
    >
      <div className="card">
        <div className="front">front</div>
        <div className="back">back</div>
      </div>
    </div>
  );
}
