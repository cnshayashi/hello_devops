# DevOps ハンズオン

GitHub Actions を使った CI/CD パイプラインの構築を、ハンズオンで学びます。

## 前提条件

- Git の基本操作（clone, branch, commit, push, PR）ができること。

## 学習内容

| #   | テーマ                         | 内容                                            |
| --- | ------------------------------ | ----------------------------------------------- |
| 1   | CI（継続的インテグレーション） | PR 作成時に自動テストを実行する                 |
| 2   | CD（継続的デリバリー）         | main マージ時に GitHub Pages へ自動デプロイする |
| 3   | 監視・アラート                 | 定期ヘルスチェックで障害を検知する              |
| 4   | 依存関係管理                   | Dependabot で脆弱性を検知し自動修正する         |

## 進め方

まず [docs/事前準備.md](docs/事前準備.md) の共通準備を実施し、次の 4 つの資料を順番に進めてください。

1. [docs/HANDSON-1-CI.md](docs/HANDSON-1-CI.md)
2. [docs/HANDSON-2-CD.md](docs/HANDSON-2-CD.md)
3. [docs/HANDSON-3-MONITORING.md](docs/HANDSON-3-MONITORING.md)
4. [docs/HANDSON-4-DEPENDABOT.md](docs/HANDSON-4-DEPENDABOT.md)

## 解答例

各ハンズオンの解答例は **[docs/answers/](docs/answers/)** にあります。  
行き詰まったときに参考にしてください。

## プロジェクト構成

```
hello_devops/
├── .devcontainer/              # Codespaces の設定
├── .github/                    # ← 穴埋めテンプレート
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── deploy.yml
│   │   └── health-check.yml
│   └── dependabot.yml
├── docs/
│   ├── 事前準備.md             # ← 事前準備
│   ├── HANDSON-1-CI.md         # ← ハンズオン 1
│   ├── HANDSON-2-CD.md         # ← ハンズオン 2
│   ├── HANDSON-3-MONITORING.md # ← ハンズオン 3
│   ├── HANDSON-4-DEPENDABOT.md # ← ハンズオン 4
│   └── answers/                # ← 解答例
│       ├── workflows/
│       │   ├── ci.yml
│       │   ├── deploy.yml
│       │   └── health-check.yml
│       └── dependabot.yml
├── src/                        # サンプルアプリ
├── tests/                      # サンプルテスト
├── index.html
├── package.json
└── vite.config.js
```
