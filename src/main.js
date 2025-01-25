import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 作成した router をインポート

createApp(App)
  .use(router) // router を使うように設定
  .mount('#app');
