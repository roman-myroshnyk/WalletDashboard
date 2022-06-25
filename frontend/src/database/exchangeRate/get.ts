import { Database } from '@/database/config';
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';

export async function get(
  currency:CurrencyLables,
  digitalCurrency:DigitalCurrencyLabels,
):Promise<number|null> {
  try {
    const getParams = {
      TableName: process.env.TABLE_NAME,
      Key: {
        PK: `exchangeRates#${digitalCurrency}#${currency}`,
        SK: '1',
      },
    };

    const response = await Database.get(getParams).promise();

    const rate = response.Item ? response.Item.rate as number : null;

    return rate;
  } catch (e) {
    throw new Error('DATABASE:GET:exchangeRates: can not get currency rate');
  }
}
