import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';

export function validateParams(
  walletAddress: string,
  digitalCurrency: DigitalCurrencyLabels,
  currency: CurrencyLables,
) {
  if (!walletAddress) {
    throw new Error('PARAMS:GET:walletBalance: wallet address is not provided');
  }
  if (!digitalCurrency) {
    throw new Error('PARAMS:GET:walletBalance: digital currency not specified');
  }
  if (!(digitalCurrency in DigitalCurrencyLabels)) {
    throw new Error('PARAMS:GET:walletBalance: unknown digiral currency');
  }
  if (!currency) {
    throw new Error('PARAMS:GET:walletBalance: currency not specified');
  }
  if (!(currency in CurrencyLables)) {
    throw new Error('PARAMS:GET:walletBalance: unkown currency');
  }
}
