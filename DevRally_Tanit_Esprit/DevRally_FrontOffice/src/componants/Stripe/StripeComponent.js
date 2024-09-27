import React, { useState } from 'react';
import axios from 'axios';
import CustomerCreate from './CustomerCreate';
import Payment from './Payment';

const StripeComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethodId, setPaymentMethodId] = useState('');
  const [amount, setAmount] = useState('');
  const [customerId, setCustomerId] = useState(null);

  const createCustomer = async () => {
    try {
      const response = await axios.post('/api/stripe/createcustomer', {
        name,
        email,
        paymentMethodId,
      });
      console.log(response.data);
      setCustomerId(response.data.customerId);
    } catch (error) {
      console.error(error);
    }
  };

  const makePayment = async () => {
    try {
      const response = await axios.post('/api/stripe/makepayment', {
        customerId,
        amount,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    React.createElement('section', { className: 'team-details-area pt-130 pb-100' },
      React.createElement('div', { className: 'container' },
        React.createElement(CustomerCreate, null),
        customerId && React.createElement(Payment, { customerId: customerId })
      )
    )
  );
};

export default StripeComponent;
