import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import PayPalButton from "../PaypalButton/PaypalButton";

export const Home = () => {
    const [{ isPending, isResolved, error }] = usePayPalScriptReducer();

    return (
        <>
        {isPending && <div>Loading PayPal script...</div>}
        {isResolved && <div>PayPal script loaded!</div>}
        {error && <div>Failed to load PayPal script: {error.message}</div>}
        {/* Render your PayPal buttons or other PayPal components here */}
        <PayPalButton>Thanh Toan</PayPalButton>
        </>
    );
}