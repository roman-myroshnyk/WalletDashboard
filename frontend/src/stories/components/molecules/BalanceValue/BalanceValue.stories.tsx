import { Meta, Story } from '@storybook/react/types-6-0';
import BalanceValue, { IProps } from '@/molecules/BalanceValue';
import { CurrencySymbols } from '@/consts/currency';

export default {
  title: 'molecules/BalanceValue',
  component: BalanceValue,
  argTypes: {
    value: {
      control: 'number',
    },
    currencySymbol: {
      options: CurrencySymbols,
      control: 'select',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <BalanceValue {...args} />
);

export const Default = Template.bind({});

Default.args = {
  value: 2,
  currencySymbol: CurrencySymbols.EUR,
};
