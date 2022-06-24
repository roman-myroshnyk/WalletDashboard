import { Meta, Story } from '@storybook/react/types-6-0';
import WarningIcon, { IProps } from '@/icons/WarningIcon';

export default {
  title: 'icons/WarningIcon',
  component: WarningIcon,
  argType: {
    height: {
      control: 'number',
    },
    width: {
      control: 'number',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <WarningIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: 24,
  width: 24,
};
