import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Newbalance from "./pages/newbalance";
import Adidas from "./pages/adidas";
import Nike from "./pages/nike";
import Puma from "./pages/puma";
import Allproduct from "./pages/allproduct";
import Cart from "./pages/cart";
import Order from "./pages/order";
import { CartProvider } from "./pages/cartContext";  
import Checkout from './pages/checkout';
import StripeProvider from './pages/StripeProvider'; 

function App() {
  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/puma",
      element: <Puma />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/allproduct",
      element: <Allproduct />,
    },
    {
      path: "/nike",
      element: <Nike />,
    },
    {
      path: "/newbalance",
      element: <Newbalance />,
    },
    {
      path: "/adidas",
      element: <Adidas />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    // Wrap the application with CartProvider and StripeProvider so that context is available to all routes
    <CartProvider>
      <StripeProvider>
        <RouterProvider router={router} />
      </StripeProvider>
    </CartProvider>
  );
}

export default App;