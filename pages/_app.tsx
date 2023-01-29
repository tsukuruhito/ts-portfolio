import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const rounter = useRouter();
  return (
    <AnimatePresence exitBeforeEnter initial={false} custom="wait">
      <Component {...pageProps} key={rounter.route} />
    </AnimatePresence>
  );
}

export default MyApp;
