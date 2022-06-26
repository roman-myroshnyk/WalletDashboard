import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './WalletPageLayout.module.scss';

interface IProps {
  children: ReactNode[];
}

const WalletPageLayout:FC<IProps> = ({ children }) => {
  const [walletSearch, walletAddress, warning, exchangeRate, walletBalance] = children;
  return (
    <div className={styles.walletPageLayout}>
      <div
        className={styles.walletSearch}
      >
        {walletSearch}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3, y: -23 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={styles.walletAddress}
      >
        {walletAddress}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={styles.warning}
      >
        {warning}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={styles.exchangeRate}
      >
        {exchangeRate}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={styles.walletBalance}
      >
        {walletBalance}
      </motion.div>
    </div>
  );
};

export default WalletPageLayout;
