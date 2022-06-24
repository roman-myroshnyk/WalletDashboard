/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  EnabledCurrencies, CurrencyLables, CurrencyIndexes,
} from '@/consts/currency';
import WalletBalance, { IProps } from '@/organisms/WalletBalance';

export default {
  title: 'organisms/WalletBalance',
  component: WalletBalance,
  argTypes: {
    balance: {
      contorls: 'number',
    },
    currency: {
      control: 'radio',
      options: CurrencyLables,
    },
    currencyExchangeRateUnset: {
      controls: 'boolean',
    },
    disabled: {
      controls: 'boolean',
    },
    loading: {
      controls: 'boolean',
    },
    onCurrencyChange: {
      action: 'onCurrencyChange: dropdown changed',
    },
  },
} as Meta;

interface ITemplate extends IProps {
  currency: CurrencyLables;
}
const Template:Story<ITemplate> = ({ currency, ...args }) => {
  const currencyInfo = EnabledCurrencies[CurrencyIndexes[currency]];
  return (
    <WalletBalance {...args} currencyInfo={currencyInfo} />
  );
};

export const Default = Template.bind({});

Default.args = {
  balance: 30,
  currency: CurrencyLables.USD,
  currencyExchangeRateUnset: false,
  disabled: false,
  loading: false,
};
