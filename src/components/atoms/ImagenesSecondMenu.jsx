import React from 'react';
import { pilaSecondMenu } from "../../data/Background";

function ImagenesSecondMenu() {
  return (
    <div className="grid grid-cols-3 justify-items-center w-full">
      {pilaSecondMenu.map((item, index) => (
        <a key={index} href={item.link} className='w-full flex justify-center'>
          <div className='w-[80%] rounded-full'>
            <img key={index} src={item.image} alt={item.description || ''} className="rounded-[100%] w-[80%] h-[75%]" />
          </div>
        </a>
      ))}
    </div>
  );
}

export default ImagenesSecondMenu;
