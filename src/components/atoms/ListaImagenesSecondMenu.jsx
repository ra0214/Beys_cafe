import React from 'react';
import { listaSecondMenu } from "../../data/Background";

function ListaImagenesSecondMenu() {
  return (
    <div className="grid grid-cols-3 justify-items-center w-full mt-[-8%]">
      {listaSecondMenu.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.description || ''}
          className="rounded-[100%] w-[70%] h-[80%] m-4"
        />
      ))}
    </div>
  );
}

export default ListaImagenesSecondMenu;
