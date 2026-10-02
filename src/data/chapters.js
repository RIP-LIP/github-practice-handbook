/* 章节数据：唯一内容源，由旧单文件版抽取而来。
   blocks[] 支持 p / h3 / ul / ol / code / note / table / kv / model / lab / pitfall / boundary */
import raw from "./chapters.json";

export const CHAPTERS = raw.CHAPTERS;
export const STAGES = raw.STAGES;
export const DESC = raw.DESC;

/* 两位编号，用于文件名 /ch/01/ 与侧栏显示 */
export const pad = (n) => String(n).padStart(2, "0");
export const slug = (i) => "ch-" + pad(i);

/* 所有站内链接必须带 BASE_URL，否则部署到子路径（Pages /仓库名/）后全部 404。
   BASE_URL 在子路径下不带尾部斜杠（/repo 而非 /repo/），拼接时必须补上，
   否则会拼出 /repoch/01/ 这种少一个斜杠的地址。 */
const RAW_BASE = import.meta.env.BASE_URL;
export const BASE = RAW_BASE.endsWith("/") ? RAW_BASE : RAW_BASE + "/";
export const href = (i) => `${BASE}ch/${pad(i)}/`;

/* 顶栏用短名，完整名留给侧栏分组标题 */
export const SHORT = ["准备", "上传", "日常", "工程", "排错"];

/* 每章的学习目标、预计耗时、捷径说明。
   goal 写「读完能做成什么」，不是「这章讲什么」；
   shortcut 指向一个真的可以替代本章的出口，没有就留空。 */
export const META = {
  0: {
    goal: "知道命令块怎么读、报错怎么读，以及卡住时该往哪找答案。",
    time: "3 分钟",
    shortcut: { to: 1, text: "已经会用 git，只想赶紧把项目传上去，这章可以跳过。" },
  },
  1: {
    goal: "装好 Git、告诉 Git 你是谁、登进 GitHub，并用 6 条命令确认环境没问题。",
    time: "15 分钟",
    shortcut: { to: 7, text: "身份已经配好、命令行能正常 push 的，直接去首次推送。" },
  },
  2: {
    goal: "说清 git 和 GitHub 各自负责什么，以及本地、远端、克隆出来的三个仓库为什么不是一回事。",
    time: "5 分钟",
    shortcut: { to: 8, text: "用 git 超过一年，看概念已经没有新东西的，直接去认证或分支。" },
  },
  3: {
    goal: "把账号注册好，并想清楚用户名改不改、两步验证开不开——这两件事都会影响以后。",
    time: "10 分钟",
    shortcut: { to: 4, text: "账号早就有了，直接去建仓。" },
  },
  4: {
    goal: "建仓时知道底部那三个勾选框该怎么勾，以及为什么勾了 README 会让第一次 push 被拒。",
    time: "5 分钟",
    shortcut: { to: 7, text: "仓库已经建好了，去做首次推送。" },
  },
  5: {
    goal: "知道什么时候网页上传够用、什么时候必须用命令行，以及三档文件大小限制分别卡在哪。",
    time: "3 分钟",
    shortcut: { to: 7, text: "已经全程用命令行，这章是给临时应急用的。" },
  },
  6: {
    goal: "拿到一份能 push 回去的完整代码，而不是一个改完还不了原的 ZIP。",
    time: "3 分钟",
    shortcut: { to: 7, text: "代码已经在本地了，直接去做首次推送。" },
  },
  7: {
    goal: "把一个普通文件夹变成 GitHub 上能看见的仓库，并且知道 `-u` 到底做了什么。",
    time: "8 分钟",
    shortcut: { to: 9, text: "第一次推送已经成功过，去学分支。" },
  },
  8: {
    goal: "推不上去时能定位到认证这一层，并选定 SSH 或 HTTPS 中的一条路配通、验证通过。",
    time: "20 分钟",
    shortcut: { to: 9, text: "push 已经正常，这章是出问题时才回来查的。" },
  },
  9: {
    goal: "能开分支、合并、处理冲突，并判断什么时候该 rebase、什么时候别用。",
    time: "15 分钟",
    shortcut: { to: 10, text: "永远单人开发、从不开分支的，这章可以先跳过。" },
  },
  10: {
    goal: "能给别人的项目提一个能过 review 的 PR，并知道三种合并方式各自什么时候用。",
    time: "10 分钟",
    shortcut: { to: 12, text: "只做自己的项目、不给外部仓库提 PR，直接去工程实践。" },
  },
  11: {
    goal: "会用 Issue 记录待办，并让 Issue、PR 和看板互相串起来，沟通不再散落在聊天记录里。",
    time: "8 分钟",
    shortcut: { to: 12, text: "一个人写的小项目用不到工单系统，直接去工程实践。" },
  },
  12: {
    goal: "配好 .gitignore、知道大文件必须走 LFS，并能从历史里找回误删的文件。",
    time: "15 分钟",
    shortcut: { to: 17, text: "项目还很小、用不到这些，先记住有这一章就行。" },
  },
  13: {
    goal: "放一个配置文件进去，让测试在每次 push 时自动跑起来，出错当场就能看到。",
    time: "12 分钟",
    shortcut: { to: 14, text: "暂时不打算用 CI，先去发布与自动化。" },
  },
  14: {
    goal: "能打标签发版本、把网站挂上去，并用分支保护挡住误推到主干的操作。",
    time: "12 分钟",
    shortcut: { to: 15, text: "只做内部工具、不发版不部署，去学 gh CLI。" },
  },
  15: {
    goal: "会用 gh 把大部分网页操作变成一条命令，需要时还能用 gh api 直接调接口。",
    time: "10 分钟",
    shortcut: { to: 17, text: "习惯在网页上点、不想碰命令行，这章可以整章跳过。" },
  },
  16: {
    goal: "密钥泄了之后，能在几分钟内判断该吊销还是该改历史，并按不会白做的顺序动手。",
    time: "出问题时约 10 分钟",
    shortcut: { to: 17, text: "还没出过这种情况就先跳过——但要知道有这一章存在。" },
  },
  17: {
    goal: "需要的时候能立刻查到命令，不用背。",
    time: "按需查阅",
    shortcut: null,
  },
  18: {
    goal: "从空目录完整走一遍建仓、推送、开分支、提 PR、发版本、挂网站。",
    time: "30 分钟",
    shortcut: null,
  },
  19: {
    goal: "撞到已知报错时，能直接查到根因和能复制去敲的解法，不用自己猜。",
    time: "按需查阅",
    shortcut: null,
  },
  20: {
    goal: "知道哪些看起来能做的操作其实会静默失败，踩中时不会怀疑人生。",
    time: "按需查阅",
    shortcut: null,
  },
};

/* 侧栏与搜索用的轻量索引，只含元数据 */
export const INDEX = CHAPTERS.map((c, i) => {
  const stage = STAGES.findIndex((s) => i >= s.from && i <= s.to);
  return {
    n: i,
    id: slug(i),
    url: href(i),
    title: c.title,
    desc: DESC[i] || "",
    stage,
    short: SHORT[stage] || "",
  };
});

export const total = CHAPTERS.length;
