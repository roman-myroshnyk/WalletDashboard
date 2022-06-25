import EtherscanAPI from 'etherscan-api';

export const etherscanApi = EtherscanAPI.init(process.env.ETHER_SCAN_API_KEY);
