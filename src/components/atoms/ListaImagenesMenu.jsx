import React, { useEffect, useState } from "react";
import ProductCard from "../atoms/ProductCard";
import Button from "../atoms/Button";
import Carrito from "./Carrito";

function ListaImagenesMenu() {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState({});
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://3.91.162.19/api/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error en la respuesta:", errorData);
          throw new Error(
            errorData.message || "Error al obtener los productos"
          );
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error durante la obtención de productos:", error);
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
      [product.product_id]: Math.max(
        (prev[product.product_id] || 0) - quantity,
        0
      ),
    }));
  };

  const handleSubmitOrder = async () => {
    const client_id = 1; // Debe obtenerse del contexto o de la sesión del usuario
    const status = "en preparación";
    const total = Object.keys(selectedProducts).reduce((sum, productId) => {
      const product = products.find(
        (p) => p.product_id === parseInt(productId, 10)
      );
      return sum + product.price * selectedProducts[productId];
    }, 0);

    try {
      const response = await fetch("http://3.91.162.19/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          client_id,
          status,
          total,
          products: selectedProducts,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en la respuesta:", errorData);
        throw new Error(errorData.message || "Error al crear la orden");
      }

      const data = await response.json();
      console.log("Orden creada exitosamente:", data);
      // Resetear el estado después de crear la orden
      setSelectedProducts({});
    } catch (error) {
      console.error("Error durante la creación de la orden:", error);
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
      <button onClick={() => setIsOpen(true)}>open</button>
    {isOpen && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white rounded-md shadow-lg p-6 relative z-60">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <Carrito
        selectedProducts={selectedProducts}
        products={products}
        handleSubmitOrder={handleSubmitOrder}
      />
    </div>
  </div>
)}

    </div>
  );
}

export default ListaImagenesMenu;
