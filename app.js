(function () {
  "use strict";

  // ---- Animal silhouette icons (SVG) ----
  const SVG = {
    fox: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9L22.5 21C25.4 19.6 28.6 18.9 32 18.9C35.4 18.9 38.6 19.6 41.5 21L56 9L52.5 31.5C52.5 43.3 43.5 52.5 32 52.5C20.5 52.5 11.5 43.3 11.5 31.5L8 9Z" fill="#FB923C"/><circle cx="24" cy="31" r="2.6" fill="#0A0A1F"/><circle cx="40" cy="31" r="2.6" fill="#0A0A1F"/><path d="M32 38.5L28.2 42.8L32 46L35.8 42.8L32 38.5Z" fill="#0A0A1F"/></svg>',
    wolf: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12L21 24C24.4 21.8 28.1 20.7 32 20.7C35.9 20.7 39.6 21.8 43 24L54 12L55 31C55 40.5 49.5 48.3 41.5 51.5L32 56L22.5 51.5C14.5 48.3 9 40.5 9 31L10 12Z" fill="#7DD3FC"/><path d="M18.5 30.5L26.5 33L18.5 35.5L20 33L18.5 30.5Z" fill="#0A0A1F"/><path d="M45.5 30.5L37.5 33L45.5 35.5L44 33L45.5 30.5Z" fill="#0A0A1F"/><path d="M32 41.5L28.5 45.5L32 48.5L35.5 45.5L32 41.5Z" fill="#0A0A1F"/></svg>',
    dolphin: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 38C6 31.5 10.5 26.5 16.5 23C22 19.8 27.5 18.5 32.5 19L36 10L41.5 21C47.5 23 52.5 27 56 32.5L62 26.5L60 36L62 46L55 39C50 44.5 43 47.5 35 47.5L29.5 47L31.5 54L22 46C13.5 44 6.5 41.5 3 38Z" fill="#FF8FA3"/><circle cx="13.5" cy="31" r="2" fill="#0A0A1F"/></svg>',
    bear: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.5" cy="18.5" r="8.5" fill="#FBBF24"/><circle cx="47.5" cy="18.5" r="8.5" fill="#FBBF24"/><path d="M32 15.5C43.6 15.5 52.5 24.8 52.5 36C52.5 47.2 43.6 55.5 32 55.5C20.4 55.5 11.5 47.2 11.5 36C11.5 24.8 20.4 15.5 32 15.5Z" fill="#FBBF24"/><circle cx="24" cy="33" r="2.6" fill="#0A0A1F"/><circle cx="40" cy="33" r="2.6" fill="#0A0A1F"/><ellipse cx="32" cy="42.5" rx="7.5" ry="5.5" fill="#0A0A1F" fill-opacity="0.22"/><ellipse cx="32" cy="40" rx="3.6" ry="2.8" fill="#0A0A1F"/></svg>',
    whale: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 34C4 24 14 16.5 28 16.5C41 16.5 51 22.5 55.5 30.5L61.5 23.5L60 34L61.5 45L55.5 38C51 46 41 51.5 28 51.5C14 51.5 4 44 4 34Z" fill="#818CF8"/><circle cx="14" cy="30.5" r="2.2" fill="#0A0A1F"/><path d="M24 45.5C27 45.5 30 47 31.5 49.5C28.5 50.5 25 50 22.5 48L24 45.5Z" fill="#0A0A1F" fill-opacity="0.28"/><path d="M8 38C13 40.5 19 42 26 42" stroke="#0A0A1F" stroke-opacity="0.22" stroke-width="2" stroke-linecap="round"/></svg>'
  };

  const ANIMALS = {
    fox: {
      name: '星野狐', en: 'Star Fox', color: '#FB923C', formula: '探索未知',
      tagline: '你不是被终点吸引，而是被路上的未知吸引。',
      advantages: ['学习能力强，能快速进入新领域', '适应变化快，不喜欢被条条框框困住', '创意丰富，总能看到别人看不到的可能'],
      challenges: ['开始很多，完成较少', '容易被新机会吸引而分散精力'],
      tips: ['给探索力安装一个出口：记录、输出、沉淀', '用项目制约束好奇心，让探索有终点']
    },
    wolf: {
      name: '逐峰狼', en: 'Peak Wolf', color: '#7DD3FC', formula: '持续成长',
      tagline: '你的快乐来自不断证明："我可以做到。"',
      advantages: ['执行力强，目标感清晰', '抗压能力强，越难越兴奋', '持续进步，享受能力提升的过程'],
      challenges: ['容易焦虑，总觉得自己还不够好', '过度关注目标，忽略沿途风景'],
      tips: ['不要只追下一座山，也看看自己已走多远', '把大目标拆成可见的小里程碑']
    },
    dolphin: {
      name: '共鸣海豚', en: 'Resonance Dolphin', color: '#FF8FA3', formula: '连接影响',
      tagline: '你的能量来自人与人的连接。',
      advantages: ['善于沟通，能感知别人需求', '团队影响力强，容易带动氛围', '乐于助人，做有意义的关系连接'],
      challenges: ['太在意别人评价', '容易在关系里消耗自己'],
      tips: ['关心别人前，先保护自己的能量', '区分"被需要"和"被消耗"']
    },
    bear: {
      name: '造物熊', en: 'Builder Bear', color: '#FBBF24', formula: '创造实现',
      tagline: '你最开心的时候，是看到想法变成现实。',
      advantages: ['动手能力强，喜欢解决问题', '有长期建设能力，能持续打磨', '对成果有要求，交付质量高'],
      challenges: ['容易陷入细节', '对结果要求高，完美主义拖延'],
      tips: ['完成80分的作品，比100分的想法更有价值', '设定明确的"足够好"标准']
    },
    whale: {
      name: '深海鲸', en: 'Deep Whale', color: '#818CF8', formula: '意义使命',
      tagline: '你需要知道"为什么值得做"，才能持续投入。',
      advantages: ['长期主义，愿意为未来投入', '价值感强，容易形成使命感', '思考有深度，不轻易随波逐流'],
      challenges: ['想太远导致行动慢', '容易理想化，落地困难'],
      tips: ['伟大的方向，需要小的行动支撑', '把宏大意义翻译成今天的下一步']
    }
  };

  const KEYS = ['fox', 'wolf', 'dolphin', 'bear', 'whale'];
  const COLORS = { fox: '#FB923C', wolf: '#7DD3FC', dolphin: '#FF8FA3', whale: '#818CF8', bear: '#FBBF24' };
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];

  // 25 组合称号：20 有序配对 + 5 纯血
  const COMBOS = {
    fox_wolf: { name: '跨界猎手', formula: '探索 + 成长' },
    fox_dolphin: { name: '四海灵感客', formula: '探索 + 连接' },
    fox_bear: { name: '创新建造者', formula: '探索 + 创造' },
    fox_whale: { name: '深潜漫游者', formula: '探索 + 意义' },
    wolf_fox: { name: '野路登顶者', formula: '成长 + 探索' },
    wolf_dolphin: { name: '带队冲锋官', formula: '成长 + 连接' },
    wolf_bear: { name: '硬核出品人', formula: '成长 + 创造' },
    wolf_whale: { name: '使命攀登者', formula: '成长 + 意义' },
    dolphin_fox: { name: '关系探险家', formula: '连接 + 探索' },
    dolphin_wolf: { name: '团队充电宝', formula: '连接 + 成长' },
    dolphin_bear: { name: '暖心造物者', formula: '连接 + 创造' },
    dolphin_whale: { name: '人间摆渡人', formula: '连接 + 意义' },
    bear_fox: { name: '脑洞施工队', formula: '创造 + 探索' },
    bear_wolf: { name: '死磕型匠人', formula: '创造 + 成长' },
    bear_dolphin: { name: '暖光工坊主', formula: '创造 + 连接' },
    bear_whale: { name: '价值造物主', formula: '创造 + 意义' },
    whale_fox: { name: '远航思想者', formula: '意义 + 探索' },
    whale_wolf: { name: '信念长跑者', formula: '意义 + 成长' },
    whale_dolphin: { name: '灯塔守夜人', formula: '意义 + 连接' },
    whale_bear: { name: '理想建造者', formula: '意义 + 创造' }
  };
  const PUREBLOOD = {
    fox: '永动探索者', wolf: '不封顶登山者', dolphin: '天生共情体', bear: '造物本能者', whale: '深海信仰者'
  };

  const QUESTIONS = [
    { q: '面对一个完全陌生的新任务，你第一反应是——', opts: [
      { t: '挺有意思，我想看看有没有新的可能', k: 'fox' },
      { t: '先确定目标，我想知道怎样做到最好', k: 'wolf' },
      { t: '我想找别人聊聊，看看大家怎么看', k: 'dolphin' },
      { t: '我想知道这件事为什么重要', k: 'whale' },
      { t: '我想设计一个新的解决方案', k: 'bear' }
    ]},
    { q: '你最容易进入兴奋状态的时候是？', opts: [
      { t: '发现一个新知识、新领域', k: 'fox' },
      { t: '完成一个困难目标', k: 'wolf' },
      { t: '帮助别人解决问题', k: 'dolphin' },
      { t: '做一件有长期价值的事情', k: 'whale' },
      { t: '把想法变成现实', k: 'bear' }
    ]},
    { q: '如果给你一年完全自由的时间，你会选择？', opts: [
      { t: '学很多新东西，探索不同方向', k: 'fox' },
      { t: '训练一个能力达到高手水平', k: 'wolf' },
      { t: '做一个帮助很多人的项目', k: 'dolphin' },
      { t: '做一件改变未来的事情', k: 'whale' },
      { t: '创造一个属于自己的作品', k: 'bear' }
    ]},
    { q: '下面哪种工作状态，你最受不了？', opts: [
      { t: '每天重复，没有新鲜感', k: 'fox' },
      { t: '没有成长空间', k: 'wolf' },
      { t: '没有人理解我', k: 'dolphin' },
      { t: '做没有意义的事情', k: 'whale' },
      { t: '只能执行别人的想法', k: 'bear' }
    ]},
    { q: '朋友评价你最多的一句话是？', opts: [
      { t: '好奇宝宝，总有新想法', k: 'fox' },
      { t: '很拼，很有目标', k: 'wolf' },
      { t: '很会理解别人', k: 'dolphin' },
      { t: '想事情比较深', k: 'whale' },
      { t: '动手能力强', k: 'bear' }
    ]},
    { q: '当你拖延时，最可能的原因是？', opts: [
      { t: '感觉没兴趣了', k: 'fox' },
      { t: '害怕做不好', k: 'wolf' },
      { t: '没有人回应我的努力', k: 'dolphin' },
      { t: '不知道为什么做', k: 'whale' },
      { t: '想太复杂，迟迟开始', k: 'bear' }
    ]},
    { q: '你选择工作时最看重什么？', opts: [
      { t: '自由度', k: 'fox' },
      { t: '成长速度', k: 'wolf' },
      { t: '团队氛围', k: 'dolphin' },
      { t: '价值意义', k: 'whale' },
      { t: '创造空间', k: 'bear' }
    ]},
    { q: '完成一个项目后，你最开心的瞬间是？', opts: [
      { t: '学到了新东西', k: 'fox' },
      { t: '证明自己能力提升', k: 'wolf' },
      { t: '得到别人认可', k: 'dolphin' },
      { t: '感觉做了有价值的事', k: 'whale' },
      { t: '看见成果诞生', k: 'bear' }
    ]},
    { q: '遇到困难时，你的第一反应是？', opts: [
      { t: '搜集资料，寻找新方法', k: 'fox' },
      { t: '制定计划，突破它', k: 'wolf' },
      { t: '找人交流，获得支持', k: 'dolphin' },
      { t: '思考长期方向', k: 'whale' },
      { t: '重新设计方案', k: 'bear' }
    ]},
    { q: '你喜欢的学习方式是？', opts: [
      { t: '自由探索', k: 'fox' },
      { t: '系统训练', k: 'wolf' },
      { t: '和高手交流', k: 'dolphin' },
      { t: '深度理解底层逻辑', k: 'whale' },
      { t: '实践创造', k: 'bear' }
    ]},
    { q: '如果创业，你最想实现的是？', opts: [
      { t: '探索新的市场', k: 'fox' },
      { t: '成为行业高手', k: 'wolf' },
      { t: '创造用户价值', k: 'dolphin' },
      { t: '解决重要问题', k: 'whale' },
      { t: '打造自己的产品', k: 'bear' }
    ]},
    { q: '别人给你一个建议，你更关注？', opts: [
      { t: '有没有新的启发', k: 'fox' },
      { t: '能不能让我进步', k: 'wolf' },
      { t: '是否考虑我的感受', k: 'dolphin' },
      { t: '是否符合我的长期方向', k: 'whale' },
      { t: '能不能马上实践', k: 'bear' }
    ]},
    { q: '你最自豪的一件事是？', opts: [
      { t: '学会了很多别人不会的东西', k: 'fox' },
      { t: '坚持完成困难目标', k: 'wolf' },
      { t: '帮助过别人', k: 'dolphin' },
      { t: '坚持自己的信念', k: 'whale' },
      { t: '创造过新的东西', k: 'bear' }
    ]},
    { q: '你理想中的生活大概是？', opts: [
      { t: '不断体验新世界', k: 'fox' },
      { t: '成为某个领域专家', k: 'wolf' },
      { t: '有重要的人陪伴', k: 'dolphin' },
      { t: '做有意义的事情', k: 'whale' },
      { t: '拥有自己的事业作品', k: 'bear' }
    ]},
    { q: '压力大时，你会怎么做？', opts: [
      { t: '换个环境寻找灵感', k: 'fox' },
      { t: '制定计划重新控制局面', k: 'wolf' },
      { t: '找朋友倾诉', k: 'dolphin' },
      { t: '思考事情意义', k: 'whale' },
      { t: '开始整理和重建', k: 'bear' }
    ]},
    { q: '你希望别人记住你什么？', opts: [
      { t: '很有想法', k: 'fox' },
      { t: '很厉害', k: 'wolf' },
      { t: '很温暖', k: 'dolphin' },
      { t: '很有价值', k: 'whale' },
      { t: '创造了什么', k: 'bear' }
    ]},
    { q: '你最喜欢的奖励是？', opts: [
      { t: '新体验', k: 'fox' },
      { t: '成就感', k: 'wolf' },
      { t: '感谢和认可', k: 'dolphin' },
      { t: '知道自己改变了什么', k: 'whale' },
      { t: '看见作品完成', k: 'bear' }
    ]},
    { q: '你面对变化时，通常？', opts: [
      { t: '觉得刺激', k: 'fox' },
      { t: '想快速掌控', k: 'wolf' },
      { t: '关注受影响的人', k: 'dolphin' },
      { t: '思考方向是否正确', k: 'whale' },
      { t: '想重新设计', k: 'bear' }
    ]},
    { q: '你希望未来成为怎样的人？', opts: [
      { t: '探索很多领域的人', k: 'fox' },
      { t: '专业领域高手', k: 'wolf' },
      { t: '有影响力的人', k: 'dolphin' },
      { t: '做重要事情的人', k: 'whale' },
      { t: '创造独特价值的人', k: 'bear' }
    ]},
    { q: '用一句话描述你的动力：', opts: [
      { t: '“世界这么大，我想看看。”', k: 'fox' },
      { t: '“我想证明自己可以。”', k: 'wolf' },
      { t: '“我希望帮助更多人。”', k: 'dolphin' },
      { t: '“我想做值得做的事情。”', k: 'whale' },
      { t: '“我想创造一些新的东西。”', k: 'bear' }
    ]}
  ];

  let current = 0;
  let answers = new Array(QUESTIONS.length).fill(null);

  function init() {
    const starsEl = document.getElementById('stars');
    let html = '';
    for (let i = 0; i < 42; i++) {
      const size = (Math.random() * 2 + 1).toFixed(1);
      const left = (Math.random() * 100).toFixed(2);
      const top = (Math.random() * 100).toFixed(2);
      const delay = (Math.random() * 3).toFixed(2);
      const dur = (2 + Math.random() * 2).toFixed(2);
      html += '<span class="star" style="width:' + size + 'px;height:' + size + 'px;left:' + left + '%;top:' + top + '%;animation-delay:' + delay + 's;animation-duration:' + dur + 's;"></span>';
    }
    starsEl.innerHTML = html;

    document.getElementById('home-preview').innerHTML = KEYS.map(function (k) { return SVG[k]; }).join('');
  }

  function showScreen(id) {
    const screens = document.querySelectorAll('.screen');
    for (let i = 0; i < screens.length; i++) screens[i].classList.remove('active');
    const el = document.getElementById(id);
    el.classList.add('active');
    el.scrollTop = 0;
  }

  window.startQuiz = function () {
    current = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    renderQuestion();
    showScreen('screen-quiz');
  };

  function renderQuestion() {
    const q = QUESTIONS[current];
    document.getElementById('question-num').textContent =
      String(current + 1).padStart(2, '0') + ' / ' + QUESTIONS.length;
    document.getElementById('question-text').textContent = q.q;

    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.opts.forEach(function (opt, idx) {
      const btn = document.createElement('button');
      btn.className = 'option' + (answers[current] === opt.k ? ' selected' : '');
      btn.style.color = COLORS[opt.k];
      btn.onclick = function () { selectOption(opt.k, btn); };
      btn.innerHTML =
        '<span class="option-letter" style="background:' + COLORS[opt.k] + '">' + LETTERS[idx] + '</span>' +
        '<span class="option-text">' + opt.t + '</span>';
      opts.appendChild(btn);
    });

    document.getElementById('progress-fill').style.width = (current / QUESTIONS.length * 100) + '%';
  }

  function selectOption(k, btn) {
    answers[current] = k;
    const all = document.querySelectorAll('#options .option');
    for (let i = 0; i < all.length; i++) all[i].classList.remove('selected');
    btn.classList.add('selected');
    setTimeout(function () {
      if (current < QUESTIONS.length - 1) {
        current++;
        renderQuestion();
      } else {
        computeAndShow();
      }
    }, 220);
  }

  window.prevQuestion = function () {
    if (current > 0) {
      current--;
      renderQuestion();
    } else {
      showScreen('screen-home');
    }
  };

  function computeAndShow() {
    const scores = { fox: 0, wolf: 0, dolphin: 0, bear: 0, whale: 0 };
    answers.forEach(function (k) { if (k) scores[k]++; });
    const sorted = KEYS.slice().sort(function (a, b) { return scores[b] - scores[a]; });
    const primary = sorted[0];
    const secondary = sorted[1];

    let comboName, comboFormula;
    if (scores[primary] - scores[secondary] >= 4) {
      comboName = PUREBLOOD[primary];
      comboFormula = ANIMALS[primary].formula;
    } else {
      const c = COMBOS[primary + '_' + secondary];
      comboName = c.name;
      comboFormula = c.formula;
    }
    renderResult(primary, secondary, scores, comboName, comboFormula);
    showScreen('screen-result');
  }

  function renderResult(primary, secondary, scores, comboName, comboFormula) {
    const pa = ANIMALS[primary];
    const sa = ANIMALS[secondary];

    document.getElementById('result-animals').innerHTML = SVG[primary] + '<span class="times">×</span>' + SVG[secondary];
    document.getElementById('result-names').textContent = pa.name + ' × ' + sa.name;
    document.getElementById('combo-badge').textContent = comboName;
    document.getElementById('result-formula').textContent = '动力密码：' + comboFormula;

    const max = Math.max.apply(null, KEYS.map(function (k) { return scores[k]; }).concat([1]));
    document.getElementById('chart-bars').innerHTML = KEYS.map(function (k) {
      const pct = Math.round(scores[k] / max * 95);
      const label = ANIMALS[k].formula.slice(0, 2);
      return '<div class="bar-row"><div class="bar-label">' + label + '</div>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%;background:' + ANIMALS[k].color + '"></div></div></div>';
    }).join('');

    document.getElementById('advantages-list').innerHTML =
      pa.advantages.concat(sa.advantages).slice(0, 4).map(function (t) { return '<p>✦ ' + t + '</p>'; }).join('');
    document.getElementById('challenge-list').innerHTML =
      pa.challenges.concat(sa.challenges).slice(0, 3).map(function (t) { return '<p>⚠ ' + t + '</p>'; }).join('');
    document.getElementById('tips-list').innerHTML =
      pa.tips.concat(sa.tips).slice(0, 3).map(function (t) { return '<p>✔ ' + t + '</p>'; }).join('');
    window.currentResult = { primary: primary, secondary: secondary, scores: scores, comboName: comboName, comboFormula: comboFormula };
  }

  function loadSvg(key) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { resolve(null); };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVG[key]);
    });
  }

  function showShareModal(url) {
    var modal = document.getElementById('shareModal');
    var img = document.getElementById('shareImg');
    if (img) img.src = url;
    if (modal) modal.classList.add('show');
    var save = document.getElementById('saveShareBtn');
    if (save) save.onclick = function () {
      var a = document.createElement('a');
      a.href = url; a.download = '我的动力兽.png';
      document.body.appendChild(a); a.click(); a.remove();
    };
  }

  window.shareResult = async function () {
    var r = window.currentResult;
    if (!r) { alert('请先完成测试～'); return; }
    var pa = ANIMALS[r.primary], sa = ANIMALS[r.secondary];
    var W = 1080, H = 1350;
    var canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext('2d');

    // 背景渐变
    var bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#0A0A1F');
    bg.addColorStop(0.55, '#101430');
    bg.addColorStop(1, '#12182C');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    // 极光光晕
    function glow(x, y, rad, color) {
      var g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, color); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill();
    }
    glow(W * 0.25, H * 0.16, 380, 'rgba(45,212,191,0.22)');
    glow(W * 0.82, H * 0.1, 320, 'rgba(167,139,250,0.18)');

    // 顶部小标题
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '500 34px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('寻找你的内在驱动兽', W / 2, 118);

    // 双兽
    var imgA = await loadSvg(r.primary);
    var imgB = await loadSvg(r.secondary);
    var size = 300, cy = 210;
    var startX = (W - (size * 2 + 70)) / 2;
    if (imgA) ctx.drawImage(imgA, startX, cy, size, size);
    if (imgB) ctx.drawImage(imgB, startX + size + 70, cy, size, size);

    // × 号
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.font = '700 90px sans-serif';
    ctx.fillText('×', W / 2, cy + size / 2 + 34);

    // 组合称号（渐变）
    var grad = ctx.createLinearGradient(W / 2 - 220, 0, W / 2 + 220, 0);
    grad.addColorStop(0, pa.color);
    grad.addColorStop(1, sa.color);
    ctx.fillStyle = grad;
    ctx.font = '800 64px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText(r.comboName, W / 2, 648);

    // 名称
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 76px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText(pa.name + ' × ' + sa.name, W / 2, 748);

    // 动力密码
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font = '400 40px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('动力密码：' + r.comboFormula, W / 2, 826);

    // tagline
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '400 36px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText(pa.tagline, W / 2, 906, 940);

    // 分隔线
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(140, 984); ctx.lineTo(W - 140, 984); ctx.stroke();

    // 底部 slogan
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 40px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('你的动力兽是什么？来测测 →', W / 2, 1078);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '400 30px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('寻找你的内在驱动兽', W / 2, 1128);

    // 导出并分享 / 预览
    canvas.toBlob(async function (blob) {
      if (!blob) { alert('生成图片失败，请直接截图保存～'); return; }
      var file = new File([blob], 'drive-animal.png', { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: '寻找你的内在驱动兽',
            text: '我的动力兽是 ' + pa.name + ' × ' + sa.name
          });
          return;
        } catch (e) { /* 用户取消，落到预览 */ }
      }
      var url = URL.createObjectURL(blob);
      showShareModal(url);
    }, 'image/png');
  };

  init();
})();
