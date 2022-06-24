import { get, IGetRequest } from '@/api/walletBalance/get';
import { IResponse } from '@/api/common';

export type IHandler = IGetRequest;

export default async function handler(req:IHandler, res:IResponse) {
  if (req.method === 'GET') {
    await get(req, res);
  } else {
    res.status(405).json({
      error: true,
      message: 'Method Not Supported',
    });
  }
}
