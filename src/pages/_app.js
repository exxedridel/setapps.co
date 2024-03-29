import Head from "next/head";
import AppContext from "@/context/AppContext";
import useAppState from "@/hooks/useAppState";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const appState = useAppState();
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#383838" />
        <meta name="msapplication-TileColor" content="#f5f5f5" />
        <meta name="theme-color" content="#000408" />
      </Head>

      <AppContext.Provider value={appState}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppContext.Provider>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
    </>
  );
}
