import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';

Vue.config.productionTip = false;
Vue.filter('numberComma', (value: number) => value.toLocaleString('ko-KR'));

new Vue({
  render: (h) => h(App),
}).$mount('#app');
