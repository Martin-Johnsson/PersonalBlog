'use server';

import React from 'react';
import SearchButton from '../../clientComponents/SearchButton';

const Header = () => {
  return (
    <header className='border border-dotted border-b-white-700 border-t-0 border-r-0 border-l-0 w-full flex flex-col justify-align-center items-center justify-items-center justify-center fixed z-1 top-0 h-24'>
      <nav className='flex flex-row w-100 h-5 gap-5'>
        <SearchButton />
        <h1>Personal Blog</h1>
      </nav>
    </header>
  );
};

export default Header;
