import { Meta, Story } from '@storybook/react/types-6-0';
import WalletSearch from '@/organisms/WalletSearch';
import { ARG_REDUX_PATH } from 'addon-redux';

export default {
  title: 'organisms/WalletSearch',
  component: WalletSearch,
  argTypes: {
    value: {
      controls: 'text',
      [ARG_REDUX_PATH]: 'searchWallet.walletAddress',
    },
    disabled: {
      controls: 'boolean',
      [ARG_REDUX_PATH]: 'dashboard.disabled',
    },
  },
} as Meta;

const Template:Story = (args) => (
  <WalletSearch {...args} />
);

export const MainPageDefault = Template.bind({});

MainPageDefault.args = {
  value: '0xeded3400702aca8000af3ac47af80ef3e8c800ba',
  disabled: false,
};
