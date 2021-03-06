// database
import { update as dbUpdateExchangeRate } from '@/database/exchangeRate/update';
// interfaces
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';
import { IRequest, IResponse } from '@/api/common';
// utils
import { validateUpdateParams } from '@/api/exchangeRates/validators';

export interface IPutBody {
    digitalCurrency: DigitalCurrencyLabels;
    currency: CurrencyLables;
    newRate: number;
}
interface IQuery {
  [key: string]: string;
}

export type IPutRequest = IRequest<'PUT', IQuery, IPutBody>;

export type SuccessResponse = {
    status: 'OK',
    rate:number,
}

export type FailResponse = {
    status: 'FAILED TO CREATE',
    message: string,
}

export async function put(req:IPutRequest, res:IResponse) {
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
    const errorMessage = err.message ? err.message : '';

    const failResponse:FailResponse = {
      status: 'FAILED TO CREATE',
      message: errorMessage,
    };

    res.status(500).json(failResponse);
  }
}
