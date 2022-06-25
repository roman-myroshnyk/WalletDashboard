import { etherscanApi } from '@/api/etherscan/config';

export async function get(checksumAddress:string):Promise<number> {
  try {
    const balanceResponse = await etherscanApi.account.balance(checksumAddress);
    const balance = balanceResponse.result;
    return balance;
  } catch (e) {
    throw new Error('EHERSCAN:getBalance: faild to get balance');
  }
}
