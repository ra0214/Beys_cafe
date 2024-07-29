import React, { useEffect, useState } from 'react';
import ProductCard from '../atoms/ProductCard';
import Button from '../atoms/Button';

function ImagenesSecondMenu() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://3.91.162.19/api/product', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error en la respuesta:', errorData);
          throw new Error(errorData.message || 'Error al obtener los productos');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error durante la obtención de productos:', error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = (product, quantity) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [product.product_id]: (prev[product.product_id] || 0) + quantity,
    }));
  };

  const handleRemoveProduct = (product, quantity) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [product.product_id]: Math.max((prev[product.product_id] || 0) - quantity, 0),
    }));
  };

  const handleSubmitOrder = async () => {
    const client_id = 1; // Debe obtenerse del contexto o de la sesión del usuario
    const status = 'en preparación';
    const total = Object.keys(selectedProducts).reduce((sum, productId) => {
      const product = products.find((p) => p.product_id === parseInt(productId, 10));
      return sum + product.price * selectedProducts[productId];
    }, 0);

    try {
      const response = await fetch('http://3.91.162.19/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ client_id, status, total, products: selectedProducts }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la respuesta:', errorData);
        throw new Error(errorData.message || 'Error al crear la orden');
      }

      const data = await response.json();
      console.log('Orden creada exitosamente:', data);
      // Resetear el estado después de crear la orden
      setSelectedProducts({});
    } catch (error) {
      console.error('Error durante la creación de la orden:', error);
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 justify-items-center w-full mb-8 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.product_id}
            product={product}
            onAdd={handleAddProduct}
            onRemove={handleRemoveProduct}
          />
        ))}
      </div>
      <Button text="Agregar" onClick={handleSubmitOrder} className="w-full bg-blue-500 text-white" />
    </div>
  );
}

export default ImagenesSecondMenu;
