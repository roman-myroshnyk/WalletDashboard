import { Meta, Story } from '@storybook/react/types-6-0';
import TextInput, { IProps } from '@/molecules/TextInput';

export default {
  title: 'molecules/TextInput',
  component: TextInput,
  argTypes: {
    value: {
      controls: 'text',
    },
    placeholder: {
      controls: 'text',
    },
    disabled: {
      controls: 'boolean',
    },
    onSubmit: {
      action: 'onSubmit: enter pressed',
    },
    onChange: {
      action: 'onChange: input changed',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  value: '',
  placeholder: 'I am placeholder',
  disabled: false,
};
