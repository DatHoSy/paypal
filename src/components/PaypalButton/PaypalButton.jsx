import { PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton() {
//   const paypalOptions = {
//     clientId: "YOUR_PAYPAL_CLIENT_ID",
//     currency: "USD",
//     intent: "capture",
//   };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
            amount: {
                currency_code: "USD",
                value: "10.00",
              },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      console.log(details);
    });
  };

  return (
    <PayPalButtons
      createOrder={createOrder}
      onApprove={onApprove}
    //   options={paypalOptions}
    />
  );
}

export default PayPalButton;