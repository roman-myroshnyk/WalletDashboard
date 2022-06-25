// database
import { update as dbUpdateExchangeRate } from '@/database/exchangeRate/update';
// interfaces
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';
import { IRequest, IResponse } from '@/api/common';
// utils
import { validateUpdateParams } from '@/api/exchangeRates/validators';

export interface IPostBody {
    digitalCurrency: DigitalCurrencyLabels;
    currency: CurrencyLables;
    newRate: number;
}

export type IPostRequest = IRequest<'POST', null, IPostBody>;

export type SuccessResponse = {
    status: 'OK',
    rate: number,
}

export type FailResponse = {
    status: 'FAILED TO UPDATE',
    message: string,

}

export async function post(req:IPostRequest, res:IResponse) {
  try {
    const { digitalCurrency, currency, newRate } = req.body;

    const rate = validateUpdateParams(digitalCurrency, currency, newRate);

    await dbUpdateExchangeRate(digitalCurrency, currency, rate);

    const successResponse:SuccessResponse = {
      status: 'OK',
      rate,
    };

    res.status(200).json(successResponse);
  } catch (e) {
    const err = <Error>e;
    const errorMessage = err.message ? err.message : undefined;

    const failResponse: FailResponse = {
      status: 'FAILED TO UPDATE',
      message: errorMessage,
    };

    res.status(500).json(failResponse);
  }
}
