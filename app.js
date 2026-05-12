/* ===========================================
   TOEIC800 マスター - メインスクリプト
   =========================================== */

// ============ 状態管理 ============
const STORAGE_KEY = 'toeic800_data_v1';

let state = {
  vocabIndex: 0,
  vocabKnown: [],       // 覚えた単語のindex配列
  vocabUnknown: [],     // 覚えてない単語のindex配列（互換のため保持）
  vocabMode: 'all',     // 'all' | 'shuffle' | 'unknown'
  vocabQueue: [],       // shuffle/unknown モード用のindex配列
  vocabQueuePos: 0,     // vocabQueue の現在位置
  grammarCompleted: [], // 完了した文法のindex配列
  part5Index: 0,
  part5Answers: {},     // {問題index: 選んだ選択肢index}
  part5Wrong: [],       // 間違えた問題のindex配列
  part67Index: 0,
  part67Answers: {},    // {"passageIdx_qIdx": 選んだ選択肢index}
  part67Wrong: [],      // 間違えた "passageIdx_qIdx" の配列
  totalSeconds: 0,      // 累計学習秒数
  lastStudyDate: null,  // 最終学習日 "YYYY-MM-DD"
  streak: 0,            // 連続学習日数
  theme: 'light',
};

// ============ データ保存・読み込み ============
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('保存失敗:', e);
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) {
    console.error('読み込み失敗:', e);
  }
}

function resetAll() {
  console.log('[reset] ボタンがクリックされました');

  if (!confirm('本当にすべての学習データをリセットしますか？\nこの操作は取り消せません。')) {
    console.log('[reset] キャンセルされました');
    return;
  }

  console.log('[reset] リセット開始');

  // 1. タイマーを止める
  stopTimer();

  // 2. localStorage から学習データを完全削除
  localStorage.removeItem(STORAGE_KEY);
  console.log('[reset] localStorage を削除:', STORAGE_KEY);

  // 3. state を初期値に戻す（theme は保持）
  const savedTheme = state.theme;
  state.vocabIndex       = 0;
  state.vocabKnown       = [];
  state.vocabUnknown     = [];
  state.vocabMode        = 'all';
  state.vocabQueue       = [];
  state.vocabQueuePos    = 0;
  state.grammarCompleted = [];
  state.part5Index       = 0;
  state.part5Answers     = {};
  state.part5Wrong       = [];
  state.part67Index      = 0;
  state.part67Answers    = {};
  state.part67Wrong      = [];
  state.totalSeconds     = 0;
  state.lastStudyDate    = null;
  state.streak           = 0;
  state.theme            = savedTheme;
  console.log('[reset] state を初期化しました', state);

  // 4. 模擬試験の途中状態をリセット
  if (typeof mockState !== 'undefined') {
    if (mockState.intervalId) {
      clearInterval(mockState.intervalId);
    }
    mockState.questions       = [];
    mockState.currentIdx      = 0;
    mockState.answers         = [];
    mockState.remainingSeconds = 0;
    mockState.intervalId      = null;
    console.log('[reset] mockState を初期化しました');
  }

  // 5. タイマーを再開
  startTimer();

  // 6. ホーム画面に戻り再描画
  showScreen('home');
  refreshHome();
  console.log('[reset] ホーム画面を再描画しました');

  // 7. 完了メッセージ
  alert('学習データをリセットしました');
  console.log('[reset] リセット完了');
}

// ============ 連続学習日数の管理 ============
function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastStudyDate === today) return;

  if (state.lastStudyDate) {
    const last = new Date(state.lastStudyDate);
    const now = new Date(today);
    const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      state.streak += 1;
    } else if (diffDays > 1) {
      state.streak = 1;
    }
  } else {
    state.streak = 1;
  }
  state.lastStudyDate = today;
  saveState();
}

// ============ 学習時間の計測 ============
let timerInterval = null;
function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    state.totalSeconds += 1;
    if (state.totalSeconds % 30 === 0) saveState();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    saveState();
  }
}

// ページの表示・非表示で計測を制御
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopTimer();
  else startTimer();
});

// ============ 画面切り替え ============
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(name + 'Screen');
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
  if (name === 'home') refreshHome();
}

