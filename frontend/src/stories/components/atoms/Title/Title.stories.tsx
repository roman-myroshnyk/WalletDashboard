import { Meta, Story } from '@storybook/react/types-6-0';
import Title, { IProps } from '@/atoms/Title';

export default {
  title: 'atoms/Title',
  component: Title,
  argTypes: {
    text: {
      controls: 'text',
    },
  },
} as Meta;

interface ITemplateProps extends IProps {
  text: string;
}

const Template:Story<ITemplateProps> = ({ ...args }) => (
  <Title {...args}>
    {args.text}
  </Title>
);

export const Default = Template.bind({});

Default.args = {
  text: 'Digital Wallet Dashboard',
};
