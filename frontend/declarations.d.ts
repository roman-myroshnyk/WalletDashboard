interface ITxlistResult {
    timeStamp: string;
}

interface ITxlistResponse {
    result: ITxlistResult[]
}

interface ITxlist {
(
    address:string,
    startblock:number,
    endblock:string,
    page:number, offset:nubmer,
    sort:sting
    ): Promise<ITxlistResponse>
}

interface IBalanceResponse {
    result: number;
}
interface IBalance {
    (address:string): Promise<IBalanceResponse>
}

interface EtherscanAPI {
    account: {
        txlist:ITxlist;
        balance: IBalance;
    };
}
declare module 'etherscan-api' {
    const init:(ETHERSCAN_API:string) => EtherscanAPI;
    export = {
      init,
    };
}

declare module 'random-hash'
