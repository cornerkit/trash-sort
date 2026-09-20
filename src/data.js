// 5 bins with recycling icons
export const bins = [
  { id: 'addict',  label: 'Daily Addict',    zh: '重度上瘾（已无药可救）', emoji: '🔥', color: '#ff6b6b', accent: '#d44', weight: 5, icon: 'flame' },
  { id: 'regular', label: 'Weekly Fix',       zh: '每周续命一次',           emoji: '💊', color: '#ffa94d', accent: '#e89430', weight: 3, icon: 'pill' },
  { id: 'casual',  label: 'Tried It Once',    zh: '浅尝辄止（装过了）',     emoji: '👀', color: '#74c0fc', accent: '#4a9de6', weight: 1, icon: 'eye' },
  { id: 'ancient', label: 'Never Heard',       zh: '没听说过',               emoji: '🕸️', color: '#a0a0a0', accent: '#808080', weight: -1, icon: 'web' },
  { id: 'forgot',  label: 'Already Forgot',   zh: '垃圾',         emoji: '💀', color: '#b197fc', accent: '#8a6ce0', weight: 0, icon: 'skull' },
  { id: 'banned',  label: 'Got Banned',       zh: '号没了 别问',            emoji: '🚫', color: '#555', accent: '#333', weight: 6, icon: 'ban' },
]

// 15 AI apps
export const trashItems = [
  { id: 1,  name: 'ChatGPT',      icon: 'chatgpt',      bg: '#ffffff', desc: '泔水界的可口可乐' },
  { id: 2,  name: 'Claude',       icon: 'claude',        bg: '#d4a27a', desc: '老少皆宜，伟大无需多说' },
  { id: 3,  name: 'DeepSeek',     icon: 'deepseek',      bg: '#ffffff', desc: '国产泔水之光' },
  { id: 4,  name: '豆包',          icon: 'doubao',        bg: '#b8d8f0', fill: true, desc: '字节跳动牌泔水' },
  { id: 5,  name: 'Gemini',       icon: 'gemini',        bg: '#ffffff', desc: '谷歌家的泔水' },
  { id: 6,  name: 'Kimi',         icon: 'kimi',          bg: '#000000', desc: '长文本泔水专家' },
  { id: 7,  name: 'Copilot',      icon: 'copilot',       bg: '#ffffff', desc: '微软买一送一的泔水' },
  { id: 8,  name: 'Cursor',       icon: 'cursor',        bg: '#000000', desc: '程序员的电子奶嘴' },
  { id: 9,  name: 'Buzzy',        icon: 'buzzy',         bg: '#3a3a3a', desc: '（广告位招租，本公司产品）' },
  { id: 10, name: 'Midjourney',   icon: 'midjourney',    bg: '#ffffff', desc: '设计师失业加速器' },
  { id: 11, name: 'Grok',         icon: 'grok',          bg: '#000000', desc: '马斯克的嘴替' },
  { id: 12, name: 'Suno',         icon: 'suno',          bg: '#f77b4a', fill: true, desc: '五音不全也能出专辑' },
  { id: 13, name: 'Notion AI',    icon: 'notion-ai',     bg: '#ffffff', desc: '笔记里的泔水调味料' },
  { id: 14, name: 'Kling',        icon: 'kling',         bg: '#000000', desc: '快手出品的视频泔水' },
]

// Diagnosis — 泔水产业链
export const diagnoses = [
  {
    min: -Infinity, max: 5,
    title: 'Slop-Free Human',
    zh: '无泔水人士',
    zhDesc: [
      '别人都在用AI写周报，你还在手敲每一个字。',
      '你连泔水的味儿都没闻过，省了不少token。',
      '全公司就你的周报还是手工的，建议申遗。',
    ],
    desc: "Zero additives, zero contamination. You might be the last person on earth still thinking with your own brain.",
    grade: 'S', level: '未检出',
  },
  {
    min: 5, max: 18,
    title: 'Slop Free Sample',
    zh: '泔水试用装',
    zhDesc: [
      '下了五个App，打开过两次，一次还是手滑。',
      '注册的时候感觉引领时代，打开之后只问了句"你好"。',
      'App还在手机里吃灰，但朋友圈已经发过了。',
    ],
    desc: "Downloaded 5 AI apps, opened 2, one was by accident. Your free trial expired before you even used it.",
    grade: 'A', level: '微量残留',
  },
  {
    min: 18, max: 32,
    title: 'Slop Reseller',
    zh: '泔水代购',
    zhDesc: [
      '甲方一稿过了，你连说三遍"是我写的"。',
      '复制粘贴一把梭，纯烧token，拉了坨大的。',
      'AI出力你署名，这活儿干得比代购还熟练。',
    ],
    desc: "You say 'just for reference' but even the punctuation was AI-generated. You don't make slop — you're the middleman.",
    grade: 'B', level: '轻度超标',
  },
  {
    min: 32, max: 48,
    title: 'Slop Brewmaster',
    zh: '泔水精酿师',
    zhDesc: [
      '写代码用Cursor，画图用Midjourney，吵架先问Claude。',
      '每个AI都养了一遍，订阅费比奶茶钱还多。',
      '手机里AI比社交App还多，通讯录第一个是ChatGPT。',
    ],
    desc: "8 AI bookmark folders. You use Cursor for code, Midjourney for art, Claude for arguing with your partner. You call your subscriptions 'ingredient costs'.",
    grade: 'C', level: '中度污染',
  },
  {
    min: 48, max: 65,
    title: 'Slop Sommelier',
    zh: '泔水品鉴大师',
    zhDesc: [
      '"Claude文风高级，DeepSeek推理丝滑"——比点评网用户还认真。',
      '你产的内容是AI的，改你内容的同事用的也是AI。',
      '整个办公室都在陪AI聊天，就是没人在上班。',
    ],
    desc: "You don't just drink slop — you taste it. One sniff and you know which model distilled it. Zero humans thinking in the entire chain.",
    grade: 'D', level: '重度超标',
  },
  {
    min: 65, max: Infinity,
    title: 'Human Slop Pipeline',
    zh: '人形泔水管道',
    zhDesc: [
      '7×24在线，prompt进泔水出，比便利店还敬业。',
      '早上睁眼第一件事问AI，睡前最后一件事还是AI。',
      '你美滋滋觉得自己是AI大师，其实早就被泔水腌入味了。',
    ],
    desc: "You're not using AI anymore — AI is flowing through you. Input prompt, output slop, 24/7. You're not a person, you're a pipe with body temperature.",
    grade: 'F', level: '浓度爆表',
  },
]

// Loading messages
export const loadingMessages = [
  '运输泔水中...',
  '泔水分析中...',
  '检测泔水浓度...',
  '萃取泔水精华...',
  '大火收汁中...',
  '泔水即将出锅...',
  '生成诊断报告...',
]
