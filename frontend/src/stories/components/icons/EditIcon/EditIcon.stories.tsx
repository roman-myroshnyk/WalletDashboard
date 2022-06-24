import { Meta, Story } from '@storybook/react/types-6-0';
import EditIcon, { IProps } from '@/icons/EditIcon';

export default {
  title: 'icons/EditIcon',
  component: EditIcon,
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
  <EditIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: 24,
  width: 24,
};
