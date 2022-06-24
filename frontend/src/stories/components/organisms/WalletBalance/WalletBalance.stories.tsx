/* eslint-disable react/prop-types */
import { Meta, Story } from '@storybook/react/types-6-0';
import { CurrencyLables} from '@/consts/currency';
import WalletBalance from '@/organisms/WalletBalance';

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

interface ITemplate {
  currency: CurrencyLables;
}
const Template:Story<ITemplate> = () => {
  return (
    <WalletBalance  />
  );
};

export const Default = Template.bind({});

