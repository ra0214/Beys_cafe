import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function RegisterForm({ onSubmit, formData, setFormData }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input type="text" placeholder="Nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <Input type="password" placeholder="Contraseña" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
      <Input type='celphone' placeholder="Número de Télefono" value={formData.celphone} onChange={(e) => setFormData({...formData, celphone: e.target.value})}/>
      <Button text="Registrarse" type="submit" className="w-full bg-gray-500" />
    </form>
  );
}

export default RegisterForm;
