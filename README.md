##  Securitizeの皆様
## お疲れ様です。

#
#

## テスト課題を大変お待たせしました。

成果物は以下になります。

本番環境　https://d1927ituobdtri.cloudfront.net

開発環境　https://d782dyzfkd3qe.cloudfront.net

## デプロイ
ソースコードが`Git`に乗っていて`GitHubAction`によってデプロイできます。

`production`ブランチにマージすると本番のデプロイを行い,

`development`ブランチにマージすると開発環境のデプロイを行えます。

## アーキテクチャ

アーキテクチャの構成には`serverless-stack`というIaC（Infrastructure as code）のツールを利用しています。

- `DynamoDB`
- `Lambda＠Edge`
- `CloudFront`

というような構成になっています。

## アプリのスタック

- フレームワーク:　`Nextjs`
- アニメーションライブラリ:　`framer-motion`
- HTTPクライアント:　`axios`
- ステート管理:　`redux-toolbox`
- UIコンポーネントの管理、開発:　`Storybook`

といった構成になっております。

## 自分のAWSアカウントにデプロイしたい場合、
リポジトリをフォークして
secretsのところにご自身のアカウントの
- `DEFAULT_AWS_ACCESS_KEY_ID`　(AWSのアクセスキー)
- `DEFAULT_AWS_SECRET_ACCESS_KEY`　(AWSのシークレットアクセスキー）
を指定したらデプロイできるかと思います。
それとも本リポジトリにコラボリクエストを承認もできます。

## 課題に関しましてが以下でまとめます。

- [ ] https://etherscan.io/apis を利用する。

勝手にetherscan-apiというラッパーを使っていますが、ゼロからAPIを作る必要がある場合、作り直しますのでご指摘ください。

- [x] 2. An endpoint that returns true if the wallet is old.
        A wallet is considered old if the latest transaction was performed at least one year ago
        
実装いたしました。

- [x] 2. Add 2 endpoints -

        a. Get exchange rates from ETH (Ethereum) to Euro and US Dollar, those can be stored in-memory / hardcoded (no need for a DB)
        b. Edit the exchange rate of ETH (Ethereum) to Euro and US Dollar
ETH以外の仮想通貨に拡張できるようにしました。そして一つのエンドポイントにまとめました。

- [x] 3. An endpoint that gets a currency (Euro or US Dollar) and returns the balance of the　ETH in the wallet in the selected currency in terms of the exchange rate of #2.

ETH以外の仮想通貨に拡張できるように構成しました。そしてUSD,EUR以外の通貨を追加できるようになっています。

## テストデータ

- `0xeded3400702aca8000af3ac47af80ef3e8c800ba` (old - more than 1 year ago)
- `0x4bdd56559304e8961faf4fe78defb14f806fdc15` (old - more than 1 year ago)
- `0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae` (newer)

## Lighthouseの結果

<img width="715" alt="Screen Shot 2022-06-27 at 13 35 59" src="https://user-images.githubusercontent.com/69153600/175860910-b3c1930f-048a-4b1a-9926-eacf8de4d637.png">


現時点`2022年06月24日`までやりきれていない課題：

- [ ] テスト
- [ ] 詳細のエラーハンドリング
- [ ] パフォーマンスチューニング

上記は大変申し訳ありませんが、今週は時間が足りなくてもし宜しかったら`月曜日27日`までに完了させて頂きたく思います。

> - リクエスト・リスポンスのHeadersの調整
> - Authorization, Authentification

上記の２件を実施しないようにいきたいと思います。

提出が大変遅れてしまったことと未完成のままで提出をさせていただくことをお詫びを申し上げます。

残った課題を月曜に提出させていただけますでしょうか？

ご確認、ご検討の程よろしくお願い致します。