// ============ ホーム画面の更新 ============
function refreshHome() {
  // 予測スコア
  document.getElementById('predictedScore').textContent = calcPredictedScore();
  // 学習時間
  const totalMin = Math.floor(state.totalSeconds / 60);
  document.getElementById('totalTime').textContent = totalMin >= 60
    ? `${Math.floor(totalMin/60)}時間${totalMin%60}分`
    : `${totalMin}分`;
  // 連続学習日数
  document.getElementById('streakDays').textContent = `${state.streak}日`;
  // 正答率
  const totalAns = Object.keys(state.part5Answers).length + Object.keys(state.part67Answers).length;
  const wrongCnt = state.part5Wrong.length + state.part67Wrong.length;
  if (totalAns > 0) {
    const acc = Math.round(((totalAns - wrongCnt) / totalAns) * 100);
    document.getElementById('accuracy').textContent = `${acc}%`;
  } else {
    document.getElementById('accuracy').textContent = '--%';
  }
  // 各メニューの進捗
  document.getElementById('vocabProgress').textContent =
    `${state.vocabKnown.length} / ${VOCAB_DATA.length}`;
  document.getElementById('grammarProgress').textContent =
    `${state.grammarCompleted.length} / ${GRAMMAR_DATA.length}`;
  document.getElementById('part5Progress').textContent =
    `${Object.keys(state.part5Answers).length} / ${PART5_DATA.length}`;
  const part67Total = PART67_DATA.reduce((sum, p) => sum + p.questions.length, 0);
  document.getElementById('part67Progress').textContent =
    `${Object.keys(state.part67Answers).length} / ${part67Total}`;
  // 復習問題数
  const reviewCnt = state.part5Wrong.length + state.part67Wrong.length;
  document.getElementById('reviewCount').textContent = `${reviewCnt}問`;
  // スコア内訳
  renderScoreBreakdown();
}

// ============ スコア予測ロジック ============
// 予測スコア = 300（ベース）＋ Σ(各率 × 重み) × 690（最大加算点）
// 語彙カバー率   ＝ 覚えた語数   / 全3057語  × 25%
// 文法カバー率   ＝ 完了した項目 / 全32項目  × 10%
// Part5 正答率  ＝ 正解した問題 / 全400問   × 30%
// Part6/7 正答率 ＝ 正解した問題 / 全209問  × 35%
// ベース300点 ＋ 最大690点 ＝ 最大990点

const SCORE_WEIGHTS = { vocab: 0.25, grammar: 0.10, part5: 0.30, part67: 0.35 };
const SCORE_BASE    = 300;
const SCORE_RANGE   = 690;

function getScoreBreakdown() {
  const vocabKnown    = state.vocabKnown.length;
  const vocabTotal    = VOCAB_DATA.length;
  const vocabRate     = vocabKnown / vocabTotal;

  const grammarDone   = state.grammarCompleted.length;
  const grammarTotal  = GRAMMAR_DATA.length;
  const grammarRate   = grammarDone / grammarTotal;

  const part5Answered = Object.keys(state.part5Answers).length;
  const part5Correct  = part5Answered - state.part5Wrong.length;
  const part5Total    = PART5_DATA.length;
  const part5Rate     = part5Correct / part5Total;

  const part67AllQ    = PART67_DATA.reduce((s, p) => s + p.questions.length, 0);
  const part67Answered = Object.keys(state.part67Answers).length;
  const part67Correct = part67Answered - state.part67Wrong.length;
  const part67Rate    = part67Correct / part67AllQ;

  const overall =
    vocabRate   * SCORE_WEIGHTS.vocab   +
    grammarRate * SCORE_WEIGHTS.grammar +
    part5Rate   * SCORE_WEIGHTS.part5   +
    part67Rate  * SCORE_WEIGHTS.part67;

  return {
    overall,
    items: [
      { label: '語彙カバー率',    done: vocabKnown,    total: vocabTotal,   unit: '語',  rate: vocabRate,   weight: SCORE_WEIGHTS.vocab,   pt: Math.round(vocabRate   * SCORE_WEIGHTS.vocab   * SCORE_RANGE) },
      { label: '文法カバー率',    done: grammarDone,   total: grammarTotal, unit: '項目', rate: grammarRate, weight: SCORE_WEIGHTS.grammar, pt: Math.round(grammarRate * SCORE_WEIGHTS.grammar * SCORE_RANGE) },
      { label: 'Part5 正答率',   done: part5Correct,  total: part5Total,   unit: '問',  rate: part5Rate,   weight: SCORE_WEIGHTS.part5,   pt: Math.round(part5Rate   * SCORE_WEIGHTS.part5   * SCORE_RANGE) },
      { label: 'Part6/7 正答率', done: part67Correct, total: part67AllQ,   unit: '問',  rate: part67Rate,  weight: SCORE_WEIGHTS.part67,  pt: Math.round(part67Rate  * SCORE_WEIGHTS.part67  * SCORE_RANGE) },
    ],
  };
}

