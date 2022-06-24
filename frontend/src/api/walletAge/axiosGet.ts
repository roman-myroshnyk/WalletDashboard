import axios, { AxiosResponse } from 'axios';
import { SuccessResponse, FailResponse, IGetQuery } from '@/api/walletAge/get';

export type GetWalletAgeParams = IGetQuery;

export async function axiosGetWalletAge({
  walletAddress,
}:GetWalletAgeParams) {
  const response:AxiosResponse<SuccessResponse, FailResponse> = await axios.get('/api/walletAge', {
    params: {
      walletAddress,
    },
  });
  return response.data;
}
