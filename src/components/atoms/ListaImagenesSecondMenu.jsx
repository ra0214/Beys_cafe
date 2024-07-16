import React from 'react';
import { listaSecondMenu } from "../../data/Background";

function ListaImagenesSecondMenu() {
  return (
    <div className="grid grid-cols-3 justify-items-center w-full mt-[5%]">
      {listaSecondMenu.map((item, index) => (
        <a key={index} href={item.link} className='w-full flex justify-center'>
          <div className='w-[80%] rounded-full'>
            <img key={index} src={item.image} alt={item.description || ''} className="rounded-[100%] w-[80%] h-[80%]" />
          </div>
        </a>
      ))}
    </div>
  );
}

export default ListaImagenesSecondMenu;
