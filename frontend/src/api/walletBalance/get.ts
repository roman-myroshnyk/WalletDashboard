import AWS from 'aws-sdk';

import EtherscanAPI from 'etherscan-api';
import Web3 from 'web3';
import { IRequest, IResponse } from '@/api/common';
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
const etherscanApi = EtherscanAPI.init(process.env.ETHER_SCAN_API_KEY);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const web3 = new Web3(Web3.givenProvider);

export interface IGetQuery {
    [key: string]: string;
    walletAddress: string;
    currency: CurrencyLables;
    digitalCurrency: DigitalCurrencyLabels;
}
export type IGetRequest = IRequest<'GET', IGetQuery, null>;

export type SuccessResponse = {
    status: 'OK',
    balance:number,
    walletAddress: string,
}

export type FailResponse = {
    status: 'FAILED',
    message: string,
}

export async function get(req:IGetRequest, res:IResponse) {
  try {
    const { walletAddress, currency, digitalCurrency } = req.query;
    if (!walletAddress) {
      throw new Error('Wallet address is not provided');
    }
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
    const checksum = web3.utils.toChecksumAddress(walletAddress);
    if (!checksum) {
      throw new Error('Invalid wallet addresss');
    }
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const balanceInfo = await etherscanApi.account.balance(checksum);
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const balance = balanceInfo.result;

    const getParams = {
      TableName: process.env.TABLE_NAME,
      Key: {
        PK: `exchangeRates#${digitalCurrency}#${currency}`,
        SK: '1',
      },
    };
    const response = await dynamoDb.get(getParams).promise();
    const rate = response.Item ? response.Item.rate as number : null;
    // 344,270.355903185816963191
    // 344270
    const justifiedBalance = balance / 1000000000000000000;
    const currencyBalance = justifiedBalance * rate;
    const successResponse:SuccessResponse = {
      status: 'OK',
      // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      balance: currencyBalance,
      walletAddress: checksum,
    };
    res.status(200).json(successResponse);
  } catch (e) {
    const error = <Error>e;
    const errorMessage = error.message ? error.message : undefined;
    const failResponse: FailResponse = {
      status: 'FAILED',
      message: errorMessage,
    };
    res.status(500).json(failResponse);
  }
}
