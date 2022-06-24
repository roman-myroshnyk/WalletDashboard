import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CurrencyInfo, DigitalCurrencyLabels, EnabledCurrencies,
} from '@/consts/currency';
import type { AppState, AppThunk } from '@/app/store';
import { axiosGetExchangeRates, GetExchangeRatesParams } from '@/api/exchangeRates/axiosGet';
import { axiosPutExchangeRates, PutExchangeRatesParams } from '@/api/exchangeRates/axiosPut';
import { axiosPostExchangeRates, PostExchangeRatesParams } from '@/api/exchangeRates/axiosPost';
import { selectWallet, walletActions } from './walletSlice';

interface SelectedCurrency extends CurrencyInfo {
  index: number
}
export interface ExchangeRateState {
    rate?: number,
    rateToEdit?:number,
    isEditing: boolean;
    selectedCurrency: SelectedCurrency,
}
const initialState: ExchangeRateState = {
  rate: null,
  rateToEdit: null,
  isEditing: false,
  selectedCurrency: { ...EnabledCurrencies[0], index: 0 },
};

export const getExchangeRate = createAsyncThunk(
  'exchangeRate/getExchangeRate',
  async ({
    digitalCurrency,
    currency,
  }:GetExchangeRatesParams) => axiosGetExchangeRates({ digitalCurrency, currency }),
);

export const putExchangeRate = createAsyncThunk(
  'exchangeRate/putExchangeRate',
  async ({
    digitalCurrency,
    currency,
    newRate,
  }:PutExchangeRatesParams) => axiosPutExchangeRates({ digitalCurrency, currency, newRate }),
);

export const postExchangeRate = createAsyncThunk(
  'exchangeRate/postExchangeRate',
  async ({
    digitalCurrency,
    currency,
    newRate,
  }:PostExchangeRatesParams) => axiosPostExchangeRates({ digitalCurrency, currency, newRate }),
);

export const exchangeRateSlice = createSlice({
  name: 'exchangeRate',
  initialState,
  reducers: {
    updateCurrency: (state, action:PayloadAction<{currencyIndex:number}>) => {
      state.selectedCurrency = {
        ...EnabledCurrencies[action.payload.currencyIndex],
        index: action.payload.currencyIndex,
      };
    },
    startEditingRate: (state) => {
      state.rateToEdit = state.rate;
      state.isEditing = true;
    },
    cancelEditingRate: (state) => {
      state.rateToEdit = null;
      state.isEditing = false;
    },
    changeRateToEdit: (state, action:PayloadAction<{newExchangeRate:string}>) => {
      const newNumberRate = parseFloat(action.payload.newExchangeRate);
      state.rateToEdit = newNumberRate;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExchangeRate.fulfilled, (state, action) => {
        state.rate = action.payload.rate;
      })
      .addCase(putExchangeRate.fulfilled, (state, action) => {
        state.rate = action.payload.rate;
        state.isEditing = false;
      })
      .addCase(postExchangeRate.fulfilled, (state, action) => {
        state.rate = action.payload.rate;
        state.isEditing = false;
      });
  },
});

export const selectExchangeRate = (state:AppState) => state.exchangeRate;
export default exchangeRateSlice.reducer;

export const initExchangeRate = ():AppThunk => async (dispatch, getState) => {
  const { selectedCurrency } = selectExchangeRate(getState());
  await dispatch(getExchangeRate({
    currency: selectedCurrency.label,
    digitalCurrency: DigitalCurrencyLabels.ETH,
  }));
};

const updateExchangeRate = ():AppThunk => async (dispatch, getState) => {
  const { selectedCurrency, rate, rateToEdit } = selectExchangeRate(getState());
  const wallet = selectWallet(getState());

  if (rate === rateToEdit) {
    dispatch(exchangeRateSlice.actions.cancelEditingRate());
    return;
  }
  await dispatch(postExchangeRate({
    currency: selectedCurrency.label,
    digitalCurrency: DigitalCurrencyLabels.ETH,
    newRate: rateToEdit,
  }));
  await dispatch(
    walletActions.getWalletBalance({
      walletAddress: wallet.walletAddress,
      currency: selectedCurrency.label,
      digitalCurrency: DigitalCurrencyLabels.ETH,
    }),
  );
};

const changeCurrency = (currencyIndex:number):AppThunk => async (dispatch, getState) => {
  const currencyLabel = EnabledCurrencies[currencyIndex].label;
  const wallet = selectWallet(getState());
  await dispatch(getExchangeRate({
    currency: currencyLabel,
    digitalCurrency: DigitalCurrencyLabels.ETH,
  }));
  await dispatch(
    walletActions.getWalletBalance({
      walletAddress: wallet.walletAddress,
      currency: currencyLabel,
      digitalCurrency: DigitalCurrencyLabels.ETH,
    }),
  );
  dispatch(exchangeRateSlice.actions.updateCurrency({ currencyIndex }));
};

export const exchangeRateActions = {
  ...exchangeRateSlice.actions,
  initExchangeRate,
  updateExchangeRate,
  changeCurrency,
};
