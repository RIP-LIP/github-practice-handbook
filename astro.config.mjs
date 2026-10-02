import { defineConfig } from 'astro/config';

/**
 * GitHub Pages 部署配置
 *
 * site：站点规范域名，用于 canonical / og:url / sitemap
 * base：仓库名，Pages 子路径部署时所有内部链接与资源都挂在它下面
 *
 * 两者必须同时正确。base 与仓库名不一致时，构建不报错，
 * 但线上所有站内链接都会 404 —— 改仓库名时这里要一起改。
 */
const REPO = 'github-practice-handbook';

export default defineConfig({
  site: `https://rip-lip.github.io`,
  base: `/${REPO}`,
  build: {
    format: 'directory',
  },
  devToolbar: { enabled: false },
});
