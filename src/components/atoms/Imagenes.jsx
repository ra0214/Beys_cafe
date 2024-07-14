import React from 'react';
import { pila } from "../../data/Background";

function Imagenes() {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-3 w-full mt-[2%]">
      {pila.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.description || ''}
          className="rounded-xl w-[85%] h-[85%]"
        />
      ))}
    </div>
  );
}

export default Imagenes;
