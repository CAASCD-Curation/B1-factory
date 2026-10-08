# 7/∞ 工厂 · 七分厂（B1 Factory）

《工厂》七天展览网页：周一打卡 → 周二培训 → 周三实操 → 周四提速 → 周五发薪 → 周六罢工 → 周日狂欢。

## 访问

- Cloudflare Pages：<https://b1-factory.pages.dev>（主部署）
- GitHub Pages：<https://caascd-curation.github.io/B1-factory/>（备用）

## 本地运行

纯静态站点，任意静态服务器指向本目录即可。例如：

```bash
npx serve .
# 或
python -m http.server 8080
```

注意：本站是单页应用（React Router），直接刷新 /friday 等子路由需要 SPA 回退。
`_redirects`（Cloudflare Pages）与 `404.html`（GitHub Pages）已配置回退，本地测试请用支持回退的服务器。

## 目录结构

- `index.html` + `assets/` — 构建产物（React + Vite）
- `images/` — 页面配图
- `archive/` — 展览档案图片（193 张）
- `打开说明.txt` — 完整说明文档

源码工程（React + TypeScript + Vite）另行打包分发，见仓库发布或联系策展组。
