/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { AppState } from '@/app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getExchangeRate, postExchangeRate } from '@/app/exchangeRateSlice';
import { getWalletAge, getWalletBalance } from '@/app/walletSlice';
// utils
import generateHash from 'random-hash';

interface ISnackbar {
  message:string;
  key:string;
}

export interface dashboardState {
    disabled: boolean;
    loading: boolean;
    snackbars:ISnackbar[]
}

const initialState: dashboardState = {
  disabled: false,
  loading: false,
  snackbars: [],
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addSnackbar: (state, action:PayloadAction<{message:string}>) => {
      state.snackbars.push({
        message: action.payload.message,
        key: `${action.payload.message}-${generateHash({ length: 4 }) as string}`,
      });
    },
    removeSnackbar: (state, action:PayloadAction<{key:string}>) => {
      const newSnackbars = [...state.snackbars];
      newSnackbars.splice(
        state.snackbars.findIndex(
          (snackbar) => snackbar.key === action.payload.key,
        ),
        1,
      );
      state.snackbars = newSnackbars;
    },
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
        dashboardSlice.actions.addSnackbar({ message: 'Failed to get exchange rate' });
      })
      .addCase(postExchangeRate.pending, (state) => {
        state.loading = true;
      })
      .addCase(postExchangeRate.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(postExchangeRate.rejected, (state) => {
        state.loading = false;
        dashboardSlice.actions.addSnackbar({ message: 'Failed to post exchange rate' });
      })
      .addCase(getWalletAge.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWalletAge.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getWalletAge.rejected, (state) => {
        state.loading = false;
        dashboardSlice.actions.addSnackbar({ message: 'Failed to get wallet age' });
      })
      .addCase(getWalletBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWalletBalance.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getWalletBalance.rejected, (state) => {
        state.loading = false;
        dashboardSlice.actions.addSnackbar({ message: 'Failed to get wallet balance' });
      });
  },
});

export const dashboardActions = dashboardSlice.actions;
export const selectDashboard = (state:AppState) => state.dashboard;

export default dashboardSlice.reducer;
