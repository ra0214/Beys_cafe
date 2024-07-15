import React from 'react';
import { pilaSixthOptionMenu, pilaSixthOptionMenu1 } from "../../data/Background";

function ImagenesSixthOptionMenu() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-3 justify-items-center w-full">
        {pilaSixthOptionMenu.map((item, index) => (
          <a key={index} href={item.link} className='w-full flex justify-center'>
            <div className="w-[80%] rounded-full flex justify-center items-center">
              <img src={item.image} alt={item.description || ''} className="rounded-[100%] w-[80%] h-[75%]" />
            </div>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-2 justify-items-center w-[80%] gap-4">
        {pilaSixthOptionMenu1.map((item, index) => (
          <a key={index} href={item.link} className='w-full flex justify-center'>
            <div className="w-[100%] rounded-full flex justify-center items-center">
              <img src={item.image} alt={item.description || ''} className="rounded-[100%] w-[55%] h-[100%]" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ImagenesSixthOptionMenu;