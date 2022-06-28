import { Meta, Story } from '@storybook/react/types-6-0';
import WalletBalance from '@/organisms/WalletBalance';
import { ARG_REDUX_PATH } from 'addon-redux';

export default {
  title: 'organisms/WalletBalance',
  component: WalletBalance,
  argTypes: {
    balance: {
      contorls: 'number',
      [ARG_REDUX_PATH]: 'wallet.balance',
    },
    currency: {
      disable: true,
    },
    disabled: {
      controls: 'boolean',
      [ARG_REDUX_PATH]: 'dashboard.disabled',
    },
    loading: {
      controls: 'boolean',
      [ARG_REDUX_PATH]: 'dashboard.loading',
    },
    isOld: {
      controls: 'boolean',
      [ARG_REDUX_PATH]: 'wallet.isOld',
    },
    walletAddress: {
      controls: 'text',
      [ARG_REDUX_PATH]: 'wallet.walletAddress',
    },
  },
} as Meta;

const Template:Story = (args) => (
  <WalletBalance {...args} />
);

export const Default = Template.bind({});
Default.args = {
  balance: '12222.3',
  isOld: false,
  walletAddress: '123',
  disabled: false,
  loading: false,
};
