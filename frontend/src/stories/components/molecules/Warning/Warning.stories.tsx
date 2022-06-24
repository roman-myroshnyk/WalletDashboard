import { Meta, Story } from '@storybook/react/types-6-0';
import Warning, { IProps } from '@/molecules/Warning';

export default {
  title: 'molecules/Warning',
  component: Warning,
  argTypes: {
    show: {
      controls: 'boolean',
    },
    message: {
      controls: 'text',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <Warning {...args} />
);

export const Default = Template.bind({});

Default.args = {
  message: 'Wallet is old!',
  show: true,
};
