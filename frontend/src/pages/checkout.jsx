import React, { useState, useEffect } from "react";
import { useCart } from "./cartContext";
import { useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Checkout = () => {
  const { cart, calculateTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await fetch("http://localhost:3000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: calculateTotal() * 100 }), // Amount in cents
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    };

    if (paymentMethod === "Card") {
      fetchClientSecret();
    }
  }, [paymentMethod, calculateTotal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePayment = async () => {
    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      alert("Please fill in all the details.");
      return;
    }

    if (paymentMethod === "COD") {
      alert("Order placed successfully with Cash on Delivery.");
      clearCart(); // Clear the cart after successful order
      navigate("/order-confirmation");
    } else if (paymentMethod === "Card") {
      setLoading(true);
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: formData.name,
            email: formData.email,
            address: {
              line1: formData.address,
            },
          },
        },
      });

      setLoading(false);

      if (error) {
        alert(error.message);
      } else if (paymentIntent.status === "succeeded") {
        alert("Order placed successfully with Card payment.");
        clearCart(); // Clear the cart after successful order
        navigate("/order-confirmation");
      }
    }
  };

  if (orderSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-bold text-green-500">🎉 Order Successful!</h1>
          <p className="text-gray-600 mt-4">
            Thank you for your purchase, <strong>{formData.name}</strong>! Your order is on its way.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Continue to Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500 mt-4">Your cart is empty. Please add items to proceed.</p>
      ) : (
        <div>
          <div className="space-y-6 mt-4">
            <div className="flex justify-between text-lg font-bold">
              <p>Total Price:</p>
              <p>₹{calculateTotal().toFixed(2)}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Personal Details</h2>
              <div className="space-y-4 mt-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Shipping Address"
                  rows="4"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <label>
                    <input
                      type="radio"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={handlePaymentMethodChange}
                      className="mr-2"
                    />
                    Cash on Delivery
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="Card"
                      checked={paymentMethod === "Card"}
                      onChange={handlePaymentMethodChange}
                      className="mr-2"
                    />
                    Credit/Debit Card
                  </label>
                </div>

                {paymentMethod === "Card" && (
                  <div className="space-y-4 mt-4">
                    <CardElement className="w-full p-3 border rounded-lg" />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handlePayment}
                className="w-full py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600"
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;