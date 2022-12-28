import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import useDarkMode from "../hooks/useDarkMode";

export default function App({ Component, pageProps }: AppProps) {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  return (
    <Layout dark={isDarkMode}>
      <Component {...pageProps} />
    </Layout>
  );
}
