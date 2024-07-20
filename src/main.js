import { createApp } from 'vue'
import './style.scss'
import "./assets/scss/responsive.scss"
import 'animate.css';
import App from './App.vue'
import router from './router/router';

createApp(App).use(router).mount('#app')
