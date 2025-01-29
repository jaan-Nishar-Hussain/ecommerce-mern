import React from "react";
import { useCart } from "./cartContext";

const Order = () => {
  const { orderHistory } = useCart(); // Access order history from CartContext

  if (orderHistory.length === 0) {
    return <p className="text-center">You have no past orders.</p>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Order History</h1>
      <div className="space-y-4">
        {orderHistory.map((order, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Order Date: {order.orderDate}</h2>
            <div className="space-y-2">
              {order.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-md font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-2">
              Status: <span className="font-medium text-green-500">{order.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;