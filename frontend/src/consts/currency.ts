export enum CurrencyLables {
    USD = 'USD',
    EUR = 'EUR',
  }

export enum DigitalCurrencyLabels {
  ETH = 'ETH',
  BTC = 'BTC'
}
export enum CurrencySymbols {
    USD = '$',
    EUR = '€',
  }

export type CurrencyInfo = {
    symbol: CurrencySymbols,
    label: CurrencyLables,
    description: string
  }
export const EnabledCurrencies:CurrencyInfo[] = [
  {
    symbol: CurrencySymbols.USD,
    label: CurrencyLables.USD,
    description: 'United States Dollar',
  },
  {
    symbol: CurrencySymbols.EUR,
    label: CurrencyLables.EUR,
    description: 'Euro Member Countries',
  },
];

export const CurrencyNames = EnabledCurrencies.map((currency) => currency.label);

type TCurrencyIndexes = { [K in keyof typeof CurrencyLables]: number }

export const CurrencyIndexes: TCurrencyIndexes = EnabledCurrencies.reduce(
  (indexes, currencyInfo, currentIndex) => (
    { ...indexes, [currencyInfo.label]: currentIndex }),
  { } as TCurrencyIndexes,
);
