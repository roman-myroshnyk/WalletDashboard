import React from 'react';
import store, { AppState } from '@/app/store';
import { act } from 'react-dom/test-utils';
import Snackbars from '@/molecules/Snackbars';
import { dashboardActions } from '@/app/dashboardSlice';
import { EnabledCurrencies } from '@/consts/currency';
import {
  render, fireEvent, screen, waitFor,
} from '../../../utils/test-utils';

const preloadedState:AppState = {
  wallet: {
    balance: 0,
    isOld: false,
    walletAddress: '',
  },
  searchWallet: {
    walletAddress: '',
  },
  exchangeRate: {
    rate: null,
    rateToEdit: null,
    isEditing: false,
    selectedCurrency: { ...EnabledCurrencies[0], index: 0 },
  },
  dashboard: {
    disabled: false,
    loading: false,
    snackbars: [],
  },
};
const preloadedState2:AppState = {
  wallet: {
    balance: 0,
    isOld: false,
    walletAddress: '',
  },
  searchWallet: {
    walletAddress: '',
  },
  exchangeRate: {
    rate: null,
    rateToEdit: null,
    isEditing: false,
    selectedCurrency: { ...EnabledCurrencies[0], index: 0 },
  },
  dashboard: {
    disabled: false,
    loading: false,
    snackbars: [{
      message: 'I am snackbar message',
      key: '1',
    }],
  },
};

describe('organisms/Snackbars', () => {
  it('shows snackbars', () => {
    render(<Snackbars />, { preloadedState: preloadedState2 });
    const snackbarContainer = screen.getByTestId('snackbars container');
    expect(snackbarContainer.children.length).toEqual(1);
  });
  it('shows no snackbars', () => {
    render(<Snackbars />, { preloadedState });
  });
  it('adds snackbar', async () => {
    const { store } = render(<Snackbars />, { preloadedState: preloadedState2 });
    act(() => {
      store.dispatch(dashboardActions.addSnackbar({ message: 'I am added snackbar' }));
    });
    const snackbarContainer = screen.getByTestId('snackbars container');

    await waitFor(() => {
      expect(snackbarContainer.children.length).toEqual(2);
    });
  });
  it('removes snackbar if clicked on close button', async () => {
    render(<Snackbars />, { preloadedState: preloadedState2 });
    const closeIcon = screen.getByTestId('cancelIcon');
    fireEvent.click(closeIcon);
    const snackbarContainer = screen.getByTestId('snackbars container');
    await waitFor(() => {
      expect(snackbarContainer.children.length).toEqual(0);
    });
  });
});
