import React, { useState } from 'react';
import RegisterForm from '../molecules/RegisterForm';

function RegisterCard() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de registro:', formData);
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Registrarse</h2>
      <RegisterForm onSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default RegisterCard;
