import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import WalletBalance from '@/organisms/WalletBalance';
import { AppState } from '@/app/store';
import { CurrencyLables, CurrencySymbols } from '@/consts/currency';
import { act } from 'react-dom/test-utils';
import {
  render, fireEvent, screen, waitFor,
} from '../../../utils/test-utils';

export const handlers = [
  rest.get('/api/exchangeRates', (req, res, ctx) => res(ctx.json({
    status: 'OK',
    rate: 123,
  }))),
  rest.post('/api/exchangeRates', (req, res, ctx) => res(ctx.json({
    status: 'OK',
  }))),
  rest.get('/api/walletBalance', (req, res, ctx) => res(ctx.json({
    status: 'OK',
    balance: 23,
  }))),
];

const preloadedState:AppState = {
  wallet: {
    balance: 4354,
    isOld: false,
    walletAddress: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',

  },
  searchWallet: undefined,
  exchangeRate: {
    rate: 2.66,
    rateToEdit: null,
    isEditing: false,
    selectedCurrency: {
      symbol: CurrencySymbols.USD,
      label: CurrencyLables.USD,
      description: 'United States Dollar',
      index: 0,
    },
  },
  dashboard: {
    disabled: false,
    loading: false,
    snackbars: [],
  },
};
const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('organisms/WalletBalance', () => {
  it('shows wallet balance', () => {
    render(<WalletBalance />, { preloadedState });
    const selectLabel = screen.getByText('USD');
    expect(selectLabel).toBeDefined();
    const walletBalanceTitle = screen.getByText('Wallet Balance');
    expect(walletBalanceTitle).toBeDefined();
    const balanceValue = screen.getByTestId('balanceValue');
    expect(balanceValue.children[0]).toHaveTextContent('4354');
    expect(balanceValue).toHaveTextContent('$');
  });

  it('changes currency and shows balance in other currencys', async () => {
    act(() => {
      render(<WalletBalance />, { preloadedState });
    });

    const select = screen.getByTestId('select');
    act(() => {
      fireEvent.change(select, { target: { value: 1 } });
    });
    const selectLabel = screen.getByText('EUR');
    expect(selectLabel).toBeDefined();
    const walletBalanceTitle = screen.getByText('Wallet Balance');
    expect(walletBalanceTitle).toBeDefined();
    await waitFor(() => {
      expect(screen.getByTestId('balanceValue').children[0]).toHaveTextContent('23');
      expect(screen.getByTestId('balanceValue')).toHaveTextContent('€');
    });
  });
});
