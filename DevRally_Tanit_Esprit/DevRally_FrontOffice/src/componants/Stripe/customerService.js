var API_URL = 'http://localhost:3000/api/stripe';

function createCustomer(customerData) {
  return fetch(API_URL + '/createcustomer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customerData)
  }).then(function(response) {
    if (!response.ok) {
      throw new Error('Failed to create customer');
    }
    return response.json();
  });
}

function initiatePayment(customerId, amount) {
  return fetch(API_URL + '/makepayment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ customerId: customerId, amount: amount })
  }).then(function(response) {
    if (!response.ok) {
      throw new Error('Failed to initiate payment');
    }
    return response.json();
  });
}
