import { Database } from '@/database/config';
import { CurrencyLables, DigitalCurrencyLabels } from '@/consts/currency';

export async function update(
  digitalCurrency: DigitalCurrencyLabels,
  currency: CurrencyLables,
  newRate: number,
) {
  try {
    const updateParams = {
      TableName: process.env.TABLE_NAME,
      Key: {
        PK: `exchangeRates#${digitalCurrency}#${currency}`,
        SK: '1',
      },
      UpdateExpression: 'SET rate = :rate',
      ExpressionAttributeValues: {
        ':rate': newRate,
      },
    };

    await Database.update(updateParams).promise();
  } catch (e) {
    throw new Error('DATABASE:UPDATE:exchangeRates: can not update currency rate');
  }
}
