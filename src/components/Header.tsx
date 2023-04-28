import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header className='header'>
    <div className='container'>
      <div className='logo'>
        <Link href='/'>Home page</Link>
      </div>
      <div className='links'>
        <Link href='/about'>About</Link>
        <Link href='/about/team'>Our team</Link>
        <Link href='/code/repos'>Code</Link>
      </div>
    </div>
  </header>
);

export default Header;
