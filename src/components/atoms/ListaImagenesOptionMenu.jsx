import React from 'react';
import { listaOptionMenu, listaOptionMenu1 } from "../../data/Background";

function ListaImagenesOptionMenu() {
  return (
    <>
    <div className="grid grid-cols-3 justify-items-center gap-y-3 w-full">
      {listaOptionMenu.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.description || ''}
          className="rounded-[100%] w-[70%] h-[80%]"
        />
      ))}
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-y-3 w-full">
      {listaOptionMenu1.map((item, index) => (
        <img key={index} src={item.image} className="rounded-[100%] w-[55%] h-[100%]" />
      ))}
    </div>
    </>
  );
}

export default ListaImagenesOptionMenu;
