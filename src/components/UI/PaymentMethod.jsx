import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Map from "./Map"; // Import the Map component
import "../../styles/payment-method.css";

// Stripe public key
const stripePromise = loadStripe("pk_test_51Q4jiFA8ldMslEQP9vMqVtSdjble5Wi8XIodMp1XmjIk8s6Rr2u6qv6lB64M96Ejth0Y0qKFGXArqpf6sRYgOn1800OCnwjYmx");

const PaymentMethod = () => {
  // State to control whether to show CheckoutForm
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isReserveClicked, setIsReserveClicked] = useState(false);
  const [amount, setAmount] = useState(null);

  // Handle "Reserve Now" button click

  const handleReserveClick = () => {
    console.log("Reserve Now button clicked!");
    setShowCheckoutForm(true); // Show the CheckoutForm
    setIsReserveClicked(true); // Hide the "Reserve Now" button
  };

  const handleAmountSubmit = (amount) => {
    setAmount(amount); // Save amount when user submits
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="payy">
      <div className="section__subtitle">
        <label className="d-flex align-items-center gap-2">
           Stripe Payment
        </label>

        {/* Conditionally render CheckoutForm when Reserve Now is clicked */}
        {showCheckoutForm &&(
          <div className="mt-3">
            <CheckoutForm/> {/* Stripe Checkout Form */}
          </div>
        )}
      </div>

      <div className="payment text-end mt-5">
        {/* Hide the button after it's clicked */}
        {!isReserveClicked && !showCheckoutForm && (
          <button onClick={handleReserveClick}>Reserve Now</button>
        )}
      </div>
      </div>
         {/* Conditionally render Map component at the bottom of the page */}
      {isReserveClicked && (
        <div className="map-container 
        style={{ padding: '20px', margin: '10px 0'}} ">
          <Map /> {/* Map Component */}
        </div>
      )}

    </Elements>
  );
};

export default PaymentMethod;
























//19:01-14/01/25
// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import "../../styles/payment-method.css";

// // Stripe public key
// const stripePromise = loadStripe("pk_test_51Q4jiFA8ldMslEQP9vMqVtSdjble5Wi8XIodMp1XmjIk8s6Rr2u6qv6lB64M96Ejth0Y0qKFGXArqpf6sRYgOn1800OCnwjYmx");

// const PaymentMethod = () => {
//   // State to control whether to show CheckoutForm
//   const [showCheckoutForm, setShowCheckoutForm] = useState(false);
//   const [isReserveClicked, setIsReserveClicked] = useState(false);

//   // Handle "Reserve Now" button click
//   const handleReserveClick = () => {
//     setShowCheckoutForm(true); // Show the CheckoutForm
//     setIsReserveClicked(true); // Hide the "Reserve Now" button
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <div className="payment mt-3">
//         <label className="d-flex align-items-center gap-2">
//           <input type="radio" /> Stripe Payment
//         </label>

//         {/* Conditionally render CheckoutForm when Reserve Now is clicked */}
//         {showCheckoutForm && (
//           <div className="mt-3">
//             <CheckoutForm /> {/* Stripe Checkout Form */}
//           </div>
//         )}
//       </div>

//       <div className="payment text-end mt-5">
//         {/* Hide the button after it's clicked */}
//         {!isReserveClicked && (
//           <button onClick={handleReserveClick}>Reserve Now</button>
//         )}
//       </div>
//     </Elements>
//   );
// };

// export default PaymentMethod;   
