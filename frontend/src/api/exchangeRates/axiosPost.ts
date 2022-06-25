import axios, { AxiosResponse } from 'axios';
// interfaces
import { SuccessResponse, FailResponse, IPostBody } from '@/api/exchangeRates/post';

export type PostExchangeRatesParams = IPostBody;

export async function axiosPostExchangeRates({
  digitalCurrency,
  currency,
  newRate,
}:IPostBody) {
  const response:AxiosResponse<SuccessResponse, FailResponse> = await axios.post('/api/exchangeRates', {
    digitalCurrency,
    currency,
    newRate,
  });
  return response.data;
}
