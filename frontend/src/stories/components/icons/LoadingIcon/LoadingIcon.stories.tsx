import { Meta, Story } from '@storybook/react/types-6-0';
import LoadingIcon, { IProps } from '@/icons/LoadingIcon';

export default {
  title: 'icons/LoadingIcon',
  component: LoadingIcon,
  argType: {
    height: {
      controls: 'number',
    },
    width: {
      control: 'number',
    },
  },
} as Meta;

const Template:Story<IProps> = (args) => (
  <LoadingIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: 20,
  width: 20,
};
