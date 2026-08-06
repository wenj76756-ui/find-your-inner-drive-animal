(function () {
  "use strict";

  const SVG = {
    fox: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9L22.5 21C25.4 19.6 28.6 18.9 32 18.9C35.4 18.9 38.6 19.6 41.5 21L56 9L52.5 31.5C52.5 43.3 43.5 52.5 32 52.5C20.5 52.5 11.5 43.3 11.5 31.5L8 9Z" fill="#F2A65A"/><circle cx="24" cy="31" r="2.6" fill="#06120C"/><circle cx="40" cy="31" r="2.6" fill="#06120C"/><path d="M32 38.5L28.2 42.8L32 46L35.8 42.8L32 38.5Z" fill="#06120C"/></svg>',
    wolf: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12L21 24C24.4 21.8 28.1 20.7 32 20.7C35.9 20.7 39.6 21.8 43 24L54 12L55 31C55 40.5 49.5 48.3 41.5 51.5L32 56L22.5 51.5C14.5 48.3 9 40.5 9 31L10 12Z" fill="#7EC8E3"/><path d="M18.5 30.5L26.5 33L18.5 35.5L20 33L18.5 30.5Z" fill="#06120C"/><path d="M45.5 30.5L37.5 33L45.5 35.5L44 33L45.5 30.5Z" fill="#06120C"/><path d="M32 41.5L28.5 45.5L32 48.5L35.5 45.5L32 41.5Z" fill="#06120C"/></svg>',
    dolphin: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 38C6 31.5 10.5 26.5 16.5 23C22 19.8 27.5 18.5 32.5 19L36 10L41.5 21C47.5 23 52.5 27 56 32.5L62 26.5L60 36L62 46L55 39C50 44.5 43 47.5 35 47.5L29.5 47L31.5 54L22 46C13.5 44 6.5 41.5 3 38Z" fill="#F58CA8"/><circle cx="13.5" cy="31" r="2" fill="#06120C"/></svg>',
    bear: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.5" cy="18.5" r="8.5" fill="#F5C451"/><circle cx="47.5" cy="18.5" r="8.5" fill="#F5C451"/><path d="M32 15.5C43.6 15.5 52.5 24.8 52.5 36C52.5 47.2 43.6 55.5 32 55.5C20.4 55.5 11.5 47.2 11.5 36C11.5 24.8 20.4 15.5 32 15.5Z" fill="#F5C451"/><circle cx="24" cy="33" r="2.6" fill="#06120C"/><circle cx="40" cy="33" r="2.6" fill="#06120C"/><ellipse cx="32" cy="42.5" rx="7.5" ry="5.5" fill="#06120C" fill-opacity="0.22"/><ellipse cx="32" cy="40" rx="3.6" ry="2.8" fill="#06120C"/></svg>',
    whale: '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 34C4 24 14 16.5 28 16.5C41 16.5 51 22.5 55.5 30.5L61.5 23.5L60 34L61.5 45L55.5 38C51 46 41 51.5 28 51.5C14 51.5 4 44 4 34Z" fill="#8FA9E8"/><circle cx="14" cy="30.5" r="2.2" fill="#06120C"/><path d="M24 45.5C27 45.5 30 47 31.5 49.5C28.5 50.5 25 50 22.5 48L24 45.5Z" fill="#06120C" fill-opacity="0.28"/><path d="M8 38C13 40.5 19 42 26 42" stroke="#06120C" stroke-opacity="0.22" stroke-width="2" stroke-linecap="round"/></svg>'
  };

  const EMOJI = { fox: '🦊', wolf: '🐺', dolphin: '🐬', bear: '🐻', whale: '🐋' };
  const KEYS = ['fox', 'wolf', 'dolphin', 'bear', 'whale'];
  const COLORS = { fox: '#F2A65A', wolf: '#7EC8E3', dolphin: '#F58CA8', bear: '#F5C451', whale: '#8FA9E8' };

  const ANIMALS = {
    fox: {
      name: '星野狐', en: 'Star Fox', formula: '探索未知',
      tagline: '你不是被终点吸引，而是被路上的未知吸引。',
      advantages: ['学习速度快，能迅速进入新领域', '喜欢创新，总能看到别人看不到的可能', '适应变化，不被条条框框困住'],
      challenges: ['容易开始很多事情', '需要建立「完成机制」才能落地'],
      environment: ['有自主探索的空间', '可以持续学习新东西', '不被过度管控的环境']
    },
    wolf: {
      name: '逐峰狼', en: 'Peak Wolf', formula: '持续成长',
      tagline: '你的快乐来自不断证明：我可以做到。',
      advantages: ['执行力强，目标清晰就冲得快', '抗压能力强，越难越兴奋', '持续进步，享受变强的过程'],
      challenges: ['容易焦虑，总觉得还不够好', '只顾冲目标，忽略沿途风景'],
      environment: ['有明确的目标和反馈', '有适度的挑战', '能看见自己成长的环境']
    },
    dolphin: {
      name: '共鸣海豚', en: 'Resonance Dolphin', formula: '连接影响',
      tagline: '你的能量，来自人与人的连接。',
      advantages: ['善于沟通，能感知别人的需求', '团队影响力强，能带动氛围', '乐于连接，做有意义的关系'],
      challenges: ['太在意别人的评价', '容易在关系里消耗自己'],
      environment: ['有团队协作', '能服务、帮助别人', '有温度反馈的环境']
    },
    bear: {
      name: '造物熊', en: 'Builder Bear', formula: '创造现实',
      tagline: '你最开心的时候，是看到一个想法变成现实。',
      advantages: ['动手能力强，喜欢解决问题', '有长期建设力，能持续打磨', '对成果有要求，交付质量高'],
      challenges: ['容易陷入细节', '完美主义，迟迟不肯交付'],
      environment: ['有创造空间', '能看到自己的成果', '有自主权的环境']
    },
    whale: {
      name: '深海鲸', en: 'Deep Whale', formula: '意义使命',
      tagline: '你需要知道为什么值得做，才能持续投入。',
      advantages: ['长期主义，愿意为未来投入', '价值感强，容易形成使命感', '思考有深度，不随波逐流'],
      challenges: ['想太远导致行动慢', '容易理想化，落地困难'],
      environment: ['做有价值的事', '能影响未来', '有长期意义的环境']
    }
  };

  // 动力组合称号（主×辅，有序 20 对 + 5 纯血）
  const COMBOS = {
    fox_wolf: '探索攀登者', fox_dolphin: '灵感连接者', fox_bear: '探索创造者', fox_whale: '远见漫游者',
    wolf_fox: '突破探险家', wolf_dolphin: '带队冲锋官', wolf_bear: '硬核出品人', wolf_whale: '使命攀登者',
    dolphin_fox: '关系探险家', dolphin_wolf: '团队充电官', dolphin_bear: '暖心造物者', dolphin_whale: '人间摆渡人',
    bear_fox: '脑洞施工队', bear_wolf: '死磕型匠人', bear_dolphin: '暖光工坊主', bear_whale: '价值造物主',
    whale_fox: '深潜漫游者', whale_wolf: '信念长跑者', whale_dolphin: '灯塔守夜人', whale_bear: '理想建造者'
  };
  const PUREBLOOD = { fox: '永动探索者', wolf: '不封顶登山者', dolphin: '天生共情体', bear: '造物本能者', whale: '深海信仰者' };

  const CHAPTERS = [
    { icon: '🌲', name: '迷雾森林', theme: '发现你的自然动力' },
    { icon: '🏔', name: '选择山谷', theme: '人生方向选择' },
    { icon: '🌩', name: '暴风雨试炼', theme: '压力下的真实模式' },
    { icon: '🌊', name: '内心湖泊', theme: '认识自己的深层动力' },
    { icon: '🔥', name: '动力火种觉醒', theme: '成为你想成为的人' }
  ];

  const MILESTONES = [
    { at: 0, icon: '🌲', text: '你踏入了驱动森林' },
    { at: 3, icon: '🌿', text: '你穿越了「迷雾森林」', sub: '第一缕动力火花正在出现' },
    { at: 6, icon: '🏔', text: '你抵达「选择山谷」', sub: '不同道路正在等待你' },
    { at: 9, icon: '🌊', text: '你进入「内心湖泊」', sub: '你的真实动力开始浮现' },
    { at: 12, icon: '🔥', text: '你的动力火种正在燃烧' },
    { at: 15, icon: '✨', text: '你抵达「觉醒之地」', sub: '你的动力兽即将出现' }
  ];

  const STORY_STEPS = [
    { lead: '动力火种', text: '很久以前，每个人出生时都会拥有一颗<span class="em">动力火种</span>。它决定：什么事情让你充满能量，什么目标值得你坚持。' },
    { lead: '遗忘', text: '但随着成长，很多人渐渐忘记了自己的火种，活成了别人期待的样子。' },
    { lead: '驱动森林', text: '在世界尽头，出现了一片<span class="em">驱动森林</span>。传说森林深处，生活着五种动力兽。' },
    { lead: '旅程', text: '只有穿越整片森林的人，才能找回属于自己的动力兽。<br>你，准备好出发了吗？' }
  ];

  const QUESTIONS = [
    { ch: 0, qname: '迷雾入口', weight: 1, scene: '你来到森林入口。面前出现五条道路。没有地图，没有提示。你会：', opts: [
      { t: '走向最陌生的小路。「那里可能藏着新的发现。」', k: 'fox' },
      { t: '观察地形。「哪条路成功概率最高？」', k: 'wolf' },
      { t: '寻找同行者。「一起探索可能更好。」', k: 'dolphin' },
      { t: '停下来思考。「我为什么要进入森林？」', k: 'whale' },
      { t: '拿出工具。「也许我可以创造自己的路线。」', k: 'bear' }
    ]},
    { ch: 0, qname: '古老任务卷轴', weight: 1, scene: '森林守护者给你一张任务卷轴：「完成这个任务需要三个月，但没有任何标准答案。」你会：', opts: [
      { t: '搜集各种资料，探索不同可能。', k: 'fox' },
      { t: '拆解目标，制定计划。', k: 'wolf' },
      { t: '寻找有经验的人交流。', k: 'dolphin' },
      { t: '确认任务背后的意义。', k: 'whale' },
      { t: '设计一个新的解决方案。', k: 'bear' }
    ]},
    { ch: 0, qname: '魔法书', weight: 1, scene: '你发现一本无名之书。第一页写着：「真正的答案，需要自己创造。」你：', opts: [
      { t: '翻阅其他资料寻找灵感。', k: 'fox' },
      { t: '制定学习计划。', k: 'wolf' },
      { t: '邀请别人一起讨论。', k: 'dolphin' },
      { t: '思考背后的规律。', k: 'whale' },
      { t: '开始创造自己的版本。', k: 'bear' }
    ]},
    { ch: 1, qname: '五扇门', weight: 2, scene: '山谷中出现五扇门。', opts: [
      { t: '星辰门：进入未知世界。', k: 'fox' },
      { t: '高峰门：挑战极限。', k: 'wolf' },
      { t: '共鸣门：帮助别人。', k: 'dolphin' },
      { t: '深海门：寻找重大意义。', k: 'whale' },
      { t: '创造门：建立自己的作品。', k: 'bear' }
    ]},
    { ch: 1, qname: '守护者的问题', weight: 1, scene: '守护者问：「如果十年后回头看，你希望自己留下什么？」', opts: [
      { t: '我探索过很多未知。', k: 'fox' },
      { t: '我成为了更强的人。', k: 'wolf' },
      { t: '我帮助影响了很多人。', k: 'dolphin' },
      { t: '我做过值得的事情。', k: 'whale' },
      { t: '我创造了属于自己的东西。', k: 'bear' }
    ]},
    { ch: 1, qname: '能量水晶', weight: 1, scene: '你获得一颗能量水晶。它会记录：「什么事情最容易让你充满力量？」', opts: [
      { t: '发现新知识的时候。', k: 'fox' },
      { t: '完成困难目标的时候。', k: 'wolf' },
      { t: '帮助别人成功的时候。', k: 'dolphin' },
      { t: '做有价值事情的时候。', k: 'whale' },
      { t: '看到作品完成的时候。', k: 'bear' }
    ]},
    { ch: 2, qname: '暴风雨', weight: 2, scene: '突然暴雨降临。道路被毁。你：', opts: [
      { t: '寻找新的路线。', k: 'fox' },
      { t: '重新规划路线。', k: 'wolf' },
      { t: '确认伙伴是否安全。', k: 'dolphin' },
      { t: '思考是否值得继续。', k: 'whale' },
      { t: '开始修建新的道路。', k: 'bear' }
    ]},
    { ch: 2, qname: '失败的试炼', weight: 3, scene: '你挑战森林守护兽，失败。晚上，你坐在篝火旁。你的第一反应：', opts: [
      { t: '失败让我发现了新的方法。', k: 'fox' },
      { t: '我要找到问题，下次赢回来。', k: 'wolf' },
      { t: '是不是我没有理解守护兽？', k: 'dolphin' },
      { t: '这场挑战真正想告诉我什么？', k: 'whale' },
      { t: '我要重新设计我的策略。', k: 'bear' }
    ]},
    { ch: 2, qname: '黑暗山洞', weight: 1, scene: '你进入山洞。里面有五条路。没有任何提示。你：', opts: [
      { t: '选择最未知的一条。', k: 'fox' },
      { t: '寻找规律判断路线。', k: 'wolf' },
      { t: '等待伙伴一起决定。', k: 'dolphin' },
      { t: '寻找进入山洞的意义。', k: 'whale' },
      { t: '尝试创造工具探索。', k: 'bear' }
    ]},
    { ch: 3, qname: '湖中倒影', weight: 3, scene: '湖面出现你的未来倒影。它问：「什么事情会让你坚持十年？」', opts: [
      { t: '不断发现新的世界。', k: 'fox' },
      { t: '不断突破自己。', k: 'wolf' },
      { t: '持续帮助别人。', k: 'dolphin' },
      { t: '完成重要使命。', k: 'whale' },
      { t: '创造长期作品。', k: 'bear' }
    ]},
    { ch: 3, qname: '智慧老人', weight: 1, scene: '老人问：「你为什么会拖延？」', opts: [
      { t: '因为失去了兴趣。', k: 'fox' },
      { t: '因为害怕失败。', k: 'wolf' },
      { t: '因为缺少支持和反馈。', k: 'dolphin' },
      { t: '因为不知道意义在哪里。', k: 'whale' },
      { t: '因为想做到完美。', k: 'bear' }
    ]},
    { ch: 3, qname: '学徒试炼', weight: 1, scene: '你需要学习一种新能力。你选择：', opts: [
      { t: '自由探索。', k: 'fox' },
      { t: '系统训练。', k: 'wolf' },
      { t: '寻找导师。', k: 'dolphin' },
      { t: '理解底层逻辑。', k: 'whale' },
      { t: '马上实践。', k: 'bear' }
    ]},
    { ch: 4, qname: '最后的选择', weight: 3, scene: '森林给你一个机会：选择未来道路。', opts: [
      { t: '探索一个未知领域。', k: 'fox' },
      { t: '成为行业高手。', k: 'wolf' },
      { t: '建立帮助他人的事业。', k: 'dolphin' },
      { t: '解决一个重要问题。', k: 'whale' },
      { t: '创造一个新的产品。', k: 'bear' }
    ]},
    { ch: 4, qname: '最后的考验', weight: 1, scene: '森林告诉你：「你只能带走一种能力。」', opts: [
      { t: '无限好奇。', k: 'fox' },
      { t: '持续成长。', k: 'wolf' },
      { t: '影响他人。', k: 'dolphin' },
      { t: '坚定使命。', k: 'whale' },
      { t: '创造能力。', k: 'bear' }
    ]},
    { ch: 4, qname: '动力兽召唤', weight: 3, scene: '来到觉醒之地。五只动物出现。它们问：「你希望自己成为怎样的人？」', opts: [
      { t: '保持探索的人。', k: 'fox' },
      { t: '不断突破的人。', k: 'wolf' },
      { t: '连接世界的人。', k: 'dolphin' },
      { t: '创造价值的人。', k: 'whale' },
      { t: '留下作品的人。', k: 'bear' }
    ]}
  ];

  let current = 0;
  let answers = new Array(QUESTIONS.length).fill(null);
  let storyIndex = 0;

  function init() {
    // stars
    let s = '';
    for (let i = 0; i < 46; i++) {
      const size = (Math.random() * 2 + 1).toFixed(1);
      const left = (Math.random() * 100).toFixed(2);
      const top = (Math.random() * 100).toFixed(2);
      const delay = (Math.random() * 3.4).toFixed(2);
      const dur = (2.4 + Math.random() * 2).toFixed(2);
      s += '<span class="star" style="width:' + size + 'px;height:' + size + 'px;left:' + left + '%;top:' + top + '%;animation-delay:' + delay + 's;animation-duration:' + dur + 's;"></span>';
    }
    document.getElementById('stars').innerHTML = s;
    // fireflies
    let f = '';
    for (let i = 0; i < 14; i++) {
      const size = (Math.random() * 3 + 2).toFixed(1);
      const left = (Math.random() * 92 + 4).toFixed(2);
      const top = (Math.random() * 88 + 6).toFixed(2);
      const delay = (Math.random() * 7).toFixed(2);
      const dur = (5 + Math.random() * 4).toFixed(2);
      f += '<span class="firefly" style="width:' + size + 'px;height:' + size + 'px;left:' + left + '%;top:' + top + '%;animation-delay:' + delay + 's;animation-duration:' + dur + 's;"></span>';
    }
    document.getElementById('fireflies').innerHTML = f;
    // home animals in fog
    const positions = [
      { left: '8%', top: '24%' }, { right: '10%', top: '20%' },
      { left: '14%', bottom: '20%' }, { right: '12%', bottom: '24%' }, { left: '46%', top: '12%' }
    ];
    document.getElementById('home-animals').innerHTML = KEYS.map(function (k, i) {
      const p = positions[i];
      const style = Object.keys(p).map(function (key) { return key + ':' + p[key]; }).join(';');
      return '<div class="ha" style="' + style + ';animation-delay:' + (i * 0.7) + 's">' + SVG[k] + '</div>';
    }).join('');
  }

  function showScreen(id) {
    const screens = document.querySelectorAll('.screen');
    for (let i = 0; i < screens.length; i++) screens[i].classList.remove('active');
    const el = document.getElementById(id);
    el.classList.add('active');
    el.scrollTop = 0;
  }

  // ---- Story ----
  window.goStory = function () {
    storyIndex = 0;
    renderStory();
    showScreen('screen-story');
  };
  function renderStory() {
    const step = STORY_STEPS[storyIndex];
    document.getElementById('story-step').innerHTML =
      '<span class="lead">' + step.lead + '</span>' + step.text;
    const hint = document.getElementById('story-hint');
    if (storyIndex < STORY_STEPS.length - 1) {
      hint.innerHTML = '轻触继续<span class="skip" onclick="startQuiz(event)">跳过</span>';
    } else {
      hint.innerHTML = '<button class="story-enter" onclick="startQuiz(event)">进入驱动森林</button>';
    }
  }
  window.advanceStory = function (e) {
    if (e.target.tagName === 'BUTTON') return;
    if (storyIndex < STORY_STEPS.length - 1) { storyIndex++; renderStory(); }
  };

  // ---- Quiz ----
  window.startQuiz = function (e) {
    if (e) e.stopPropagation();
    current = 0;
    answers = new Array(QUESTIONS.length).fill(null);
    renderNode();
    showScreen('screen-quiz');
  };

  function getMilestone(answered) {
    let m = MILESTONES[0];
    for (let i = 0; i < MILESTONES.length; i++) {
      if (answered >= MILESTONES[i].at) m = MILESTONES[i];
    }
    return m;
  }

  function renderNode() {
    const q = QUESTIONS[current];
    const ch = CHAPTERS[q.ch];
    const m = getMilestone(current);
    document.getElementById('chapter-tag').textContent = ch.icon + ' ' + ch.name + ' · ' + ch.theme;
    document.getElementById('milestone').innerHTML =
      '<span class="m-icon">' + m.icon + '</span>' + m.text +
      (m.sub ? '<span class="m-sub">' + m.sub + '</span>' : '');
    document.getElementById('scene').innerHTML = '<span class="qname">' + q.qname + '</span>' + q.scene;

    const opts = document.getElementById('options');
    opts.innerHTML = '';
    q.opts.forEach(function (opt) {
      const btn = document.createElement('button');
      btn.className = 'option' + (answers[current] === opt.k ? ' selected' : '');
      btn.style.color = COLORS[opt.k];
      btn.onclick = function () { selectOption(opt.k, btn); };
      btn.innerHTML = '<span class="opt-emoji">' + EMOJI[opt.k] + '</span><span class="opt-text">' + opt.t + '</span>';
      opts.appendChild(btn);
    });
  }

  function selectOption(k, btn) {
    answers[current] = k;
    const all = document.querySelectorAll('#options .option');
    for (let i = 0; i < all.length; i++) all[i].classList.remove('selected');
    btn.classList.add('selected');
    setTimeout(function () {
      if (current < QUESTIONS.length - 1) { current++; renderNode(); }
      else { computeAndShow(); }
    }, 240);
  }

  window.prevNode = function () {
    if (current > 0) { current--; renderNode(); }
    else { showScreen('screen-home'); }
  };

  // ---- Compute + Awaken + Result ----
  function computeAndShow() {
    const scores = { fox: 0, wolf: 0, dolphin: 0, bear: 0, whale: 0 };
    answers.forEach(function (k, i) { if (k) scores[k] += QUESTIONS[i].weight; });
    const sorted = KEYS.slice().sort(function (a, b) { return scores[b] - scores[a]; });
    const primary = sorted[0];
    const secondary = sorted[1];

    let comboName;
    if (scores[primary] - scores[secondary] >= 6) {
      comboName = PUREBLOOD[primary];
    } else {
      comboName = COMBOS[primary + '_' + secondary];
    }
    const fuel = ANIMALS[primary].formula + ' + ' + ANIMALS[secondary].formula;

    window.currentResult = { primary: primary, secondary: secondary, scores: scores, comboName: comboName, fuel: fuel };
    runAwaken(primary, secondary, function () {
      renderResult(primary, secondary, scores, comboName, fuel);
    });
  }

  function runAwaken(primary, secondary, done) {
    showScreen('screen-awaken');
    const fire = document.getElementById('fire');
    const txt = document.getElementById('awaken-text');
    const an = document.getElementById('awaken-animals');
    fire.classList.remove('lit'); txt.classList.remove('show'); an.classList.remove('show');
    an.innerHTML = SVG[primary] + '<span class="cross">×</span>' + SVG[secondary];
    txt.textContent = '你的动力火种正在回应…';
    setTimeout(function () { fire.classList.add('lit'); }, 120);
    setTimeout(function () { txt.classList.add('show'); txt.textContent = '你的动力火种正在回应…'; }, 700);
    setTimeout(function () { an.classList.add('show'); }, 1700);
    setTimeout(function () { txt.textContent = '你的动力兽，出现了。'; }, 2600);
    setTimeout(function () { done(); }, 3700);
  }

  function renderResult(primary, secondary, scores, comboName, fuel) {
    const pa = ANIMALS[primary];
    const sa = ANIMALS[secondary];
    document.getElementById('result-animals').innerHTML = SVG[primary] + '<span class="cross">×</span>' + SVG[secondary];
    document.getElementById('result-names').textContent = pa.name + ' × ' + sa.name;
    document.getElementById('combo-badge').textContent = '动力组合 · ' + comboName;
    document.getElementById('result-fuel').textContent = '核心燃料：' + fuel;

    const max = Math.max.apply(null, KEYS.map(function (k) { return scores[k]; }).concat([1]));
    document.getElementById('chart-bars').innerHTML = KEYS.map(function (k) {
      const pct = Math.round(scores[k] / max * 95);
      return '<div class="bar-row"><div class="bar-label">' + ANIMALS[k].formula.slice(0, 2) + '</div>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%;background:' + COLORS[k] + '"></div></div></div>';
    }).join('');

    document.getElementById('adv-list').innerHTML = pa.advantages.concat(sa.advantages).slice(0, 4).map(function (t) { return '<p>✨ ' + t + '</p>'; }).join('');
    document.getElementById('ch-list').innerHTML = pa.challenges.concat(sa.challenges).slice(0, 3).map(function (t) { return '<p>🌱 ' + t + '</p>'; }).join('');
    document.getElementById('env-list').innerHTML = pa.environment.concat(sa.environment).slice(0, 3).map(function (t) { return '<p>✔ ' + t + '</p>'; }).join('');
    showScreen('screen-result');
  }

  // ---- Share card (1080×1440) ----
  function loadSvg(key) {
    return new Promise(function (resolve) {
      const img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { resolve(null); };
      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(SVG[key]);
    });
  }

  function showShareModal(url) {
    const modal = document.getElementById('shareModal');
    const img = document.getElementById('shareImg');
    if (img) img.src = url;
    if (modal) modal.classList.add('show');
    const save = document.getElementById('saveShareBtn');
    if (save) save.onclick = function () {
      const a = document.createElement('a');
      a.href = url; a.download = '我的动力兽.png';
      document.body.appendChild(a); a.click(); a.remove();
    };
  }

  window.shareResult = async function () {
    const r = window.currentResult;
    if (!r) { alert('请先完成旅程～'); return; }
    const pa = ANIMALS[r.primary], sa = ANIMALS[r.secondary];
    const W = 1080, H = 1440;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');

    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#06120C'); bg.addColorStop(0.55, '#0A1C13'); bg.addColorStop(1, '#07140D');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    function glow(x, y, rad, color) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, color); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill();
    }
    glow(W * 0.2, H * 0.12, 420, 'rgba(245,196,81,0.20)');
    glow(W * 0.85, H * 0.08, 340, 'rgba(143,199,224,0.14)');
    glow(W * 0.5, H * 0.95, 500, 'rgba(245,196,81,0.12)');

    // stars on card
    ctx.fillStyle = 'rgba(207,232,224,0.7)';
    for (let i = 0; i < 70; i++) {
      const x = Math.random() * W, y = Math.random() * (H * 0.5);
      ctx.beginPath(); ctx.arc(x, y, Math.random() * 1.6 + 0.4, 0, Math.PI * 2); ctx.fill();
    }

    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(234,244,236,0.6)';
    ctx.font = '500 34px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('寻找你的内在驱动兽', W / 2, 112);

    const imgA = await loadSvg(r.primary);
    const imgB = await loadSvg(r.secondary);
    const size = 300, cy = 200;
    const startX = (W - (size * 2 + 70)) / 2;
    if (imgA) ctx.drawImage(imgA, startX, cy, size, size);
    if (imgB) ctx.drawImage(imgB, startX + size + 70, cy, size, size);
    ctx.fillStyle = 'rgba(255,235,190,0.4)';
    ctx.font = '700 90px sans-serif';
    ctx.fillText('×', W / 2, cy + size / 2 + 34);

    const grad = ctx.createLinearGradient(W / 2 - 240, 0, W / 2 + 240, 0);
    grad.addColorStop(0, pa.color); grad.addColorStop(1, sa.color);
    ctx.fillStyle = grad;
    ctx.font = '800 66px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText(r.comboName, W / 2, 648);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 74px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText(pa.name + ' × ' + sa.name, W / 2, 748);

    ctx.fillStyle = 'rgba(234,244,236,0.75)';
    ctx.font = '400 40px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('核心燃料：' + r.fuel, W / 2, 826);

    ctx.fillStyle = 'rgba(234,244,236,0.7)';
    ctx.font = '400 36px "PingFang SC","Noto Sans SC",sans-serif';
    wrapText(ctx, pa.tagline, W / 2, 906, 980, 46);

    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(140, 1000); ctx.lineTo(W - 140, 1000); ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 40px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('你的动力兽是什么？来测测 →', W / 2, 1090);
    ctx.fillStyle = 'rgba(234,244,236,0.5)';
    ctx.font = '400 30px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('寻找你的内在驱动兽', W / 2, 1140);

    canvas.toBlob(async function (blob) {
      if (!blob) { alert('生成图片失败，请直接截图保存～'); return; }
      const file = new File([blob], 'drive-animal.png', { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: '寻找你的内在驱动兽', text: '我的动力兽是 ' + pa.name + ' × ' + sa.name });
          return;
        } catch (e) { /* 落到预览 */ }
      }
      const url = URL.createObjectURL(blob);
      showShareModal(url);
    }, 'image/png');
  };

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const chars = text.split('');
    let line = '';
    let yy = y;
    for (let i = 0; i < chars.length; i++) {
      const test = line + chars[i];
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, yy); line = chars[i]; yy += lineHeight;
      } else { line = test; }
    }
    if (line) ctx.fillText(line, x, yy);
  }

  document.getElementById('story-inner').addEventListener('click', function (e) { window.advanceStory(e); });
  init();
})();
