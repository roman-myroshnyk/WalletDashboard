import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState, AppThunk } from '@/app/store';
import { axiosGetWalletAge, GetWalletAgeParams } from '@/api/walletAge/axiosGet';
import { axiosGetWalletBalance, GetWalletBalanceParams } from '@/api/walletBalance/axiosGet';
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';

export interface WalletState {
    balance?: number;
    isOld?: boolean;
    walletAddress: string;
}
const initialState: WalletState = {
  balance: 2,
  isOld: null,
  walletAddress: '',
};

export const getWalletAge = createAsyncThunk(
  'wallet/getWalletAge',
  async ({
    walletAddress,
  }:GetWalletAgeParams) => axiosGetWalletAge({ walletAddress }),
);

export const getWalletBalance = createAsyncThunk(
  'wallet/getWalletBalance',
  async ({
    walletAddress,
    currency,
    digitalCurrency,
  }:GetWalletBalanceParams) => axiosGetWalletBalance({ walletAddress, currency, digitalCurrency }),
);

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    updateWalletAddress: (state, action:PayloadAction<{address: string}>) => {
      state.walletAddress = action.payload.address;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWalletAge.fulfilled, (state, action) => {
        state.isOld = action.payload.isOld;
      })
      .addCase(getWalletAge.rejected, () => {
        // TODO error handling
      })
      .addCase(getWalletBalance.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
      })
      .addCase(getWalletBalance.rejected, () => {
        // TODO error handling
      });
  },
});

export const { updateWalletAddress } = walletSlice.actions;
export const selectWallet = (state:AppState) => state.wallet;

export default walletSlice.reducer;

const initWallet = (walletAddress:string, currency:CurrencyLables):AppThunk => async (dispatch) => {
  dispatch(updateWalletAddress({ address: walletAddress }));
  await dispatch(getWalletAge({ walletAddress }));
  await dispatch(getWalletBalance({
    walletAddress,
    currency,
    digitalCurrency: DigitalCurrencyLabels.ETH,
  }));
};

export const walletActions = {
  ...walletSlice.actions,
  initWallet,
  getWalletAge,
  getWalletBalance,
};
