/// <reference types="vite/client" />

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "rollup-plugin-scss" {
  function placeholder(any): any;
  export = placeholder;
}