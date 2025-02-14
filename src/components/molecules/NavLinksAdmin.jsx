import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavLinksAdmin() {
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
        <Link to="/register-product" className="text-black no-underline block py-2 md:py-0">
          Agregar Producto
        </Link>
        <Link to="/admin" className="text-black no-underline block py-2 md:py-0">
          Agregar Empleado
        </Link>
        <Link to="/orders" className="text-black no-underline block py-2 md:py-0">
          View orders
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

export default NavLinksAdmin;
