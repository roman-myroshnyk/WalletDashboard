import { etherscanApi } from '@/api/etherscan/config';

export async function get(
  checksumAddress:string,
):Promise<number> {
  try {
    const transactionsResponse = await etherscanApi.account.txlist(checksumAddress, 0, 'latest', 1, 1, 'desc');
    const lastTransaction = transactionsResponse.result[0];

    if (!lastTransaction) {
      throw new Error('ETHERSCAN:lastTransactionTime: wallet has no transactions');
    }

    const lastTransactionTimestamp = Number(lastTransaction.timeStamp);
    return lastTransactionTimestamp;
  } catch (e) {
    const error = <Error>e;
    if (error.message && error.message.startsWith('ETHERSCAN')) {
      throw e;
    } else {
      throw new Error('ETHERSCAN:lastTransactionTime: failed to get last transaction');
    }
  }
}
