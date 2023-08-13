import AppLayout from "@/layouts/AppLayout";
import GlobalStyles from "@/styles/globals.style";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
