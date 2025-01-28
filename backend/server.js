const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = Stripe('sk_test_51QmEMnDgcDxViKXPqiohjLTT3MSehxYKiX0D5OEPXL7RFLC8WaPNqfmAgPczYpx06327vutInpNBpg8t8PlVVEEz00yV39b8rB'); // Replace with your actual Stripe secret key

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});