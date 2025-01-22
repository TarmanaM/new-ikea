import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
// import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <NavBar />
    <Component {...pageProps} />
    <Footer/>
  </>
  );
}
