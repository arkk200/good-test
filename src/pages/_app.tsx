import AppLayout from "@/layouts/AppLayout";
import GlobalStyle from "@/styles/globals.style";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
