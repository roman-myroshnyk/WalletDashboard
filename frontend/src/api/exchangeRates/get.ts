// database
import { get as dbGetExchangeRate } from '@/database/exchangeRate/get';
// interfaces
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';
import { IRequest, IResponse } from '@/api/common';
// utils
import { validateGetParams } from '@/api/exchangeRates/validators';

export interface IGetQuery {
    [key: string]: string;
    digitalCurrency: DigitalCurrencyLabels;
    currency: CurrencyLables;
}

export type IGetRequest = IRequest<'GET', IGetQuery, null>;

export type SuccessResponse = {
    status: 'OK',
    rate: number,
}

export type FailResponse = {
    status: 'FAILED TO GET',
    message: string
}

export async function get(req:IGetRequest, res:IResponse) {
  try {
    const { digitalCurrency, currency } = req.query;

    validateGetParams(digitalCurrency, currency);

    const rate = await dbGetExchangeRate(currency, digitalCurrency);

    const successResponse:SuccessResponse = {
      status: 'OK',
      rate,
    };

    res.status(200).json(successResponse);
  } catch (e) {
    const err = <Error>e;
    const errorMessage = err.message ? err.message : undefined;

    const failResponse: FailResponse = {
      status: 'FAILED TO GET',
      message: errorMessage,
    };

    res.status(404).json(failResponse);
  }
}
