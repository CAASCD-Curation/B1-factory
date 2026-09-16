import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages 项目站点路径：https://caascd-curation.github.io/B1-factory/
  base: '/B1-factory/',
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
