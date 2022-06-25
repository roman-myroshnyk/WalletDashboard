import { NextPage, GetServerSideProps } from 'next';
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
import { validateChecksum, isValidAddress } from '@/api/etherscan/utils';
import {
  selectExchangeRate,
  exchangeRateActions,
} from '@/app/exchangeRateSlice';

import styles from '@/styles/Page.module.scss';

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const { walletAddress } = context.query;
    isValidAddress(walletAddress as string);
    const checksumAddress = validateChecksum(walletAddress as string);
    if (checksumAddress !== walletAddress) {
      context.res.setHeader('location', `/wallet/${checksumAddress}`);
      context.res.statusCode = 302;
      context.res.end();
    }
  } catch (e) {
    context.res.setHeader('location', '/');
    context.res.statusCode = 302;
    context.res.end();
  }
  return {
    props: {},
  };
};

const WalletPage:NextPage = () => {
  const router = useRouter();
  const { walletAddress } = router.query;
  const dispatch = useAppDispatch();
  const { selectedCurrency } = useAppSelector(selectExchangeRate);
  useEffect(() => {
    dispatch(walletActions.initWallet(walletAddress as string, selectedCurrency.label));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(exchangeRateActions.initExchangeRate());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
