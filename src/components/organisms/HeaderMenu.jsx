import React from 'react';
import Logo from '../atoms/Logo';
import NavLinksMenu from '../molecules/NavLinksMenu';
import Imagen from '../atoms/Imagen';

function HeaderMenu() {
  return (
    <header className="flex justify-center items-center bg-[#f1f2ce] p-4 text-black max-w-screen-lg mx-auto ">
      <Logo className="mr-auto" />
      <Imagen className="ml-auto" />
      <NavLinksMenu className="ml-auto" />
    </header>
  );
}

export default HeaderMenu;
