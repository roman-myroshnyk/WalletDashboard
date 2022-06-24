import { Meta, Story } from '@storybook/react/types-6-0';
import NumericInput, { IProps } from '@/molecules/NumericInput';

export default {
  title: 'molecules/NumericInput',
  component: NumericInput,
  argTypes: {
    value: {
      controls: 'text',
    },
    id: {
      controls: 'text',
    },
    disabled: {
      controls: 'boolean',
    },
    onSubmit: {
      action: 'onSubmit: enter pressed',
    },
    onChange: {
      action: 'onChange: input value changed',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <NumericInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  value: '',
  id: '',
  disabled: false,
};
