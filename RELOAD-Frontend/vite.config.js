import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    assetsDir: 'assets',
  },
  css: {
    preprocessorOptions: {
      // If you're using Sass/SCSS, you can add any necessary configurations here.
      // For example:
      // sass: {
      //   additionalData: `$color: red;`
      // }
    },
  },
  // Add a rule for font files
  optimizeDeps: {
    include: ['@fontsource/your-font-package'],
  },
});