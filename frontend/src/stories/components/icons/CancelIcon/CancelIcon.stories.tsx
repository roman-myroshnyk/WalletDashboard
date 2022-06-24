import { Meta, Story } from '@storybook/react/types-6-0';
import CancelIcon, { IProps } from '@/icons/CancelIcon';

export default {
  title: 'icons/CancelIcon',
  component: CancelIcon,
  argType: {
    height: {
      controls: 'number',
    },
    width: {
      controls: 'number',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <CancelIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: 24,
  width: 24,
};
