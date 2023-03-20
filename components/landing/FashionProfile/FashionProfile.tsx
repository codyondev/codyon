import React from 'react';

import { MBTI } from '@models/mbti';

interface FashionProfileProps {
  mbti: MBTI;
  id: string;
  thumbnail: string;
  description: string;
}

function FashionProfile({
  description,
  id,
  mbti,
  thumbnail,
}: FashionProfileProps) {
  return (
    <article className="relative rounded-md bg-[#242424] h-[150px] flex justify-center py-[10px] min-w-[360px]">
      <h3 className="absolute top-2 left-[50%] translate-x-[-50%] text-darkmint font-rock-salt text-[40px]">
        {mbti}
      </h3>
      <div>
        <div className="flex flex-col items-center">
          <div className="p-[2px] border border-dashed rounded-[100%]">
            <div className="w-[85px] h-[105px] overflow-hidden rounded-[100%]">
              <img src={thumbnail} alt={`${id} 프로필 사진`} />
            </div>
          </div>
          <p className="text-[10px] text-darkmint mt-[5px]">@{id}</p>
        </div>
      </div>
      <div className="self-end">
        <p
          className="w-[125px] text-[#CECECE] text-[10px] font-light leading-[13px] break-all mb-[20px] ml-auto"
          style={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </p>
        <div className="flex gap-x-[10px]">
          <button
            className="text-darkmint text-[10px] border border-darkmint bg-[#404040] py-[2px] px-[8px] rounded-[10px]"
            type="button"
          >
            Fancy
          </button>
          <button
            className="text-darkmint text-[10px] border border-darkmint bg-[#404040] py-[2px] px-[8px] rounded-[10px]"
            type="button"
          >
            drEssy
          </button>
          <button
            className="text-darkmint text-[10px] border border-darkmint bg-[#404040] py-[2px] px-[8px] rounded-[10px]"
            type="button"
          >
            Mature
          </button>
          <button
            className="text-darkmint text-[10px] border border-darkmint bg-[#404040] py-[2px] px-[8px] rounded-[10px]"
            type="button"
          >
            Gonzo
          </button>
        </div>
      </div>
    </article>
  );
}

export default FashionProfile;
