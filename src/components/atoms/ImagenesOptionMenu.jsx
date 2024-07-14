import React from 'react';
import { pilaOptionMenu, pilaOptionMenu1} from "../../data/Background";

function ImagenesOptionMenu() {
  return (
    <>
    <div className="grid grid-cols-3 justify-items-center gap-y-3 w-full">
      {pilaOptionMenu.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.description || ''}
          className="rounded-[100%] w-[70%] h-[80%]"
        />
      ))}
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-y-3 w-full">
      {pilaOptionMenu1.map((item, index) => (
        <img key={index} src={item.image} className="rounded-[100%] w-[55%] h-[100%]" />
      ))}
    </div>
    </>
  );
}

export default ImagenesOptionMenu;