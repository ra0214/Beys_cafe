import React, { useState } from 'react';
import Button from './Button';

function ProductCard({ product, onAdd, onRemove }) {

  console.log(product)
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    onAdd(product, 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onRemove(product, 1);
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-md bg-white w-64 h-80 flex flex-col mb-4">
      <img
        src={product.url}
        alt={product.product_name}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold truncate">{product.product_name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <div className="flex items-center justify-between mt-auto">
        <Button text="-" onClick={handleRemove} className="bg-red-500 text-white" />
        <span>{quantity}</span>
        <Button text="+" onClick={handleAdd} className="bg-green-500 text-white" />
      </div>
    </div>
  );
}

export default ProductCard;
