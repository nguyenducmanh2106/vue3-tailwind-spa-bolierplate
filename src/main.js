import { createApp } from 'vue'
import App from './App.vue'

import Axios from 'axios';
import store       from './store';
import router      from './router';
import './assets/tailwind.css'


const app = createApp(App);
app.config.globalProperties.$http = Axios;


app.config.devtools = true;
app
.use(router)
.use(store)
.mount('#app')

