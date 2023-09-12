import Navbar from "@/components/Navbar";
import { CartProvider } from "@/store/CartContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
