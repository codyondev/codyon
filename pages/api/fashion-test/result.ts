import { NextApiRequest, NextApiResponse } from 'next';

import { MBTI } from '@models/mbti';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const questions = await prisma.fashionTestQuestion.findMany({
    include: {
      answers: {
        orderBy: {
          sequence: 'asc',
        },
      },
    },
    orderBy: {
      sequence: 'asc',
    },
  });

  const result: Record<string, number> = {
    S: 0,
    F: 0,
    E: 0,
    O: 0,
    C: 0,
    M: 0,
    G: 0,
    D: 0,
  };
  const userAnswers: number[] = req.body.answers;
  questions.forEach((question, index) => {
    const answerValue = question.answers[userAnswers[index] - 1]
      ?.value as Record<string, never>;
    if (!answerValue) {
      res.status(400).json({ error: 'wrong_answer_sequence' });
    }

    const fashionTrait = Object.keys(answerValue)[0];
    if (fashionTrait) {
      result[fashionTrait] += answerValue[fashionTrait];
    }
  });

  let mbti = '';
  mbti += result.S > result.F ? 'S' : 'F';
  mbti += result.E > result.O ? 'E' : 'O';
  mbti += result.M > result.C ? 'M' : 'C';
  mbti += result.G > result.D ? 'G' : 'D';

  res.json({ result: mbti as MBTI });
};
