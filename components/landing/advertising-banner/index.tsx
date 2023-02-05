import React from 'react';

interface AdvertisingBannerProps {
  thumbnail: string;
  title: string;
  description: string;
  //   url: string
}

function AdvertisingBanner({
  thumbnail,
  title,
  description,
}: AdvertisingBannerProps) {
  return (
    <article className="bg-[#E3EEED] h-[80px] rounded-md flex items-center px-5 justify-between">
      {/* 이미지로 교체 예정 */}
      <div />
      <p className="text-[10px]">
        <strong className="text-xs block">{title}</strong>
        {description}
      </p>
    </article>
  );
}

export default AdvertisingBanner;
