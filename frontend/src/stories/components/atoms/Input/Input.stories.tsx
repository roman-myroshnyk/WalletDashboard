import { Meta, Story } from '@storybook/react/types-6-0';
import Input, { IProps } from '@/atoms/Input';

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {},
} as Meta;

const Template:Story<IProps> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});

Default.args = {
};
