import React from 'react';
import { menu } from '../../data/Background';

function FondoMenu() {
  return (
    <div className="w-full flex justify-center">
      {menu.items.map((item, index) => (
         <div key={index} className="w-[96%] mx-2 flex justify-center">
        <img
          key={index}
          src={item.image}
          alt={item.description || ''}
          className="w-[85%] h-[70%] object-cover"
        />
        </div>
      ))}
    </div>
  );
}

export default FondoMenu;
