import type { AppProps } from "next/app";
import { Ubuntu } from "@next/font/google";
import Layout from "../components/layout";
import "../sass/main.scss";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={ubuntu.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
