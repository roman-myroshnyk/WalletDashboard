import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

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
import { validateChecksum } from '@/api/etherscan/utils';
import {
  selectExchangeRate,
  exchangeRateActions,
} from '@/app/exchangeRateSlice';

import styles from '@/styles/Page.module.scss';

const WalletPage:NextPage = () => {
  const router = useRouter();
  const { walletAddress } = router.query;
  const dispatch = useAppDispatch();
  const { selectedCurrency } = useAppSelector(selectExchangeRate);
  useEffect(() => {
    try {
      const checksumAddress = validateChecksum(walletAddress as string);

      dispatch(walletActions.initWallet(checksumAddress, selectedCurrency.label));
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