function calcPredictedScore() {
  const { overall } = getScoreBreakdown();
  if (overall === 0) return '---';
  return Math.min(Math.round(SCORE_BASE + overall * SCORE_RANGE), 990);
}

function renderScoreBreakdown() {
  const el = document.getElementById('scoreBreakdown');
  if (!el) return;
  const { overall, items } = getScoreBreakdown();
  const totalPt = items.reduce((s, i) => s + i.pt, 0);
  const scoreText = overall === 0 ? '---' : Math.min(SCORE_BASE + totalPt, 990) + '点';

  el.innerHTML = `
    <p class="breakdown-title">📊 スコア算出の内訳</p>
    <table class="breakdown-table">
      <thead><tr><th>項目</th><th>実績</th><th>重み</th><th>貢献点</th></tr></thead>
      <tbody>
        ${items.map(i => `<tr>
          <td>${i.label}</td>
          <td>${i.done} / ${i.total}${i.unit}（${(i.rate * 100).toFixed(1)}%）</td>
          <td>${Math.round(i.weight * 100)}%</td>
          <td>+${i.pt}pt</td>
        </tr>`).join('')}
      </tbody>
    </table>
    <p class="breakdown-formula">${SCORE_BASE}点（ベース） ＋ ${totalPt}点 ＝ <strong>${scoreText}</strong></p>
  `;
}

// ============ テーマ切替 ============
function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
  saveState();
}

function applyTheme() {
  if (state.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('themeToggle').textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('themeToggle').textContent = '🌙';
  }
}

// =====================================================
//  単語学習
// =====================================================

// Fisher-Yates シャッフル
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// モード切替：queue を再構築してpos=0にリセット
function setVocabMode(mode) {
  state.vocabMode = mode;
  const all = Array.from({ length: VOCAB_DATA.length }, (_, i) => i);
  if (mode === 'shuffle') {
    state.vocabQueue = shuffle(all);
    state.vocabQueuePos = 0;
  } else if (mode === 'unknown') {
    state.vocabQueue = all.filter(i => !state.vocabKnown.includes(i));
    state.vocabQueuePos = 0;
  }
  // モードボタンのactive表示更新
  document.querySelectorAll('.vocab-mode-btn').forEach(b => b.classList.remove('active'));
  const btnMap = { all: 'modeAll', shuffle: 'modeShuffle', unknown: 'modeUnknown' };
  document.getElementById(btnMap[mode])?.classList.add('active');
  renderVocab();
  saveState();
}

// 現在表示すべきVOCAB_DATAのインデックスを返す
function currentVocabIdx() {
  if (state.vocabMode === 'all') return state.vocabIndex;
  if (state.vocabQueue.length === 0) return -1;
  const pos = Math.min(state.vocabQueuePos, state.vocabQueue.length - 1);
  return state.vocabQueue[pos];
}

