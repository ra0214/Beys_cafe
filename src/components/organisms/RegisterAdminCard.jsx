import React, { useState } from 'react';
import RegisterAdminForm from '../molecules/RegisterAdminForm';

function RegisterAdminCard() {
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Registrar nuevo Empleado</h2>
      <RegisterAdminForm/>
    </div>
  );
}

export default RegisterAdminCard;
