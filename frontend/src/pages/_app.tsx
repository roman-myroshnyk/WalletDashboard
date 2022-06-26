/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Header from '@/atoms/Header';
import { Provider } from 'react-redux';
import '@/styles/globals.scss';
import Snackbars from '@/molecules/Snackbars';
import store from '@/app/store';
import Title from '@/atoms/Title';

const MyApp = ({ Component, pageProps }:AppProps) => (
  <Provider store={store}>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Digital Wallet Dashboard</title>
      <link rel="manifest" href="/manifest.json" />
      <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <meta name="theme-color" content="#111" />
    </Head>
    <Header>
      <Title>
        Digital Wallet Dashboard
      </Title>
    </Header>
    <AnimatePresence initial>
      <Component {...pageProps} />
    </AnimatePresence>
    <Snackbars />
  </Provider>
);

export default MyApp;
