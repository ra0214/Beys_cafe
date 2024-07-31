import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://3.91.162.19/api/client/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ fullname, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la respuesta:', errorData);
        throw new Error(errorData.message || 'Error en el inicio de sesión');
      }

      const data = await response.json();
      console.log('Inicio de sesión exitoso:', data);
      localStorage.setItem('token', data.token);

      if (data.role_id_fk === 1) {
        if (data.fullname) {
          localStorage.setItem("name", data.fullname);
        }
        navigate('/home');
      } else if (data.role_id_fk === 2) {
        navigate('/admin');
      } else {
        console.error('Rol desconocido:', data.role_id_fk);
        setError('Rol desconocido');
      }

    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Nombre Completo" value={fullname} onChange={handleChangeFullname} />
      <Input type="password" placeholder="Contraseña" value={password} onChange={handleChangePassword} />
      <Button text="Iniciar Sesión" type="submit" className="w-full bg-yellow-700" />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <p className="text-center">
        No tienes sesión, <Link to="/register" className="text-blue-500 underline">crea una aquí</Link>
      </p>
    </form>
  );
}

export default LoginForm;
