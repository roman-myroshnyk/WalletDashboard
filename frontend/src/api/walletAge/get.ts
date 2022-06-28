// handlers
import { get as getLastTransactionTime } from '@/api/etherscan/lastTransactionTime/get';
// interfaces
import { IRequest, IResponse } from '@/api/common';
// utils
import { validateParams } from '@/api/walletAge/validators';
import { validateChecksum, checkIfOld } from '@/api/etherscan/utils';

export interface IGetQuery {
    [key: string]: string;
    walletAddress: string
}

export type IGetRequest = IRequest<'GET', IGetQuery, null>;

export type SuccessResponse = {
    status: 'OK',
    isOld:boolean,
}

export type FailResponse = {
    status: 'FAILED',
    message: string,
}

export async function get(req:IGetRequest, res:IResponse) {
  try {
    const { walletAddress } = req.query;

    validateParams(walletAddress);

    const checksumAddress = validateChecksum(walletAddress);

    const lastTransactionTimestamp = await getLastTransactionTime(checksumAddress);

    const isOld = checkIfOld(lastTransactionTimestamp);

    const successResponse:SuccessResponse = {
      status: 'OK',
      isOld,
    };

    res.status(200).json(successResponse);
  } catch (e) {
    const error = <Error>e;
    const errorMessage = error.message ? error.message : '';

    const failResponse:FailResponse = {
      status: 'FAILED',
      message: errorMessage,
    };

    res.status(500).json(failResponse);
  }
}
