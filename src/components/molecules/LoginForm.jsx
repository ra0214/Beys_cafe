import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function LoginForm({ onSubmit, formData, setFormData }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <Button text="Iniciar Sesión" type="submit" className="w-full bg-gray-500" />
    </form>
  );
}

export default LoginForm;
