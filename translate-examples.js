/**
 * translate-examples.js
 *
 * data-vocab.js の各エントリに exampleJa（例文の日本語訳）を追加するスクリプト。
 *
 * 使い方:
 *   1. Anthropic API キーを取得する（https://console.anthropic.com/）
 *   2. 環境変数に設定する:
 *        Windows: set ANTHROPIC_API_KEY=sk-ant-xxxxx
 *        Mac/Linux: export ANTHROPIC_API_KEY=sk-ant-xxxxx
 *   3. 依存パッケージをインストール:
 *        npm install @anthropic-ai/sdk
 *   4. 実行:
 *        node translate-examples.js
 *
 * 注意:
 *   - 中断しても progress.json に進捗が保存されるため、再実行で続きから処理します。
 *   - 完了後、data-vocab.js が上書きされます（元ファイルは data-vocab.js.bak に退避）。
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');
const path = require('path');

const VOCAB_FILE     = path.join(__dirname, 'data-vocab.js');
const PROGRESS_FILE  = path.join(__dirname, 'translate-progress.json');
const BATCH_SIZE     = 20;   // 1回のAPIリクエストで翻訳する件数
const DELAY_MS       = 500;  // レート制限対策の待機時間（ms）

// ===================== ユーティリティ =====================

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
  }
  return { done: 0, translations: {} };
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2), 'utf8');
}

// data-vocab.js から配列を読み込む
function loadVocabData() {
  const src = fs.readFileSync(VOCAB_FILE, 'utf8');
  // eval ではなく Function で安全に評価
  const fn = new Function(`${src}; return VOCAB_DATA;`);
  return fn();
}

// data-vocab.js を exampleJa 付きで書き出す
function writeVocabData(data) {
  // バックアップ
  fs.copyFileSync(VOCAB_FILE, VOCAB_FILE + '.bak');

  const lines = data.map(w => {
    const exJa = w.exampleJa ? w.exampleJa.replace(/"/g, '\\"') : '';
    return `  {en:${JSON.stringify(w.en)}, pos:${JSON.stringify(w.pos)}, ja:${JSON.stringify(w.ja)}, example:${JSON.stringify(w.example)}, exampleJa:${JSON.stringify(exJa)}}`;
  });
  const content = `const VOCAB_DATA = [\n${lines.join(',\n')}\n];\n`;
  fs.writeFileSync(VOCAB_FILE, content, 'utf8');
  console.log(`✅ data-vocab.js を更新しました（${data.length}件）`);
}

// ===================== 翻訳 =====================

async function translateBatch(client, entries) {
  const numbered = entries.map((e, i) => `${i + 1}. ${e.example}`).join('\n');

  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `以下の英語の例文を、自然な日本語に翻訳してください。
番号付きのリスト形式（1. ～ のまま）で、翻訳文のみを返してください。
余計な説明・コメントは不要です。

${numbered}`
    }]
  });

  const text = msg.content[0].text.trim();
  const lines = text.split('\n').filter(l => l.trim());

  // "1. ..." から訳文だけ取り出す
  return lines.map(l => l.replace(/^\d+\.\s*/, '').trim());
}

// ===================== メイン =====================

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('❌ ANTHROPIC_API_KEY が設定されていません。');
    console.error('   Windows: set ANTHROPIC_API_KEY=sk-ant-xxxxx');
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });
  const vocab  = loadVocabData();
  const prog   = loadProgress();

  console.log(`📚 全 ${vocab.length} 件 / 処理済み ${prog.done} 件`);

  let updated = 0;

  for (let i = prog.done; i < vocab.length; i += BATCH_SIZE) {
    const batch = vocab.slice(i, i + BATCH_SIZE);

    process.stdout.write(`  翻訳中 ${i + 1}〜${Math.min(i + BATCH_SIZE, vocab.length)} 件目 ... `);

    try {
      const translations = await translateBatch(client, batch);

      translations.forEach((t, j) => {
        const idx = i + j;
        if (idx < vocab.length) {
          prog.translations[idx] = t;
        }
      });

      prog.done = i + batch.length;
      saveProgress(prog);
      updated += batch.length;
      console.log('✓');
    } catch (err) {
      console.error(`\n❌ エラー（${i}件目）:`, err.message);
      console.log('   進捗を保存しました。再実行で続きから処理します。');
      break;
    }

    if (i + BATCH_SIZE < vocab.length) {
      await sleep(DELAY_MS);
    }
  }

  // 翻訳を vocab に反映
  vocab.forEach((w, i) => {
    if (prog.translations[i]) {
      w.exampleJa = prog.translations[i];
    }
  });

  // 全件完了していれば書き出し
  const totalTranslated = Object.keys(prog.translations).length;
  if (totalTranslated === vocab.length) {
    writeVocabData(vocab);
    // 進捗ファイルを削除
    fs.unlinkSync(PROGRESS_FILE);
    console.log('\n🎉 全件翻訳完了！data-vocab.js を更新しました。');
  } else {
    console.log(`\n⏸  ${totalTranslated} / ${vocab.length} 件完了。再実行で続きから処理します。`);
  }
}

main().catch(err => {
  console.error('予期しないエラー:', err);
  process.exit(1);
});
