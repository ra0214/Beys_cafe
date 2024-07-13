import React from 'react';
import Logo from '../atoms/Logo';
import NavLinksMenu from '../molecules/NavLinksMenu';
import Imagen from '../atoms/Imagen';
import LineaHorizontal from '../atoms/LineaHorizontal';

function HeaderMenu() {
  return (
    <header className="flex justify-between items-center bg-white p-4 text-black max-w-screen-lg mx-auto">
      <Logo />
      <Imagen />
      <NavLinksMenu />
    </header>
  );
}

export default HeaderMenu;
