import React, { memo, useMemo } from 'react';

import UnHappy from '@components/icons/un-happy';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = function ({ message }: ErrorMessageProps) {
  const text = useMemo(() => {
    return (
      {
        login_failed: '로그인에 실패했습니다',
        not_match: '영소문자와 숫자를 포함하여 8자리 이상을 입력해주세요',
      }[message] ?? '알 수 없는 에러가 발생했습니다'
    );
  }, []);

  return (
    <span
      aria-label="error message"
      className="w-full absolute left-0 -bottom-[25px] text-[12px] text-darkmint px-3"
    >
      <UnHappy className="inline mr-1" />
      {text}
    </span>
  );
};

export default memo(ErrorMessage);
