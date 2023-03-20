import React from 'react';

interface RoleModelProps {
  thumbnail: string;
  job: string;
  name: string;
  description: string;
}

function RoleModel({ description, job, name, thumbnail }: RoleModelProps) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={`${job} ${name} 썸네일`}
        className="w-full object-cover rounded-md"
      />
      <div className="px-[8px]">
        <span className="text-xs font-semibold">
          {job} {name}
        </span>
        <p
          className="text-[11px] border-l-2 border-black pl-[9px] text-ellipsis overflow-hidden text-gray-75"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </p>
      </div>
    </li>
  );
}

export default RoleModel;