function renderVocab() {
  if (VOCAB_DATA.length === 0) return;

  // allモードの境界チェック
  if (state.vocabMode === 'all') {
    if (state.vocabIndex >= VOCAB_DATA.length) state.vocabIndex = 0;
    if (state.vocabIndex < 0) state.vocabIndex = VOCAB_DATA.length - 1;
  }

  const dataIdx = currentVocabIdx();

  // 未習得モードで対象が0件の場合
  if (dataIdx === -1) {
    document.getElementById('wordEn').textContent = '🎉';
    document.getElementById('wordPos').textContent = '';
    document.getElementById('wordJa').textContent = '未習得の単語はありません';
    document.getElementById('wordEx').textContent = '「全単語」モードに切り替えてください。';
    document.getElementById('wordExJa').style.display = 'none';
    document.getElementById('vocabCounter').textContent = '0 / 0';
    document.getElementById('vocabBar').style.width = '100%';
    document.getElementById('flashcard').classList.remove('flipped');
    return;
  }

  const w = VOCAB_DATA[dataIdx];
  document.getElementById('wordEn').textContent = w.en;
  document.getElementById('wordPos').textContent = w.pos;
  document.getElementById('wordJa').textContent = w.ja;
  document.getElementById('wordEx').textContent = w.example;
  const exJaEl = document.getElementById('wordExJa');
  exJaEl.textContent = w.exampleJa || '（翻訳準備中）';
  exJaEl.style.display = '';
  exJaEl.style.opacity = w.exampleJa ? '1' : '0.4';

  // カウンター・プログレスバー
  if (state.vocabMode === 'all') {
    document.getElementById('vocabCounter').textContent =
      `${state.vocabIndex + 1} / ${VOCAB_DATA.length}`;
    document.getElementById('vocabBar').style.width =
      `${((state.vocabIndex + 1) / VOCAB_DATA.length) * 100}%`;
  } else {
    const pos   = state.vocabQueuePos + 1;
    const total = state.vocabQueue.length;
    const label = state.vocabMode === 'shuffle' ? 'シャッフル' : '未習得';
    document.getElementById('vocabCounter').textContent =
      `${pos} / ${total}（${label}）`;
    document.getElementById('vocabBar').style.width =
      `${(pos / total) * 100}%`;
  }

  document.getElementById('flashcard').classList.remove('flipped');
}

function setupVocab() {
  document.getElementById('flashcard').addEventListener('click', () => {
    document.getElementById('flashcard').classList.toggle('flipped');
  });

  // モードボタン
  document.getElementById('modeAll').addEventListener('click', () => setVocabMode('all'));
  document.getElementById('modeShuffle').addEventListener('click', () => setVocabMode('shuffle'));
  document.getElementById('modeUnknown').addEventListener('click', () => setVocabMode('unknown'));

  // 起動時にactive状態を反映
  const btnMap = { all: 'modeAll', shuffle: 'modeShuffle', unknown: 'modeUnknown' };
  document.querySelectorAll('.vocab-mode-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(btnMap[state.vocabMode] || 'modeAll')?.classList.add('active');

  document.getElementById('vocabPrev').addEventListener('click', () => {
    if (state.vocabMode === 'all') {
      state.vocabIndex -= 1;
    } else {
      state.vocabQueuePos = Math.max(0, state.vocabQueuePos - 1);
    }
    renderVocab();
    saveState();
  });

  document.getElementById('vocabKnown').addEventListener('click', () => {
    const dataIdx = currentVocabIdx();
    if (dataIdx === -1) return;
    if (!state.vocabKnown.includes(dataIdx)) state.vocabKnown.push(dataIdx);

    if (state.vocabMode === 'all') {
      state.vocabIndex += 1;
    } else if (state.vocabMode === 'unknown') {
      // 未習得リストから削除（リストが縮む）
      state.vocabQueue.splice(state.vocabQueuePos, 1);
      if (state.vocabQueuePos >= state.vocabQueue.length) {
        state.vocabQueuePos = Math.max(0, state.vocabQueue.length - 1);
      }
    } else {
      state.vocabQueuePos += 1;
    }
    renderVocab();
    saveState();
  });
}

// =====================================================
//  文法
// =====================================================
function renderGrammarList() {
  const container = document.getElementById('grammarList');
  container.innerHTML = '';
  GRAMMAR_DATA.forEach((g, i) => {
    const btn = document.createElement('button');
    btn.className = 'grammar-item';
    if (state.grammarCompleted.includes(i)) btn.classList.add('completed');
    btn.innerHTML = `
      <div>
        <div class="grammar-item-title">${i + 1}. ${g.title}</div>
        <div class="grammar-item-status">${state.grammarCompleted.includes(i) ? '✅ 学習済み' : '未学習'}</div>
      </div>
      <div>›</div>
    `;
    btn.addEventListener('click', () => openGrammarDetail(i));
    container.appendChild(btn);
  });
}

let currentGrammarIdx = 0;
function openGrammarDetail(i) {
  currentGrammarIdx = i;
  const g = GRAMMAR_DATA[i];
  document.getElementById('grammarTitle').textContent = `📐 ${g.title}`;
  document.getElementById('grammarContent').innerHTML = g.content;
  showScreen('grammarDetail');
}

function setupGrammar() {
  document.getElementById('grammarCompleteBtn').addEventListener('click', () => {
    if (!state.grammarCompleted.includes(currentGrammarIdx)) {
      state.grammarCompleted.push(currentGrammarIdx);
      saveState();
    }
    alert('お疲れさまでした！');
    showScreen('grammar');
    renderGrammarList();
  });
}

// =====================================================
//  Part5
// =====================================================
function renderPart5() {
  if (PART5_DATA.length === 0) return;
  if (state.part5Index >= PART5_DATA.length) state.part5Index = 0;
  if (state.part5Index < 0) state.part5Index = PART5_DATA.length - 1;

  const q = PART5_DATA[state.part5Index];
  document.getElementById('part5Counter').textContent =
    `${state.part5Index + 1} / ${PART5_DATA.length}`;
  document.getElementById('part5Bar').style.width =
    `${((state.part5Index + 1) / PART5_DATA.length) * 100}%`;
  document.getElementById('part5Question').textContent = q.question;

  const choicesEl = document.getElementById('part5Choices');
  choicesEl.innerHTML = '';
  const explEl = document.getElementById('part5Explanation');
  explEl.classList.remove('show');

  q.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = `(${String.fromCharCode(65 + i)}) ${choice}`;
    btn.addEventListener('click', () => answerPart5(i, btn));
    choicesEl.appendChild(btn);
  });

  // 既に回答済みなら結果を表示
  if (state.part5Answers[state.part5Index] !== undefined) {
    showPart5Result(state.part5Answers[state.part5Index]);
  }
}

