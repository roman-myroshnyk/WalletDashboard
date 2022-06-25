// handlers
import { get, IGetRequest } from '@/api/exchangeRates/get';
import { put, IPutRequest } from '@/api/exchangeRates/put';
import { post, IPostRequest } from '@/api/exchangeRates/post';
// interface
import { IResponse } from '@/api/common';

export type IHandler = IGetRequest | IPutRequest | IPostRequest;

export default async function handler(req:IHandler, res:IResponse) {
  switch (req.method) {
    case 'GET':
      await get(req, res);
      break;
    case 'PUT':
      await put(req, res);
      break;
    case 'POST':
      await post(req, res);
      break;
    default:
      // should we have delete method?
      res.status(405).json({
        status: 'FAILED',
        error: true,
        message: 'Method Not Supported',
      });
      break;
  }
}
