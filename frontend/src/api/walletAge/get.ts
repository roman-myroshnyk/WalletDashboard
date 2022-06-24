import EtherscanAPI from 'etherscan-api';
import Web3 from 'web3';
import { IRequest, IResponse } from '@/api/common';

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
const etherscanApi = EtherscanAPI.init(process.env.ETHER_SCAN_API_KEY);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const web3 = new Web3(Web3.givenProvider);

export interface IGetQuery {
    [key: string]: string;
    walletAddress: string
}

export type IGetRequest = IRequest<'GET', IGetQuery, null>;

export type SuccessResponse = {
    status: 'OK',
    isOld:boolean,
    walletAddress: string,
}

export type FailResponse = {
    status: 'FAILED',
    message: string,
}

export async function get(req:IGetRequest, res:IResponse) {
  try {
    const { walletAddress } = req.query;
    if (!walletAddress) {
      throw new Error('Wallet address is not provided');
    }

    const checksum = web3.utils.toChecksumAddress(walletAddress);
    if (!checksum) {
      throw new Error('Invalid wallet addresss');
    }

    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const transactionsResponse = await etherscanApi.account.txlist(checksum, 1, 'latest', 1, 1, 'desc');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!transactionsResponse.result[0]) {
      throw new Error('Wallet has no transactions');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const lastTransactionTimestamp = Number(transactionsResponse.result[0].timeStamp);
    const oneYearAgo = new Date().setFullYear(new Date().getFullYear() - 1) / 1000;

    const isOld = lastTransactionTimestamp < oneYearAgo;

    const successResponse:SuccessResponse = {
      status: 'OK',
      isOld,
      walletAddress: checksum,
    };
    res.status(200).json(successResponse);
  } catch (e) {
    const error = <Error>e;
    const errorMessage = error.message ? error.message : undefined;
    const failResponse:FailResponse = {
      status: 'FAILED',
      message: errorMessage,
    };
    res.status(500).json(failResponse);
  }
}
