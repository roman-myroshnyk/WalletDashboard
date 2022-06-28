import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import walletReducer from '@/app/walletSlice';
import exchangeRateReducer from '@/app/exchangeRateSlice';
import searchWalletReducer from '@/app/searchWalletSlice';
import dashboardReducer from '@/app/dashboardSlice';

import type { AppState, AppStore } from '@/app/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<AppState>;
    store?:AppStore
}

function renderWithProvider(ui: JSX.Element, {
  preloadedState = {
    wallet: undefined,
    exchangeRate: undefined,
    searchWallet: undefined,
    dashboard: undefined,
  },
  store = configureStore({
    reducer: {
      wallet: walletReducer,
      exchangeRate: exchangeRateReducer,
      searchWallet: searchWalletReducer,
      dashboard: dashboardReducer,
    },
    preloadedState,
  }),
  ...renderOptions
}: ExtendedRenderOptions = {}) {
  const Wrapper = (
    { children }: PropsWithChildren,
  ):JSX.Element => <Provider store={store}>{children}</Provider>;
  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';
export const render = renderWithProvider;
