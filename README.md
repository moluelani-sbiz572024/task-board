# タスクボード

React + Vite で作成したシンプルなタスク管理アプリです。

## デモ

https://moluelani-sbiz572024.github.io/task-board/

## 主な機能

- テキスト入力でタスクを追加
- チェックボックスで完了・未完了を切り替え
- タスクの削除
- 完了済みタスクはグレー表示
- タスクは `localStorage` に保存され、ページをリロードしても消えない

## 技術スタック

- React
- Vite

## 開発コマンド

```bash
npm install       # 依存関係のインストール
npm run dev       # 開発サーバー起動
npm run build     # 本番ビルド
npm run lint      # Lint 実行
```

## デプロイ

`main` ブランチへの push をトリガーに GitHub Actions が自動でビルド・GitHub Pages へのデプロイを行います（`.github/workflows/deploy.yml`）。
