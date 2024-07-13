import React from 'react';
import { lista } from "../../data/Background";

function ListaImagenes() {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-3 w-full">
      {lista.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.description || ''}
          className="rounded-xl w-[90%] h-[90%]"
        />
      ))}
    </div>
  );
}

export default ListaImagenes;
