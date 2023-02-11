export type SEMG = 'S' | 'E' | 'M' | 'G';

export interface Answer {
  type: string;
  text: string;
  value: SEMG;
}

export interface Article {
  id: string;
  thumbnail?: string;
  text: string;
  order: number;
  answers: Answer[];
}
