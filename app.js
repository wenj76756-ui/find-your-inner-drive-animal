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
    { icon: '🌲', name: '迷雾森林', theme: '发现你的自然动力', intro: '你握紧手中微光的种子，踏入迷雾森林。浓雾遮住前方，没有路标，也没有提示——你只能凭第一直觉向前。' },
    { icon: '🏔', name: '选择山谷', theme: '人生方向的选择', intro: '穿过森林，你来到一片开阔山谷，那里有一个村庄。村长告诉你：前方有五条道路，每条路都会赋予你不同的力量。' },
    { icon: '🌧', name: '暴风荒原', theme: '压力下的真实模式', intro: '离开村庄，天空突然变暗。你进入暴风荒原——这里没有答案，只有考验。' },
    { icon: '🌊', name: '内心湖泊', theme: '认识深层动力', intro: '你来到一片平静湖泊。湖水如镜，映出你内心最深处的样子。' },
    { icon: '🔥', name: '火种圣殿', theme: '成为你想成为的人', intro: '你终于来到森林深处。五种动物出现在你面前，你的动力火种，开始发光。' }
  ];

  const MILESTONES = [
    { at: 0, icon: '🌲', text: '你踏入了迷雾森林' },
    { at: 3, icon: '🌿', text: '你穿越了「迷雾森林」', sub: '第一缕动力火花正在出现' },
    { at: 6, icon: '🏔', text: '你抵达「选择山谷」', sub: '不同道路正在等待你' },
    { at: 9, icon: '🌊', text: '你进入「内心湖泊」', sub: '你的真实动力开始浮现' },
    { at: 12, icon: '🔥', text: '你的动力火种正在燃烧' },
    { at: 15, icon: '✨', text: '你抵达「火种圣殿」', sub: '你的动力兽即将出现' }
  ];

  const STORY_STEPS = [
    { lead: '动力火种', text: '很久以前，每个人出生时都会拥有一颗<span class="em">动力火种</span>。它决定：什么事情让你充满能量，什么目标值得你坚持。' },
    { lead: '遗忘', text: '但随着成长，很多人渐渐忘记了自己的火种，活成了别人期待的样子。' },
    { lead: '驱动森林', text: '在世界尽头，出现了一片<span class="em">驱动森林</span>。传说森林深处，生活着五种动力兽。' },
    { lead: '旅程', text: '只有穿越整片森林的人，才能找回属于自己的动力兽。<br>你，准备好出发了吗？' }
  ];

  const STORY_ART = [
    '<svg viewBox="0 0 120 120" class="art-svg"><circle cx="60" cy="76" r="9" class="glow-pulse" fill="#F5C451"/><path d="M60 28 C74 52 80 62 70 82 C86 72 82 50 60 40 C50 56 52 72 44 82 C34 66 48 50 60 28 Z" fill="#F5C451" opacity="0.92"/></svg>',
    '<svg viewBox="0 0 120 120" class="art-svg"><g fill="#CFE8E0"><circle cx="42" cy="82" r="3.2" class="drift d1"/><circle cx="72" cy="72" r="2.6" class="drift d2"/><circle cx="56" cy="92" r="2.2" class="drift d3"/><circle cx="86" cy="86" r="3" class="drift d4"/><circle cx="30" cy="70" r="2" class="drift d5"/></g></svg>',
    '<svg viewBox="0 0 120 120" class="art-svg"><g fill="#123524" class="appear"><polygon points="34,98 50,54 66,98"/><polygon points="56,102 78,42 100,102"/><polygon points="18,102 35,62 52,102"/></g></svg>',
    '<svg viewBox="0 0 120 120" class="art-svg"><g fill="#CFE8E0" class="footprints"><ellipse cx="60" cy="102" rx="7" ry="10"/><ellipse cx="57" cy="82" rx="6" ry="9" opacity="0.72"/><ellipse cx="63" cy="63" rx="5" ry="7.5" opacity="0.55"/><ellipse cx="59" cy="46" rx="4" ry="6" opacity="0.4"/><ellipse cx="64" cy="31" rx="3" ry="4.5" opacity="0.26"/></g></svg>'
  ];

  const QUESTIONS = [
    // ===== 第一章：迷雾森林 =====
    { ch: 0, qname: '迷雾入口', weight: 1, scene: '你踏入森林。浓雾遮住了前方。地面上出现五条小路。没有路标，也没有提示。你只能凭第一感觉选择。你会：', opts: [
      { k: 'fox', t: '走向那条长满奇异植物的小路。虽然不知道通往哪里，但你很好奇：「那里一定藏着什么有趣的东西。」' },
      { k: 'wolf', t: '观察每条路留下的痕迹。你想先判断：「哪条路最可能通向正确方向。」' },
      { k: 'dolphin', t: '停下来等待其他旅人。你觉得：「大家一起交流，也许能找到更好的方向。」' },
      { k: 'whale', t: '坐下来思考：「我来到这片森林，真正想寻找的是什么？」' },
      { k: 'bear', t: '拿出工具。你想：「如果没有路，那我能不能自己创造一条？」' }
    ]},
    { ch: 0, qname: '被遗忘的小屋', weight: 1, scene: '沿着道路前进。你发现森林深处有一间废弃小屋。屋里只有五件物品。守护者告诉你：「只能带走一件，它会影响你接下来的旅程。」你选择：', opts: [
      { k: 'fox', t: '一本没有读完的书。你想：「里面可能藏着新的知识和未知答案。」' },
      { k: 'wolf', t: '一把旧剑。你想：「未来一定会遇到挑战，我需要提升自己的能力。」' },
      { k: 'dolphin', t: '一个传声铃。你想：「如果遇到困难，也许可以召唤伙伴。」' },
      { k: 'whale', t: '一张古老地图。你想：「它也许记录着这片森林存在的秘密。」' },
      { k: 'bear', t: '一颗特殊种子。你想：「也许我能让它成长成新的东西。」' }
    ]},
    { ch: 0, qname: '守林人的问题', weight: 1, scene: '离开小屋后，你遇见第一位守林人。他说：「很多旅人走到这里都会停下。不是因为困难，而是因为他们忘记了为什么出发。」他问：「如果没有奖励，没有掌声，没有人知道，你为什么还愿意继续？」', opts: [
      { k: 'fox', t: '因为探索本身就让我兴奋。「我想知道前方还有什么。」' },
      { k: 'wolf', t: '因为我想证明自己能够做到。「困难的事情更值得挑战。」' },
      { k: 'dolphin', t: '因为这一路可能会遇见值得帮助的人。「我的行动也许能带来改变。」' },
      { k: 'whale', t: '因为我相信这里一定有值得寻找的意义。「我想找到真正重要的东西。」' },
      { k: 'bear', t: '因为我想留下些什么。「哪怕很小，也是我创造的东西。」' }
    ]},
    // ===== 第二章：选择山谷 =====
    { ch: 1, qname: '五条道路', weight: 2, scene: '你只能选择一条。', opts: [
      { k: 'fox', t: '星辰小径：一条通往未知世界的道路。没人知道终点在哪里，但沿途有无数新的发现。' },
      { k: 'wolf', t: '高峰之路：一条陡峭山路。传说走到终点的人，会成为真正的强者。' },
      { k: 'dolphin', t: '共鸣之路：一路上会遇见很多人。你们需要互相帮助才能前进。' },
      { k: 'whale', t: '深海之路：通往一座古老神殿。那里隐藏着关于世界的问题。' },
      { k: 'bear', t: '创造之路：那里没有现成道路，只有材料和工具。需要自己建立未来。' }
    ]},
    { ch: 1, qname: '村庄危机', weight: 1, scene: '来到村庄后，你发现村民遇到了一个难题：水源突然停止，大家不知道原因。你决定帮助他们。你的第一反应：', opts: [
      { k: 'fox', t: '寻找资料。看看有没有其他地方遇到过类似问题。' },
      { k: 'wolf', t: '分析问题。制定一个解决计划，一步一步排查原因。' },
      { k: 'dolphin', t: '先询问村民：「你们真正需要解决的问题是什么？」' },
      { k: 'whale', t: '思考：「为什么水源会消失？背后的原因是什么？」' },
      { k: 'bear', t: '开始设计一个新的供水方案。也许可以彻底解决问题。' }
    ]},
    { ch: 1, qname: '村长的感谢', weight: 2, scene: '问题解决后，村长问你：「这一路上，什么瞬间让你感觉最有力量？」', opts: [
      { k: 'fox', t: '发现自己学会了以前不会的东西。' },
      { k: 'wolf', t: '完成了一件原本觉得困难的事情。' },
      { k: 'dolphin', t: '看到别人因为你的帮助变得更好。' },
      { k: 'whale', t: '发现自己正在做一件值得的事情。' },
      { k: 'bear', t: '看到自己的想法真正变成现实。' }
    ]},
    // ===== 第三章：暴风荒原 =====
    { ch: 2, qname: '暴风来临', weight: 2, scene: '突然暴风袭来。你的队伍被迫停下，道路全部消失。你会：', opts: [
      { k: 'fox', t: '寻找新的路线。「也许还有隐藏出口。」' },
      { k: 'wolf', t: '重新制定计划。「必须重新掌控局面。」' },
      { k: 'dolphin', t: '先确认伙伴安全。「不能留下任何人。」' },
      { k: 'whale', t: '思考：「我们为什么要继续前进？」' },
      { k: 'bear', t: '收集材料。建造一个临时避难所。' }
    ]},
    { ch: 2, qname: '失败的试炼', weight: 3, scene: '你来到守护兽面前。你尝试挑战它，但是失败了。晚上，你坐在篝火旁。你想：', opts: [
      { k: 'fox', t: '「失败让我发现了新的可能。」我要看看哪里还有突破。' },
      { k: 'wolf', t: '「我还不够强。」我要训练，然后重新挑战。' },
      { k: 'dolphin', t: '「是不是我没有理解守护兽？」我要找到真正的问题。' },
      { k: 'whale', t: '「这场失败想告诉我什么？」我要重新确认方向。' },
      { k: 'bear', t: '「原来的方法不行。」我要重新设计策略。' }
    ]},
    { ch: 2, qname: '暴风后的礼物', weight: 2, scene: '暴风结束，森林送给你一件礼物。你最希望获得：', opts: [
      { k: 'fox', t: '一双能看见隐藏道路的眼睛。' },
      { k: 'wolf', t: '一颗永远突破自己的心。' },
      { k: 'dolphin', t: '一座能够连接所有人的桥。' },
      { k: 'whale', t: '一本记录世界秘密的书。' },
      { k: 'bear', t: '一双能够创造任何东西的手。' }
    ]},
    // ===== 第四章：内心湖泊 =====
    { ch: 3, qname: '未来倒影', weight: 3, scene: '湖面出现十年后的你。他说：「十年后，你最希望自己成为什么样的人？」', opts: [
      { k: 'fox', t: '一个永远保持好奇的人。' },
      { k: 'wolf', t: '一个不断突破极限的人。' },
      { k: 'dolphin', t: '一个影响和帮助很多人的人。' },
      { k: 'whale', t: '一个完成重要使命的人。' },
      { k: 'bear', t: '一个创造独特作品的人。' }
    ]},
    { ch: 3, qname: '时间之河', weight: 2, scene: '湖水出现画面。你看到自己一天中最投入的时候。那个瞬间通常是：', opts: [
      { k: 'fox', t: '探索新知识、新领域。' },
      { k: 'wolf', t: '练习技能，不断提高。' },
      { k: 'dolphin', t: '和别人交流、合作。' },
      { k: 'whale', t: '深入思考重要问题。' },
      { k: 'bear', t: '创造、设计、完成作品。' }
    ]},
    { ch: 3, qname: '湖底的问题', weight: 2, scene: '湖底浮现一句话：「如果没有人看见你的努力，你还会继续吗？」', opts: [
      { k: 'fox', t: '会，因为探索本身让我快乐。' },
      { k: 'wolf', t: '会，因为成长过程本身有价值。' },
      { k: 'dolphin', t: '不一定，我需要知道自己的努力是否帮助别人。' },
      { k: 'whale', t: '会，只要它值得。' },
      { k: 'bear', t: '会，因为创造过程本身让我满足。' }
    ]},
    // ===== 第五章：火种圣殿 =====
    { ch: 4, qname: '最后的道路', weight: 3, scene: '动物告诉你：「未来，你只能选择一种人生方向。」你选择：', opts: [
      { k: 'fox', t: '探索未知领域。' },
      { k: 'wolf', t: '成为某个领域的高手。' },
      { k: 'dolphin', t: '建立影响他人的事业。' },
      { k: 'whale', t: '解决一个重要的问题。' },
      { k: 'bear', t: '创造属于自己的作品。' }
    ]},
    { ch: 4, qname: '动力兽的问题', weight: 2, scene: '动物问：「每一种力量都有自己的阴影。你的挑战是什么？」', opts: [
      { k: 'fox', t: '我可能容易被新的可能吸引。' },
      { k: 'wolf', t: '我可能对自己要求太高。' },
      { k: 'dolphin', t: '我可能太在意别人。' },
      { k: 'whale', t: '我可能想太远，行动太慢。' },
      { k: 'bear', t: '我可能追求完美。' }
    ]},
    { ch: 4, qname: '最终觉醒', weight: 3, scene: '动力兽问：「当未来迷茫时，你希望记住哪句话？」', opts: [
      { k: 'fox', t: '「保持好奇，世界永远有新的可能。」' },
      { k: 'wolf', t: '「继续前进，你会成为更好的自己。」' },
      { k: 'dolphin', t: '「不要忘记人与人的连接。」' },
      { k: 'whale', t: '「做值得做的事情。」' },
      { k: 'bear', t: '「把想法变成现实。」' }
    ]}
  ];

  let current = 0;
  let answers = new Array(QUESTIONS.length).fill(null);
  let storyIndex = 0;
  let introShownCh = -1;

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
  function playWarp(cb) {
    const v = document.getElementById('warpVeil');
    v.classList.add('play');
    setTimeout(cb, 440);
    setTimeout(function () { v.classList.remove('play'); }, 800);
  }
  window.goStory = function () {
    playWarp(function () {
      storyIndex = 0;
      renderStory();
      showScreen('screen-story');
    });
  };
  function renderStory() {
    const step = STORY_STEPS[storyIndex];
    const art = document.getElementById('story-art');
    art.innerHTML = STORY_ART[storyIndex];
    art.classList.remove('show'); void art.offsetWidth; art.classList.add('show');
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
    introShownCh = -1;
    proceedToCurrent();
  };

  // 章节承接：进入新章节时先展示章节引言屏
  function proceedToCurrent() {
    const ch = QUESTIONS[current].ch;
    if (ch > introShownCh) { showChapterIntro(ch); }
    else { renderNode(); showScreen('screen-quiz'); }
  }
  function showChapterIntro(ch) {
    introShownCh = ch;
    const c = CHAPTERS[ch];
    document.getElementById('ch-index').textContent = '第 ' + (ch + 1) + ' 章';
    document.getElementById('ch-name').textContent = c.icon + ' ' + c.name;
    document.getElementById('ch-desc').textContent = c.intro || '';
    showScreen('screen-chapter');
  }
  window.enterChapter = function () {
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
      btn.onclick = function () { selectOption(opt.k, btn); };
      btn.innerHTML = '<span class="opt-text">' + opt.t + '</span>';
      opts.appendChild(btn);
    });
  }

  function selectOption(k, btn) {
    answers[current] = k;
    const all = document.querySelectorAll('#options .option');
    for (let i = 0; i < all.length; i++) all[i].classList.remove('selected');
    btn.classList.add('selected');
    setTimeout(function () {
      if (current < QUESTIONS.length - 1) { current++; proceedToCurrent(); }
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

    const grad = ctx.createLinearGradient(W / 2 - 280, 0, W / 2 + 280, 0);
    grad.addColorStop(0, COLORS[r.primary]);
    grad.addColorStop(1, COLORS[r.secondary]);
    ctx.fillStyle = grad;
    ctx.font = '800 64px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('动力组合 · ' + r.comboName, W / 2, 648);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 72px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText(pa.name + ' × ' + sa.name, W / 2, 744);

    ctx.fillStyle = 'rgba(234,244,236,0.78)';
    ctx.font = '500 40px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('核心燃料：' + r.fuel, W / 2, 824);

    ctx.fillStyle = 'rgba(234,244,236,0.7)';
    ctx.font = '400 36px "PingFang SC","Noto Sans SC",sans-serif';
    wrapText(ctx, pa.tagline, W / 2, 902, 980, 46);

    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(140, 1004); ctx.lineTo(W - 140, 1004); ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 38px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('你的动力兽是什么？来测测 →', W / 2, 1092);
    ctx.fillStyle = 'rgba(234,244,236,0.5)';
    ctx.font = '400 30px "PingFang SC","Noto Sans SC",sans-serif';
    ctx.fillText('寻找你的内在驱动兽', W / 2, 1144);

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
