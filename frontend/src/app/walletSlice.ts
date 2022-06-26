import type { AppState, AppThunk } from '@/app/store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// api
import { axiosGetWalletAge, GetWalletAgeParams } from '@/api/walletAge/axiosGet';
import { axiosGetWalletBalance, GetWalletBalanceParams } from '@/api/walletBalance/axiosGet';
// interfaces
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';

export interface WalletState {
    balance?: number;
    isOld?: boolean;
    walletAddress: string;
}

const initialState: WalletState = {
  balance: 0,
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
      .addCase(getWalletBalance.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
      });
  },
});

export const { updateWalletAddress } = walletSlice.actions;
export const selectWallet = (state:AppState) => state.wallet;

export default walletSlice.reducer;

const initWallet = (walletAddress:string, currency:CurrencyLables):AppThunk => (dispatch) => {
  dispatch(updateWalletAddress({ address: walletAddress }));
  void dispatch(getWalletAge({ walletAddress }));
  void dispatch(getWalletBalance({
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
