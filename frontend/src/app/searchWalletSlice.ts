import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Router from 'next/router';
import type { AppState } from '@/app/store';

export interface SearchWalletState {
    walletAddress: string;
}
const initialState: SearchWalletState = {
  walletAddress: '',
};

export const SearchWalletSlice = createSlice({
  name: 'searchWallet',
  initialState,
  reducers: {
    changeWalletAddress: (state, action:PayloadAction<{searchInput:string}>) => {
      state.walletAddress = action.payload.searchInput;
    },
    searchWallet: (state) => {
      // search for a wallet;
      if (state.walletAddress === '') return;
      void Router.push(`/wallet/${encodeURIComponent(state.walletAddress)}`);
      state.walletAddress = '';
    },
  },
});

export const selectSearchWallet = (state:AppState) => state.searchWallet;
export default SearchWalletSlice.reducer;

export const searchWalletActions = SearchWalletSlice.actions;
