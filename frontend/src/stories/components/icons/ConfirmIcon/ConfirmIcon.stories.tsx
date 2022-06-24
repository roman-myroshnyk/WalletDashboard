import { Meta, Story } from '@storybook/react/types-6-0';
import ConfirmIcon, { IProps } from '@/icons/ConfirmIcon';

export default {
  title: 'icons/ConfirmIcon',
  component: ConfirmIcon,
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
  <ConfirmIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: 24,
  width: 24,
};
