import AWS from 'aws-sdk';

export const Database = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});
