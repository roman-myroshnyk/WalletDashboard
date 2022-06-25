import axios, { AxiosResponse } from 'axios';
// interfaces
import { SuccessResponse, FailResponse, IGetQuery } from '@/api/exchangeRates/get';

export type GetExchangeRatesParams = IGetQuery;

export async function axiosGetExchangeRates({
  digitalCurrency,
  currency,
}:GetExchangeRatesParams) {
  const response:AxiosResponse<SuccessResponse, FailResponse> = await axios.get('/api/exchangeRates', {
    params: {
      digitalCurrency,
      currency,
    },
  });
  return response.data;
}
