
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../../styles/checkoutform.css";

// CheckoutForm component - handles Stripe payment processing
const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    // Simulate fetching a payment intent from your backend
    const response = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: parseFloat(amount) * 100 }), // Convert amount to cents
    });

    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setPaymentMessage(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      setPaymentMessage("Payment successful!");
    }

    setIsProcessing(false);
  };

  return (

<form onSubmit={handleSubmit} className="checkout-form">
  <div className="card-element-wrapper">
    <CardElement options={{ hidePostalCode: true }} />
  </div>
  <button type="submit" className="pay-button" disabled={!stripe || isProcessing}>
    {isProcessing ? "Processing..." : "Pay"}
  </button>
  {paymentMessage && <p className={`payment-message ${paymentMessage.includes('error') ? 'error' : ''}`}>{paymentMessage}</p>}
</form>


    
  );
};

// PaymentAmountForm component - asks user for the amount to be paid
const PaymentAmountForm = ({ onAmountSubmit }) => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmitAmount = (e) => {
    e.preventDefault();
    if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
      onAmountSubmit(amount); // Pass the amount to the parent
    } else {
      alert("Please enter a valid amount");
    }
  };

  return (
    <form class="payment-form" onSubmit={handleSubmitAmount}>
  <input
    type="number"
    value={amount}
    onChange={handleAmountChange}
    placeholder="Enter amount"
    min="1"
    step="0.01"
    class="payment-input"
  />
  <button type="submit" class="payment-button">Proceed to Payment</button>
</form>

  );
};

// PaymentMethod component - handles flow of entering amount and processing payment
const PaymentMethod = () => {
  const [amount, setAmount] = useState(null);

  const handleAmountSubmit = (amount) => {
    setAmount(amount); // Save amount when user submits
  };

  return (
    <div>
      {amount === null ? (
        <PaymentAmountForm onAmountSubmit={handleAmountSubmit} />
      ) : (
        <CheckoutForm amount={amount} />
      )}
    </div>
  );
};

export default PaymentMethod;