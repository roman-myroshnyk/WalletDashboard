import { toChecksumAddress } from 'ethereumjs-util';

export function validateChecksum(
  walletAddress:string,
) {
  const checksumAddress = toChecksumAddress(walletAddress);

  if (!checksumAddress) {
    throw new Error('EHERSCAN:checksum: Invalid wallet addresss');
  }
  return checksumAddress;
}

const FLOAT_POINT_FIX = 1000000000000000000;
export function getBalance(
  digitalBalance:number,
  rate:number,
) {
  const justifiedBalance = digitalBalance / FLOAT_POINT_FIX;
  const balance = justifiedBalance * rate;
  return balance;
}

export function checkIfOld(
  timestamp:number,
):boolean {
  const oneYearAgo = new Date().setFullYear(new Date().getFullYear() - 1) / 1000;
  const isOld = timestamp < oneYearAgo;
  return isOld;
}
