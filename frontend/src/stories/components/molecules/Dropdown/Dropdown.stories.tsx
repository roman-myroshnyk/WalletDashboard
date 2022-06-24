import { Meta, Story } from '@storybook/react/types-6-0';
import Dropdown, { IProps } from '@/molecules/Dropdown';
import { CurrencyNames } from '@/consts/currency';

export default {
  title: 'molecules/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: 'check',
      options: CurrencyNames,
    },
    value: {
      controls: 'number',
    },
    disabled: {
      controls: 'boolean',
    },
    onChange: {
      action: 'onChange: dropdown value changed',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});

Default.args = {
  options: CurrencyNames,
  value: 1,
  disabled: false,
};
