import AWS from 'aws-sdk';

import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';
import { IRequest, IResponse } from '@/api/common';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});

export interface IGetQuery {
    [key: string]: string;
    digitalCurrency: DigitalCurrencyLabels;
    currency: CurrencyLables;
}

export type IGetRequest = IRequest<'GET', IGetQuery, null>;

export type SuccessResponse = {
    status: 'OK',
    digitalCurrency: DigitalCurrencyLabels,
    currency: CurrencyLables,
    rate: number,
}

export type FailResponse = {
    status: 'FAILED TO GET',
    message: string
}
export async function get(req:IGetRequest, res:IResponse) {
  try {
    const { digitalCurrency, currency } = req.query;
    // TODO create validate helper for params
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

    const getParams = {
      TableName: process.env.TABLE_NAME,
      Key: {
        PK: `exchangeRates#${digitalCurrency}#${currency}`,
        SK: '1',
      },
    };
    const response = await dynamoDb.get(getParams).promise();
    const rate = response.Item ? response.Item.rate as number : null;

    const successResponse:SuccessResponse = {
      status: 'OK',
      digitalCurrency,
      currency,
      rate: Number(rate),
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
