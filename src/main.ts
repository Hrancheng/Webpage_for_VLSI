// main.ts

import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from '@/plugins';
import router from './router'; // Make sure this path is correct

const app = createApp(App);

// Register your plugins
registerPlugins(app);

// Use the router
app.use(router);

app.mount('#app');
