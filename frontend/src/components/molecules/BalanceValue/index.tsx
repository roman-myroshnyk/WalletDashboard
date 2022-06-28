import { FC } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { CurrencySymbols } from '@/consts/currency';
import styles from './BalanceValue.module.scss';

export interface IProps {
    value?: number;
    currencySymbol?:CurrencySymbols;
    testid?: string;
}

const BalanceValue:FC<IProps> = ({ value, currencySymbol, testid }) => {
  const { animatedValue } = useSpring({ animatedValue: value, config: config.molasses });
  return (
    <strong className={styles.balanceValue} data-testid={testid}>
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
  testid: 'balanceValue',
};
export default BalanceValue;
