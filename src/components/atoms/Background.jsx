import React from 'react';
import { background } from '../../data/Background';

function Background() {
  return (
    <div className="w-full flex justify-center">
      {background.items.map((item, index) => (
        <div key={index} className="w-[96%] mx-2">
          <img
            src={item.image}
            alt={item.description || ''}
            className="w-[100%] h-[100%] rounded-md"
          />
        </div>
      ))}
    </div>
  );
}

export default Background;
