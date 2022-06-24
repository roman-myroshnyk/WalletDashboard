import { createSlice } from '@reduxjs/toolkit';
import type { AppState } from '@/app/store';
import { getExchangeRate, postExchangeRate } from './exchangeRateSlice';
import { getWalletAge, getWalletBalance } from './walletSlice';

export interface WalletState {
    disabled: boolean;
    loading: boolean;
}
const initialState: WalletState = {
  disabled: false,
  loading: false,
};

export const walletSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExchangeRate.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExchangeRate.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getExchangeRate.rejected, (state) => {
        state.loading = false;
      })
      .addCase(postExchangeRate.pending, (state) => {
        state.loading = true;
      })
      .addCase(postExchangeRate.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postExchangeRate.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getWalletAge.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWalletAge.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getWalletAge.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getWalletBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWalletBalance.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getWalletBalance.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const selectDashboard = (state:AppState) => state.dashboard;

export default walletSlice.reducer;
