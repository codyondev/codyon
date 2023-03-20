import { useQuery } from 'react-query';

import { getQuestions } from '@requests/mbti/getQuestions';

export const useQuestion = () => {
  const queryFn = () => getQuestions();
  return useQuery(['questions'], queryFn);
};
