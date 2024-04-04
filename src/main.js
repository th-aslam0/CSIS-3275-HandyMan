import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import router from './router'
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.mount('#app');
