import Link from 'next/link';
import React from 'react';

import GroupIcon from '@icons/Group';
import HomeIcon from '@icons/Home';
import ProfileIcon from '@icons/Profile';
import SearchIcon from '@icons/Search';

function Footer() {
  return (
    <footer className="fixed bottom-0 translate-x-[-50%] left-[50%] max-w-mobile w-full flex justify-between items-center h-[60px] px-[45px] bg-white shadow-gnb rounded-t-[25px]">
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
