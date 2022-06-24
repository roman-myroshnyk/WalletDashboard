import { Meta, Story } from '@storybook/react/types-6-0';
import SectionTitle, { IProps } from '@/atoms/SectionTitle';

export default {
  title: 'atoms/SectionTitle',
  component: SectionTitle,
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
  <SectionTitle {...args}>
    {args.text}
  </SectionTitle>
);

export const ExchangeRateTitle = Template.bind({});

ExchangeRateTitle.args = {
  text: 'Exchange rate',
};

export const WalletBalanceTitle = Template.bind({});

WalletBalanceTitle.args = {
  text: 'Wallet Balance',
};
