import { Meta, Story } from '@storybook/react/types-6-0';
import Header, { IProps } from '@/atoms/Header';
import Title from '@/atoms/Title';

export default {
  title: 'atoms/Header',
  component: Header,
  argTypes: {
    text: {
      controls: 'text',
    },
  },
} as Meta;

interface ITemplateProps extends IProps {
  text:string;
}
const Template:Story<ITemplateProps> = ({ ...args }) => (
  <Header {...args}>
    <Title>
      {args.text}
    </Title>
  </Header>
);

export const Default = Template.bind({});

Default.args = {
  text: 'Digital Wallet Dashboard',
};
