import { FC } from 'react';
import SectionTitle from '@/atoms/SectionTitle';
import EditToggle from '@/molecules/EditToggle';
import NumericInput from '@/molecules/NumericInput';
import Label from '@/atoms/Label';
import LoadingIcon from '@/icons/LoadingIcon';

import { useAppSelector, useAppDispatch } from '@/app/store';

import {
  selectDashboard,
} from '@/app/dashboardSlice';
import {
  selectExchangeRate,
  exchangeRateActions,
} from '@/app/exchangeRateSlice';
import styles from './ExchangeRate.module.scss';

const ExchangeRate:FC = () => {
  const dispatch = useAppDispatch();
  const {
    rate, rateToEdit, selectedCurrency, isEditing,
  } = useAppSelector(selectExchangeRate);
  const { loading, disabled } = useAppSelector(selectDashboard);
  return (
    <div className={styles.exchangeRate}>
      <div className={styles.firstLine}>
        <SectionTitle>
          Exchange Rate
        </SectionTitle>
        <EditToggle
          isEditing={isEditing}
          disabled={disabled}
          onEdit={() => dispatch(exchangeRateActions.startEditingRate())}
          onCancel={() => dispatch(exchangeRateActions.cancelEditingRate())}
          onConfirm={() => dispatch(exchangeRateActions.updateExchangeRate())}
        />
      </div>
      <div className={styles.secondLine}>
        <NumericInput
          value={isEditing ? rateToEdit || 0 : rate || 0}
          id="exchangeRateInput"
          disabled={!isEditing || loading || disabled}
          onChange={(value) => dispatch(
            exchangeRateActions.changeRateToEdit({ newExchangeRate: value }),
          )}
          onSubmit={() => dispatch(exchangeRateActions.updateExchangeRate())}
        />
        <Label htmlFor="exchangeRateInput">
          {`${selectedCurrency.label}/ETH`}
        </Label>
      </div>
      <div className={styles.thirdLine}>
        <div className={styles.loadingContainer}>
          {loading && <LoadingIcon />}
        </div>
      </div>
    </div>
  );
};

export default ExchangeRate;
