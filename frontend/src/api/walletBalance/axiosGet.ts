import axios, { AxiosResponse } from 'axios';
import { SuccessResponse, FailResponse, IGetQuery } from '@/api/walletBalance/get';

export type GetWalletBalanceParams = IGetQuery;

export async function axiosGetWalletBalance({
  walletAddress,
  currency,
  digitalCurrency,
}:GetWalletBalanceParams) {
  const response:AxiosResponse<SuccessResponse, FailResponse> = await axios.get('/api/walletBalance', {
    params: {
      walletAddress,
      currency,
      digitalCurrency,
    },
  });
  return response.data;
}
