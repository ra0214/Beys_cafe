import React from 'react';
import LoginForm from '../molecules/LoginForm';

function LoginCard() {
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <LoginForm />
    </div>
  );
}

export default LoginCard;
