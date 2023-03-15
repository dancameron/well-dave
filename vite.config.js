import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {version} from './package.json'
import path from 'path'

process.env.BROWSER = "chromium"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
    define: {
        '__APP_VERSION__': {version},
    },
    server: {
        open: '/',
        watch: {
            ignored: ['!./src/questions.js']
        }
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/js/[name].[hash].v${version}.js`,
                chunkFileNames: `assets/js/[name].[hash].v${version}.js`,
                assetFileNames: `assets/[name].[hash].v${version}.[ext]`
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    }
})
