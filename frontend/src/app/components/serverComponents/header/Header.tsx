"use server";

import React from "react";
import SearchButton from "../../clientComponents/SearchButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b-white-700 justify-align-center z-1 fixed top-0 flex h-24 w-full flex-col items-center justify-center justify-items-center border border-l-0 border-r-0 border-t-0 border-dotted">
      <nav className="w-100 flex h-5 flex-row gap-5">
        <SearchButton />
        <h1>Personal Blog</h1>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
