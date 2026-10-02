# GitHub 实践手册

面向中文读者的 GitHub 实战教程，覆盖从本机准备到团队协作的完整链路。

在线阅读：<https://rip-lip.github.io/github-practice-handbook/>

## 内容

| 板块 | 章节 | 覆盖 |
| --- | --- | --- |
| 准备 | 1–4 | 本机环境、账号、SSH 密钥、仓库创建 |
| 上传 | 5–8 | 首次推送、`.gitignore`、提交规范、远端关联 |
| 日常 | 9–12 | 拉取与冲突、暂存区、撤销、查看历史 |
| 工程 | 13–16 | 分支协作、PR、Actions、认证与密钥 |
| 排错 | 17–21 | 权限报错、网络、文件过大、历史改写、恢复 |

每章开头有「读完你会得到 + 预计耗时」，赶时间可以直接看章首的「想跳过这章？」捷径指向替代章节。

## 本地运行

```bash
npm install
npm run dev        # 开发服务器
npm run build      # 产物输出到 dist/
npm run preview    # 预览构建结果
```

需要 Node 22.12 或更高版本（Astro 7 的最低要求）。

## 站点结构

内容源只有一个文件：`src/data/chapters.json`。目录页、侧栏、右栏大纲、搜索索引全部在构建期从它派生，改内容不用碰组件。

```
src/
  data/chapters.json   全部正文（唯一内容源）
  data/chapters.js     数据包装、元信息、URL 生成
  lib/inline.js        构建期行内格式化（粗体/代码/链接/语义着色）
  components/          code / note / table / lab / pitfall / boundary 等块
  layouts/Base.astro   顶栏 + 侧栏 + 右栏大纲 + 客户端脚本
  pages/               index.astro 与 ch/[id].astro
```

正文在构建期渲染成静态 HTML，客户端只有主题、侧栏收纳、复制、搜索、阅读进度、大纲高亮六个功能。

## 部署

推送到 `main` 分支即触发 `.github/workflows/deploy.yml`，由 GitHub Actions 构建并发布到 GitHub Pages。仓库设置里 Pages 的 Source 需选 **GitHub Actions**。

站点地址写在 `astro.config.mjs` 的 `site` 与 `base` 字段，`base` 必须与仓库名一致，否则子路径下的链接会全部失效。
