import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Header from '@/atoms/Header';
import Title from '@/atoms/Title';
import '@/styles/globals.scss';

import store from '@/app/store';

const MyApp = ({ Component, pageProps }:AppProps) => (
  <Provider store={store}>
    <Header>
      <Title>
        Digital Wallet Dashboard
      </Title>
    </Header>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
