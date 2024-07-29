import React, { useState } from 'react';
import RegisterProductForm from '../molecules/RegisterProductForm';

function RegisterProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Registrar nuevo Producto</h2>
      <RegisterProductForm/>
    </div>
  );
}

export default RegisterProductCard;
