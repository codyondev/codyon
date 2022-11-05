export function classname(...classnames: string[]) {
  return classnames.join(' ');
}

export const PASSWORD_REGEXP =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/;

export const EMAIL_DOMAIN = [
  'naver.com',
  'daum.net',
  'gmail.com',
  'hanmail.net',
  'kakao.com',
  'nate.com',
];
