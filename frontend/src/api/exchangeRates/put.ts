import AWS from 'aws-sdk';

import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';
import { IRequest, IResponse } from '@/api/common';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});

export interface IPutBody {
    digitalCurrency: DigitalCurrencyLabels;
    currency: CurrencyLables;
    newRate: number;
}

export type IPutRequest = IRequest<'PUT', null, IPutBody>;

export type SuccessResponse = {
    status: 'OK',
    digitalCurrency:DigitalCurrencyLabels,
    currency: CurrencyLables,
    rate:number,
}

export type FailResponse = {
    status: 'FAILED TO CREATE',
    message: string,
}

export async function put(req:IPutRequest, res:IResponse) {
  try {
    const { digitalCurrency, currency, newRate } = req.body;
    if (!digitalCurrency) {
      throw new Error('digital currency not specified');
    }
    if (!(digitalCurrency in DigitalCurrencyLabels)) {
      throw new Error('unknown digiral currency');
    }
    if (!currency) {
      throw new Error('currency not specified');
    }
    if (!(currency in CurrencyLables)) {
      throw new Error('unkown currency');
    }
    const newRateFixed = newRate.toFixed(2);
    if (Number.isNaN(newRateFixed)) {
      throw new Error('new rate is not number');
    }

    const putParams = {
      TableName: process.env.TABLE_NAME,
      Item: {
        PK: `exchangeRates#${digitalCurrency}#${currency}`,
        SK: '1',
        rate: newRate,
      },
    };

    await dynamoDb.put(putParams).promise();
    const successResponse:SuccessResponse = {
      status: 'OK',
      digitalCurrency,
      currency,
      rate: Number(newRate),
    };

    res.status(200).json(successResponse);
  } catch (e) {
    const err = <Error>e;
    const errorMessage = err.message ? err.message : undefined;

    const failResponse:FailResponse = {
      status: 'FAILED TO CREATE',
      message: errorMessage,
    };

    res.status(500).json(failResponse);
  }
}
