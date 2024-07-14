import React from 'react';
import Logo from '../atoms/Logo';
import NavLinksHome from '../molecules/NavLinksHome'
import Imagen from '../atoms/Imagen';

function Header() {
  return (
    <header className="flex justify-center items-center bg-white p-4 text-black max-w-screen-lg mx-auto">
      <Logo className="mr-auto" />
      <Imagen className="ml-auto" />
      <NavLinksHome className="ml-auto" />
    </header>
  );
}

export default Header;
