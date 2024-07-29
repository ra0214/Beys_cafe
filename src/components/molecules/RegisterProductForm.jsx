import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function RegisterProductForm() {
  const [product_name, setProduct_name] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChangeProduct_name = (e) => {
    setProduct_name(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleChangeStock = (e) => {
    setStock(e.target.value);
  };

  const handleProductImage = (e) => {
    setProductImage(e.target.files[0]); // Guarda el archivo en el estado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const created_by = 'admin';
    const updated_by = 'admin';
    const deleted = 0;

    const formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('productImage', productImage);
    formData.append('created_by', created_by);
    formData.append('updated_by', updated_by);
    formData.append('deleted', deleted);

    try {
      const response = await fetch('http://3.91.162.19/api/product', {
        method: 'POST',
        body: formData, // Enviar FormData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar el producto');
      }

      const data = await response.json();
      setSuccess('Registro exitoso.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Nombre de Producto" value={product_name} onChange={handleChangeProduct_name} />
      <Input type="text" placeholder="Precio" value={price} onChange={handleChangePrice} />
      <Input type="text" placeholder="Stock" value={stock} onChange={handleChangeStock} />
      <input 
        type="file" 
        onChange={handleProductImage} 
        className="border rounded p-2" 
      />
      <Button text="Agregar Producto" type="submit" className="w-full bg-yellow-700" />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
    </form>
  );
}

export default RegisterProductForm;
