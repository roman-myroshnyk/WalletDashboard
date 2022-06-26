import { NextPage } from 'next';
import { useEffect } from 'react';
// app
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/app/store';
import {
  dashboardActions,
} from '@/app/dashboardSlice';
// components
import Head from 'next/head';
// layouts
import MainPageLayout from '@/layouts/MainPageLayout';
import WalletSearch from '@/organisms/WalletSearch';
// styles
import styles from '@/styles/Page.module.scss';

const MainPage:NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { error } = router.query;

  useEffect(() => {
    if (error) {
      dispatch(dashboardActions.addSnackbar({ message: error as string }));
      void router.replace('/', undefined, { shallow: true });
    }
  }, [dispatch, error, router, router.route]);

  return (
    <div className={styles.page}>
      <Head>
        <title>Digital Wallet Dashboard</title>
        <meta name="description" content="Digital Wallet Dashboard for Securitize" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainPageLayout>
          <WalletSearch />
        </MainPageLayout>
      </main>

    </div>
  );
};

export default MainPage;
