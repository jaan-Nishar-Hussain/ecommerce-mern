import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load your publishable key from Stripe
const stripePromise = loadStripe('pk_test_51QmEMnDgcDxViKXP0bbKjv6WsqelQvK4dsC43MoIdFrBUcoBbn2jXyphnzHvItfqFyDvLOQdK32frpdx3gvgRPP200FaypmqVK'); // Replace with your actual Stripe publishable key

const StripeProvider = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;