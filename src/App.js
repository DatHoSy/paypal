import './App.css';
import { Home } from './components/Home/Home';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


function App() {
  const initialOptions = {
    "client-id": "AU5kgjXC_8Mm4F3xc3InzNSXPEkrAEKI3wAOCTiHBGRzPHMrvZEZe8QLi8xu0_3R9ijUNB9LiEVh7rAB",
    currency: "USD",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Home />
    </PayPalScriptProvider>
  );
}

export default App;
