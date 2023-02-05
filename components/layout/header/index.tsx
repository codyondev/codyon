import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '@public/images/codyon_logo.svg';

function Header() {
  return (
    <header className="h-[46px] bg-white border-b border-[#CECECE] flex items-center px-[15px]">
      <Link href="/" className="flex">
        <Image src={Logo} alt="Logo Icon" width={18} height={18} />
        <span className="text-[13px] font-bold ml-[3px]">codi on</span>
      </Link>
    </header>
  );
}

export default Header;
