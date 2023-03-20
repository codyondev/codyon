import { NextApiRequest, NextApiResponse } from 'next';

import { Question } from '@models/mbti';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const questions = await prisma.fashionTestQuestion.findMany({
    include: {
      answers: {
        select: {
          sequence: true,
          text: true,
        },
        orderBy: {
          sequence: 'asc',
        },
      },
    },
    orderBy: {
      sequence: 'asc',
    },
  });

  const result: Omit<Question, 'answers'>[] = questions.map((question) => {
    return {
      sequence: question.sequence,
      text: question.text,
      image: question.image ?? undefined,
      answers: question.answers,
    };
  });

  res.json({ result });
};
