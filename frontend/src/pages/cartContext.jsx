import React, { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orderHistory, setOrderHistory] = useState(() => {
    const savedOrders = localStorage.getItem("orderHistory");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Add a new item or increase quantity if it exists
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.name === item.name);
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Increase the quantity of an item
  const increaseQuantity = (itemName) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Decrease the quantity of an item
  const decreaseQuantity = (itemName) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.name === itemName && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity is 0
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Remove an item from the cart
  const removeFromCart = (itemName) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.name !== itemName);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Save the completed order to order history
  const completeOrder = () => {
    if (cart.length > 0) {
      const newOrder = {
        id: Date.now(),
        items: cart,
        orderDate: new Date().toLocaleDateString(),
        status: "Processing",
      };
      const newOrderHistory = [...orderHistory, newOrder];
      setOrderHistory(newOrderHistory);
      localStorage.setItem("orderHistory", JSON.stringify(newOrderHistory));
      clearCart(); // Clear the cart after an order is placed
    }
  };

  // Calculate total price of the cart based on quantities
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price); // Ensure price is a number
      if (!isNaN(price)) {
        return total + price * item.quantity;
      }
      return total;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orderHistory, // Provide the order history
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        completeOrder, // Method to complete the order
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};