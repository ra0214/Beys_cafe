import React, { useState, useEffect } from "react";
import { useGet } from "../hooks/useGet";

export const Order = () => {
  const { data } = useGet("http://3.91.162.19/api/order");
  const [visibleOrders, setVisibleOrders] = useState([]);

  useEffect(() => {
    if (data) {
      setVisibleOrders(data);
    }
  }, [data]);

  const handleHide = (orderId) => {
    const updatedOrders = visibleOrders.filter((order) => order.order_id !== orderId);
    setVisibleOrders(updatedOrders);
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-xl font-bold mb-4">Órdenes</h1>
        <div className="grid grid-cols-3 p-4 justify-center items-center mb-8 gap-x-2">
          {visibleOrders &&
            visibleOrders.map((order) => (
              <div
                key={order.order_id}
                className="border p-4 rounded-md shadow-md bg-white w-64 h-80 flex flex-col mb-4"
              >
                <h2 className="text-lg font-semibold">{order.description}</h2>
                <p>
                  Nombre de la persona:{" "}
                  <span className="font-medium">{order.fullname}</span>
                </p>
                <p>Status: {order.status}</p>
                <p>Total: ${order.total}</p>
                <div className="mt-2">
                  <h3 className="text-md font-semibold">Ítems:</h3>
                  <ul>
                    {order.items &&
                      order.items.map((item, index) => (
                        <li key={index}>
                          {item.quantity}x {item.product_name}
                        </li>
                      ))}
                  </ul>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => handleHide(order.order_id)}
                >
                  Realizado
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
