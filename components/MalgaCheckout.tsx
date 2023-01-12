import Dynamic from "next/dynamic";

const MalgaCheckoutWebComponent = Dynamic(
  () => import("@malga-checkout/react"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export function MalgaCheckout() {
  return (
    <MalgaCheckoutWebComponent
      sandbox
      publicKey="<YOUR_PUBLIC_KEY>"
      clientId="<YOUR_CLIENT_ID>"
      merchantId="<YOUR_MERCHANT_ID>"
      paymentMethods={{
        pix: {
          expiresIn: 600,
        },
        credit: {
          installments: {
            quantity: 1,
            show: true,
          },
          checkedSaveCard: false,
          showCreditCard: true,
        },
        boleto: {
          expiresDate: "2022-12-31",
          instructions: "Instruções para pagamento do boleto",
          interest: {
            days: 1,
            amount: 100,
          },
          fine: {
            days: 2,
            amount: 200,
          },
        },
      }}
      transactionConfig={{
        statementDescriptor: "#1 Demonstration Malga Checkout",
        amount: 100,
        description: "",
        orderId: "",
        customerId: "<CUSTOMER_ID>",
        currency: "BRL",
        capture: false,
      }}
      dialogConfig={{
        show: true,
        actionButtonLabel: "Continuar",
        errorActionButtonLabel: "Tentar novamente",
        successActionButtonLabel: "Continuar",
        successRedirectUrl: "https://www.malga.io/",
      }}
      onPaymentSuccess={(data) => {
        // Your specifications here
        console.log(data);
      }}
      onPaymentFailed={(error) => {
        // Your specifications here
        console.log(error);
      }}
    />
  );
}
