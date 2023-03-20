import { useQuestion } from './useQuestion';

export const useQuestionItem = () => {
  const { data } = useQuestion();
  const questionCount = data?.length ?? 0;

  const getItem = (index: number) =>
    data?.[index] ?? { answers: [], sequence: 0, text: '', image: '' };

  return { questionCount, getItem };
};
