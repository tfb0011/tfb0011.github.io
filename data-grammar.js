const GRAMMAR_DATA = [
  {
    title: "現在完了形・現在完了進行形",
    content: `
<h3>現在完了形の基本</h3>
<p>現在完了形は「過去の出来事が現在に関係している」ことを表します。TOEICでは <strong>since / for / already / yet / just / ever / never / recently</strong> などと一緒に頻出です。</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">用法</th><th style="padding:8px">例文</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">完了</td><td style="padding:8px;border-bottom:1px solid var(--border)">She has just finished the report.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">経験</td><td style="padding:8px;border-bottom:1px solid var(--border)">I have visited Tokyo twice.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">継続</td><td style="padding:8px;border-bottom:1px solid var(--border)">He has worked here for ten years.</td></tr>
<tr><td style="padding:8px">結果</td><td style="padding:8px">She has lost her badge.</td></tr>
</table>
<h3>現在完了進行形</h3>
<p><strong>have/has been + 〜ing</strong> ＝ 過去から現在まで動作が続いている強調。</p>
<p>例：We have been working on this project since January.</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The company _____ its overseas offices for the past five years.<br>
(A) expanded &nbsp; (B) has been expanding &nbsp; (C) expands &nbsp; (D) will expand<br><br>
<strong>正解：(B)</strong><br>
解説：「for the past five years（過去5年間）」は継続を示す表現で、現在完了進行形 <em>has been expanding</em> が正解。単純過去の(A)は「過去5年間ずっと」という継続の意味を出せない。
</div>`
  },
  {
    title: "受動態（基本・完了・進行）",
    content: `
<h3>受動態の形</h3>
<p>受動態は <strong>be動詞 + 過去分詞</strong> で作ります。TOEICでは能動態か受動態かの選択問題が多数出題されます。</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">時制</th><th style="padding:8px">形</th><th style="padding:8px">例</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">現在</td><td style="padding:8px;border-bottom:1px solid var(--border)">am/is/are + pp</td><td style="padding:8px;border-bottom:1px solid var(--border)">It is handled by Tom.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">過去</td><td style="padding:8px;border-bottom:1px solid var(--border)">was/were + pp</td><td style="padding:8px;border-bottom:1px solid var(--border)">It was approved yesterday.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">現在完了</td><td style="padding:8px;border-bottom:1px solid var(--border)">have/has been + pp</td><td style="padding:8px;border-bottom:1px solid var(--border)">It has been decided.</td></tr>
<tr><td style="padding:8px">進行</td><td style="padding:8px">is/are being + pp</td><td style="padding:8px">It is being reviewed.</td></tr>
</table>
<h3>ポイント：動詞の選択</h3>
<p>主語が「行為を受ける側」なら受動態を選ぶ。<br>
例：The meeting <strong>was postponed</strong> due to bad weather.（会議は悪天候で延期された）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
All employees _____ to attend the safety training next Friday.<br>
(A) require &nbsp; (B) are required &nbsp; (C) requiring &nbsp; (D) have required<br><br>
<strong>正解：(B)</strong><br>
解説：主語 All employees は「要求される」立場なので受動態。<em>are required to do</em>（〜することを求められる）が正解。
</div>`
  },
  {
    title: "助動詞（can / may / must / should / would）",
    content: `
<h3>助動詞の意味と使い分け</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">助動詞</th><th style="padding:8px">主な意味</th><th style="padding:8px">例</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">can</td><td style="padding:8px;border-bottom:1px solid var(--border)">能力・可能</td><td style="padding:8px;border-bottom:1px solid var(--border)">I can finish by noon.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">may</td><td style="padding:8px;border-bottom:1px solid var(--border)">許可・推測（弱）</td><td style="padding:8px;border-bottom:1px solid var(--border)">You may leave early.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">must</td><td style="padding:8px;border-bottom:1px solid var(--border)">義務・強い推測</td><td style="padding:8px;border-bottom:1px solid var(--border)">You must submit by 5 PM.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">should</td><td style="padding:8px;border-bottom:1px solid var(--border)">義務（緩）・推薦</td><td style="padding:8px;border-bottom:1px solid var(--border)">You should read this.</td></tr>
<tr><td style="padding:8px">would</td><td style="padding:8px">丁寧依頼・過去の習慣</td><td style="padding:8px">Would you sign here?</td></tr>
</table>
<h3>助動詞 + have + 過去分詞</h3>
<p>過去の事柄への推測・後悔を表します。</p>
<p>・<strong>should have done</strong>：〜すべきだったのに（後悔）<br>
・<strong>must have done</strong>：〜したに違いない（過去推測）<br>
・<strong>could have done</strong>：〜できたはずなのに</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
Customers _____ contact our support team if they experience any issues.<br>
(A) could &nbsp; (B) should &nbsp; (C) might &nbsp; (D) would<br><br>
<strong>正解：(B)</strong><br>
解説：アドバイス・推薦を表す <em>should</em> が最適。「問題があればサポートチームに連絡すべきです」という文脈に合う。
</div>`
  },
  {
    title: "仮定法過去・仮定法過去完了",
    content: `
<h3>仮定法の基本形</h3>
<p>仮定法は「現実に反する」仮定を表します。TOEICでは条件節の時制が重要です。</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">種類</th><th style="padding:8px">If節</th><th style="padding:8px">主節</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">仮定法過去（現在の非現実）</td><td style="padding:8px;border-bottom:1px solid var(--border)">If + 主語 + 過去形</td><td style="padding:8px;border-bottom:1px solid var(--border)">would/could/might + 原形</td></tr>
<tr><td style="padding:8px">仮定法過去完了（過去の非現実）</td><td style="padding:8px">If + 主語 + had + pp</td><td style="padding:8px">would/could + have + pp</td></tr>
</table>
<p>例：If I <strong>were</strong> the manager, I <strong>would implement</strong> a new policy.（もし私が部長なら〜するのに）<br>
例：If she <strong>had applied</strong> earlier, she <strong>would have gotten</strong> the job.</p>
<h3>wish / as if / It's time + 仮定法</h3>
<p>・I <strong>wish</strong> I could attend the conference.（〜できればいいのに）<br>
・He talks <strong>as if</strong> he knew everything.（まるで〜かのように）<br>
・It's time we <strong>updated</strong> the software.（そろそろ〜すべき時だ）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
If the shipment _____ on time, we would have met the deadline.<br>
(A) arrived &nbsp; (B) arrives &nbsp; (C) had arrived &nbsp; (D) would arrive<br><br>
<strong>正解：(C)</strong><br>
解説：主節に <em>would have met</em>（仮定法過去完了）があるため、If節も <em>had arrived</em>（過去完了）を使う。「もし到着していたなら」という過去の非現実的仮定。
</div>`
  },
  {
    title: "関係代名詞（who / which / that / whose）",
    content: `
<h3>関係代名詞の種類と使い方</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">先行詞</th><th style="padding:8px">主格</th><th style="padding:8px">目的格</th><th style="padding:8px">所有格</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">人</td><td style="padding:8px;border-bottom:1px solid var(--border)">who / that</td><td style="padding:8px;border-bottom:1px solid var(--border)">who(m) / that</td><td style="padding:8px;border-bottom:1px solid var(--border)">whose</td></tr>
<tr><td style="padding:8px">モノ・事</td><td style="padding:8px">which / that</td><td style="padding:8px">which / that</td><td style="padding:8px">of which</td></tr>
</table>
<h3>制限用法と非制限用法</h3>
<p><strong>制限用法</strong>（コンマなし）：先行詞を限定する<br>
The report <strong>that</strong> was submitted last week is approved.<br><br>
<strong>非制限用法</strong>（コンマあり）：補足情報を追加。<em>that</em> は使えない<br>
The CEO, <strong>who</strong> founded the company in 1995, resigned.</p>
<h3>what = the thing(s) which</h3>
<p><em>what</em> は先行詞を含む関係代名詞。名詞節を作る。<br>
<strong>What</strong> surprised us was the low turnout.（私たちを驚かせたことは〜）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The candidate _____ résumé impressed the panel was hired immediately.<br>
(A) who &nbsp; (B) whom &nbsp; (C) whose &nbsp; (D) which<br><br>
<strong>正解：(C)</strong><br>
解説：<em>_____ résumé</em>（〜の履歴書）という所有関係を示すため、所有格の関係代名詞 <em>whose</em> が正解。
</div>`
  },
  {
    title: "関係副詞（where / when / why / how）",
    content: `
<h3>関係副詞の使い方</h3>
<p>関係副詞は「前置詞 + which」に書き換えられます。</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">関係副詞</th><th style="padding:8px">先行詞</th><th style="padding:8px">言い換え</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">where</td><td style="padding:8px;border-bottom:1px solid var(--border)">場所</td><td style="padding:8px;border-bottom:1px solid var(--border)">at/in which</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">when</td><td style="padding:8px;border-bottom:1px solid var(--border)">時</td><td style="padding:8px;border-bottom:1px solid var(--border)">at/in which</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">why</td><td style="padding:8px;border-bottom:1px solid var(--border)">reason</td><td style="padding:8px;border-bottom:1px solid var(--border)">for which</td></tr>
<tr><td style="padding:8px">how</td><td style="padding:8px">（先行詞なし）</td><td style="padding:8px">the way</td></tr>
</table>
<p>例：The office <strong>where</strong> she works is downtown.（＝ The office <em>in which</em> she works）<br>
例：I remember the day <strong>when</strong> we signed the contract.<br>
例：Please explain <strong>how</strong> the system works.（the way と重複使用不可）</p>
<h3>注意：where vs. which</h3>
<p>・The building <strong>where</strong> we met ✅（場所の説明）<br>
・The building <strong>which</strong> was built in 1990 ✅（建物を主語にした節）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The reason _____ the meeting was canceled has not been disclosed.<br>
(A) when &nbsp; (B) where &nbsp; (C) why &nbsp; (D) how<br><br>
<strong>正解：(C)</strong><br>
解説：先行詞が <em>the reason</em>（理由）のとき、関係副詞は <em>why</em> を使う（＝ for which）。
</div>`
  },
  {
    title: "分詞構文（現在分詞・過去分詞）",
    content: `
<h3>分詞構文とは</h3>
<p>副詞節を分詞句に変換したもの。主節と主語が同じとき使えます。</p>
<h3>作り方</h3>
<p>接続詞と主語を省略 → 動詞を分詞に変換<br>
<em>Because she was tired</em>, she went home early.<br>
→ <strong>Being tired</strong>, she went home early.<br>
→ （Being省略可）<strong>Tired</strong>, she went home early.</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">種類</th><th style="padding:8px">意味</th><th style="padding:8px">例</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">〜ing（能動）</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜しながら・〜して</td><td style="padding:8px;border-bottom:1px solid var(--border)">Checking the data, he found an error.</td></tr>
<tr><td style="padding:8px">pp（受動）</td><td style="padding:8px">〜されて</td><td style="padding:8px">Written in English, the report is hard to read.</td></tr>
</table>
<h3>独立分詞構文</h3>
<p>主節と主語が異なる場合、分詞の前に意味上の主語を置く。<br>
<strong>Weather permitting</strong>, we will hold the event outdoors.（天候が許せば）<br>
<strong>Considering</strong> the budget, this is the best option.（予算を考慮すると）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
_____ all the documents carefully, the lawyer found a critical error.<br>
(A) Review &nbsp; (B) Reviewed &nbsp; (C) Reviewing &nbsp; (D) To review<br><br>
<strong>正解：(C)</strong><br>
解説：分詞構文で主語 the lawyer が能動的に書類を「見直した」ので現在分詞 <em>Reviewing</em> を使う。
</div>`
  },
  {
    title: "不定詞と動名詞の使い分け",
    content: `
<h3>to不定詞のみを目的語にとる動詞</h3>
<p>未来志向・意志を表す動詞：<strong>want / wish / hope / plan / decide / agree / promise / expect / manage / refuse</strong><br>
例：She decided <strong>to accept</strong> the offer.</p>
<h3>動名詞のみを目的語にとる動詞</h3>
<p>過去・習慣・回避を表す動詞：<strong>enjoy / finish / mind / avoid / consider / suggest / recommend / admit / deny / practice / give up / postpone / delay</strong><br>
例：They postponed <strong>holding</strong> the meeting.</p>
<h3>両方OKだが意味が変わる動詞</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">動詞</th><th style="padding:8px">+ to不定詞</th><th style="padding:8px">+ 動名詞</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">remember</td><td style="padding:8px;border-bottom:1px solid var(--border)">（これから）〜するのを覚えている</td><td style="padding:8px;border-bottom:1px solid var(--border)">（過去に）〜したことを覚えている</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">forget</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜するのを忘れる</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜したことを忘れる</td></tr>
<tr><td style="padding:8px">stop</td><td style="padding:8px">〜するために立ち止まる</td><td style="padding:8px">〜するのをやめる</td></tr>
</table>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The board considered _____ the company's headquarters to another city.<br>
(A) to move &nbsp; (B) moving &nbsp; (C) moved &nbsp; (D) move<br><br>
<strong>正解：(B)</strong><br>
解説：<em>consider</em> は動名詞のみを目的語にとる動詞。<em>consider moving</em>（移転することを検討する）が正解。
</div>`
  },
  {
    title: "比較表現（同等・比較級・最上級）",
    content: `
<h3>同等比較</h3>
<p><strong>as + 形容詞/副詞 + as</strong>：〜と同じくらい<br>
例：This model is <strong>as efficient as</strong> the previous one.</p>
<h3>比較級</h3>
<p>形容詞・副詞の -er / more ～：<br>
例：The new system is <strong>more reliable than</strong> the old one.<br>
・<strong>much / far / even / still / a lot</strong> + 比較級（〜ずっと）<br>
・<strong>the 比較級, the 比較級</strong>：〜すればするほど〜<br>
例：<strong>The sooner</strong> you apply, <strong>the better</strong>.</p>
<h3>最上級</h3>
<p>the + 形容詞 -est / most ～ + in/of:<br>
例：This is <strong>the most efficient</strong> method in our industry.<br>
・<strong>one of the + 最上級 + 複数名詞</strong>：最も〜のうちの1つ<br>
例：This is <strong>one of the most</strong> competitive markets.</p>
<h3>注意すべき比較表現</h3>
<p>・<em>superior to</em> / <em>inferior to</em>（than は使わない）<br>
・<em>prefer A to B</em>（B よりA を好む）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The new branch office is _____ located than the original one.<br>
(A) more conveniently &nbsp; (B) most conveniently &nbsp; (C) convenient &nbsp; (D) as conveniently<br><br>
<strong>正解：(A)</strong><br>
解説：<em>than</em> があるので比較級が必要。副詞 <em>conveniently</em> の比較級は <em>more conveniently</em>。
</div>`
  },
  {
    title: "前置詞（時・場所・方向・目的）",
    content: `
<h3>時を表す前置詞</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">前置詞</th><th style="padding:8px">用法</th><th style="padding:8px">例</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">at</td><td style="padding:8px;border-bottom:1px solid var(--border)">時刻・時点</td><td style="padding:8px;border-bottom:1px solid var(--border)">at 9 a.m. / at noon</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">on</td><td style="padding:8px;border-bottom:1px solid var(--border)">曜日・特定の日</td><td style="padding:8px;border-bottom:1px solid var(--border)">on Monday / on June 5</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">in</td><td style="padding:8px;border-bottom:1px solid var(--border)">月・年・季節</td><td style="padding:8px;border-bottom:1px solid var(--border)">in March / in 2025</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">by</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜までに（締め切り）</td><td style="padding:8px;border-bottom:1px solid var(--border)">by Friday</td></tr>
<tr><td style="padding:8px">until/till</td><td style="padding:8px">〜まで（継続）</td><td style="padding:8px">until 5 PM</td></tr>
</table>
<h3>TOEIC頻出前置詞句</h3>
<p>・<strong>in charge of</strong>〜（〜を担当して）<br>
・<strong>on behalf of</strong>〜（〜を代表して）<br>
・<strong>in addition to</strong>〜（〜に加えて）<br>
・<strong>due to</strong>〜（〜のために＝because of）<br>
・<strong>in accordance with</strong>〜（〜に従って）<br>
・<strong>regardless of</strong>〜（〜にかかわらず）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The project was completed ahead of schedule _____ the team's efforts.<br>
(A) despite &nbsp; (B) because &nbsp; (C) thanks to &nbsp; (D) in spite<br><br>
<strong>正解：(C)</strong><br>
解説：<em>thanks to</em>（〜のおかげで）は肯定的な理由を表す前置詞句。<em>despite / in spite of</em> は「〜にもかかわらず」、(B) because は接続詞なので節が続く必要がある。
</div>`
  },
  {
    title: "接続詞（等位・従属・相関）",
    content: `
<h3>等位接続詞</h3>
<p><strong>and / but / or / so / for / yet / nor</strong> — 同じ品詞・語句を結ぶ<br>
例：The report was thorough <strong>but</strong> too long.</p>
<h3>従属接続詞（副詞節）</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">意味</th><th style="padding:8px">接続詞</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">時</td><td style="padding:8px;border-bottom:1px solid var(--border)">when / while / after / before / as soon as / once / until</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">理由</td><td style="padding:8px;border-bottom:1px solid var(--border)">because / since / as / now that</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">条件</td><td style="padding:8px;border-bottom:1px solid var(--border)">if / unless / provided (that) / as long as</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">譲歩</td><td style="padding:8px;border-bottom:1px solid var(--border)">although / though / even though / even if / while</td></tr>
<tr><td style="padding:8px">目的</td><td style="padding:8px">so that / in order that</td></tr>
</table>
<h3>相関接続詞</h3>
<p>・<strong>both A and B</strong>（AもBも）<br>
・<strong>either A or B</strong>（AかBのどちらか）<br>
・<strong>neither A nor B</strong>（AもBも〜ない）<br>
・<strong>not only A but also B</strong>（AだけでなくBも）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
_____ the event is canceled, refunds will be issued within 14 days.<br>
(A) Although &nbsp; (B) If &nbsp; (C) Because &nbsp; (D) While<br><br>
<strong>正解：(B)</strong><br>
解説：「〜の場合、返金される」という条件の文脈なので <em>If</em>（もし〜なら）が正解。
</div>`
  },
  {
    title: "品詞識別（名詞・動詞・形容詞・副詞）",
    content: `
<h3>TOEICで最頻出：品詞問題</h3>
<p>空欄の位置を見て、必要な品詞を判断する問題が多数出題されます。</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">品詞</th><th style="padding:8px">位置</th><th style="padding:8px">語尾の例</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">名詞</td><td style="padding:8px;border-bottom:1px solid var(--border)">冠詞/形容詞の後、前置詞の後</td><td style="padding:8px;border-bottom:1px solid var(--border)">-tion, -ment, -ness, -ity</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">形容詞</td><td style="padding:8px;border-bottom:1px solid var(--border)">名詞の前、be動詞の後</td><td style="padding:8px;border-bottom:1px solid var(--border)">-ful, -less, -ive, -al, -ous</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">副詞</td><td style="padding:8px;border-bottom:1px solid var(--border)">動詞・形容詞・副詞を修飾</td><td style="padding:8px;border-bottom:1px solid var(--border)">-ly</td></tr>
<tr><td style="padding:8px">動詞</td><td style="padding:8px">主語の後</td><td style="padding:8px">-ize, -en, -ify</td></tr>
</table>
<h3>よく混同される派生語</h3>
<p>・economy（名詞）/ economic（形容詞）/ economical（形容詞：節約的）/ economically（副詞）<br>
・success（名詞）/ succeed（動詞）/ successful（形容詞）/ successfully（副詞）<br>
・access（名詞/動詞）/ accessible（形容詞）/ accessibly（副詞）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The new policy will _____ affect all employees in the organization.<br>
(A) significant &nbsp; (B) significance &nbsp; (C) significantly &nbsp; (D) signify<br><br>
<strong>正解：(C)</strong><br>
解説：動詞 <em>affect</em> を修飾するには副詞が必要。<em>significantly</em>（大幅に）が正解。(A)は形容詞、(B)は名詞、(D)は動詞。
</div>`
  },
  {
    title: "使役動詞（make / have / let / get）",
    content: `
<h3>使役動詞の構文</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">使役動詞</th><th style="padding:8px">形</th><th style="padding:8px">意味</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">make</td><td style="padding:8px;border-bottom:1px solid var(--border)">make + O + 原形</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜させる（強制）</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">have</td><td style="padding:8px;border-bottom:1px solid var(--border)">have + O + 原形</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜させる（依頼・手配）</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">let</td><td style="padding:8px;border-bottom:1px solid var(--border)">let + O + 原形</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜させる（許可）</td></tr>
<tr><td style="padding:8px">get</td><td style="padding:8px">get + O + to不定詞</td><td style="padding:8px">〜させる（説得）</td></tr>
</table>
<h3>受動態での注意</h3>
<p>makeの受動態では to 不定詞が現れる：<br>
能動：The manager <strong>made</strong> him redo the report.<br>
受動：He <strong>was made to redo</strong> the report.</p>
<h3>have + O + 過去分詞（受動使役）</h3>
<p>「〜してもらう」（自分はしない）<br>
I'll <strong>have my car checked</strong> at the garage.（車を点検してもらう）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The supervisor had her assistant _____ all the contracts before the meeting.<br>
(A) to review &nbsp; (B) reviewing &nbsp; (C) review &nbsp; (D) reviewed<br><br>
<strong>正解：(C)</strong><br>
解説：<em>have + O + 原形不定詞</em> の構文。<em>had her assistant review</em>（アシスタントに確認させた）が正解。to は不要。
</div>`
  },
  {
    title: "名詞節（that / whether / if / 疑問詞節）",
    content: `
<h3>名詞節の種類</h3>
<p>名詞節は文中で「主語・目的語・補語」として機能します。</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">接続詞</th><th style="padding:8px">意味</th><th style="padding:8px">例</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">that</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜ということ</td><td style="padding:8px;border-bottom:1px solid var(--border)">I believe that he is honest.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">whether</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜かどうか</td><td style="padding:8px;border-bottom:1px solid var(--border)">I wonder whether she will come.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">if</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜かどうか（口語的）</td><td style="padding:8px;border-bottom:1px solid var(--border)">Ask if he is available.</td></tr>
<tr><td style="padding:8px">疑問詞</td><td style="padding:8px">〜かを</td><td style="padding:8px">Please tell me where to send it.</td></tr>
</table>
<h3>that節が必要な表現</h3>
<p>・It is important <strong>that</strong> S (should) V〜（Sが〜することが重要だ）<br>
・suggest / recommend / request / insist + that + S + (should) + 原形<br>
例：She suggested <strong>that</strong> the team <strong>hold</strong> another meeting.</p>
<h3>whether vs. if</h3>
<p>前置詞の後・主語・補語の位置では <em>whether</em> のみ使用可。<br>
例：The issue is <strong>whether</strong> we should proceed.（✗ if we should）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The manager recommended _____ the team extend the project deadline.<br>
(A) that &nbsp; (B) which &nbsp; (C) whether &nbsp; (D) what<br><br>
<strong>正解：(A)</strong><br>
解説：<em>recommend that + S + (should) + 動詞原形</em> の形。<em>recommended that the team extend</em> が正解。
</div>`
  },
  {
    title: "複合関係詞（whoever / whatever / whenever / wherever / however）",
    content: `
<h3>複合関係詞の意味と用法</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">複合関係詞</th><th style="padding:8px">名詞節の意味</th><th style="padding:8px">副詞節の意味</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">whoever</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜する人は誰でも</td><td style="padding:8px;border-bottom:1px solid var(--border)">誰が〜しても</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">whatever</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜するものは何でも</td><td style="padding:8px;border-bottom:1px solid var(--border)">何が〜しても</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">whenever</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜するときはいつでも</td><td style="padding:8px;border-bottom:1px solid var(--border)">いつ〜しても</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">wherever</td><td style="padding:8px;border-bottom:1px solid var(--border)">〜する場所はどこでも</td><td style="padding:8px;border-bottom:1px solid var(--border)">どこへ〜しても</td></tr>
<tr><td style="padding:8px">however</td><td style="padding:8px">—</td><td style="padding:8px">どんなに〜しても</td></tr>
</table>
<p>例：<strong>Whoever</strong> arrives first should open the office.（最初に到着した人は誰でも）<br>
例：<strong>Whatever</strong> you decide, we will support you.（何を決めても）<br>
例：<strong>However</strong> difficult the task is, we will complete it.（どんなに難しくても）</p>
<h3>注意：however の語順</h3>
<p>however + 形容詞/副詞 + S + V<br>
✅ However busy you are, please reply.<br>
✗ However you are busy, please reply.</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
_____ is chosen for the position will undergo a background check.<br>
(A) Whoever &nbsp; (B) Whatever &nbsp; (C) Whenever &nbsp; (D) However<br><br>
<strong>正解：(A)</strong><br>
解説：空欄の後に動詞 <em>is chosen</em> が続き、主語として機能する名詞節が必要。「選ばれた人は誰でも」を意味する <em>Whoever</em> が正解。
</div>`
  },
  {
    title: "強調構文（It is ~ that ...）",
    content: `
<h3>強調構文の形</h3>
<p><strong>It is/was + 強調する要素 + that + 残りの文</strong><br>
強調できる要素：主語・目的語・副詞句（場所・時・理由など）</p>
<p>元の文：<em>She submitted the report yesterday.</em><br>
主語強調：<strong>It was she that</strong> submitted the report yesterday.<br>
目的語強調：<strong>It was the report that</strong> she submitted yesterday.<br>
時の強調：<strong>It was yesterday that</strong> she submitted the report.</p>
<h3>強調構文の見分け方</h3>
<p>「It is ～ that ...」の <em>that</em> 以下を除いても文が成立する → 強調構文<br>
「It is ～ that ...」の <em>it</em> が指す内容が <em>that</em> 節 → 形式主語構文（別物）</p>
<p>強調：It was <strong>the deadline</strong> that concerned us. ✅（that以下で文が成立）<br>
形式主語：It is important <strong>that we meet</strong> the deadline.（that節がitの内容）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
It was the marketing team _____ developed the award-winning campaign.<br>
(A) whom &nbsp; (B) which &nbsp; (C) that &nbsp; (D) what<br><br>
<strong>正解：(C)</strong><br>
解説：強調構文 <em>It was + 強調要素 + that</em> の形。先行詞が人でも物でも強調構文では <em>that</em> を使う。
</div>`
  },
  {
    title: "倒置構文（否定語・Only・So/Such）",
    content: `
<h3>否定語による倒置</h3>
<p>否定的な副詞（句）が文頭に来ると、主語と助動詞/be動詞が倒置します。</p>
<p><strong>Never / Seldom / Rarely / Hardly / No sooner / Not only / Not until</strong> + 倒置<br>
例：<strong>Never have I</strong> seen such dedication.（これほどの献身を見たことはない）<br>
例：<strong>Not only did we</strong> reduce costs, but we also improved quality.</p>
<h3>Only による倒置</h3>
<p>Only + 副詞句 が文頭のとき：<br>
例：<strong>Only after the review</strong> did the board approve the plan.</p>
<h3>So / Such による倒置</h3>
<p>So + 形容詞/副詞 + that → So を文頭に出す：<br>
例：<strong>So difficult was</strong> the project that many people quit.</p>
<h3>仮定法の倒置（if の省略）</h3>
<p>If節でifを省略し、助動詞を文頭に出す：<br>
<em>If I had known</em> = <strong>Had I known</strong>（倒置形）<br>
<em>If it were not for</em> = <strong>Were it not for</strong></p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
Not until the final report was submitted _____ the project officially closed.<br>
(A) was &nbsp; (B) it was &nbsp; (C) the project was &nbsp; (D) did<br><br>
<strong>正解：(A)</strong><br>
解説：<em>Not until + 節</em> が文頭に来ると主節は倒置。<em>the project was officially closed</em> → <em>was the project officially closed</em>。よって (A) was が正解（主語 the project の後に続く）。
</div>`
  },
  {
    title: "時制の一致と特別ルール",
    content: `
<h3>時制の一致</h3>
<p>主節が過去形のとき、従属節も過去形にするのが原則。</p>
<p>例：She said that she <strong>was</strong> tired.（彼女は疲れていると言った）<br>
例：He told me that the meeting <strong>had been</strong> postponed.（会議は延期されたと言った）</p>
<h3>時制の一致の例外（変化しないケース）</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">例外</th><th style="padding:8px">例</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">不変の真理</td><td style="padding:8px;border-bottom:1px solid var(--border)">He learned that light travels faster than sound.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">現在でも事実のこと</td><td style="padding:8px;border-bottom:1px solid var(--border)">She said that the office is on the third floor.</td></tr>
<tr><td style="padding:8px">歴史的事実</td><td style="padding:8px">We learned that Columbus arrived in 1492.</td></tr>
</table>
<h3>時や条件の副詞節は現在形</h3>
<p>未来のことでも <em>when / if / until / as soon as / once</em> の節の中は現在形：<br>
例：Please call me <strong>when you arrive</strong>.（✗ when you will arrive）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
Once the client _____ the contract, we will begin the project.<br>
(A) will sign &nbsp; (B) signs &nbsp; (C) signed &nbsp; (D) has signed<br><br>
<strong>正解：(B)</strong><br>
解説：<em>once</em>（〜したら）は時の副詞節を作るため、未来でも現在形を使う。<em>signs</em> が正解。
</div>`
  },
  {
    title: "冠詞（a / an / the / 無冠詞）",
    content: `
<h3>冠詞の基本使い分け</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">冠詞</th><th style="padding:8px">使う場面</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">a/an</td><td style="padding:8px;border-bottom:1px solid var(--border)">初めて言及・不特定の1つ</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">the</td><td style="padding:8px;border-bottom:1px solid var(--border)">既出・特定・唯一のもの・最上級</td></tr>
<tr><td style="padding:8px">無冠詞</td><td style="padding:8px">複数形・不可算名詞（一般的な概念）</td></tr>
</table>
<h3>theを使う典型パターン</h3>
<p>・最上級：<strong>the</strong> best option<br>
・序数：<strong>the</strong> first quarter<br>
・唯一のもの：<strong>the</strong> sun / <strong>the</strong> moon<br>
・「〜の中で」：<strong>the</strong> company（話し手と聞き手が共有する情報）</p>
<h3>無冠詞の典型</h3>
<p>・食事：have lunch / at breakfast<br>
・場所の機能：go to <strong>school</strong> / in <strong>hospital</strong><br>
・抽象概念：<strong>success / time / information</strong></p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
We are looking for _____ experienced engineer to join our team.<br>
(A) a &nbsp; (B) an &nbsp; (C) the &nbsp; (D) （不要）<br><br>
<strong>正解：(B)</strong><br>
解説：<em>experienced</em> は母音 /e/ で始まるため <em>an</em> を使う。また「不特定の1名のエンジニア」なので不定冠詞が適切。
</div>`
  },
  {
    title: "数量表現（many / much / few / little / some / any）",
    content: `
<h3>可算・不可算名詞で使い分け</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">表現</th><th style="padding:8px">可算名詞（複数）</th><th style="padding:8px">不可算名詞</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">多い</td><td style="padding:8px;border-bottom:1px solid var(--border)">many / a number of</td><td style="padding:8px;border-bottom:1px solid var(--border)">much / a great deal of</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">少ない</td><td style="padding:8px;border-bottom:1px solid var(--border)">few（ほとんどない）/ a few（少しある）</td><td style="padding:8px;border-bottom:1px solid var(--border)">little（ほとんどない）/ a little（少しある）</td></tr>
<tr><td style="padding:8px">両方OK</td><td style="padding:8px" colspan="2">some / any / a lot of / plenty of / no</td></tr>
</table>
<h3>TOEICで重要な表現</h3>
<p>・<strong>the number of</strong>（〜の数）→ 動詞は単数<br>
・<strong>a number of</strong>（多くの〜）→ 動詞は複数<br>
・<strong>each / every</strong>（それぞれの / すべての）→ 単数名詞・単数動詞<br>
・<strong>all of the</strong> + 複数名詞 → 複数動詞</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
There is still _____ time before the deadline, so there is no need to rush.<br>
(A) few &nbsp; (B) many &nbsp; (C) a little &nbsp; (D) a few<br><br>
<strong>正解：(C)</strong><br>
解説：<em>time</em> は不可算名詞。「少し（時間が）ある」という肯定的な意味には <em>a little</em> を使う。<em>little</em> は「ほとんどない」（否定的）、<em>few / a few</em> は可算名詞用。
</div>`
  },
  {
    title: "接続副詞（however / therefore / moreover / nevertheless）",
    content: `
<h3>接続副詞とは</h3>
<p>2つの文をつなぎ、論理関係を示す副詞です。接続詞と違い、単独では2文を結べず、セミコロン(;)やピリオドが必要です。</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">接続副詞</th><th style="padding:8px">意味</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">however</td><td style="padding:8px;border-bottom:1px solid var(--border)">しかし（逆接）</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">therefore / thus / consequently</td><td style="padding:8px;border-bottom:1px solid var(--border)">したがって（結果）</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">moreover / furthermore / in addition</td><td style="padding:8px;border-bottom:1px solid var(--border)">さらに（追加）</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">nevertheless / nonetheless</td><td style="padding:8px;border-bottom:1px solid var(--border)">それにもかかわらず</td></tr>
<tr><td style="padding:8px">for example / for instance</td><td style="padding:8px">例えば</td></tr>
</table>
<p>例：Sales declined last quarter. <strong>However</strong>, the outlook for next year is positive.<br>
例：The budget was limited; <strong>therefore</strong>, we had to cut costs.</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The project was delayed due to supply issues. _____, the team managed to deliver on the revised deadline.<br>
(A) Therefore &nbsp; (B) Moreover &nbsp; (C) Nevertheless &nbsp; (D) For example<br><br>
<strong>正解：(C)</strong><br>
解説：前文（遅延）と後文（なんとか納品）が逆接の関係。「それにもかかわらず」を意味する <em>Nevertheless</em> が正解。
</div>`
  },
  {
    title: "並列構造（Parallel Structure）",
    content: `
<h3>並列構造の基本</h3>
<p>and / or / but / not only A but also B などで結ばれる要素は、同じ文法形式でなければなりません。</p>
<p>✅ She likes <strong>reading, writing, and presenting</strong>.（すべて動名詞）<br>
✗ She likes <strong>to read, writing, and to give</strong> presentations.（形式がバラバラ）</p>
<h3>よくある並列構造のミス</h3>
<p>・<strong>not only A but also B</strong>：A と B は同じ品詞・形式<br>
例：The plan was <strong>not only efficient</strong> but <strong>also cost-effective</strong>.（形容詞＋形容詞）<br><br>
・<strong>either A or B / both A and B</strong>も同様<br>
例：You can pay <strong>either by credit card or in cash</strong>.（前置詞句＋前置詞句）</p>
<h3>比較の並列</h3>
<p>比較のthan / as ... as で結ばれる要素も同形式にする：<br>
✅ Writing a summary is <strong>easier</strong> than <strong>giving a presentation</strong>.（動名詞＋動名詞）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The new manager is responsible for planning meetings, coordinating schedules, and _____ monthly reports.<br>
(A) to prepare &nbsp; (B) preparation &nbsp; (C) preparing &nbsp; (D) prepare<br><br>
<strong>正解：(C)</strong><br>
解説：前の要素 <em>planning</em>, <em>coordinating</em> が動名詞形なので、並列構造を維持するために <em>preparing</em>（動名詞）を選ぶ。
</div>`
  },
  {
    title: "語彙問題対策（文脈から選ぶ）",
    content: `
<h3>語彙問題の解き方</h3>
<p>Part5の語彙問題は品詞は同じでも意味が違う選択肢が並ぶのが特徴。文脈・コロケーション（共起関係）が鍵です。</p>
<h3>TOEIC頻出コロケーション</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">コロケーション</th><th style="padding:8px">意味</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">meet a deadline</td><td style="padding:8px;border-bottom:1px solid var(--border)">締め切りを守る</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">reach an agreement</td><td style="padding:8px;border-bottom:1px solid var(--border)">合意に達する</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">submit a report</td><td style="padding:8px;border-bottom:1px solid var(--border)">報告書を提出する</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">launch a product</td><td style="padding:8px;border-bottom:1px solid var(--border)">製品を発売する</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">conduct a survey</td><td style="padding:8px;border-bottom:1px solid var(--border)">調査を実施する</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">make a reservation</td><td style="padding:8px;border-bottom:1px solid var(--border)">予約をする</td></tr>
<tr><td style="padding:8px">provide feedback</td><td style="padding:8px">フィードバックを与える</td></tr>
</table>
<h3>混同しやすい動詞</h3>
<p>・<em>rise</em>（自動詞：上がる）vs. <em>raise</em>（他動詞：上げる）<br>
・<em>affect</em>（動詞：影響する）vs. <em>effect</em>（名詞：影響）<br>
・<em>lie</em>（横になる/ある）vs. <em>lay</em>（〜を置く）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The board will _____ a final decision at next month's meeting.<br>
(A) do &nbsp; (B) make &nbsp; (C) take &nbsp; (D) get<br><br>
<strong>正解：(B)</strong><br>
解説：<em>make a decision</em>（決定を下す）は固定コロケーション。<em>do a decision / take a decision</em> は自然ではない（Britishでは take も使うがTOEICでは make が標準）。
</div>`
  },
  {
    title: "代名詞（人称・指示・再帰・不定）",
    content: `
<h3>人称代名詞の格変化</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">人称</th><th style="padding:8px">主格</th><th style="padding:8px">目的格</th><th style="padding:8px">所有格</th><th style="padding:8px">所有代名詞</th><th style="padding:8px">再帰</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">1人称単数</td><td style="padding:8px;border-bottom:1px solid var(--border)">I</td><td style="padding:8px;border-bottom:1px solid var(--border)">me</td><td style="padding:8px;border-bottom:1px solid var(--border)">my</td><td style="padding:8px;border-bottom:1px solid var(--border)">mine</td><td style="padding:8px;border-bottom:1px solid var(--border)">myself</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">3人称単数男</td><td style="padding:8px;border-bottom:1px solid var(--border)">he</td><td style="padding:8px;border-bottom:1px solid var(--border)">him</td><td style="padding:8px;border-bottom:1px solid var(--border)">his</td><td style="padding:8px;border-bottom:1px solid var(--border)">his</td><td style="padding:8px;border-bottom:1px solid var(--border)">himself</td></tr>
<tr><td style="padding:8px">3人称複数</td><td style="padding:8px">they</td><td style="padding:8px">them</td><td style="padding:8px">their</td><td style="padding:8px">theirs</td><td style="padding:8px">themselves</td></tr>
</table>
<h3>よく出る代名詞問題</h3>
<p>・所有格（名詞の前）vs. 所有代名詞（単独）<br>
This is <strong>my</strong> report.（所有格）/ This report is <strong>mine</strong>.（所有代名詞）<br><br>
・再帰代名詞（動詞の目的語＝主語自身 / 強調）<br>
He hurt <strong>himself</strong>.（再帰）/ The CEO <strong>himself</strong> attended.（強調）</p>
<h3>不定代名詞</h3>
<p>・<em>one</em>（一般の人・先行名詞の代わり）<br>
・<em>another</em>（もう1つ別の）/ <em>others</em>（他の人々）/ <em>the other</em>（残り）/ <em>the others</em>（残り全員）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The board members expressed _____ opinions during the discussion.<br>
(A) they &nbsp; (B) them &nbsp; (C) their &nbsp; (D) themselves<br><br>
<strong>正解：(C)</strong><br>
解説：名詞 <em>opinions</em> の前に置かれる修飾語が必要なので、所有格 <em>their</em> が正解。
</div>`
  },
  {
    title: "形容詞と副詞の用法",
    content: `
<h3>形容詞の用法</h3>
<p><strong>限定用法</strong>：名詞の前に置く<br>
例：a <strong>detailed</strong> report / the <strong>new</strong> policy<br><br>
<strong>叙述用法</strong>：be動詞・感覚動詞の後<br>
例：The report is <strong>detailed</strong>. / The coffee smells <strong>good</strong>.</p>
<h3>副詞の用法</h3>
<p>・動詞を修飾：She works <strong>efficiently</strong>.<br>
・形容詞を修飾：The project is <strong>highly</strong> successful.<br>
・文全体を修飾：<strong>Fortunately</strong>, no one was injured.</p>
<h3>紛らわしい形容詞・副詞</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">語</th><th style="padding:8px">品詞・意味</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">hard（形）/ hard（副）/ hardly（副）</td><td style="padding:8px;border-bottom:1px solid var(--border)">hard：一生懸命 / hardly：ほとんど〜ない</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">late（形/副）/ lately（副）</td><td style="padding:8px;border-bottom:1px solid var(--border)">late：遅く / lately：最近</td></tr>
<tr><td style="padding:8px">near（形/副）/ nearly（副）</td><td style="padding:8px">near：近く / nearly：ほぼ</td></tr>
</table>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The new software performed _____ during the trial period.<br>
(A) exceptional &nbsp; (B) exception &nbsp; (C) exceptionally &nbsp; (D) exceptions<br><br>
<strong>正解：(C)</strong><br>
解説：動詞 <em>performed</em> を修飾するには副詞が必要。<em>exceptionally</em>（例外的に・非常に）が正解。
</div>`
  },
  {
    title: "否定表現（not / no / never / rarely）",
    content: `
<h3>否定の種類</h3>
<p><strong>完全否定</strong>：not / never / no / none / nobody / nothing / nowhere<br>
<strong>部分否定</strong>：not always / not entirely / not all（必ずしも〜ない・全てが〜ではない）</p>
<h3>二重否定に注意</h3>
<p>英語では二重否定は肯定になる（TOEICでは避ける）：<br>
✗ I don't know nothing. → ✅ I don't know anything. / I know nothing.</p>
<h3>準否定語</h3>
<p><strong>hardly / scarcely / barely</strong>：ほとんど〜ない<br>
<strong>seldom / rarely</strong>：めったに〜ない<br>
例：He <strong>rarely</strong> misses a deadline.（彼はめったに締め切りを守れないことはない）</p>
<h3>否定の強調表現</h3>
<p>・<strong>by no means</strong>（決して〜ない）<br>
・<strong>in no way</strong>（どのようにも〜ない）<br>
・<strong>not in the least</strong>（少しも〜ない）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The results were _____ satisfactory; several departments failed to meet their targets.<br>
(A) always &nbsp; (B) entirely &nbsp; (C) not entirely &nbsp; (D) never<br><br>
<strong>正解：(C)</strong><br>
解説：セミコロン以下で「複数の部署が目標未達」とあるので、「完全には満足できない」という部分否定 <em>not entirely satisfactory</em> が文脈に合う。
</div>`
  },
  {
    title: "省略・代用表現（do so / one / those）",
    content: `
<h3>do so / do it / do that</h3>
<p>前述の動詞句を繰り返さずに代用する表現：<br>
例：She wanted to submit the report, and she <strong>did so</strong> before noon.（報告書を提出し、そうした）</p>
<h3>one / ones</h3>
<p>前述の可算名詞の代用（不定の意味）：<br>
例：I need a new pen. Do you have <strong>one</strong>?（ペンを1本）<br>
例：The old chairs were replaced with new <strong>ones</strong>.（椅子）</p>
<h3>those / that</h3>
<p>前述の名詞を受ける（定の意味・比較でよく使用）：<br>
例：Our prices are lower than <strong>those</strong> of our competitors.（競合の価格）<br>
例：The climate here is similar to <strong>that</strong> of coastal cities.（沿岸都市の気候）</p>
<h3>to不定詞の省略</h3>
<p>前述の to不定詞を <em>to</em> だけで代用：<br>
例：I didn't want to leave, but I had <strong>to</strong>.（しなければならなかった）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
Our delivery times are shorter than _____ of most competitors in the region.<br>
(A) one &nbsp; (B) those &nbsp; (C) that &nbsp; (D) it<br><br>
<strong>正解：(B)</strong><br>
解説：<em>delivery times</em>（複数の配送時間）を指すため、複数形を受ける <em>those</em> が正解。<em>that</em> は単数名詞の代用。
</div>`
  },
  {
    title: "語法（動詞の目的語・前置詞）",
    content: `
<h3>TOEICで重要な動詞の語法</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">動詞</th><th style="padding:8px">正しい使い方</th><th style="padding:8px">意味</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">inform</td><td style="padding:8px;border-bottom:1px solid var(--border)">inform A of B</td><td style="padding:8px;border-bottom:1px solid var(--border)">AにBを知らせる</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">provide</td><td style="padding:8px;border-bottom:1px solid var(--border)">provide A with B / provide B for A</td><td style="padding:8px;border-bottom:1px solid var(--border)">AにBを提供する</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">remind</td><td style="padding:8px;border-bottom:1px solid var(--border)">remind A of B / remind A to do</td><td style="padding:8px;border-bottom:1px solid var(--border)">AにBを思い出させる</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">consist</td><td style="padding:8px;border-bottom:1px solid var(--border)">consist of（〜から成る）</td><td style="padding:8px;border-bottom:1px solid var(--border)">受動態不可</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">attribute</td><td style="padding:8px;border-bottom:1px solid var(--border)">attribute A to B</td><td style="padding:8px;border-bottom:1px solid var(--border)">AをBのせいにする</td></tr>
<tr><td style="padding:8px">comply</td><td style="padding:8px">comply with</td><td style="padding:8px">〜に従う・遵守する</td></tr>
</table>
<h3>前置詞を伴う頻出表現</h3>
<p>・<em>be responsible for</em>（〜に責任がある）<br>
・<em>be familiar with</em>（〜に精通している）<br>
・<em>be aware of</em>（〜を知っている）<br>
・<em>be capable of</em>（〜できる）<br>
・<em>be committed to</em>（〜に専念している）+ 名詞/動名詞</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
Please make sure all staff comply _____ the new safety regulations.<br>
(A) to &nbsp; (B) for &nbsp; (C) with &nbsp; (D) at<br><br>
<strong>正解：(C)</strong><br>
解説：<em>comply with</em>（〜に従う、遵守する）は固定の語法。前置詞は必ず <em>with</em> を使う。
</div>`
  },
  {
    title: "形式主語・形式目的語（it）",
    content: `
<h3>形式主語 it</h3>
<p>真の主語（to不定詞・that節・動名詞）が長い場合、文頭に <em>it</em> を置く。</p>
<p>・It is + 形容詞 + <strong>to do</strong>：〜することは〜だ<br>
例：<strong>It</strong> is important <strong>to submit</strong> the form on time.<br><br>
・It is + 形容詞 + <strong>that S V</strong>：<br>
例：<strong>It</strong> is essential <strong>that all employees complete</strong> the training.<br><br>
・It takes + 時間 + <strong>to do</strong>：〜するのに（時間が）かかる<br>
例：<strong>It</strong> takes three hours <strong>to fly</strong> to Osaka.</p>
<h3>形式目的語 it</h3>
<p>make / find / consider + it + 形容詞 + to do / that節<br>
例：We found <strong>it</strong> difficult <strong>to finish</strong> the project on time.<br>
例：She made <strong>it</strong> clear <strong>that</strong> she would resign.</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The new software makes _____ easy to track all customer interactions.<br>
(A) that &nbsp; (B) it &nbsp; (C) this &nbsp; (D) them<br><br>
<strong>正解：(B)</strong><br>
解説：<em>make it + 形容詞 + to do</em> の形式目的語構文。<em>it</em> が形式目的語となり、真の目的語は <em>to track all customer interactions</em>。
</div>`
  },
  {
    title: "挿入・同格・修飾語句の位置",
    content: `
<h3>挿入句</h3>
<p>主語と動詞の間、または文中にカンマで挟んで情報を追加する表現：<br>
例：The new manager, <strong>who joined last month</strong>, reorganized the department.<br>
例：Sales, <strong>however</strong>, have been declining this quarter.</p>
<h3>同格</h3>
<p>名詞の直後に同じ内容を説明する名詞句：<br>
例：Mr. Kim, <strong>the CEO</strong>, will deliver the keynote speech.<br>
例：The fact <strong>that profits doubled</strong> surprised everyone.（同格のthat節）</p>
<h3>修飾語句の位置</h3>
<p>・副詞・副詞句は柔軟に置けるが、誤解を招く位置に注意<br>
・形容詞句は修飾する名詞の直後が原則：<br>
例：employees <strong>hired last month</strong>（先月採用された従業員）<br>
・分詞句も名詞の直後：<br>
例：the report <strong>submitted by the team</strong></p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
The annual conference, _____ in Chicago last year, attracted over 2,000 participants.<br>
(A) held &nbsp; (B) holding &nbsp; (C) that held &nbsp; (D) which holding<br><br>
<strong>正解：(A)</strong><br>
解説：<em>The annual conference</em> を後ろから修飾する過去分詞句（受動）。<em>held in Chicago</em>（シカゴで開催された）= <em>which was held</em> の短縮形。
</div>`
  },
  {
    title: "前置詞 vs. 接続詞の選択",
    content: `
<h3>形が似て紛らわしいペア</h3>
<p>TOEICで最頻出のパターンの一つ。空欄の後が「節（S+V）」か「名詞句」かを見極めます。</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">接続詞（後ろにS+V）</th><th style="padding:8px">前置詞（後ろに名詞句）</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">although / though / even though</td><td style="padding:8px;border-bottom:1px solid var(--border)">despite / in spite of</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">because / since / as</td><td style="padding:8px;border-bottom:1px solid var(--border)">because of / due to / owing to</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">while / when</td><td style="padding:8px;border-bottom:1px solid var(--border)">during</td></tr>
<tr><td style="padding:8px">until / before / after</td><td style="padding:8px">until / before / after（前置詞としても使用）</td></tr>
</table>
<p>例：<strong>Although</strong> the weather was bad, the event continued.（接続詞）<br>
例：<strong>Despite</strong> the bad weather, the event continued.（前置詞）<br><br>
例：<strong>Because</strong> the train was delayed, we were late.（接続詞）<br>
例：<strong>Because of</strong> the train delay, we were late.（前置詞句）</p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
_____ the merger, both companies will maintain their separate brand identities.<br>
(A) Although &nbsp; (B) Despite &nbsp; (C) Because &nbsp; (D) Since<br><br>
<strong>正解：(B)</strong><br>
解説：空欄の後 <em>the merger</em> は名詞句（S+Vなし）なので前置詞が必要。<em>Despite</em>（〜にもかかわらず）が正解。接続詞の(A)(C)(D)は節が続かないと使えない。
</div>`
  },
  {
    title: "主語と動詞の一致（難しいケース）",
    content: `
<h3>基本：単数主語 → 単数動詞</h3>
<p>TOEICでは修飾語句で主語が見えにくくなるケースが頻出。</p>
<h3>注意すべきパターン</h3>
<table style="width:100%;border-collapse:collapse;margin:12px 0">
<tr style="background:var(--primary);color:#fff"><th style="padding:8px">パターン</th><th style="padding:8px">動詞</th><th style="padding:8px">例</th></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">A as well as B</td><td style="padding:8px;border-bottom:1px solid var(--border)">Aに一致</td><td style="padding:8px;border-bottom:1px solid var(--border)">Tom, as well as his colleagues, <strong>is</strong> invited.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">A together with B</td><td style="padding:8px;border-bottom:1px solid var(--border)">Aに一致</td><td style="padding:8px;border-bottom:1px solid var(--border)">The CEO together with directors <strong>is</strong> attending.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">either A or B / neither A nor B</td><td style="padding:8px;border-bottom:1px solid var(--border)">Bに一致</td><td style="padding:8px;border-bottom:1px solid var(--border)">Neither he nor they <strong>are</strong> wrong.</td></tr>
<tr><td style="padding:8px;border-bottom:1px solid var(--border)">the number of + 複数名詞</td><td style="padding:8px;border-bottom:1px solid var(--border)">単数</td><td style="padding:8px;border-bottom:1px solid var(--border)">The number of employees <strong>has</strong> increased.</td></tr>
<tr><td style="padding:8px">a number of + 複数名詞</td><td style="padding:8px">複数</td><td style="padding:8px">A number of issues <strong>have</strong> arisen.</td></tr>
</table>
<h3>集合名詞</h3>
<p>・<em>staff / team / committee / board / management</em>：英国英語は複数、米国英語は単数が多い<br>
TOEICでは通常単数扱い：<em>The team <strong>is</strong> ready.</em></p>
<div style="background:var(--card-bg);border-left:4px solid var(--primary);padding:12px;margin:12px 0;border-radius:4px">
<strong>TOEIC例題：</strong><br>
Neither the manager nor the employees _____ informed about the schedule change.<br>
(A) was &nbsp; (B) were &nbsp; (C) has been &nbsp; (D) is<br><br>
<strong>正解：(B)</strong><br>
解説：<em>neither A nor B</em> のとき、動詞は B（<em>the employees</em>＝複数）に一致する。よって <em>were</em> が正解。
</div>`
  }
];
