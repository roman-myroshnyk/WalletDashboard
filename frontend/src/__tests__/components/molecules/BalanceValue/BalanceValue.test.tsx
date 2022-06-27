import '.../../../mocks/framer-motion';
import { render } from '@testing-library/react';
import BalanceValue from '@/molecules/BalanceValue';
import { CurrencySymbols } from '@/consts/currency';

describe('molecules/BalanceValue', () => {
  it('BalanceValue should render', () => {
    const { container } = render(
      <BalanceValue
        value={14}
        currencySymbol={CurrencySymbols.EUR}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
