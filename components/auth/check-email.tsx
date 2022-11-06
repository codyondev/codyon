import Image from 'next/image';
import React from 'react';

import Sent from '@public/images/sent.svg';

export default function CheckEmail() {
  return (
    <>
      <section className="mt-[4.7rem] flex flex-col items-center">
        <Image src={Sent} width={100} height={100} placeholder="blur" />
        <span className="mt-[0.625rem] text-[12px] text-gray-75">
          인증 메일을 보냈습니다.
        </span>
        <span className="text-center mt-[2.5rem] text-[14px] text-gray-75">
          메일에서 <span className="font-semibold text-black">확인링크</span>를
          눌러주세요.
        </span>
      </section>
      <section className="mt-[6.875rem]">
        <button type="button" role="link" className="button primary">
          홈으로 돌아가기
        </button>
      </section>
    </>
  );
}
