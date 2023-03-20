export type M = 'F' | 'S';
export type B = 'E' | 'O';
export type T = 'M' | 'C';
export type I = 'G' | 'D';

export type AllMBTI = M | B | T | I;

export type MBTI = `${M}${B}${T}${I}`;

export type Answer = {
  sequence: number;
  text: string;
};

export type Question = {
  sequence: number;
  text: string;
  image?: string;
  answers: Answer[];
};
