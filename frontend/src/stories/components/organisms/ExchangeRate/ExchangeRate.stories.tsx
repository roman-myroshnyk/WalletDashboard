import { Meta, Story } from '@storybook/react/types-6-0';
import ExchangeRate from '@/organisms/ExchangeRate';
import { ARG_REDUX_PATH } from 'addon-redux';

export default {
  title: 'organisms/ExchangeRate',
  component: ExchangeRate,
  argTypes: {
    exchangeRate: {
      controls: 'text',
      [ARG_REDUX_PATH]: 'exchangeRate.rate',
    },
    selectedCurrency: {
      disable: true,
    },
    isEditing: {
      controls: 'boolean',
      [ARG_REDUX_PATH]: 'exchangeRate.isEditing',
    },
    disabled: {
      controls: 'boolean',
      [ARG_REDUX_PATH]: 'dashboard.disabled',

    },
    loading: {
      controls: 'boolean',
      [ARG_REDUX_PATH]: 'dashboard.loading',
    },
  },
} as Meta;

const Template:Story = (args) => (
  <ExchangeRate {...args} />
);

export const Default = Template.bind({});

Default.args = {
  exchangeRate: '12.3',
  isEditing: false,
  disabled: false,
  loading: false,
};
