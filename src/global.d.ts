declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare var module: any;

interface Window {
  __INITIAL_STATE__?: object
}