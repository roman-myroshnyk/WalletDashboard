import { FC } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { CurrencySymbols } from '@/consts/currency';
import styles from './BalanceValue.module.scss';

export interface IProps {
    value?: number;
    currencySymbol?:CurrencySymbols
}

const BalanceValue:FC<IProps> = ({ value, currencySymbol }) => {
  const { animatedValue } = useSpring({ animatedValue: value, config: config.molasses });
  return (
    <strong className={styles.balanceValue}>
      <animated.span>
        {animatedValue.to((val) => (val.toFixed(2)))}
      </animated.span>
      {` ${currencySymbol || ''}`}
    </strong>
  );
};

BalanceValue.defaultProps = {
  value: 0,
  currencySymbol: CurrencySymbols.USD,
};
export default BalanceValue;
