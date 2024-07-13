import React from 'react';
import { Link } from 'react-router-dom';

function NavigationButton({ to, children }) {
  return (
    <Link to={to} className="bg-gray-300 text-blue-800 p-2 mx-1 rounded-[20%]">
      {children}
    </Link>
  );
}

export default NavigationButton;