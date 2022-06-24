import { Meta, Story } from '@storybook/react/types-6-0';
import ExchangeRate from '@/organisms/ExchangeRate';
import { CurrencyLables } from '@/consts/currency';

export default {
  title: 'organisms/ExchangeRate',
  component: ExchangeRate,
  argTypes: {
    exchangeRate: {
      controls: 'text',
    },
    currencyLabel: {
      control: 'radio',
      options: CurrencyLables,
    },
    isEditing: {
      controls: 'boolean',
    },
    disabled: {
      controls: 'boolean',
    },
    loading: {
      controls: 'boolean',
    },
    onRateInputChange: {
      action: 'onRateInputChange: rate input changed',
    },
    onStartEditing: {
      action: 'onStartEditing: edit button clicked',
    },
    onEditCancel: {
      action: 'onEditCancel: cancel button clicked',
    },
    onEditConfirm: {
      action: 'onEditConfirm: confirm button clicked',
    },
  },
} as Meta;

const Template:Story = (args) => (
  <ExchangeRate {...args} />
);

export const Default = Template.bind({});

Default.args = {
  exchangeRate: '',
  currencyLabel: CurrencyLables.USD,
  isEditing: false,
  disabled: false,
  loading: false,
};
