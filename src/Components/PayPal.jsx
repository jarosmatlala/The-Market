import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPal = () => {
  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transaction completed by ${details.payer.name.given}`);
    });
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "ASPEr5TF-ZceEnWq3RLr-WT26jYQ1uZtgb_ej-iNNbRJe_vrT_06Q2Cb1QEddx-8tf-l1U8QU7o77tiG" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '0.01', 
              },
            }],
          });
        }}
        onApprove={handleApprove}
      />
    </PayPalScriptProvider>
  );
};

export default PayPal;
