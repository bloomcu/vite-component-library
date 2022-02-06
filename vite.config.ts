import { defineConfig } from 'vite';
import path from 'path';
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import purgecss from 'rollup-plugin-purgecss'
import PurgeCSS from '@fullhuman/postcss-purgecss'
import scss from 'rollup-plugin-scss'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import styles from "rollup-plugin-styles";
import PostCSS from 'postcss'
import vue from 'rollup-plugin-vue'
const projectRoot = path.resolve(__dirname, '..')
const PATH_SRC = path.resolve(projectRoot, 'src').replace(/\\/gi, '/')
const PATH_NODE_MODULES = path
  .resolve(projectRoot, 'node_modules')
  .replace(/\\/gi, '/') // Errm.. I use windows 😬
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue2({
      vueTemplateOptions: {

        preprocessOptions: {
          scss: {
            includePaths: ['node_modules'],
          }
        },
      }
    }),
    // scss({
    //   // sass: require('node-sass'),
    //   processor: () => PostCSS(
    //     [
    //       autoprefixer({ overrideBrowserslist: 'Edge 18' }),
    //       PurgeCSS({
    //         content: [
    //           "./index.html",
    //           "./src/**/*.{vue,js,ts,jsx,tsx}",
    //         ],
    //         defaultExtractor(content) {
    //           const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    //           return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    //         },
    //         safelist: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/, /btn*/],
    //       }),
    //     ]),
    //   output: 'dist/style.css',
    //   prefix: '@import "src/styles/style.scss";',
    //   includePaths: [
    //     path.join(__dirname, '../../node_modules/'),
    //     'node_modules/'
    //   ]
    // }),
  ScriptSetup(),
  // purgecss({
  //   content: [
  //     "./index.html",
  //     "./src/**/*.{vue,js,ts,jsx,tsx}",
  //   ],
  // }),

  ],

  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VCodyHouseComponents',
      fileName: (format: string) => `v-codyhouse-components.${format}.js`,
    },
    rollupOptions: {
      plugins: [],
      
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', '@vue/composition-api'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
