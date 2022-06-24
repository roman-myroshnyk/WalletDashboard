import { FC } from 'react';
import SectionTitle from '@/atoms/SectionTitle';
import Dropdown from '@/molecules/Dropdown';
import BalanceValue from '@/molecules/BalanceValue';
import LoadingIcon from '@/icons/LoadingIcon';
import { CurrencyNames } from '@/consts/currency';
import Label from '@/atoms/Label';

import { useAppSelector, useAppDispatch } from '@/app/store';
import {
  selectWallet,
} from '@/app/walletSlice';
import {
  selectExchangeRate,
  exchangeRateActions,
} from '@/app/exchangeRateSlice';

import {
  selectDashboard,
} from '@/app/dashboardSlice';
import styles from './WalletBalance.module.scss';

const WalletBalance:FC = () => {
  const dispatch = useAppDispatch();
  const { balance } = useAppSelector(selectWallet);
  const {
    rate, selectedCurrency, isEditing,
  } = useAppSelector(selectExchangeRate);
  const { loading, disabled } = useAppSelector(selectDashboard);
  return (
    <div className={styles.walletBalance}>
      <div className={styles.firstLine}>
        <SectionTitle>
          Wallet Balance
        </SectionTitle>
        <Dropdown
          value={selectedCurrency.index}
          options={CurrencyNames}
          disabled={disabled || loading || isEditing}
          onChange={(index) => dispatch(exchangeRateActions.changeCurrency(index))}
        />
      </div>
      <div className={styles.secondLine}>
        {!rate && (
        <div className={styles.messageContainer}>
          <Label>
            Please set the exchange rate for
            {' '}
            {selectedCurrency.label}
          </Label>
        </div>
        )}
        {rate && balance && (
        <div className={styles.balanceValueContainer}>
          <BalanceValue
            value={balance}
            currencySymbol={selectedCurrency.symbol}
          />
        </div>
        )}
      </div>
      <div className={styles.thirdLine}>
        <div className={styles.loadingContainer}>
          {loading && <LoadingIcon />}
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