function answerPart5(selected, btn) {
  const idx = state.part5Index;
  if (state.part5Answers[idx] !== undefined) return;
  state.part5Answers[idx] = selected;
  const q = PART5_DATA[idx];
  if (selected !== q.answer) {
    if (!state.part5Wrong.includes(idx)) state.part5Wrong.push(idx);
  } else {
    state.part5Wrong = state.part5Wrong.filter(i => i !== idx);
  }
  saveState();
  showPart5Result(selected);
}

function showPart5Result(selected) {
  const q = PART5_DATA[state.part5Index];
  const btns = document.querySelectorAll('#part5Choices .choice-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add('correct');
    else if (i === selected) b.classList.add('incorrect');
  });
  const explEl = document.getElementById('part5Explanation');
  explEl.innerHTML = `
    <div class="explanation-title">${selected === q.answer ? '⭕ 正解！' : '❌ 不正解'}</div>
    <div><strong>正解：</strong>(${String.fromCharCode(65 + q.answer)}) ${q.choices[q.answer]}</div>
    <div style="margin-top:8px"><strong>解説：</strong>${q.explanation}</div>
  `;
  explEl.classList.add('show');
}

function setupPart5() {
  document.getElementById('part5Prev').addEventListener('click', () => {
    state.part5Index -= 1;
    renderPart5();
    saveState();
  });
  document.getElementById('part5Next').addEventListener('click', () => {
    state.part5Index += 1;
    renderPart5();
    saveState();
  });
}

// =====================================================
//  Part6/7
// =====================================================
function renderPart67() {
  if (PART67_DATA.length === 0) return;
  if (state.part67Index >= PART67_DATA.length) state.part67Index = 0;
  if (state.part67Index < 0) state.part67Index = PART67_DATA.length - 1;

  const p = PART67_DATA[state.part67Index];
  document.getElementById('part67Counter').textContent =
    `${state.part67Index + 1} / ${PART67_DATA.length}`;
  document.getElementById('part67Passage').innerHTML =
    `<div class="passage-title">${p.title}</div>${p.passage}`;

  const qContainer = document.getElementById('part67Questions');
  qContainer.innerHTML = '';
  p.questions.forEach((q, qi) => {
    const key = `${state.part67Index}_${qi}`;
    const qDiv = document.createElement('div');
    qDiv.innerHTML = `<div class="question-card"><strong>Q${qi + 1}.</strong> ${q.question}</div>`;
    const choicesDiv = document.createElement('div');
    choicesDiv.className = 'choices';
    q.choices.forEach((choice, ci) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = `(${String.fromCharCode(65 + ci)}) ${choice}`;
      btn.addEventListener('click', () => answerPart67(qi, ci, qDiv));
      choicesDiv.appendChild(btn);
    });
    qDiv.appendChild(choicesDiv);
    const expl = document.createElement('div');
    expl.className = 'explanation';
    expl.id = `part67Expl_${qi}`;
    qDiv.appendChild(expl);
    qContainer.appendChild(qDiv);

    if (state.part67Answers[key] !== undefined) {
      showPart67Result(qi, state.part67Answers[key], qDiv);
    }
  });
}

