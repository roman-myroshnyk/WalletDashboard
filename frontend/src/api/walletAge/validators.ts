export function validateParams(
  walletAddress:string,
) {
  if (!walletAddress) {
    throw new Error('PARAMS:GET:walletAge: Wallet address is not provided');
  }
}
