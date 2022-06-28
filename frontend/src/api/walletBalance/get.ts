// handlers
import { get as getExchangeRate } from '@/database/exchangeRate/get';
import { get as getEtherBalance } from '@/api/etherscan/balance/get';
// interfaces
import { IRequest, IResponse } from '@/api/common';
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';
// utils
import { validateParams } from '@/api/walletBalance/validators';
import { validateChecksum, getBalance } from '@/api/etherscan/utils';

export interface IGetQuery {
    [key: string]: string;
    walletAddress: string;
    digitalCurrency: DigitalCurrencyLabels;
    currency: CurrencyLables;
}

export type IGetRequest = IRequest<'GET', IGetQuery, null>;

export type SuccessResponse = {
    status: 'OK',
    balance:number | null,
}

export type FailResponse = {
    status: 'FAILED',
    message: string,
}

export async function get(req:IGetRequest, res:IResponse) {
  try {
    const { walletAddress, currency, digitalCurrency } = req.query;

    validateParams(walletAddress, digitalCurrency, currency);
    const checksumAddress = validateChecksum(walletAddress);

    const digitalBalance = await getEtherBalance(checksumAddress);
    const rate = await getExchangeRate(currency, digitalCurrency);

    const balance = getBalance(digitalBalance, rate);

    const successResponse:SuccessResponse = {
      status: 'OK',
      balance,
    };

    res.status(200).json(successResponse);
  } catch (e) {
    const error = <Error>e;
    const errorMessage = error.message ? error.message : '';

    const failResponse: FailResponse = {
      status: 'FAILED',
      message: errorMessage,
    };

    res.status(500).json(failResponse);
  }
}
