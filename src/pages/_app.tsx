import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '../../globalStyles';

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

export default MyApp;
