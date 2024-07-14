import React, { useState } from 'react';
import LoginForm from '../molecules/LoginForm';

function LoginCard() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de inicio de sesión:', formData);
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <LoginForm onSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default LoginCard;
