# ハンズオン 4: Dependabot — 依存関係の自動管理

## ゴール

Dependabot を設定し、依存パッケージの脆弱性を自動検知・PR 自動作成し、CI/CD パイプラインで安全にデプロイする流れを体験する。

## やること

`.github/dependabot.yml` の以下を穴埋めしてください。

| TODO   | 埋める内容                                             |
| ------ | ------------------------------------------------------ |
| TODO-1 | Dependabot の対象エコシステムを`npm`に設定する         |
| TODO-2 | Dependabot の実行頻度を毎日に設定する                  |
| TODO-3 | 作成される PR の担当者に自分が割り当てられるようにする |

## ヒント

<details>
<summary>ヒント 1: Dependabot 設定の書き方を確認する</summary>

Dependabot のオプションは以下で確認できます。

- https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference

</details>

<details>
<summary>ヒント 2: 毎日実行の指定方法</summary>

Dependabot の実行頻度は `interval` で指定します。

- https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#interval

</details>

## 動作確認

1. mainブランチにコミットしてプッシュする
2. GitHub リポジトリの **Actions** で Dependabot が実行されることを確認する
3. Dependabot が作成した PR を確認しマージする

> [!TIP]
> Dependabot の PR がすぐに作成されない場合は、**Insights > Dependency graph > Dependabot** から手動で確認・実行できます。
