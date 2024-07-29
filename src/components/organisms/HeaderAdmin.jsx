import React from 'react';
import Logo from '../atoms/Logo';
import NavLinksAdmin from '../molecules/NavLinksAdmin';
import Imagen from '../atoms/Imagen';

function HeaderAdmin() {
  return (
    <header className="flex justify-center items-center bg-[#f1f2ce] p-4 text-black max-w-screen-lg mx-auto">
      <Logo className="mr-auto" />
      <Imagen className="ml-auto" />
      <NavLinksAdmin className="ml-auto" />
    </header>
  );
}

export default HeaderAdmin;
