import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ExchangeRate from '@/organisms/ExchangeRate';
import { AppState } from '@/app/store';
import { CurrencyLables, CurrencySymbols } from '@/consts/currency';
import { render, fireEvent, screen } from '../../../utils/test-utils';

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
  wallet: undefined,
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

describe('organisms/ExchangeRate', () => {
  it('shows exchange rate', () => {
    render(<ExchangeRate />, { preloadedState });
    const numericInput:HTMLInputElement = screen.getByTestId('numericInput');
    const label = screen.getByTestId('label');
    const editButton = screen.getByTestId('editButton');

    expect(numericInput.value).toEqual('2.66');
    expect(numericInput).toBeVisible();
    expect(numericInput.disabled).toBeTruthy();
    expect(label.textContent).toEqual('USD/ETH');
    expect(label).toBeVisible();
    expect(editButton).toBeVisible();
  });

  it('changing rate and then cancels', () => {
    render(<ExchangeRate />, { preloadedState });
    const numericInput:HTMLInputElement = screen.getByTestId('numericInput');
    const editButton = screen.getByTestId('editButton');
    fireEvent.click(editButton);
    expect(numericInput.disabled).toBeFalsy();
    const cancelButton = screen.getByTestId('cancelButton');
    fireEvent.change(numericInput, {
      target: {
        value: '4.55',
      },
    });
    expect(numericInput.value).toEqual('4.55');
    fireEvent.click(cancelButton);
    expect(numericInput.value).toEqual('2.66');
    expect(numericInput.disabled).toBeTruthy();
  });
  it('changing rate and then confirms', () => {
    render(<ExchangeRate />, { preloadedState });
    let numericInput:HTMLInputElement = screen.getByTestId('numericInput');
    const editButton = screen.getByTestId('editButton');
    fireEvent.click(editButton);
    expect(numericInput.disabled).toBeFalsy();
    const confirmButton = screen.getByTestId('confirmButton');
    fireEvent.change(numericInput, {
      target: {
        value: '123',
      },
    });
    expect(numericInput.value).toEqual('123');
    fireEvent.click(confirmButton);
    numericInput = screen.getByTestId('numericInput');
    expect(numericInput.value).toEqual('123');
    expect(numericInput.disabled).toBeTruthy();
  });
});
