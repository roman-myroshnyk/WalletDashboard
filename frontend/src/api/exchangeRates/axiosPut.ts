import axios, { AxiosResponse } from 'axios';
import { SuccessResponse, FailResponse, IPutBody } from '@/api/exchangeRates/put';

export type PutExchangeRatesParams = IPutBody

export async function axiosPutExchangeRates({
  digitalCurrency,
  currency,
  newRate,
}:PutExchangeRatesParams) {
  const response:AxiosResponse<SuccessResponse, FailResponse> = await axios.put('/api/exchangeRates', {
    digitalCurrency,
    currency,
    newRate,
  });
  return response.data;
}
