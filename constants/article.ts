import { Answer, Article } from '@models/article';

export const BASE_ANSWERS: Answer[] = [
  { text: '매우 그런 편이다', value: 'S', type: 'very' },
  { text: '조금 그런 편이다', value: 'E', type: 'little' },
  { text: '조금 그렇지 않은 편이다', value: 'M', type: 'little-not' },
  { text: '매우 그렇지 않은 편이다', value: 'G', type: 'very-not' },
];
export const ARTICLE: Article[] = [
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 1,
    text: '나는 어느 정도 노출이 있는 옷도 과감하게 시도할 수 있습니다.',
    answers: BASE_ANSWERS,
  },
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 2,
    text: '다음 두 의류 중, 평소 나의 스타일과 잘 어울리는 의류이거나, 내가 더 선호하는 의류는 ?',
    thumbnail:
      'https://doda-static.com/img/900/65/1/1/1638119726782-0115222.png',
    answers: [
      { text: '(1)을 매우 선호하는 편이다.', value: 'S', type: 'very' },
      { text: '(1)을 조금 선호하는 편이다.', value: 'E', type: 'little' },
      { text: '(2)을 조금 선호하는 편이다.', value: 'M', type: 'little-not' },
      { text: '(2)을 매우 선호하는 편이다.', value: 'G', type: 'very-not' },
    ],
  },
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 3,
    text: '나는 코디를 할 때, 포인트 요소를 최소화 하려고 노력하는 편입니다.',
    answers: BASE_ANSWERS,
  },
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 4,
    text: '나는 꾸며입을 때, 화려해 보이는 옷들로 코디를 하는 편입니다.',
    answers: BASE_ANSWERS,
  },
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 7,
    text: "나는 TV에 나온 연예인들의 코디를 보던 중, '내 스타일이 훨씬 멋있는데?' 라는 생각을...☆",
    answers: BASE_ANSWERS,
  },
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 8,
    text: '나의 패션은 눈에 띄고 화려하기보단, 깔끔하고 무난한 편입니다.',
    answers: BASE_ANSWERS,
  },
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 9,
    text: '나는 시험 기간에 공부하러 열람실, 카페, 독서실을 갈 때 멋을 위해 불편하더라도 눈에 띄는 옷을 입고 가는 행동에 공감이 됩니다.',
    answers: BASE_ANSWERS,
  },
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 10,
    text: '나는 강렬한 컬러의 옷들을 시도하는것에 거리낌이 없습니다.',
    answers: BASE_ANSWERS,
  },
  {
    id: 'ce43bb40-873a-4551-bc71-db881ab4965c',
    order: 11,
    text: '나는 추운 날씨에도 최대한 코트를 입으려고 노력하는 편입니다.',
    answers: BASE_ANSWERS,
  },
];
