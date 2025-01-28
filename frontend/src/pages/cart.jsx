import React from "react";
import { useCart } from "./cartContext";
import { useNavigate } from "react-router-dom"; // For page redirection

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, calculateTotal } = useCart();
  const navigate = useNavigate();

  // Handle placing the order and redirecting to checkout
  const handlePlaceOrder = () => {
    navigate("/checkout"); // Redirect to the checkout page
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 mt-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg shadow-md"
            >
              {/* Item Details */}
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decreaseQuantity(item.name)}
                  className="px-2 py-1 bg-gray-200 text-lg font-bold rounded-lg"
                >
                  -
                </button>
                <span className="text-xl bg-gray-100 px-4 py-1 rounded-lg">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(item.name)}
                  className="px-2 py-1 bg-gray-200 text-lg font-bold rounded-lg"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.name)}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          {/* Total Price */}
          <div className="flex justify-between items-center mt-4 text-xl font-bold">
            <p>Total Price:</p>
            <p>₹{calculateTotal().toFixed(2)}</p> {/* Format to 2 decimal places */}
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
