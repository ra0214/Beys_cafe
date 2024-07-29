import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    width: 100%;
    justify-items: center;
  }
  
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .product-details {
    margin-top: 0.5rem;
    text-align: center;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: blue;
  margin: 2rem 0;
`;

function ImagenesOptionMenu() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
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
        const startIndex = data.findIndex(product => product.name === 'Frappe');
        const filteredProducts = data.slice(startIndex, startIndex + 5);
        setProducts(filteredProducts);
        setQuantities(new Array(filteredProducts.length).fill(0));
      } catch (error) {
        console.error('Error durante la obtención de productos:', error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) newQuantities[index]--;
    setQuantities(newQuantities);
  };

  const handleSubmitOrder = async () => {
    const client_id = 1;
    const status = 'en preparación';
    const selectedProducts = products.reduce((acc, product, index) => {
      if (quantities[index] > 0) {
        acc[product.product_id] = quantities[index];
      }
      return acc;
    }, {});
    const total = products.reduce((sum, product, index) => {
      return sum + product.price * quantities[index];
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
      setQuantities(new Array(products.length).fill(0));
    } catch (error) {
      console.error('Error durante la creación de la orden:', error);
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={product.product_id} className="product-card">
            <img src={product.image_url} alt={product.description || ''} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button 
                  onClick={() => handleDecrement(index)} 
                  className="px-2 py-1 bg-[#6E5B54] text-white rounded"
                >-</button>
                <span className="px-2">{quantities[index]}</span>
                <button 
                  onClick={() => handleIncrement(index)} 
                  className="px-2 py-1 bg-[#6E5B54] text-white rounded"
                >+</button>
              </div>
              <Button 
                text="Agregar" 
                onClick={handleSubmitOrder} 
                className="mt-2 w-full bg-blue-500 text-white" 
              />
            </div>
          </div>
        ))}
      </div>
      <Line />
      {/* Otros contenidos de la página, como las imágenes redondas */}
    </Container>
  );
}

export default ImagenesOptionMenu;

