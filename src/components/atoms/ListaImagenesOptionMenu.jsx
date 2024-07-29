import React, { useState } from 'react';
import { listaOptionMenu, listaOptionMenu1 } from "../../data/Background";

function ListaImagenesOptionMenu() {
  const [quantities, setQuantities] = useState(listaOptionMenu.map(() => 0));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) newQuantities[index]--;
    setQuantities(newQuantities);
  };

  return (
    <div className='flex flex-col items-center w-full mb-8'>
      <div className="grid grid-cols-3 justify-items-center w-full">
        {listaOptionMenu.map((item, index) => (
          <div key={index} className='w-full flex flex-col items-center'>
            <a href={item.link} className='w-full flex justify-center'>
              <div className='w-[80%] rounded-full flex justify-center items-center'>
                <img src={item.image} alt={item.description ||  ''} className="rounded-[100%] w-[80%] h-[75%]" />
              </div>
            </a>
            <div className="flex items-center space-x-2 mt-2">
              <button onClick={() => handleDecrement(index)}>-</button>
              <span>{quantities[index]}</span>
              <button onClick={() => handleIncrement(index)}>+</button>
            </div>
            <button className="mt-2">Agregar</button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 justify-items-center w-[80%] gap-4">
        {listaOptionMenu1.map((item, index) => (
          <div key={index} className='w-full flex flex-col items-center'>
            <a href={item.link} className='w-full flex justify-center'>
              <div className='w-[100%] rounded-full flex justify-end items-center'>
                <img src={item.image} alt={item.description || ''} className="rounded-[100%] w-[55%] h-[100%]" />
              </div>
            </a>
            <div className="flex items-center space-x-2 mt-2">
              <button onClick={() => handleDecrement(index)}>-</button>
              <span>{quantities[index]}</span>
              <button onClick={() => handleIncrement(index)}>+</button>
            </div>
            <button className="mt-2">Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaImagenesOptionMenu;
