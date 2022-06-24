import { FC, ReactNode } from 'react';
import styles from './WalletPageLayout.module.scss';

interface IProps {
    children: ReactNode[];
}
const WalletPageLayout:FC<IProps> = ({ children }) => {
  const [walletSearch, warning, exchangeRate, walletBalance] = children;
  return (
    <div className={styles.walletPageLayout}>
      <div className={styles.walletSearch}>
        {walletSearch}
      </div>
      <div className={styles.warning}>
        {warning}
      </div>
      <div className={styles.exchangeRate}>
        {exchangeRate}
      </div>
      <div className={styles.walletBalance}>
        {walletBalance}
      </div>
    </div>
  );
};

export default WalletPageLayout;
