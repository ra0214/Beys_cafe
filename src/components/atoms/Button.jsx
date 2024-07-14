import React from 'react';

function Button({ text, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-brown-500 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
