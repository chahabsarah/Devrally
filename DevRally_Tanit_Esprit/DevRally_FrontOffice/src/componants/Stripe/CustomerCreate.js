import React, { useState } from 'react';
import { createCustomer } from './customerService';

function CustomerCreate() {
  var _useState = useState({
    name: '',
    email: '',
    paymentMethodId: ''
  });
  var customerData = _useState[0];
  var setCustomerData = _useState[1];

  var paymentMethods = [
    { name: 'Visa card', id: 'pm_card_visa', imageUrl: './assets/frontOffice/img/stripeimages/visa.jpg' },
    { name: 'Mastercard', id: 'pm_card_mastercard', imageUrl: 'assets/frontOffice/img/stripeimages/mastercard.jpg' },
    { name: 'American Express', id: 'pm_card_amex', imageUrl: 'assets/frontOffice/img/stripeimages/amex.jpg' },
    { name: 'Discover', id: 'pm_card_discover', imageUrl: 'assets/frontOffice/img/stripeimages/discover.jpg' },
    { name: 'JCB', id: 'pm_card_jcb', imageUrl: 'assets/frontOffice/img/stripeimages/jcb.jpg' },
    { name: 'Diners Club', id: 'pm_card_diners', imageUrl: 'assets/frontOffice/img/stripeimages/diners.jpg' },
    { name: 'UnionPay', id: 'pm_card_unionpay', imageUrl: 'assets/frontOffice/img/stripeimages/unionpay.jpg' }
  ];

  function handleSubmit(e) {
    e.preventDefault();
    createCustomer(customerData)
      .then(function(response) {
        // Redirect to the payment page using window.location
        window.location.href = '/payment?customerId=' + response.customerId;
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement('h2', { className: 'title' }, 'Create Customer'),
    React.createElement(
      'div',
      { className: 'col' },
      React.createElement(
        'div',
        { className: 'col-md-6' },
        React.createElement(
          'div',
          { className: 'form-grp' },
          React.createElement('label', null, 'Name:'),
          React.createElement('input', {
            style: {
              height: '37px',
              borderStyle: 'solid',
              borderColor: '#A1AFE6',
              borderWidth: '1px',
              borderRadius: '5px'
            },
            className: 'form-control',
            type: 'text',
            value: customerData.name,
            onChange: function(e) {
              return setCustomerData(Object.assign({}, customerData, { name: e.target.value }));
            },
            required: true
          })
        )
      ),
      React.createElement(
        'div',
        { className: 'col-md-6' },
        React.createElement(
          'div',
          { className: 'form-grp' },
          React.createElement('label', null, 'Email:'),
          React.createElement('input', {
            style: {
              height: '37px',
              borderStyle: 'solid',
              borderColor: '#A1AFE6',
              borderWidth: '1px',
              borderRadius: '5px',
              marginBottom: '20px'
            },
            className: 'form-control',
            type: 'email',
            value: customerData.email,
            onChange: function(e) {
              return setCustomerData(Object.assign({}, customerData, { email: e.target.value }));
            },
            required: true
          })
        )
      ),
      React.createElement(
        'div',
        { className: 'col-md-6' },
        React.createElement(
          'div',
          { className: 'form-grp' },
          React.createElement('label', null, 'Payment Method:'),
          React.createElement(
            'select',
            {
              value: customerData.paymentMethodId,
              onChange: function(e) {
                return setCustomerData(Object.assign({}, customerData, { paymentMethodId: e.target.value }));
              },
              required: true,
              style: {
                height: '37px',
                borderStyle: 'solid',
                borderColor: '#A1AFE6',
                borderWidth: '1px',
                borderRadius: '5px'
              }
            },
            paymentMethods.map(function(method) {
              return React.createElement(
                'option',
                { key: method.id, value: method.id },
                React.createElement('img', {
                  src: method.imageUrl,
                  alt: method.name,
                  style: { width: '30px', marginRight: '10px' }
                }),
                method.name
              );
            })
          )
        )
      ),
      React.createElement(
        'button',
        {
          type: 'submit',
          className: 'btn',
          style: { width: '100px', backgroundColor: 'pink', color: 'darkblue', marginTop: '25px' }
        },
        'Submit'
      )
    )
  );
}

export default CustomerCreate;
