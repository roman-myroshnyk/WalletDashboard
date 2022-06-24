import { get, IGetRequest } from '@/api/walletAge/get';
import { IResponse } from '@/api/common';

export type IHandler = IGetRequest;

export default async function handler(req:IHandler, res:IResponse) {
  switch (req.method) {
    case 'GET':
      await get(req, res);
      break;

    default:
      res.status(405).json({
        error: true,
        message: 'Method Not Supported',
      });
      break;
  }
}
