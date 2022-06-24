import { Meta, Story } from '@storybook/react/types-6-0';
import Label, { IProps } from '@/atoms/Label';

export default {
  title: 'atoms/Label',
  component: Label,
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
  <Label {...args}>
    {args.text}
  </Label>
);

export const Label4USD2ETH = Template.bind({});

Label4USD2ETH.args = {
  text: 'USD/ETH',
  htmlFor: 'id1',
};

export const Label4EUR2ETH = Template.bind({});

Label4EUR2ETH.args = {
  text: 'EUR/ETH',
  htmlFor: 'id2',
};
