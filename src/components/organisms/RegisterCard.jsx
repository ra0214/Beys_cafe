import React, { useState } from 'react';
import RegisterForm from '../molecules/RegisterForm';

function RegisterCard() {
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Registrarse</h2>
      <RegisterForm/>
    </div>
  );
}

export default RegisterCard;
