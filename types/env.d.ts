declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_KAKAO_SCRIPT_KEY: string;
    readonly DATABASE_URL: string;
    readonly EMAIL_SERVER: string;
    readonly EMAIL_FROM: string;
    readonly KAKAO_CLIENT_ID: string;
    readonly KAKAO_CLIENT_SECRET: string;
    readonly NEXTAUTH_URL: string;
    readonly NEXTAUTH_SECRET: string;
  }
}
