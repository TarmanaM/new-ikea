import NavBar from "@/components/Fragments/Navbar";
// import Footer from "@/components/Layouts/Footer";
// import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <NavBar />
    <Component {...pageProps} />
    {/* <Footer/> */}
  </>
  );
}
