import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue';
import router from 'vue-router';
const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),router],
  resolve:{
      alias:{
      '/@': pathSrc,
    }
  },
  css:{
    preprocessorOptions:{
      scss: { additionalData: `@import 'src/assets/public-style/mixin.scss';
                              ` }
    }
  }
})
