import axios from 'axios';

import { Question } from '@models/mbti';

export const getQuestions = async () => {
  const { data } = await axios.get<{ result: Question[] }>(
    '/api/fashion-test/questions',
  );

  return data.result;
};
