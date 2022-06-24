import { Story } from '@storybook/react/types-6-0';
import WalletPage from '../../pages/wallet/[walletAddress]';

export default {
  title: 'Pages/Wallet',
  component: WalletPage,
};

export const WalletPageDefault:Story = () => <WalletPage />;
