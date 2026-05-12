# TOEIC800 マスター

> TOEIC 800点突破を目指す、完全無料の学習 Web アプリ。インストール不要・ログイン不要・ブラウザだけで学習できます。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-enabled-brightgreen.svg)](https://web.dev/progressive-web-apps/)

---

## 🎯 概要

**TOEIC800 マスター** は、TOEIC 800点レベルの英語力を身につけるための無料 Web アプリです。  
単語・文法・Part5〜7・模擬試験まで、TOEIC 試験のほぼすべてのパートをカバーしています。

- ✅ 完全無料・広告なし
- ✅ アカウント登録不要
- ✅ 学習データはブラウザのローカルストレージに自動保存
- ✅ PWA 対応（ホーム画面に追加してオフライン利用可能）
- ✅ ダークモード対応
- ✅ スマートフォン・タブレット・PC に対応

---

## 📊 データ規模

| コンテンツ | 数量 |
|-----------|------|
| 単語（フラッシュカード） | **3,057 語** |
| 文法解説 | **32 項目** |
| Part5 短文穴埋め | **400 問** |
| Part6/7 長文読解 | **50 題 / 209 問** |
| 模擬試験プール | **600 問** |

---

## 🚀 使い方

### ブラウザでアクセスするだけ

```
https://[your-username].github.io/toeic800-app/
```

操作はすべてブラウザ内で完結します。アカウント作成・ログイン・アプリのインストールは一切不要です。

### ローカルで動かす場合

```bash
# リポジトリをクローン
git clone https://github.com/[your-username]/toeic800-app.git
cd toeic800-app

# index.html をブラウザで開く（ファイルを直接ダブルクリックでもOK）
# または VS Code の Live Server 拡張を使う
```

### PWA としてインストール（推奨）

1. Chrome / Safari でアプリのページを開く  
2. ブラウザメニュー → **「ホーム画面に追加」**  
3. アプリアイコンからいつでも起動、オフラインでも学習できます

---

## 🏫 機能一覧

### 1. 単語学習（フラッシュカード）
- 3,057 語のビジネス英単語を収録
- カードをタップして和訳・品詞・例文を確認
- 「覚えた / まだ」で仕分けして弱点を絞り込み
- 進捗はリアルタイムで保存

### 2. 文法解説
- 32 項目の TOEIC 頻出文法をカバー
  - 仮定法・分詞構文・比較・強調構文・倒置・関係副詞・語法・前置詞 など
- 各項目に TOEIC 例題と詳細な日本語解説付き
- 学習済みチェックで進捗を管理

### 3. Part5 短文穴埋め（400 問）
- 文法問題と語彙問題をバランスよく収録
- 難易度：TOEIC 600〜850 点レベル混合
- 回答直後に詳細な日本語解説を表示
- 間違えた問題は復習リストに自動追加

### 4. Part6/7 長文読解（50 題）
- ビジネスメール・社内通知・広告・記事・ダブルパッセージなど多様な形式
- 各長文に 3〜5 問の設問付き
- 解説は日本語で丁寧に記載

### 5. 模擬試験
- 600 問のプールから毎回 20 問をランダム出題
- 15 分の制限時間（本番形式）
- 終了後に TOEIC 換算スコアを自動算出

### 6. 復習モード
- Part5・Part6/7 で間違えた問題を自動収集
- いつでも弱点を振り返り可能

### 7. 進捗管理（ホーム画面）
- 各パートの進捗をリアルタイム表示
- 累計学習時間・連続学習日数を記録
- 正答率から TOEIC 予測スコアを自動算出

---

## 🛠️ 技術スタック

| 技術 | 詳細 |
|------|------|
| **HTML5** | セマンティックマークアップ、シングルページ構成 |
| **CSS3** | CSS カスタムプロパティ、Flexbox、ダークモード (`prefers-color-scheme`) |
| **JavaScript (ES6+)** | バニラ JS、localStorage でデータ永続化、ゼロ外部依存 |
| **PWA** | Web App Manifest + Service Worker でオフライン対応 |
| **Service Worker** | Network-first 戦略、キャッシュバージョン管理 |

**外部ライブラリ・フレームワーク：なし（ゼロ依存）**

---

## 📁 ファイル構成

```
toeic800-app/
├── index.html        # メイン HTML（6 画面のシングルページアプリ）
├── style.css         # スタイルシート（ダークモード対応）
├── app.js            # アプリケーションロジック
├── data-vocab.js     # 単語データ（3,057 語）
├── data-grammar.js   # 文法データ（32 項目）
├── data-part5.js     # Part5 問題（400 問）
├── data-part67.js    # Part6/7 問題（50 題 / 209 問）
├── data-mock.js      # 模擬試験問題（600 問）
├── manifest.json     # PWA マニフェスト
├── sw.js             # Service Worker（本番用キャッシュ版）
├── icon.svg          # アプリアイコン
└── README.md         # このファイル
```

---

## 🗂️ データ構造（開発者向け）

各データファイルの型定義：

```javascript
// 単語
{ en: string, pos: string, ja: string, example: string }

// 文法
{ title: string, content: string }   // content は HTML 文字列

// Part5
{ question: string, choices: string[4], answer: 0|1|2|3, explanation: string }

// Part6/7
{
  title: string,
  passage: string,   // HTML 文字列
  questions: Array<{ question, choices, answer, explanation }>
}

// 模擬試験（MOCK_DATA）
{ question: string, choices: string[4], answer: 0|1|2|3, explanation: string }
```

---

## 🔮 今後の予定

- [ ] Capacitor による Android / iOS アプリ化
- [ ] Google AdSense / AdMob による収益化
- [ ] 単語音声読み上げ機能（Web Speech API）
- [ ] Part1〜4 リスニング問題の追加
- [ ] クラウド同期（Firebase）

---

## 📄 ライセンス

[MIT License](LICENSE)

Copyright (c) 2025

自由に使用・改変・配布できます。商用利用も可能です。
