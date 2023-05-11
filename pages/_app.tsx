import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { NextPage } from "next";
import { type } from "os";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayouts = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayouts) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
