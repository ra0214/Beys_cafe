import React, { useState } from 'react';
import { pilaOptionMenu, pilaOptionMenu1 } from "../../data/Background";

function ImagenesOptionMenu() {
  const [quantities, setQuantities] = useState(pilaOptionMenu.map(() => 0));

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
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-3 justify-items-center w-full">
        {pilaOptionMenu.map((item, index) => (
          <div key={index} className='w-full flex flex-col items-center'>
            <a href={item.link} className='w-full flex justify-center'>
              <div className="w-[80%] rounded-full flex justify-center items-center">
                <img src={item.image} alt={item.description || ''} className="rounded-full w-[80%] h-[80%]" />
              </div>
            </a>
            <div className="flex items-center space-x-2 mt-2">
              <button 
                onClick={() => handleDecrement(index)} 
                className="px-2 py-1 bg-[#6E5B54] text-white rounded"
              >-</button>
              <span className="px-2">{quantities[index]}</span>
              <button 
                onClick={() => handleIncrement(index)} 
                className="px-2 py-1 bg-[#6E5B54] text-white rounded"
              >+</button>
            </div>
            <button 
              className="mt-2 px-4 py-2 bg-[#BF9F88] text-white rounded"
            >Agregar</button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 justify-items-center w-[80%] gap-4">
        {pilaOptionMenu1.map((item, index) => (
          <div key={index} className='w-full flex flex-col items-center'>
            <a href={item.link} className='w-full flex justify-center'>
              <div className="w-[100%] rounded-full flex justify-center items-center">
                <img src={item.image} alt={item.description || ''} className="rounded-full w-[55%] h-[100%]" />
              </div>
            </a>
            <div className="flex items-center space-x-2 mt-2">
              <button 
                onClick={() => handleDecrement(index)} 
                className="px-2 py-1 bg-[#6E5B54] text-white rounded"
              >-</button>
              <span className="px-2">{quantities[index]}</span>
              <button 
                onClick={() => handleIncrement(index)} 
                className="px-2 py-1 bg-[#6E5B54] text-white rounded"
              >+</button>
            </div>
            <button 
              className="mt-2 px-4 py-2 bg-[#BF9F88] text-white rounded"
            >Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagenesOptionMenu;
