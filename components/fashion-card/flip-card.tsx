import Image from 'next/image';
import { useRouter } from 'next/router';
import { QRCodeCanvas } from 'qrcode.react';
import React, { useMemo } from 'react';

import { cn } from '@libs/client';
import profile from '@public/images/profile.jpg';

interface FlipCardProps {
  rotate: boolean;
  layoutClassName?: string;
}

export default function FlipCard({ rotate, layoutClassName }: FlipCardProps) {
  const href = useMemo(() => {
    if (typeof window === 'undefined') {
      return '';
    }
    return window.location.href;
  }, []);

  return (
    <div className={cn('flip', rotate ? 'rotate' : '', layoutClassName ?? '')}>
      <div className="card">
        <div className="front px-[8px] pt-[16px] pb-[10px] relative">
          <div className="flex">
            <section className="ml-2 max-w-[105px]">
              <span className="block text-[8px] text-[#BABABA] font-light leading-[12px]">
                fashion ID card for me CodyOn
              </span>
              <div className="mt-[16px] w-[90px] h-[105px] rounded-[90px/105px] overflow-hidden">
                <Image
                  src={profile}
                  className="rounded-[90px/105px] object-cover"
                  width={90}
                  height={105}
                  placeholder="blur"
                  alt="프로필 이미지"
                />
              </div>
            </section>
            <section className="shrink-0 ml-[8px]">
              <span className="font-purple-purse text-[20px] leading-[25px] tracking-very-tighter">
                Negative Citizens Club
              </span>
              <table className="table mt-[25px]">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>네오</td>
                  </tr>
                  <tr>
                    <td>Fashion code</td>
                    <td>SEMG</td>
                  </tr>
                  <tr>
                    <td>Info</td>
                    <td>자유분방한 패션 방랑자</td>
                  </tr>
                  <tr>
                    <td>Motto</td>
                    <td>do not judge me</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          <div className="flex justify-end items-end">
            <QRCodeCanvas
              value={href}
              size={41}
              className="absolute bottom-[10px]"
            />
          </div>
        </div>
        <div className="back">back</div>
      </div>
    </div>
  );
}
