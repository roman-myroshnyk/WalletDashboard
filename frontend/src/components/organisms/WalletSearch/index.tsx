import { FC } from 'react';
import TextInput from '@/molecules/TextInput';
import Button from '@/atoms/Button';

import { useAppSelector, useAppDispatch } from '@/app/store';
import {
  selectSearchWallet,
  searchWalletActions,
} from '@/app/searchWalletSlice';
import {
  selectDashboard,
} from '@/app/dashboardSlice';
import styles from './WalletSearch.module.scss';

const WalletSearch:FC = () => {
  const dispatch = useAppDispatch();
  const { disabled } = useAppSelector(selectDashboard);
  const { walletAddress } = useAppSelector(selectSearchWallet);
  return (
    <div className={styles.walletSearch}>
      <TextInput
        value={walletAddress}
        disabled={disabled}
        onSubmit={() => dispatch(searchWalletActions.searchWallet())}
        onChange={(value) => dispatch(
          searchWalletActions.changeWalletAddress({ searchInput: value }),
        )}
        placeholder="Put wallet id here..."
      />
      <Button
        text="Search"
        disabled={disabled}
        onClick={() => dispatch(searchWalletActions.searchWallet())}
      />
    </div>
  );
};

export default WalletSearch;
