import AWS from 'aws-sdk';

import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';
import { IRequest, IResponse } from '@/api/common';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});

export interface IPostBody {
    digitalCurrency: DigitalCurrencyLabels;
    currency: CurrencyLables;
    newRate: number;
}
export type IPostRequest = IRequest<'POST', null, IPostBody>;

export type SuccessResponse = {
    status: 'OK',
    digitalCurrency: DigitalCurrencyLabels,
    currency: CurrencyLables,
    rate: number,
}

export type FailResponse = {
    status: 'FAILED TO UPDATE',
    message: string,

}

export async function post(req:IPostRequest, res:IResponse) {
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
      throw new Error('new rate is not a number');
    }
    const updateParams = {
      TableName: process.env.TABLE_NAME,
      Key: {
        PK: `exchangeRates#${digitalCurrency}#${currency}`,
        SK: '1',
      },
      UpdateExpression: 'SET rate = :rate',
      ExpressionAttributeValues: {
        ':rate': newRate,
      },
    };

    await dynamoDb.update(updateParams).promise();

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

    const failResponse: FailResponse = {
      status: 'FAILED TO UPDATE',
      message: errorMessage,

    };
    res.status(500).json(failResponse);
  }
}
