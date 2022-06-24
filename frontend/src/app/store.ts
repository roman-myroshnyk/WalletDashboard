import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import walletReducer from '@/app/walletSlice';
import exchangeRateReducer from '@/app/exchangeRateSlice';
import searchWalletReducer from '@/app/searchWalletSlice';
import dashboardReducer from '@/app/dashboardSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      wallet: walletReducer,
      exchangeRate: exchangeRateReducer,
      searchWallet: searchWalletReducer,
      dashboard: dashboardReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
