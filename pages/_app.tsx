import type { AppProps } from "next/app";
import Head from "next/head";
import "@styles/globals.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
