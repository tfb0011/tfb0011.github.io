# TOEIC800 マスター

> TOEIC 800点突破を目指す、完全無料の学習 Web アプリ。インストール不要・ログイン不要・ブラウザだけで学習できます。

[![License: MIT](https://img.shields.io/badge/License-MIT_(source_only)-blue.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-enabled-brightgreen.svg)](https://web.dev/progressive-web-apps/)

---

## 🎯 概要

**TOEIC800 マスター** は、TOEIC 800点レベルの英語力を身につけるための無料 Web アプリです。  
単語・文法・Part5〜7・模擬試験まで、TOEIC 試験のほぼすべてのパートをカバーしています。

- ✅ 完全無料（Google AdSense による広告あり）
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
https://tfb0011.github.io/
```

操作はすべてブラウザ内で完結します。アカウント作成・ログイン・アプリのインストールは一切不要です。

### ローカルで動かす場合

```bash
# リポジトリをクローン
git clone https://github.com/tfb0011/tfb0011.github.io.git
cd tfb0011.github.io

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
- 「← 前へ」「✅ 覚えた」の2ボタンで操作（覚えた単語を仕分け）
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

### 7. 進捗管理・予測スコア（ホーム画面）
- 各パートの進捗をリアルタイム表示
- 累計学習時間・連続学習日数を記録
- 以下の式で TOEIC 予測スコアを自動算出し、内訳を表示

```
予測スコア = 300（ベース）＋ Σ(各率 × 重み) × 690

  語彙カバー率    = 覚えた語数   / 3057語  × 25%
  文法カバー率    = 完了した項目 / 32項目  × 10%
  Part5 正答率   = 正解した問題 / 400問   × 30%
  Part6/7 正答率 = 正解した問題 / 209問   × 35%

  ベース300点 ＋ 最大690点 ＝ 最大990点
```

---

## 🛠️ 技術スタック

| 技術 | 詳細 |
|------|------|
| **HTML5** | セマンティックマークアップ、シングルページ構成 |
| **CSS3** | CSS カスタムプロパティ、Flexbox、ダークモード対応 |
| **JavaScript (ES6+)** | バニラ JS、localStorage でデータ永続化、ゼロ外部依存 |
| **PWA** | Web App Manifest + Service Worker でオフライン対応 |
| **Service Worker** | Network-first 戦略、キャッシュバージョン管理 |
| **Google AdSense** | 広告配信（`ca-pub-6536288248858758`） |
| **FormSubmit.co** | サーバーレスお問い合わせフォーム |
| **SEO** | OGP / Twitter Card / JSON-LD / sitemap.xml / robots.txt |

**外部ライブラリ・フレームワーク：なし（ゼロ依存）**

---

## 📁 ファイル構成

```
tfb0011.github.io/
├── index.html        # メイン HTML（SPA：8画面）
├── style.css         # スタイルシート（ダークモード対応）
├── app.js            # アプリケーションロジック
├── data-vocab.js     # 単語データ（3,057 語）
├── data-grammar.js   # 文法データ（32 項目）
├── data-part5.js     # Part5 問題（400 問）
├── data-part67.js    # Part6/7 問題（50 題 / 209 問）
├── data-mock.js      # 模擬試験問題（600 問）
├── manifest.json     # PWA マニフェスト
├── sw.js             # Service Worker（Network-first キャッシュ）
├── icon.svg          # アプリアイコン
├── ogp.png           # SNS シェア用 OGP 画像（1200×630）
├── sitemap.xml       # 検索エンジン向けサイトマップ
├── robots.txt        # クローラー設定
├── about.html        # このアプリについて
├── privacy.html      # プライバシーポリシー
├── terms.html        # 利用規約
├── contact.html      # お問い合わせ（FormSubmit 連携）
└── README.md         # このファイル
```

---

## 🗂️ データ構造（開発者向け）

各データファイルの型定義：

```javascript
// 単語（data-vocab.js）
{ en: string, pos: string, ja: string, example: string }

// 文法（data-grammar.js）
{ title: string, content: string }   // content は HTML 文字列

// Part5（data-part5.js）
{ question: string, choices: string[4], answer: 0|1|2|3, explanation: string }

// Part6/7（data-part67.js）
{
  title: string,
  passage: string,   // HTML 文字列
  questions: Array<{ question, choices, answer, explanation }>
}

// 模擬試験（data-mock.js）
{ question: string, choices: string[4], answer: 0|1|2|3, explanation: string }
```

---

## 🔮 今後の予定

- [ ] 単語音声読み上げ機能（Web Speech API）
- [ ] Part1〜4 リスニング問題の追加
- [ ] クラウド同期（Firebase）
- [ ] Capacitor による Android / iOS アプリ化

---

## 📄 ライセンス

**ソースコード**（HTML / CSS / JavaScript）は [MIT License](LICENSE) のもとで公開しています。  
自由に使用・改変・配布できます。商用利用も可能です。

**コンテンツ**（単語データ・問題文・解説文等）は著作権保護の対象であり、無断複製・転載を禁じます。

---

TOEIC® は Educational Testing Service（ETS）の登録商標です。  
本アプリは ETS および公益財団法人 日本英語検定協会とは一切関係なく、両者による承認・推薦を受けておりません。
