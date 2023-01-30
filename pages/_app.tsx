import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  const rounter = useRouter();
  return (
    <>
      <AnimatePresence exitBeforeEnter custom="wait">
        <Component {...pageProps} key={rounter.route} />
      </AnimatePresence>
      <Analytics />
    </>
  );
}

export default MyApp;
