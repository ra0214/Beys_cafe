import React from 'react';
import { pilaMenu } from "../../data/Background";

function ImagenesSecondMenu() {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-3 w-full">
      {pilaMenu.map((item, index) => (
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

export default ImagenesSecondMenu;