function answerPart67(qi, selected, qDiv) {
  const key = `${state.part67Index}_${qi}`;
  if (state.part67Answers[key] !== undefined) return;
  state.part67Answers[key] = selected;
  const q = PART67_DATA[state.part67Index].questions[qi];
  if (selected !== q.answer) {
    if (!state.part67Wrong.includes(key)) state.part67Wrong.push(key);
  } else {
    state.part67Wrong = state.part67Wrong.filter(k => k !== key);
  }
  saveState();
  showPart67Result(qi, selected, qDiv);
}

function showPart67Result(qi, selected, qDiv) {
  const q = PART67_DATA[state.part67Index].questions[qi];
  const btns = qDiv.querySelectorAll('.choice-btn');
  btns.forEach((b, ci) => {
    b.disabled = true;
    if (ci === q.answer) b.classList.add('correct');
    else if (ci === selected) b.classList.add('incorrect');
  });
  const expl = qDiv.querySelector('.explanation');
  expl.innerHTML = `
    <div class="explanation-title">${selected === q.answer ? '⭕ 正解！' : '❌ 不正解'}</div>
    <div><strong>正解：</strong>(${String.fromCharCode(65 + q.answer)}) ${q.choices[q.answer]}</div>
    <div style="margin-top:8px"><strong>解説：</strong>${q.explanation}</div>
  `;
  expl.classList.add('show');
}

function setupPart67() {
  document.getElementById('part67Prev').addEventListener('click', () => {
    state.part67Index -= 1;
    renderPart67();
    saveState();
  });
  document.getElementById('part67Next').addEventListener('click', () => {
    state.part67Index += 1;
    renderPart67();
    saveState();
  });
}

// =====================================================
//  模擬試験
// =====================================================
let mockState = {
  questions: [],
  currentIdx: 0,
  answers: [],
  remainingSeconds: 0,
  intervalId: null,
};

function setupMock() {
  document.getElementById('mockStartBtn').addEventListener('click', startMock);
  document.getElementById('mockNextBtn').addEventListener('click', mockNext);
  document.getElementById('mockRetryBtn').addEventListener('click', () => {
    document.getElementById('mockResult').classList.add('hidden');
    document.getElementById('mockIntro').classList.remove('hidden');
  });
}

function startMock() {
  // MOCK_DATAから20問を選ぶ（足りなければ全部）
  const pool = [...MOCK_DATA];
  mockState.questions = pool.slice(0, 20);
  mockState.currentIdx = 0;
  mockState.answers = [];
  mockState.remainingSeconds = 15 * 60;

  document.getElementById('mockIntro').classList.add('hidden');
  document.getElementById('mockResult').classList.add('hidden');
  document.getElementById('mockInProgress').classList.remove('hidden');

  renderMockQuestion();
  mockState.intervalId = setInterval(() => {
    mockState.remainingSeconds -= 1;
    updateMockTimer();
    if (mockState.remainingSeconds <= 0) finishMock();
  }, 1000);
}

function updateMockTimer() {
  const m = Math.floor(mockState.remainingSeconds / 60);
  const s = mockState.remainingSeconds % 60;
  document.getElementById('mockTimer').textContent =
    `${m}:${s.toString().padStart(2, '0')}`;
}

function renderMockQuestion() {
  const q = mockState.questions[mockState.currentIdx];
  document.getElementById('mockCurrent').textContent = mockState.currentIdx + 1;
  let html = '';
  if (q.passage) html += `<div style="margin-bottom:12px;white-space:pre-wrap;font-size:14px">${q.passage}</div>`;
  html += `<div>${q.question}</div>`;
  document.getElementById('mockQuestion').innerHTML = html;

  const choicesEl = document.getElementById('mockChoices');
  choicesEl.innerHTML = '';
  q.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = `(${String.fromCharCode(65 + i)}) ${choice}`;
    btn.addEventListener('click', () => {
      mockState.answers[mockState.currentIdx] = i;
      [...choicesEl.children].forEach(b => b.style.opacity = '0.5');
      btn.style.opacity = '1';
      btn.style.borderColor = 'var(--primary)';
    });
    choicesEl.appendChild(btn);
  });

  updateMockTimer();
}

