import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';

export function validateGetParams(
  digitalCurrency:DigitalCurrencyLabels,
  currency:CurrencyLables,
) {
  if (!digitalCurrency) {
    throw new Error('PARAMS:GET:exchangeRates: digital currency not specified');
  }
  if (!(digitalCurrency in DigitalCurrencyLabels)) {
    throw new Error('PARAMS:GET:exchangeRates: unknown digiral currency');
  }
  if (!currency) {
    throw new Error('PARAMS:GET:exchangeRates: currency not specified');
  }
  if (!(currency in CurrencyLables)) {
    throw new Error('PARAMS:GET:exchangeRates: unkown currency');
  }
}

export function validateUpdateParams(
  digitalCurrency:DigitalCurrencyLabels,
  currency:CurrencyLables,
  newRate:number,
):number {
  if (!digitalCurrency) {
    throw new Error('PARAMS:UPDATE:exchangeRates: digital currency not specified');
  }
  if (!(digitalCurrency in DigitalCurrencyLabels)) {
    throw new Error('PARAMS:UPDATE:exchangeRates: unknown digiral currency');
  }
  if (!currency) {
    throw new Error('PARAMS:UPDATE:exchangeRates: currency not specified');
  }
  if (!(currency in CurrencyLables)) {
    throw new Error('PARAMS:UPDATE:exchangeRates: unkown currency');
  }
  const newRateFixed = Number(newRate.toFixed(2));
  if (Number.isNaN(newRateFixed)) {
    throw new Error('PARAMS:UPDATE:exchangeRates: new rate is not number');
  }
  return newRateFixed;
}
