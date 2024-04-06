import 'primevue/resources/themes/aura-light-green/theme.css'
// import CSS resources
import 'primevue/resources/primevue.min.css'            // core 
import 'primevue/resources/themes/saga-blue/theme.css'  // theme
import 'primeicons/primeicons.css'                      // icons
import '/node_modules/primeflex/primeflex.css'          // PrimeFlex
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import router from './router'
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.mount('#app');
