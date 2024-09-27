import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initiatePayment } from './customerService';
import { loadStripe } from '@stripe/stripe-js'; 
import Navbar from '../indexJs/navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Payment = () => {
  const apiURL = 'http://localhost:3000/api/stripe';

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerId = searchParams.get('customerId');
  const prizeAmount = Number(searchParams.get('prizeAmount'));

  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const handlePayment = async () => {
      try {
        const response = await initiatePayment(customerId, prizeAmount);
        setPaymentStatus(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (customerId && prizeAmount) {
      handlePayment();
    }
  }, [customerId, prizeAmount]);

  const makePayment = async () => {
    try {
      const stripe = await loadStripe("pk_test_51P9W2TJY1ZtideJdzRpA4DGOCP12agTUZ18S9buUmToO9abiEjdKvRDgI1PFnRmPxzlzJJPTWRSqvUBopbRDcIVZ00csp53igu");
      const body = {
        products: { prizeAmount: prizeAmount },
        success_url: 'http://localhost:3001/success', // Replace with your success URL
      };
      const headers = {
        "Content-Type": "application/json"
      };
      const response = await fetch(`${apiURL}/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });
    
      if (!response.ok) {
        throw new Error(`Failed to create checkout session: ${response.statusText}`);
      }
      
      const session = await response.json();
      // Redirect to the checkout page using the session ID
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };
  
  return (
    <>
      <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" logoLight={true} />
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="bg-light p-4 rounded-3 shadow-sm">
                <h2 className="display-4 mb-4">Proceed to Payment to Complete the Challenge Submission!</h2>
                <p className="lead mb-4">
                  To finalize your challenge submission, please click the button below to make your payment securely. Thank you!
                </p>
                <button
                  className="btn btn-success btn-lg"
                  style={{ width: '100%' }}
                  onClick={makePayment}
                >
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div style={{ position: 'relative', height: '100vh' }}>
            <video
              className="background-video"
              src="/img/images/payment.mp4"
              autoPlay
              muted
              loop
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
