# B1-factory · 工厂策展档案

「FACTORY · 工厂策展档案」互动网站 —— 基于工厂主题作品资料的沉浸式策展站点。

线上地址：https://caascd-curation.github.io/B1-factory/

## 板块导航

- **总览**：三维工厂卡片云，滚轮缩放、中键旋转，点击进入作品详情
- **建筑骨骼**：厂房空间爆炸拆解三维模型（六层），点击结构查看轴测图与相关作品
- **机器碎片**：流水线传送带上的机械零件模型，点击查看相关作品
- **纸上工厂**：专业车间平面图纸，点击标注区域查看相关作品
- **人的痕迹**：遗物陈列，悬停物品切换 3D 旋转视频动画
- **地球版图**：工厂事件世界地图，悬停国家显示行政规划图与相关作品

## 技术栈

Vite + Three.js + 原生 ES Modules，无前端框架。

## 本地运行

```bash
npm install
npm run dev        # 开发服务器 http://localhost:7100
npm run build      # 生产构建输出到 dist/
npm run preview    # 预览构建产物
```

## 目录结构

```
src/          页面源码（main / scene / bones / parts / blueprint / traces / mapview / panel）
public/       静态资源（images 作品图、videos/objects 物品旋转视频、data 等）
scripts/      无头浏览器验证脚本（开发用）
```

## 发布

构建产物发布在 `gh-pages` 分支（GitHub Pages 源）：

```bash
npm run build
# 将 dist/ 内容推送到 gh-pages 分支
```
