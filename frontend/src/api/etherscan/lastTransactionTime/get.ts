import { etherscanApi } from '@/api/etherscan/config';

export async function get(
  checksumAddress:string,
):Promise<number> {
  try {
    const transactionsResponse = await etherscanApi.account.txlist(checksumAddress, 0, 'latest', 1, 1, 'desc');

    const lastTranscaction = transactionsResponse.result[0];

    if (!lastTranscaction) {
      throw new Error('ETHERSCAN:lastTransactionTime: wallet has no transactions');
    }

    const lastTransactionTimestamp = Number(lastTranscaction.timeStamp);
    return lastTransactionTimestamp;
  } catch (e) {
    const error = <Error>e;
    if (error.message.startsWith('ETHERSCAN')) {
      throw e;
    } else {
      throw new Error('ETHERSCAN:lastTransactionTime: failed to get last transaction');
    }
  }
}
