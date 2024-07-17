import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function LoginForm() {
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChangeFullname = (e) => {
    setFullname(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_URL}/client/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ fullname, password })
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem('token', data.token);
      navigate('/home');
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Nombre Completo" value={fullname} onChange={handleChangeFullname} />
      <Input type="password" placeholder="Contraseña" value={password} onChange={handleChangePassword} />
      <Button text="Iniciar Sesión" type="submit" className="w-full bg-yellow-700" />
      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
}

export default LoginForm;
