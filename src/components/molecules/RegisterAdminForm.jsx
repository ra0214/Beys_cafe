import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function RegisterAdminForm() {
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [celphone, setCelphone] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChangeFullname = (e) => {
    setFullname(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCelphone = (e) => {
    setCelphone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const role_id_fk = 2;
    const created_by = 'admin';
    const updated_by = 'admin';
    const deleted = 0;

    try {
      const response = await fetch(`http://3.91.162.19/api/client`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ fullname, password, email, celphone, role_id_fk, created_by, updated_by, deleted }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrarse');
      }

      const data = await response.json();
      setSuccess('Registro exitoso. ¡Bienvenido!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Nombre Completo" value={fullname} onChange={handleChangeFullname} />
      <Input type="password" placeholder="Contraseña" value={password} onChange={handleChangePassword} />
      <Input type="email" placeholder="Email" value={email} onChange={handleChangeEmail} />
      <Input type="tel" placeholder="Número de Télefono" value={celphone} onChange={handleChangeCelphone} />
      <Button text="Registrarse" type="submit" className="w-full bg-yellow-700" />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
    </form>
  );
}

export default RegisterAdminForm;
