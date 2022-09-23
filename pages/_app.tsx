import { GlobalStyle, theme } from "@theme/styledSettings";
import { ThemeProvider } from "styled-components";
import { ComponentProps } from "react";
import { AppProps } from "next/app";
import Header from "components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
