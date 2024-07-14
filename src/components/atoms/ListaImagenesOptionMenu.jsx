import React from 'react';
import { listaOptionMenu, listaOptionMenu1 } from "../../data/Background";

function ListaImagenesOptionMenu() {
  return (
    <div className='felx flex-col items-center w-full mb-8'>
      <div className="grid grid-cols-3 justify-items-center w-full">
        {listaOptionMenu.map((item, index) => (
          <a key={index} href={item.link} className='w-full flex justify-center'>
            <div className='w-[80%] rounded-full flex justify-center items-center'>
            <img src={item.image} alt={item.description ||  ''} className="rounded-[100%] w-[80%] h-[75%]" />
            </div>
            </a>
        ))}
        </div>
        <div className="grid grid-cols-2 justify-items-center w-[80%] gap-4">
        {listaOptionMenu1.map((item, index) => (
          <a key={index} href={item.link} className='w-full flex justify-center'>
            <div className='w-[100%] rounded-full flex justify-end items-center'>
              <img src={item.image} alt={item.description || ''} className="rounded-[100%] w-[55%] h-[100%]" />
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ListaImagenesOptionMenu;
