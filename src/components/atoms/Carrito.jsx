import React from 'react';

function Carrito({ selectedProducts, products, handleSubmitOrder }) {
  const cartItems = Object.keys(selectedProducts).map((productId) => {
    const product = products.find((p) => p.product_id === parseInt(productId, 10));
    return { ...product, quantity: selectedProducts[productId] };
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 border rounded-md shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product_id} className="mb-2">
              {item.product_name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 gap-x-4">
        <p className="text-lg font-semibold">Total: ${total}</p>
        <button
          onClick={handleSubmitOrder}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Realizar Pedido
        </button>
      </div>
    </div>
  );
}

export default Carrito;