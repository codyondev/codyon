import { randomBytes, randomUUID } from 'crypto';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import KakaoProvider from 'next-auth/providers/kakao';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER || '',
      from: process.env.EMAIL_FROM || '',
      maxAge: 30 * 60, // 30 minutes
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex');
    },
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // default setting comes from session maxAge
  },
  pages: {
    signIn: '/signin',
  },
  debug: true,
});