function mockNext() {
  if (mockState.currentIdx < mockState.questions.length - 1) {
    mockState.currentIdx += 1;
    renderMockQuestion();
  } else {
    finishMock();
  }
}

function finishMock() {
  if (mockState.intervalId) {
    clearInterval(mockState.intervalId);
    mockState.intervalId = null;
  }
  let correct = 0;
  mockState.questions.forEach((q, i) => {
    if (mockState.answers[i] === q.answer) correct += 1;
  });
  // TOEIC換算（20問 → 990点スケール簡易換算）
  const rate = correct / mockState.questions.length;
  const toeicScore = Math.round(200 + rate * 790);

  document.getElementById('mockCorrect').textContent = correct;
  document.getElementById('mockToeicScore').textContent = toeicScore;
  document.getElementById('mockInProgress').classList.add('hidden');
  document.getElementById('mockResult').classList.remove('hidden');
}

// =====================================================
//  復習画面
// =====================================================
function renderReview() {
  const container = document.getElementById('reviewContent');
  container.innerHTML = '';

  if (state.part5Wrong.length === 0 && state.part67Wrong.length === 0) {
    container.innerHTML = '<div class="review-empty">まだ間違えた問題はありません 🎉<br>Part5やPart6/7に挑戦してみましょう！</div>';
    return;
  }

  if (state.part5Wrong.length > 0) {
    const h = document.createElement('h3');
    h.textContent = `📝 Part5 (${state.part5Wrong.length}問)`;
    h.style.margin = '12px 0';
    container.appendChild(h);
    state.part5Wrong.forEach(idx => {
      const q = PART5_DATA[idx];
      if (!q) return;
      const div = document.createElement('div');
      div.className = 'review-item';
      div.innerHTML = `
        <div style="margin-bottom:8px">${q.question}</div>
        <div style="color:var(--success);font-weight:bold">正解: (${String.fromCharCode(65 + q.answer)}) ${q.choices[q.answer]}</div>
        <div style="margin-top:8px;font-size:14px;color:var(--text-sub)">${q.explanation}</div>
      `;
      container.appendChild(div);
    });
  }

  if (state.part67Wrong.length > 0) {
    const h = document.createElement('h3');
    h.textContent = `📄 Part6/7 (${state.part67Wrong.length}問)`;
    h.style.margin = '12px 0';
    container.appendChild(h);
    state.part67Wrong.forEach(key => {
      const [pi, qi] = key.split('_').map(Number);
      const p = PART67_DATA[pi];
      if (!p) return;
      const q = p.questions[qi];
      if (!q) return;
      const div = document.createElement('div');
      div.className = 'review-item';
      div.innerHTML = `
        <div style="font-size:13px;color:var(--text-sub);margin-bottom:4px">${p.title}</div>
        <div style="margin-bottom:8px">${q.question}</div>
        <div style="color:var(--success);font-weight:bold">正解: (${String.fromCharCode(65 + q.answer)}) ${q.choices[q.answer]}</div>
        <div style="margin-top:8px;font-size:14px;color:var(--text-sub)">${q.explanation}</div>
      `;
      container.appendChild(div);
    });
  }
}

// =====================================================
//  ルーター（画面切り替え）
// =====================================================
function navigate(name) {
  showScreen(name);
  if (name === 'vocab') renderVocab();
  if (name === 'grammar') renderGrammarList();
  if (name === 'part5') renderPart5();
  if (name === 'part67') renderPart67();
  if (name === 'review') renderReview();
  if (name === 'mock') {
    document.getElementById('mockIntro').classList.remove('hidden');
    document.getElementById('mockInProgress').classList.add('hidden');
    document.getElementById('mockResult').classList.add('hidden');
  }
}

// =====================================================
//  初期化
// =====================================================
function init() {
  loadState();
  applyTheme();
  updateStreak();
  startTimer();
  refreshHome();

  // 各セットアップ
  setupVocab();
  setupGrammar();
  setupPart5();
  setupPart67();
  setupMock();

  // メニューカードのクリック
  document.querySelectorAll('[data-screen]').forEach(el => {
    el.addEventListener('click', () => {
      const name = el.getAttribute('data-screen');
      navigate(name);
    });
  });

  // テーマ切替
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // リセット
  document.getElementById('resetBtn').addEventListener('click', resetAll);
}

// DOM読み込み完了後に起動
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
