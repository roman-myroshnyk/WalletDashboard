import { NextPage, GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// app
import { useAppSelector, useAppDispatch } from '@/app/store';
import {
  selectExchangeRate,
  exchangeRateActions,
} from '@/app/exchangeRateSlice';
import {
  selectWallet,
  walletActions,
} from '@/app/walletSlice';
// components
import Head from 'next/head';
import Warning from '@/molecules/Warning';
import WalletSearch from '@/organisms/WalletSearch';
import ExchangeRate from '@/organisms/ExchangeRate';
import WalletBalance from '@/organisms/WalletBalance';
// layouts
import WalletPageLayout from '@/layouts/WalletPageLayout';
// utils
import generateHash from 'random-hash';
import { validateChecksum, isValidAddress } from '@/api/etherscan/utils';
// styles
import styles from '@/styles/Page.module.scss';

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const { walletAddress } = context.query;
    isValidAddress(walletAddress as string);
    const checksumAddress = validateChecksum(walletAddress as string);
    if (checksumAddress !== walletAddress) {
      return {
        redirect: {
          permanent: false,
          destination: `/wallet/${checksumAddress}`,
        },
      };
    }
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        // eslint-disable-next-line max-len
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
        destination: `/?error=Wallet address does not exist&errorHash=${generateHash({ length: 4 })}`,
      },
    };
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
