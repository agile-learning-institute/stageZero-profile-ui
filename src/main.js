import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';  
import 'vuetify/dist/vuetify.min.css';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

store.dispatch('initializeStore');

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app');
