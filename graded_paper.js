/* =========================================================================
   STELLA 채점 시험지 (graded_paper.js) — made by 스텔라원장
   실제 채점한 시험지처럼: 맞은 문항 = 빨간 동그라미 / 틀린 문항 = 빨간 사선
   틀린 문항: 내 답 → 정답 + 해설   ·   인쇄(정답·해설 포함 / 다시 풀기용)
   사용: GradedPaper.render(item, exam, student, key)  → HTML 문자열
         (item = 월말평가 항목 {c,t,p,wrong,myAns,examTitle,d}, exam = OMR 시험 설정 데이터)
   ========================================================================= */
(function () {
  const CIRC = ['①', '②', '③', '④', '⑤', '⑥'];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ansTxt = a => typeof a === 'number' ? (CIRC[a - 1] || a) : esc(a);

  // 손으로 그린 듯한 빨간 펜 마크
  const RED = '#D7263D';
  const circleSvg = (w = 44, h = 40) => `<svg class="gp-mk" viewBox="0 0 50 44" width="${w}" height="${h}" aria-hidden="true"><path d="M27 4 C12 3 3 12 4 23 C5 35 17 41 29 39 C41 37 48 28 46 18 C44 9 35 4 22 6" fill="none" stroke="${RED}" stroke-width="3" stroke-linecap="round"/></svg>`;
  const slashSvg = (w = 44, h = 40) => `<svg class="gp-mk" viewBox="0 0 50 44" width="${w}" height="${h}" aria-hidden="true"><path d="M42 3 C33 15 20 29 7 41" fill="none" stroke="${RED}" stroke-width="3.2" stroke-linecap="round"/></svg>`;
  const scoreRing = `<svg class="gp-ring" viewBox="0 0 160 90" aria-hidden="true"><path d="M86 6 C42 2 6 18 8 46 C10 74 52 88 96 84 C140 80 158 58 152 36 C146 14 116 4 70 9" fill="none" stroke="${RED}" stroke-width="3.2" stroke-linecap="round"/></svg>`;

  const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
.gp{background:#fff;border:1px solid #E4E0D8;border-radius:6px;box-shadow:0 2px 0 #EFEBE3,0 3px 12px rgba(20,33,62,.06);padding:18px 16px 16px;margin-top:12px;position:relative;font-family:Pretendard,-apple-system,'Apple SD Gothic Neo',sans-serif;color:#1B2233}
.gp-head{border-bottom:2px solid #14213E;padding-bottom:10px;margin-bottom:6px;padding-right:118px;min-height:76px}
.gp-aca{font-size:10.5px;letter-spacing:.12em;color:#8A6A12;font-weight:700}
.gp-title{font-size:16px;font-weight:800;color:#14213E;margin-top:3px;line-height:1.35}
.gp-meta{font-size:12px;color:#4A5263;margin-top:4px}
.gp-meta b{color:#1B2233;border-bottom:1px solid #9aa3b2;padding:0 6px}
.gp-score{position:absolute;right:10px;top:10px;width:118px;height:70px;display:flex;align-items:center;justify-content:center;flex-direction:column;color:${RED};font-family:'Nanum Pen Script',cursive;transform:rotate(-6deg)}
.gp-score .gp-ring{position:absolute;inset:0;width:100%;height:100%}
.gp-score b{font-size:40px;line-height:.9;font-weight:400}
.gp-score span{font-size:19px;line-height:1}
.gp-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:10px 0 2px}
.gp-pill{font-size:12px;font-weight:700;padding:3px 9px;border-radius:999px}
.gp-pill.ok{background:#E7F4EE;color:#1E7F55}.gp-pill.ng{background:#FBECEA;color:#B5483C}
.gp-seg{display:flex;background:#F1EFEA;border-radius:999px;padding:3px;margin:8px 0 0;flex:1;min-width:200px}
.gp-seg button{flex:1;border:0;background:transparent;border-radius:999px;padding:7px 0;font:600 12.5px Pretendard,sans-serif;color:#4A5263;cursor:pointer}
.gp-seg button.on{background:#fff;color:#14213E;box-shadow:0 1px 3px rgba(0,0,0,.08)}
.gp-qs.only-wrong .gp-q.ok{display:none}
.gp-q{display:flex;gap:10px;padding:12px 2px;border-bottom:1px dashed #E4E0D8}
.gp-q:last-child{border-bottom:0}
.gp-no{position:relative;flex:0 0 40px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:#14213E}
.gp-no .gp-mk{position:absolute;left:-3px;top:-3px;pointer-events:none}
.gp-body{flex:1;min-width:0}
.gp-qt{font-size:14px;line-height:1.6;white-space:pre-wrap}
.gp-tag{display:inline-block;font-size:10.5px;color:#8A93A3;background:#F4F2EE;border-radius:5px;padding:1px 6px;margin-bottom:4px}
.gp-psg{font-size:12.5px;color:#4A5263;background:#F8F7F4;border-radius:8px;padding:8px 10px;margin:6px 0;white-space:pre-wrap;line-height:1.7}
.gp details summary{font-size:12px;color:#2F5BA8;cursor:pointer;font-weight:600;margin-top:4px}
.gp-ch{list-style:none;margin:6px 0 0;padding:0}
.gp-ch li{font-size:13.5px;padding:3px 6px;border-radius:6px;display:flex;gap:6px;align-items:center;position:relative}
.gp-ch li .n{flex:0 0 auto}
.gp-ch li.mine{color:#B5483C}
.gp-ch li.mine .t,.gp-ch li.mine .n{text-decoration:line-through;text-decoration-color:${RED};text-decoration-thickness:2px}
.gp-ch li.ans{color:#145A3C;font-weight:700}
.gp-ch li.ans .n{position:relative}
.gp-ch li.ans .n::after{content:"";position:absolute;left:-5px;top:-4px;width:24px;height:24px;border:2.4px solid ${RED};border-radius:50%;transform:rotate(-12deg)}
.gp-ch li .lab{margin-left:auto;font-size:11px;font-weight:700}
.gp-ch li.mine .lab{color:#B5483C}
.gp-ch li.ans .lab{color:#1E7F55}
.gp-line{font-size:13px;margin-top:6px}
.gp-line .mine{color:#B5483C;font-weight:700;text-decoration:line-through;text-decoration-color:${RED}}
.gp-line .ans{color:#1E7F55;font-weight:800}
.gp-pen{font-family:'Nanum Pen Script',cursive;color:${RED};font-size:21px;line-height:1}
.gp-exp{margin-top:8px;font-size:13px;background:#FBF4DE;border-radius:8px;padding:8px 10px;line-height:1.7;color:#4A3A0B}
.gp-exp b{color:#8A6A12}
.gp-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px 6px;margin-top:12px}
.gp-cell{position:relative;border:1px solid #E4E0D8;border-radius:8px;padding:6px 2px 5px;text-align:center;background:#fff;min-height:60px}
.gp-cell .q{font-weight:800;font-size:14px;color:#14213E;position:relative;display:inline-block;width:34px;height:30px;line-height:30px}
.gp-cell .q .gp-mk{position:absolute;left:-5px;top:-5px}
.gp-cell .a{font-size:11.5px;color:#4A5263;line-height:1.35}
.gp-cell.ng{background:#FFF8F7;border-color:#EBC3BD}
.gp-cell.ng .a .mine{color:#B5483C;text-decoration:line-through}
.gp-cell.ng .a .ans{color:#1E7F55;font-weight:800}
.gp-wrongexp{margin-top:12px}
.gp-wrongexp .gp-exp{margin-top:6px}
.gp-note{font-size:11.5px;color:#8A93A3;margin-top:8px}
.gp-prow{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
.gp-prow button,.gp-prow a{flex:1;min-width:140px;border:1px solid #E7E4DE;background:#fff;border-radius:999px;padding:9px 10px;font:700 12.5px Pretendard,sans-serif;color:#14213E;cursor:pointer;text-align:center;text-decoration:none}
.gp-redo-blank{display:none}
@media print{
  body.gp-printing>*:not(#gp-print-root){display:none!important}
  #gp-print-root{display:block!important}
  #gp-print-root .gp{border:0;box-shadow:none;padding:0}
  #gp-print-root .gp-seg,#gp-print-root .gp-prow,#gp-print-root details>summary{display:none!important}
  #gp-print-root .gp-q{break-inside:avoid}
  #gp-print-root .gp-qs.only-wrong .gp-q.ok{display:none}
  body.gp-noans #gp-print-root .gp-mk,body.gp-noans #gp-print-root .gp-score,body.gp-noans #gp-print-root .gp-exp,
  body.gp-noans #gp-print-root .gp-line,body.gp-noans #gp-print-root .lab,body.gp-noans #gp-print-root .gp-bar,body.gp-noans #gp-print-root .gp-wrongexp{display:none!important}
  body.gp-noans #gp-print-root .gp-ch li{color:inherit!important;font-weight:400!important;text-decoration:none!important}
  body.gp-noans #gp-print-root .gp-ch li .t,body.gp-noans #gp-print-root .gp-ch li .n{text-decoration:none!important}
  body.gp-noans #gp-print-root .gp-ch li.ans .n::after{display:none}
  body.gp-noans #gp-print-root .gp-redo-blank{display:block;font-size:12px;color:#4A5263;margin-top:6px}
  body.gp-noans #gp-print-root .gp-q.ng{border-color:#E4E0D8}
}
#gp-print-root{display:none}`;

  function injectCss() {
    if (document.getElementById('gp-css')) return;
    const st = document.createElement('style'); st.id = 'gp-css'; st.textContent = CSS;
    document.head.appendChild(st);
  }

  function render(it, ex, student, key, opts) {
    injectCss();
    opts = opts || {};
    if (!ex || !it || !it.wrong) return '';
    const wrong = {}; it.wrong.forEach(n => wrong[n] = 1);
    const my = it.myAns || {};
    const total = it.t || ex.total || (ex.questions ? ex.questions.length : (ex.answers || []).length);
    const nWrong = it.wrong.length, nOk = total - nWrong;
    const score = Math.round((it.c != null ? it.c : nOk) / total * 100);
    const date = it.d ? (+it.d.slice(5, 7)) + '월 ' + (+it.d.slice(8, 10)) + '일' : '';
    const hasQ = ex.questions && ex.questions.length;
    let body;

    if (hasQ) {
      body = ex.questions.map(q => {
        const ng = !!wrong[q.no];
        const mine = my[q.no];
        const psg = q.passage ? ((ex.passages || {})[q.passage] || q.passage) : '';
        let choices = '';
        if (q.choices && q.choices.length) {
          choices = `<ol class="gp-ch">${q.choices.map((c, i) => {
            const isAns = q.answer === i + 1, isMine = ng && mine === i + 1 && !isAns;
            return `<li class="${isAns ? 'ans' : ''} ${isMine ? 'mine' : ''}"><span class="n">${CIRC[i] || i + 1}</span><span class="t">${esc(c)}</span>${isAns ? '<span class="lab">정답</span>' : isMine ? '<span class="lab">내 답</span>' : ''}</li>`;
          }).join('')}</ol>`;
          if (ng && mine != null && typeof mine !== 'number') choices += `<div class="gp-line">내 답 <span class="mine">${esc(mine)}</span></div>`;
        } else {
          choices = `<div class="gp-line">${ng && mine != null ? `내 답 <span class="mine">${ansTxt(mine)}</span> → ` : ''}정답 <span class="ans">${ansTxt(q.answer)}</span></div>`;
        }
        const inner = `${q.unit ? `<span class="gp-tag">${esc(q.unit)}</span><br>` : ''}
          ${psg ? `<details ${ng ? 'open' : ''}><summary>지문 보기</summary><div class="gp-psg">${esc(psg)}</div></details>` : ''}
          ${q.q ? `<div class="gp-qt">${esc(q.q)}</div>` : ''}${choices}
          <div class="gp-redo-blank">내 답: ____________</div>
          ${ng && q.exp ? `<div class="gp-exp"><b>💡 해설</b><br>${esc(q.exp)}</div>` : ''}
          ${!ng && q.exp ? `<details><summary>해설 보기</summary><div class="gp-exp">${esc(q.exp)}</div></details>` : ''}`;
        return `<div class="gp-q ${ng ? 'ng' : 'ok'}"><div class="gp-no">${q.no}${ng ? slashSvg() : circleSvg()}</div><div class="gp-body">${inner}</div></div>`;
      }).join('');
    } else {
      // 문항 텍스트가 없는 시험: 답안지(OMR) 모양
      const answers = ex.answers || [];
      body = `<div class="gp-grid">${Array.from({ length: total }, (_, i) => {
        const n = i + 1, ng = !!wrong[n], a = answers[i];
        return `<div class="gp-cell ${ng ? 'ng' : 'ok'}"><span class="q">${n}${ng ? slashSvg(40, 38) : circleSvg(40, 38)}</span>
          <div class="a">${ng ? `${my[n] != null ? `<span class="mine">${ansTxt(my[n])}</span> → ` : ''}<span class="ans">${a != null ? ansTxt(a) : ''}</span>` : (a != null ? ansTxt(a) : '')}</div></div>`;
      }).join('')}</div>
      <div class="gp-note">칸 아래 숫자는 정답 번호, 틀린 칸은 <span style="color:#B5483C;text-decoration:line-through">내 답</span> → <b style="color:#1E7F55">정답</b></div>`;
      const exps = it.wrong.map(n => {
        const q = (ex.questions || []).find(x => x.no === n);
        return q && q.exp ? `<div class="gp-exp"><b>${n}번 해설</b><br>${esc(q.exp)}</div>` : '';
      }).join('');
      if (exps) body += `<div class="gp-wrongexp">${exps}</div>`;
    }

    return `<div class="gp" id="gp-${key}">
      <div class="gp-head">
        <div class="gp-aca">ENGLISH EYE STELLA · 잉글리시아이스텔라 영어전문</div>
        <div class="gp-title">${esc(ex.title || it.examTitle || it.name || '월말평가')}</div>
        <div class="gp-meta">이름 <b>${esc(student && student.name || '')}</b> ${student && student.cls ? ' · ' + esc(student.cls) : ''}${date ? ' · ' + date : ''}</div>
      </div>
      <div class="gp-score">${scoreRing}<b>${score}</b><span>${it.c != null ? it.c : nOk}/${total}</span></div>
      <div class="gp-bar"><span class="gp-pill ok">⭕ ${nOk}</span><span class="gp-pill ng">╱ ${nWrong}</span>
        ${hasQ && nWrong ? `<div class="gp-seg"><button class="on" onclick="GradedPaper.seg(this,'${key}',1)">틀린 문제만</button><button onclick="GradedPaper.seg(this,'${key}',0)">전체 시험지</button></div>` : ''}</div>
      <div class="gp-qs ${hasQ && nWrong ? 'only-wrong' : ''}" id="gpq-${key}">${body}</div>
      ${!nWrong ? '<div class="gp-note" style="font-size:13px">🎉 모든 문제를 맞혔어요!</div>' : ''}
      ${opts.noPrint ? '' : `<div class="gp-prow"><button onclick="GradedPaper.print('${key}',false)">🖨️ 채점 시험지 인쇄 (정답·해설)</button>${hasQ ? `<button onclick="GradedPaper.print('${key}',true)">✏️ 다시 풀기용 인쇄</button>` : ''}${ex.pdf ? `<a href="${esc(ex.pdf)}" target="_blank" rel="noopener">📄 시험지 원본</a>` : ''}</div>`}
    </div>`;
  }

  function seg(btn, key, onlyWrong) {
    btn.parentNode.querySelectorAll('button').forEach(b => b.classList.toggle('on', b === btn));
    document.getElementById('gpq-' + key).classList.toggle('only-wrong', !!onlyWrong);
  }

  // 시험지 하나만 인쇄 (현재 '틀린 문제만/전체' 선택 그대로)
  function print(keyOrEls, noAns) {
    injectCss();
    const els = Array.isArray(keyOrEls) ? keyOrEls : [document.getElementById('gp-' + keyOrEls)];
    let root = document.getElementById('gp-print-root');
    if (root) root.remove();
    root = document.createElement('div'); root.id = 'gp-print-root';
    els.filter(Boolean).forEach((el, i) => {
      const c = el.cloneNode(true);
      c.querySelectorAll('details').forEach(d => d.open = true);
      if (i) c.style.breakBefore = 'page';
      root.appendChild(c);
    });
    document.body.appendChild(root);
    document.body.classList.add('gp-printing'); if (noAns) document.body.classList.add('gp-noans');
    const done = () => { document.body.classList.remove('gp-printing', 'gp-noans'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    setTimeout(() => { window.print(); setTimeout(done, 1500); }, 80);
  }

  window.GradedPaper = { render: render, seg: seg, print: print, injectCss: injectCss };
})();
