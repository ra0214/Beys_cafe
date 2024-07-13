import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavLinksMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl focus:outline-none"
      >
        &#9776;
      </button>
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } text-xl gap-8 items-center md:flex md:flex-row`}
      >
        <Link to="/menu" className="text-black no-underline block py-2 md:py-0">
          Productos
        </Link>
        <div className="bg-[#926D38] items-center p-2 rounded-md block py-2 md:py-0">
          <Link to="/" className="text-white no-underline">
            Salir
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavLinksMenu;
