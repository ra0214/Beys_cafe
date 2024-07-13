import React from 'react';
import { lista } from "../../data/Background";

function ListaImagenesMenu() {
  return (
    <div className="grid grid-cols-3 justify-items-center w-full mt-[4%]">
      {lista.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.description || ''}
          className="rounded-[100%] w-[70%] h-[80%]"
        />
      ))}
    </div>
  );
}

export default ListaImagenesMenu;