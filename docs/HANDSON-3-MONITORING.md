# ハンズオン 3: 監視 — 定期ヘルスチェック

## ゴール

GitHub Actions のスケジュール実行を使い、GitHub Pages にデプロイしたアプリの死活監視を行う。アプリが応答しない場合に GitHub Issue でアラートを発報する。

## やること

`.github/workflows/health-check.yml` の以下のTODOを穴埋めしてください。

| TODO   | 埋める内容                                                 |
| ------ | ---------------------------------------------------------- |
| TODO-1 | 15分ごとに定期実行されるようにする                         |
| TODO-2 | 手動実行できるようにする                                   |
| TODO-3 | 監視対象の GitHub Pages URL を `SITE_URL` に設定する       |
| TODO-4 | 正常時は `HEALTH_STATUS=success`、異常時は `HEALTH_STATUS=failed` を後続の step に渡せるようにする |

## ヒント

<details>
<summary>ヒント 1: 定期実行で使用するイベント</summary>

`schedule` イベントを使います。

- https://docs.github.com/ja/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule

</details>

<details>
<summary>ヒント 2: 15分ごとに実行する cron 式</summary>

15分ごとに実行するなら、`*/15 * * * *` の形式を使います。

</details>

<details>
<summary>ヒント 3: 手動実行のイベント</summary>

`workflow_dispatch` イベントです。

- https://docs.github.com/ja/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_dispatch

</details>

<details>
<summary>ヒント 4: デプロイ先のURLの確認方法</summary>

GitHubのリポジトリの **Settings > Pages** で、サイトのURLを確認できます。

</details>

<details>
<summary>ヒント 5: step をまたいで値を渡す方法</summary>

あらかじめ用意されているoutputファイルにkey=value形式で書き込むことで、stepをまたいで値を渡すことができるようになります。  
outputファイルは、`GITHUB_OUTPUT` という環境変数にパスが設定されているので、以下のようにして書き込むことができます。

```bash
echo "MY_KEY=my_value1" >> "${GITHUB_OUTPUT}"
```

> [!TIP]
> 受け取る側は、`${{ steps.<step_id>.outputs.<key> }}` で値を参照できます。

</details>

## 動作確認

1. コミットしてプッシュする
2. GitHub リポジトリの **Actions** タブから手動で「Health Check」ワークフローを実行する
3. ✅ サイトが正常なら成功することを確認する
4. GitHub Pages を一時的に無効にする:
   - **Settings > Pages** で「Unpublish site」をクリックしてサイトを削除する
5. 再度 **Actions** タブから手動で「Health Check」ワークフローを実行する
6. ❌ ワークフローが失敗することを確認する

> [!NOTE]
> スケジュール実行は最大で数分の遅延があるため、手動実行で動作確認するのがおすすめです。
