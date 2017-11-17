declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare var module: any;

declare module 'element-ui';

interface Window {
  __INITIAL_STATE__?: object
}