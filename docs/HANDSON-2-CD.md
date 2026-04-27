# ハンズオン 2: CD — GitHub Pages への自動デプロイ

## ゴール

`main` ブランチに PR がマージされたとき、アプリをビルドして GitHub Pages に自動デプロイする GitHub Actions ワークフローを完成させる。

## やること

`.github/workflows/deploy.yml` の以下のTODOを穴埋めしてください。

| TODO   | 埋める内容                                                          |
| ------ | ------------------------------------------------------------------- |
| TODO-1 | `main` ブランチへの push でワークフローが起動するようにする         |
| TODO-2 | `dist/`に出力されるビルド成果物を`github-pages`という名前で保存する |
| TODO-3 | deploy ジョブが build ジョブ完了後に動くようにする                  |
| TODO-4 | Pages デプロイに必要な `permissions` を設定する                     |

## ヒント

<details>
<summary>ヒント 1: 今回はどのイベントで起動するか</summary>

今回は `push` を使います。対象は `main` ブランチです。

- https://docs.github.com/ja/actions/reference/workflows-and-actions/events-that-trigger-workflows#push

</details>

<details>
<summary>ヒント 2: upload-pages-artifact の設定項目</summary>

以下のページに `actions/upload-pages-artifact` の入力項目が書いてあります。  
このうち `path` と `name` を指定する必要があります。

- https://github.com/actions/upload-pages-artifact#inputs-

</details>

<details>
<summary>ヒント 3: ジョブの依存関係の指定方法</summary>

以下ページを参照してください。

- https://docs.github.com/ja/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idneeds

</details>

<details>
<summary>ヒント 4: GitHub Pages に必要な権限は何か</summary>

以下ページの`2.`を参照してください。

- https://github.com/actions/deploy-pages#security-considerations

</details>

## 動作確認

1. ブランチを作成し、コミット＆プッシュ
2. PR を作成してマージ
3. デプロイワークフローが実行／成功することを確認する
4. ワークフローに表示された URL で電卓アプリが表示されることを確認する

> [!NOTE]
> URL は通常 `https://<ユーザー名>.github.io/<リポジトリ名>/` の形式です。
