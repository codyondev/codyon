import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import GroupIcon from '@components/icons/group';
import HomeIcon from '@components/icons/home';
import ProfileIcon from '@components/icons/profile';
import SearchIcon from '@components/icons/search';

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full flex justify-between items-center h-[60px] px-[45px] bg-white shadow-gnb rounded-t-[25px]">
      <Link href="/">
        <HomeIcon />
      </Link>
      <Link href="/search">
        <SearchIcon />
      </Link>
      <Link href="/group">
        <GroupIcon />
      </Link>
      <Link href="/profile">
        <ProfileIcon />
      </Link>
    </footer>
  );
}

export default Footer;
