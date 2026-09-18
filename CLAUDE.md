# task-board

## 概要
テキスト入力でタスクを追加し、チェックボックスで完了・未完了を切り替え、削除できるタスクボードアプリ。完了済みのタスクはグレーで表示する。タスクはlocalStorageに保存され、ページをリロードしても消滅しない。

## 技術スタック
- React 18
- Vite 5

## 開発コマンド
- `npm install`：依存パッケージのインストール
- `npm run dev`：開発サーバー起動
- `npm run build`：プロダクションビルド

## デプロイ（GitHub Pages）
- `main`ブランチへのプッシュをトリガーに、GitHub Actions（`.github/workflows/deploy.yml`）がビルドしてGitHub Pagesへ自動デプロイする
- 公開URL: https://moluelani-sbiz572024.github.io/task-board/
- `vite.config.js`の`base`はリポジトリ名に合わせて`/task-board/`に設定済み
- 初回のみ、GitHubリポジトリの Settings → Pages → Source を「GitHub Actions」に設定する必要がある（手動作業）

## コード管理（Git運用ルール）
- コードを変更する度にGitHubにプッシュすること
- GitHubリポジトリ情報
  - URL: https://github.com/moluelani-sbiz572024/task-board.git
  - コミットユーザー: moluelani-sbiz572024 <moluelani.sbiz572024@gmail.com>
  - 認証情報（Personal Access Token等）はこのファイルやリポジトリには記載しない。ローカルの環境変数やGitの資格情報マネージャー（Keychain等）で管理すること
