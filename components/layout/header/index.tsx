import Image from 'next/image';
import React from 'react';

import Logo from '@public/images/codyon_logo.svg';

function Header() {
  return (
    <header>
      <Image src={Logo} alt="Logo Icon" width={18} height={18} />
    </header>
  );
}

export default Header;
