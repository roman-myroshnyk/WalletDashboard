import type { NextApiRequest, NextApiResponse } from 'next';

export interface IRequest<
Method extends NextApiRequest['method'],
Query extends NextApiRequest['query'],
Body extends NextApiRequest['body']
> extends NextApiRequest {
    method:Method,
    query: Query,
    body: Body,
}

export type IResponse = NextApiResponse;
