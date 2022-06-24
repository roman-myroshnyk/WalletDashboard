import { NextPage } from 'next';
import Head from 'next/head';
import MainPageLayout from '@/layouts/MainPageLayout';
import WalletSearch from '@/organisms/WalletSearch';
import styles from '@/styles/Page.module.scss';

const MainPage:NextPage = () => (
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

export default MainPage;
