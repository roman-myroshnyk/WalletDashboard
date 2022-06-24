import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Web3 from 'web3';

import Head from 'next/head';
import WalletPageLayout from '@/layouts/WalletPageLayout';
import WalletSearch from '@/organisms/WalletSearch';
import Warning from '@/molecules/Warning';
import ExchangeRate from '@/organisms/ExchangeRate';
import WalletBalance from '@/organisms/WalletBalance';
import { useAppSelector, useAppDispatch } from '@/app/store';
import {
  selectWallet,
  walletActions,
} from '@/app/walletSlice';
import {
  selectExchangeRate,
  exchangeRateActions,
} from '@/app/exchangeRateSlice';

import styles from '@/styles/Page.module.scss';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const web3 = new Web3(Web3.givenProvider);

const WalletPage:NextPage = () => {
  const router = useRouter();
  const { walletAddress } = router.query;
  const dispatch = useAppDispatch();
  const { selectedCurrency } = useAppSelector(selectExchangeRate);
  useEffect(() => {
    try {
      const address = String(walletAddress);
      web3.utils.toChecksumAddress(address);

      dispatch(walletActions.initWallet(address, selectedCurrency.label));
    } catch (e) {
      // TODO redirect to error page;
      void router.push('/');
    }
  }, [dispatch, router, selectedCurrency, walletAddress]);
  useEffect(() => {
    dispatch(exchangeRateActions.initExchangeRate());
  }, [dispatch]);

  const wallet = useAppSelector(selectWallet);
  return (
    <div className={styles.page}>
      <Head>
        <title>Digital Wallet Dashboard</title>
        <meta name="description" content="Digital Wallet Dashboard for Securitize" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WalletPageLayout>
          <WalletSearch />
          <Warning show={wallet.isOld} message="Wallet is old!" />
          <ExchangeRate />
          <WalletBalance />
        </WalletPageLayout>
      </main>
    </div>
  );
};

export default WalletPage;
