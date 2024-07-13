import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavLinksHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="block bg-none border-none text-2xl md:hidden">
        &#9776;
      </button>
      <nav className={`text-xl flex gap-8 items-center ${menuOpen ? 'flex' : 'hidden'} md:flex md:flex-row`}>
        <Link to="/menu" className="text-black no-underline">
          Productos
        </Link>
      </nav>
    </>
  );
}

export default NavLinksHome;
