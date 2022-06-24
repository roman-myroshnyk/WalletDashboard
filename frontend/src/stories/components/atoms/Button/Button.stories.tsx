import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { IProps } from '@/atoms/Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    text: {
      controls: 'text',
    },
    disabled: {
      controls: 'boolean',
    },
    onClick: {
      action: 'onClick: clicked',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'Check',
  disabled: false,
};
