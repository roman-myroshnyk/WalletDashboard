import { Meta, Story } from '@storybook/react/types-6-0';
import WalletSearch, { IProps } from '@/organisms/WalletSearch';

export default {
  title: 'organisms/WalletSearch',
  component: WalletSearch,
  argTypes: {
    value: {
      controls: 'text',
    },
    disabled: {
      controls: 'boolean',
    },
    onSearch: {
      action: 'onSearch: clicked',
    },
    onInputSubmit: {
      action: 'onInputSubmit: enter pressed',
    },
    onInputChange: {
      action: 'onInputChange: input changed',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <WalletSearch {...args} />
);

export const Default = Template.bind({});

Default.args = {
  value: '0xeded3400702aca8000af3ac47af80ef3e8c800ba',
  disabled: false,
};
