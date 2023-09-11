import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Render the navbar component */}
      <Navbar />
      {/* Render the page component */}
      <Component {...pageProps} />
      {/* Render the footer component */}
    </>
  );
}
